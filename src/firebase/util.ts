type ErrorCodeTypes = "AUTH";
interface ErrorCode {
  [key: string]: { code: string; message: string }[];
}
export const errorCodes: ErrorCode = {
  AUTH: [
    { code: "auth/wrong-password", message: "Password incorrect!" },
    { code: "auth/user-not-found", message: "Account not created!" },
  ],
};

export const getErrorMessage = (errorType: ErrorCodeTypes, code: string) => {
  const errorTypeCodes = errorCodes[errorType];
  const errorCode = errorTypeCodes.find((t) => t.code === code);
  return errorCode?.message;
};
