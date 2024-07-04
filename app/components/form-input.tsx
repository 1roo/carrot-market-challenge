interface IFormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
  name: string;
}

import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

export default function FormInput({
  name,
  type,
  placeholder,
  required,
  errors,
}: IFormInputProps) {
  const inputContainerClassNames = `flex items-center bg-white rounded-full border px-3 transition focus-within:ring-2 ring-neutral-300 ring-offset-2 ${
    errors.length > 0
      ? "border-red-500 ring-2 ring-red-500"
      : "border-neutral-300 outline-neutral-300"
  }`;

  return (
    <>
      <div className={inputContainerClassNames}>
        {name === "email" ? (
          <MdEmail />
        ) : name === "username" ? (
          <FaUser />
        ) : (
          <FaKey />
        )}
        <input
          className="bg-transparent outline-none border-none placeholder:text-neutral-400 focus:ring-0"
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      </div>
      {name === "password" && (
        <span className="text-red-500 text-xs -mt-2 ml-2">{errors}</span>
      )}
    </>
  );
}
