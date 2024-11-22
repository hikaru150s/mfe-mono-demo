import { RestClientParameter } from './rest-client-parameter.type';
export type RestClientWithBodyParameter<Params extends Record<string, string>, Body = unknown> = RestClientParameter<Params> & {
    body?: Body;
};
