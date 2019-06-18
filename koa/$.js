const _ = require('lodash');
const { statics } = require('../mongoose');
const Promise = require('bluebird');

class $ {
  constructor(parent = {}, data = {}) {
    const ident = this.constructor.name;
    this.$ = _.merge({ parent, ident, tree: {} }, data);
    const { router, root = this } = parent.$;
    // set this in tree of parent (store full relation for complete navigation)
    parent.$.tree && (parent.$.tree[ident] = this);
    this.$.router = router;
    this.$.root = root;

  }

  /** use current id to generate params  {'some_id':_id } 
   * for case $url(ident, $this.$id(User)) in templates
  */
  $id({ _id }, params = {}) {
    const { id } = this;
    if (id && _id) {
      params[id] = _id;
    }
    return params;
  }
  /** return list of parents for current object to make breadcrumbs visuals */
  $tree(tree = []) {
    tree.unshift(this);
    if (this.$.parent.$tree) {
      return this.$.parent.$tree(tree);
    }
    return tree;
  }
  /** generate ident based on current element ident */
  $ident(ident) {
    this.$.last = ident
    return [this.$.parent && this.$.parent.$ident ? this.$.parent.$ident(this.$.ident) : this.$.ident, ident].filter(Boolean).join('');
  }
  /** generate url for specific ident with related router */
  $url(ident, params = {}, options = {}) {
    const { router } = this.$;
    ident = this.$ident(ident);
    params = _.merge(_.merge({}, _.get(this.$.ctx, 'params')), params); // force merge params with this.$.ctx
    const url = router.url(ident, params, options);
    if (_.isError(url)) {
      return '#' + ident;
    } else {
      return [router.host, url].filter(Boolean).join('');
    }
  }

  /** attach this object to content $this */
  $this() {
    return (ctx, next) => {
      ctx.$this = this;
      this.$.ctx = ctx; // backlink to current state in specific call !! (attention, may cause ctx shuffle)
      const states = [];
      _.each(this.$.tree, (elem, ident) => {
        const { $menu } = elem;
        if ($menu && $menu.$state) {
          states.push($menu.$state(ctx, $menu));
        }
      });
      return Promise.all(states).then(result => next());
    }
  }

  /** make redirect action for current ctx 
   * 
  */
  $redirect(ident, attr) {
    attr = attr || this.id.substr(0, this.id.length - statics._id.length);
    return (ctx, next) => {
      const url = this.$url(ident, this.$id(ctx.state[attr]));
      return ctx.redirect(url);
    }
  }

  /** add this value to named ctx.state or push into list
   *  case depends on type of input data string or array
   */
  $state() {
    const attrs = _.values(arguments);
    return (ctx, next) => {
      attrs.map(attr => {
        if (_.isString(attr)) {
          ctx.state[attr] = this;
        } else if (_.isArray(attr)) {
          attr.map(attr => {
            _.isArray(ctx.state[attr]) && ctx.state[attr].push(this);
          })
        }
      });
      return next();
    }
  }

  $debug() {
    return (ctx, next) => {
      console.log(this, ctx.params);
      return next();
    }
  }
  /** return current url in string value */
  toString() {
    return this.$url();
  }

  /** return child elem into tree by ident (delimetr = '.') */
  $get(idents) {
    let $this = this;
    idents = String(idents).split('.');
    idents.map(ident => {
      $this = $this.$.tree[ident];
    });
    return $this;
  }

}

module.exports = $;
