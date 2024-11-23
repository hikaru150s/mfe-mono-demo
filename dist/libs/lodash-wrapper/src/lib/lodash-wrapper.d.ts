export declare enum LodashVersion {
    V3 = "lodash-v3",
    V4 = "lodash-v4"
}
export declare class LodashWrapper {
    private readonly version;
    static initializeAsync<Version extends LodashVersion>(version: Version): Promise<LodashWrapper>;
    private readonly lodash;
    private isV3;
    private isV4;
    private get v3();
    private get v4();
    get wrapVersion(): LodashVersion;
    get engineVersion(): string;
    private constructor();
    map<T, K extends keyof T>(array: T[], key: K): T[K][];
    maxBy<T, K extends keyof T>(array: T[], key: K): T | undefined;
    minBy<T, K extends keyof T>(array: T[], key: K): T | undefined;
    support(): import("lodash-v3").Support;
}
