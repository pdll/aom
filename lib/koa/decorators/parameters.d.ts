import { ArgsFunction, Constructor } from "../../common/declares";
export declare function Args(handler?: ArgsFunction): ParameterDecorator;
export declare function Query(queryHandler?: Function): ReturnType<typeof Args>;
export declare function Params(paramName?: string): ReturnType<typeof Args>;
export declare function State(stateName?: string): ReturnType<typeof Args>;
export declare function Session(sessionName?: string): ReturnType<typeof Args>;
export declare function Body(bodyHandler?: Function): ReturnType<typeof Args>;
export declare function Files(): ReturnType<typeof Args>;
export declare function Headers(headerName?: string): ReturnType<typeof Args>;
export declare function Next(): ReturnType<typeof Args>;
export declare function Ctx(): ParameterDecorator;
export declare function Err(ErrorConstructor?: Constructor): ReturnType<typeof Args>;
export declare function Req(): ReturnType<typeof Args>;
export declare function Res(): ReturnType<typeof Args>;
export declare function Cursor(): ReturnType<typeof Args>;
export declare function Route(): ReturnType<typeof Args>;
export declare function StateMap(constructor?: any): ReturnType<typeof Args>;
export declare function This(constructor?: any): ReturnType<typeof Args>;
