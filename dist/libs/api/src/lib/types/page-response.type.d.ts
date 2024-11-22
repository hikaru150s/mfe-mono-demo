import { BaseResponse } from './base-response.type';
import { Page } from './page.type';
export type PageResponse<T = void> = BaseResponse<Page<T>>;
