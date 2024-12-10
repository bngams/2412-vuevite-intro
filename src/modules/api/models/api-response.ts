export interface ApiResponse<T> {
    total: number;
    skip: number;
    limit: number;
    [key: string]: any; // Allow dynamic keys for data (products, users...)
}