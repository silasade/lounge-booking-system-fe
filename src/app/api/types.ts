// Success Response Type
export type SuccessResponse<T> = {
    message: string;
    data: T;
};

// Error Response Type
export type ErrorResponse = {
    statusCode: number;
    message: string;
};

export type APIResponse<T> = SuccessResponse<T> | ErrorResponse;
