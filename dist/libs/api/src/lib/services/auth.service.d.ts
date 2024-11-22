import { RestClientAbstract } from '../abstracts/rest-client.abstract';
import { BaseResponse } from '../types/base-response.type';
export declare class AuthService extends RestClientAbstract {
    constructor(baseUrl: string);
    login(username: string, password: string): Promise<BaseResponse<string>>;
}
