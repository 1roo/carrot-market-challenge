"use client";

import { useFormStatus } from "react-dom";

interface IFormBtnProps {
  onClick: () => void;
  login?: boolean;
}

export default function FormButton({ onClick, login }: IFormBtnProps) {
  const { pending } = useFormStatus();
  const buttonContainerClassNames = `w-full h-10 bg-neutral-300 rounded-full my-10 disabled:bg-neutral-200 disabled:text-neutral-300 disabled:cursor-not-allowed hover:bg-neutral-400 transition-colors ${
    login ? "my-4 transition" : ""
  }`;

  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={pending}
      className={buttonContainerClassNames}
    >
      {pending ? "Loading..." : "Log in"}
    </button>
  );
}
