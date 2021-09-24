export declare interface IFwdContainer<T = any> {
  fwdFn: T;
}

export declare type FwdFunction = (arg: () => any) => any;

export declare type HandlerFunction = (...args: any[]) => any;

export declare type MiddlewareHandler = IFwdContainer | HandlerFunction;

export declare type Constructor<T extends {} = {}> = new (...args: any[]) => T;

export declare type Property = string | symbol;

export declare interface IArgs {
  next: Function;
  ctx: KoaContenxt;
  route: IRoute;
  cursor: ICursor;
}

export declare type ArgsFunction = (arg: IArgs) => any;

export declare interface KoaContenxt {
  req: any;
  res: any;
  headers: any;
  request: any;
  response: any;
  body: any;
  session: any;
  query: any;
}

export declare type NextFunction = (...middlewares: HandlerFunction[]) => HandlerFunction;

export declare type ErrorFunction = <T extends Error>(
  message: string,
  status?: number,
  data?: any
) => T;

export declare interface ConstructorProperty {
  constructor: Constructor;
  property: Property;
}

export declare interface ICursor extends ConstructorProperty {
  handler: HandlerFunction;
  prefix: string;
}

export declare interface IEndpoint extends ConstructorProperty {
  path: string;
  method: HTTPMethods;
  descriptor: PropertyDescriptor;
}

export declare interface IRoute extends Omit<ICursor, "prefix"> {
  method: string;
  path: string;
  cursors: ICursor[];
  callstack: HandlerFunction[];
  [key: string]: any;
}

export declare interface IRouteElem extends IRoute {
  middlewares: MiddlewareHandler[];
  cursors: ICursor[];
}

/** доступные HTTP методы */
export declare type HTTPMethods = "get" | "post" | "put" | "patch" | "delete" | "options" | "all";

/** комбинированый декоратор: для статичного метода или для класса */
export declare type CombinedDecorator = <T>(
  target: Constructor,
  propertyKey?: string | symbol,
  descriptor?: TypedPropertyDescriptor<T>
) => void;

/** декоратор для статичного метода */
/*
export declare type StaticMethodDecorator = <T>(
  target: Constructor,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<T>
) => void;
*/

export declare type MarkerHandler = (target: IRoute, cursor: ICursor) => void | unknown;