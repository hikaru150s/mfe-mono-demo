type RemoveTail<S extends string, Tail extends string> = S extends `${infer P}${Tail}` ? P : S;
type GetRouteParameter<S extends string> = RemoveTail<RemoveTail<RemoveTail<S, `/${string}`>, `-${string}`>, `.${string}`>;
export type RouteParameters<Route extends string> = string extends Route ? Record<string, string> : Route extends `${string}(${string}` ? Record<string, string> : Route extends `${string}:${infer Rest}` ? (GetRouteParameter<Rest> extends never ? Record<string, string> : GetRouteParameter<Rest> extends `${infer ParamName}?` ? {
    [P in ParamName]?: string;
} : {
    [P in GetRouteParameter<Rest>]: string;
}) & (Rest extends `${GetRouteParameter<Rest>}${infer Next}` ? RouteParameters<Next> : unknown) : {};
export {};
