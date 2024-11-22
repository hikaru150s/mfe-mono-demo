import { TokenData } from '@mfe-mono/unitype';
export declare abstract class BaseDriver {
    abstract setToken(token: string): void;
    abstract getToken(): string | null;
    abstract clearToken(): void;
    abstract isTokenValid(): boolean;
    protected decodeToken(token: string): TokenData & import("jose").JWTPayload;
    getTokenData(): import("@mfe-mono/unitype").LoggedUserData | null;
    getTokenDataOrFail(): import("@mfe-mono/unitype").LoggedUserData;
}
