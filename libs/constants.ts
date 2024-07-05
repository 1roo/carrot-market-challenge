export const EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9._%+-]+@zod\.com$/);

export const EMAIL_REGEX_ERROR = "Only @zod.com emails are allowed";

export const PW_REGEX = new RegExp(/^(?=.*\d)[a-zA-Z\d]{10,}$/);

export const PW_REGEX_ERROR =
  "Password should contain at least one number (0123456789).";
