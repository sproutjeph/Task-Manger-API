class CustomAPIError extends Error {
  statusCode;
  constructor(message: any, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg: any, statusCode: number) => {
  return new CustomAPIError(msg, statusCode);
};

export { createCustomError, CustomAPIError };
