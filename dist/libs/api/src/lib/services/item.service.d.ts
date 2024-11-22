import { RestClientAbstract } from '../abstracts/rest-client.abstract';
import { BaseResponse } from '../types/base-response.type';
import { PageResponse } from '../types/page-response.type';
import { ItemEntity } from '../types/entities/item.entity';
export declare class ItemService extends RestClientAbstract {
    constructor(baseUrl: string);
    getItems(keywords?: string, page?: number, limit?: number): Promise<PageResponse<ItemEntity>>;
    getItem(id: string): Promise<BaseResponse<ItemEntity>>;
    createItem(item: Omit<ItemEntity, 'id'>): Promise<BaseResponse<ItemEntity>>;
    updateItem(id: string, item: Omit<ItemEntity, 'id'>): Promise<BaseResponse<ItemEntity>>;
    deleteItem(id: string): Promise<BaseResponse<string>>;
}
