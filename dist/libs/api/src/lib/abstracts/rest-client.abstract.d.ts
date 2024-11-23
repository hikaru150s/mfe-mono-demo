import { RouteParameters } from '@mfe-mono/unitype';
import { BaseResponse } from '../types/base-response.type';
import { RestClientParameter } from '../types/rest-client-parameter.type';
import { RestClientWithBodyParameter } from '../types/rest-client-with-boty-parameter.type';
export declare class RestClientAbstract {
    readonly baseUrl: string;
    constructor(baseUrl: string);
    protected client<T, Body, P extends string = string, Params extends Record<string, string> = RouteParameters<P>>(method: string, url: string, options?: RestClientWithBodyParameter<Params, Body>): Promise<T>;
    protected get<T, P extends string = string, Params extends Record<string, string> = RouteParameters<P>>(url: string, options?: RestClientParameter<Params>): Promise<BaseResponse<T>>;
    protected post<T, Body, P extends string = string, Params extends Record<string, string> = RouteParameters<P>>(url: string, options?: RestClientWithBodyParameter<Params, Body>): Promise<BaseResponse<T>>;
    protected put<T, Body, P extends string = string, Params extends Record<string, string> = RouteParameters<P>>(url: string, options?: RestClientWithBodyParameter<Params, Body>): Promise<BaseResponse<T>>;
    protected delete<T, P extends string = string, Params extends Record<string, string> = RouteParameters<P>>(url: string, options?: RestClientParameter<Params>): Promise<BaseResponse<T>>;
    protected patch<T, Body, P extends string = string, Params extends Record<string, string> = RouteParameters<P>>(url: string, options?: RestClientWithBodyParameter<Params, Body>): Promise<BaseResponse<T>>;
}
