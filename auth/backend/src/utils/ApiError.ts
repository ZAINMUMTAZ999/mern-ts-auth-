class ApiError extends Error {
    statusCode: number;
    message: string;
    constructor(
        statusCode: number,
        message: string
    ) {
        super(message)
        this.message = message
        this.statusCode = statusCode
    }

};
export {
    ApiError
}