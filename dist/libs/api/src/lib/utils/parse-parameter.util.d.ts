import { RouteParameters } from '@mfe-mono/unitype';
export declare function parseParameter<P extends string, O extends Record<string, string> = RouteParameters<P>>(parameters: P, values: O): string;
