import type { InputProps } from "../../../types";

const Input = ({ className, placeholder, type }: InputProps) => {
  return (
    <input
      type={type || "text"}
      className={`w-52 bg-(--bg-neutral-100) border border-(--bg-neutral-300) rounded-md px-3 py-2 text-(--bg-neutral-900) text-sm focus:outline-none focus:ring-2 focus:ring-(--bg-primary-500) focus:border-transparent ${className || ""}`}
      placeholder={placeholder || "Search..."}
    />
  );
};

export default Input;
