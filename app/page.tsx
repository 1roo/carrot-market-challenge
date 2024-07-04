"use client";

import { useFormState } from "react-dom";
import FormInput from "./components/form-input";
import { handleForm } from "./actions";
import FormButton from "./components/form-btn";
import { useState } from "react";

export default function Login() {
  const [state, action] = useFormState(handleForm, null);
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    if (state?.errors.length === 0 || !state?.errors) {
      setLogin(true);
    }
  };
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
            errors={[]}
          />
          <FormInput
            name="username"
            type="text"
            placeholder="Username"
            required
            errors={[]}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            required
            errors={state?.errors ?? []}
          />
        </div>
        <FormButton onClick={handleLogin} login={login} />
      </form>
      {login && (
        <div className="w-full h-10 -my-12 bg-green-600 rounded-2xl text-white text-center leading-10 -translate-y-1 transition">
          Welcome back!
        </div>
      )}
    </div>
  );
}
