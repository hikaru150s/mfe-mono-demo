export type RestClientParameter<Params extends Record<string, string>> = {
    params?: Params;
    headers?: Record<string, string>;
    query?: Record<string, string>;
};
