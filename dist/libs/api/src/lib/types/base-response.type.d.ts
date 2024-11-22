export type BaseResponse<T = void> = {
    message: string;
    data: T;
};
