"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import db from "@/lib/db";
import { Prisma } from "@prisma/client";
import { useFormState } from "react-dom";
import { uploadTweet } from "./actions";

export default function AddTweet() {
  const [state, action] = useFormState(uploadTweet, null);
  return (
    <form action={action}>
      <div>
        <Input
          name="tweet"
          required
          placeholder="tweet"
          type="text"
          errors={state?.fieldErrors.tweet}
        />
      </div>
      <Button text="작성완료" />
    </form>
  );
}
