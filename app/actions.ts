"use server";

import { z } from "zod";
import {
  EMAIL_REGEX,
  EMAIL_REGEX_ERROR,
  PW_REGEX,
  PW_REGEX_ERROR,
} from "@/libs/constants";

const formSchema = z.object({
  email: z.string().email().toLowerCase().regex(EMAIL_REGEX, EMAIL_REGEX_ERROR),
  username: z
    .string()
    .trim()
    .min(5, "Username should be at least 5 characters long."),
  password: z
    .string()
    .min(10, "Password should be at least 10 characters Long.")
    .regex(PW_REGEX, PW_REGEX_ERROR),
});

export async function handleForm(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
