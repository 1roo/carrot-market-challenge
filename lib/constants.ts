export const EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9._%+-]+@zod\.com$/);

export const EMAIL_REGEX_ERROR = "Only @zod.com emails are allowed";

export const PW_REGEX_ERROR =
  "Password should contain at least one number (0123456789).";

export const PASSWORD_REGEX = new RegExp(/^(?=.*[A-Za-z])(?=.*\d).+$/);
