"use client";

import { useFormState, useFormStatus } from "react-dom";
import FormInput from "./components/form-input";
import { handleForm } from "./actions";
import FormButton from "./components/form-btn";

export default function Login() {
  const [state, action] = useFormState(handleForm, null);
  const { data } = useFormStatus();

  return (
    <div className="flex flex-col items-center gap-10 mt-10">
      <span className="text-3xl">➰👀➰</span>
      <form action={action}>
        <div className="flex flex-col gap-3">
          <FormInput
            name="email"
            type="Email"
            placeholder="Email"
            required
            errors={state?.fieldErrors.email}
          />
          <FormInput
            name="username"
            type="text"
            placeholder="Username"
            required
            errors={state?.fieldErrors.username}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            required
            errors={state?.fieldErrors.password}
          />
        </div>
        <FormButton text="Log in" />
        {data && (
          <div className="w-full h-10 bg-green-600 rounded-2xl text-white text-center leading-10 -translate-y-1 transition">
            Welcome back!
          </div>
        )}
      </form>
    </div>
  );
}
