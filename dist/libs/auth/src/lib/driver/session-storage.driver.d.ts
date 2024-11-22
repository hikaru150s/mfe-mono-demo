import { BaseDriver } from './base-driver.abstract';
export declare class SessionStorageDriver extends BaseDriver {
    private readonly storage;
    private static readonly key;
    constructor(storage?: Storage);
    setToken(token: string): void;
    getToken(): string | null;
    clearToken(): void;
    isTokenValid(): boolean;
}
