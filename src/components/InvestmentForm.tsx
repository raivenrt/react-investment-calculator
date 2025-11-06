import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";
import * as yup from "yup";

const investmentSchema = yup.object({
  initialInvestment: yup
    .number()
    .typeError("write an integer value")
    .required("Required field")
    .min(0, "minimum value is 0"),
  annualInvestment: yup
    .number()
    .typeError("write an integer value")
    .required("Required field")
    .min(0, "minimum value is 0"),
  expectedReturn: yup
    .number()
    .typeError("write an integer value")
    .required("Required field")
    .min(0, "minimum value is 0"),
  duration: yup
    .number()
    .typeError("write an integer value")
    .required("Required field")
    .min(0, "minimum value is 0"),
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
      {({ values, errors }) => {
        useEffect(() => {
          onChange(values);
        }, [values]);

        console.log(errors);

        return (
          <Form id="user-input">
            <section className="input-group">
              <section className={errors.initialInvestment && "invalid"}>
                <label htmlFor="name">Initial Investment</label>
                <Field name="initialInvestment" id="initialInvestment" />
                <ErrorMessage name="initialInvestment" component={"span"} />
              </section>
              <section className={errors.annualInvestment && "invalid"}>
                <label htmlFor="name">Annual Investment</label>
                <Field name="annualInvestment" id="annualInvestment" />
                <ErrorMessage name="annualInvestment" component={"span"} />
              </section>
            </section>
            <section className="input-group">
              <section className={errors.expectedReturn && "invalid"}>
                <label htmlFor="name">Expected Return</label>
                <Field name="expectedReturn" id="expectedReturn" />
                <ErrorMessage name="expectedReturn" component={"span"} />
              </section>
              <section className={errors.duration && "invalid"}>
                <label htmlFor="name">Duration</label>
                <Field name="duration" id="duration" />
                <ErrorMessage name="duration" component={"span"} />
              </section>
            </section>
          </Form>
        );
      }}
    </Formik>
  );
};

export default InvestmentForm;
