import { Form, Formik } from "formik";
import { useEffect } from "react";
import * as yup from "yup";
import InputField from "./InputField";

const investmentSchema = yup.object({
  initialInvestment: yup
    .number()
    .typeError("write an integer value")
    .required("Required field")
    .min(0, "minimum value is 0")
    .transform(parseFloat),
  annualInvestment: yup
    .number()
    .typeError("write an integer value")
    .required("Required field")
    .min(0, "minimum value is 0")
    .transform(parseFloat),
  expectedReturn: yup
    .number()
    .typeError("write an integer value")
    .required("Required field")
    .min(0, "minimum value is 0")
    .transform(parseFloat),
  duration: yup
    .number()
    .typeError("write an integer value")
    .required("Required field")
    .min(0, "minimum value is 0")
    .transform(parseFloat),
});
export type TInvestment = yup.InferType<typeof investmentSchema>;

function onSubmit(values: TInvestment) {
  console.log("submitted", values);
}

const InvestmentForm = ({
  value,
  onChange,
}: {
  value: TInvestment;
  onChange: (investment: TInvestment) => void;
}) => {
  return (
    <Formik
      {...{
        initialValues: value,
        onSubmit,
        validationSchema: investmentSchema,
      }}
    >
      {({ values }) => {
        useEffect(() => {
          onChange(values);
        }, [values]);

        return (
          <Form id="user-input">
            <section className="input-group">
              <InputField name="initialInvestment" />
              <InputField name="annualInvestment" />
            </section>
            <section className="input-group">
              <InputField name="expectedReturn" />
              <InputField name="duration" />
            </section>
          </Form>
        );
      }}
    </Formik>
  );
};

export default InvestmentForm;
