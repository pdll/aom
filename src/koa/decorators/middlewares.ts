import * as constants from "../../common/constants";
import { checkConstructorProperty } from "../../common/functions";
import { saveReverseMetadata } from "../functions";
import {
  CombinedDecorator,
  Constructor,
  MarkerHandler,
  MiddlewareHandler,
  Property,
} from "../../common/declares";

// ...
export function Use(...middlewares: MiddlewareHandler[]): CombinedDecorator {
  return function (constructor, property?) {
    checkConstructorProperty(constructor, property);

    const metakey = constants.MIDDLEWARE_METADATA;
    // ...
    const bridges = []
      .concat(Reflect.getOwnMetadata(metakey, constructor, property) || [])
      .concat(middlewares);
    Reflect.defineMetadata(metakey, bridges, constructor, property);
  };
}

// ...
export function Middleware(): MethodDecorator {
  return function (constructor: Constructor, property: Property, descriptor: PropertyDescriptor) {
    checkConstructorProperty(constructor, property);
    saveReverseMetadata(constructor, property);

    // сохраним в контексте конструктора список
    const listMetakey = constants.MIDDLEWARES_LIST_METADATA;
    const middlewaresList = Reflect.getOwnMetadata(listMetakey, constructor) || [];
    middlewaresList.push({ property, descriptor });
    Reflect.defineMetadata(listMetakey, middlewaresList, constructor);

    const metakey = constants.IS_MIDDLEWARE_METADATA;
    Reflect.defineMetadata(metakey, true, constructor[property]);
  };
}

// ...
export function Bridge(prefix, nextRoute): CombinedDecorator {
  return function (constructor: Constructor, property = undefined, descriptor = undefined) {
    checkConstructorProperty(constructor, property);

    const metakey = constants.BRIDGE_METADATA;
    // ...
    const bridges = Reflect.getOwnMetadata(metakey, constructor) || [];
    bridges.push({ prefix, nextRoute, constructor, property, descriptor });
    Reflect.defineMetadata(metakey, bridges, constructor);
  };
}

// ...
export function Marker(handler: MarkerHandler): MethodDecorator {
  return function (
    constructor: Constructor,
    property: Property,
    descriptor: TypedPropertyDescriptor<any>
  ) {
    checkConstructorProperty(constructor, property);

    const metakey = constants.MARKERS_METADATA;
    const markerName = `${constructor.name}:${<string>property}`;
    // ...
    const markers = Reflect.getOwnMetadata(metakey, constructor, property) || [];
    markers.push({ handler, constructor, descriptor, markerName });
    Reflect.defineMetadata(metakey, markers, constructor, property);
  };
}

// ...
export function Sticker(): MethodDecorator {
  return function (
    constructor: Constructor,
    property: Property,
    descriptor: TypedPropertyDescriptor<any>
  ) {
    if (typeof constructor !== "function") throw new Error(constants.CONSTRUCTOR_TYPE_ERROR);
    const metakey = constants.IS_STICKER_METADATA;
    const stickerName = `${constructor.name}:${<string>property}`;
    // ...
    Reflect.defineMetadata(metakey, stickerName, constructor, property);
  };
}