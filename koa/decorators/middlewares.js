"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants = require("../constants");

function Use(...middlewares) {
  return function (constructor, property = undefined) {
    if (typeof constructor !== "function") throw new Error(constants.CONSTRUCTOR_TYPE_ERROR);
    const metakey = constants.MIDDLEWARE_METADATA;
    // ...
    const bridges = []
      .concat(Reflect.getOwnMetadata(metakey, constructor, property) || [])
      .concat(middlewares);
    Reflect.defineMetadata(metakey, bridges, constructor, property);
  };
}

exports.Use = Use;

function Middleware() {
  return function (constructor, property, descriptor) {
    if (typeof constructor !== "function") throw new Error(constants.CONSTRUCTOR_TYPE_ERROR);

    // save reverse data for specific handler
    if (typeof constructor === "function") {
      const metakey = constants.REVERSE_METADATA;
      Reflect.defineMetadata(metakey, { constructor, property }, constructor[property]);
    }

    const metakey = constants.IS_MIDDLEWARE_METADATA;
    Reflect.defineMetadata(metakey, true, constructor[property]);
  };
}

exports.Middleware = Middleware;

function Marker(handler) {
  return function (constructor, property, descriptor) {
    if (typeof constructor !== "function") throw new Error(constants.CONSTRUCTOR_TYPE_ERROR);
    const metakey = constants.MARKERS_METADATA;
    const markerName = `${constructor.name}:${property}`;
    // ...
    const markers = Reflect.getOwnMetadata(metakey, constructor, property) || [];
    markers.push({ handler, constructor, descriptor, markerName });
    Reflect.defineMetadata(metakey, markers, constructor, property);
  };
}

exports.Marker = Marker;
