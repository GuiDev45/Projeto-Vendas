import { ComponentProps } from "react";

type IDateInput = ComponentProps<"input"> & {
  label: string;
};

export default function DateInput({ label, ...props }: IDateInput) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="date" {...props} />
    </div>
  );
}
