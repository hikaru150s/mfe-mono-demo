import { BaseDriver } from './driver/base-driver.abstract';
export declare class Auth {
    private readonly driver;
    constructor(driver?: BaseDriver);
    setToken(token: string): void;
    getToken(): string | null;
    clearToken(): void;
    isTokenValid(): boolean;
    getTokenData(): import("@mfe-mono/unitype").LoggedUserData | null;
}
