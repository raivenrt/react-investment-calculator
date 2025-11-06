import { Field, type FieldInputProps, type FieldMetaProps } from "formik";
import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputField = ({ ...props }: InputFieldProps) => {
  return (
    <Field name={props.name}>
      {({
        field,
        meta,
      }: {
        field: FieldInputProps<any>;
        meta: FieldMetaProps<any>;
      }) => {
        const { error } = meta;

        return (
          <section className={error && "invalid"}>
            <label htmlFor={props.id}>Initial Investment</label>
            <input {...props} {...field} />
            {error && <span>{error}</span>}
          </section>
        );
      }}
    </Field>
  );
};

export default InputField;
