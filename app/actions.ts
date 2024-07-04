"use server";

export async function handleForm(prevState: any, data: FormData) {
  const password = data.get("password");
  return password === "12345" ? { errors: [] } : { errors: ["Wrong password"] };
}
