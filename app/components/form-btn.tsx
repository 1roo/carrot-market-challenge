"use client";

import { useFormStatus } from "react-dom";

interface IFormBtnProps {
  text: string;
}

export default function FormButton({ text }: IFormBtnProps) {
  const { pending } = useFormStatus();
  const buttonContainerClassNames = `w-full h-10 bg-neutral-300 rounded-full my-4 disabled:bg-neutral-200 disabled:text-neutral-300 disabled:cursor-not-allowed hover:bg-neutral-400 transition-colors`;

  return (
    <button disabled={pending} className={buttonContainerClassNames}>
      {pending ? "Loading..." : text}
    </button>
  );
}
