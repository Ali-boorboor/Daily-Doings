import Input from "@a/Input";
import Button from "@a/Button";
import Divider from "@a/Divider";
import AuthPageHeading from "@m/AuthPageHeading";
import { forgotPasswordFormPropsType } from "@type/organismsTypes";
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Form, Formik } from "formik";
import { memo } from "react";

function ForgotPasswordForm({
  initialValues,
  onSubmitHandler,
}: forgotPasswordFormPropsType) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
      {({ values, handleChange, setFieldTouched }) => (
        <Form className="h-full basis-full md:basis-1/2 w-full flex gap-4 flex-col justify-center items-center">
          <AuthPageHeading name={values.username} text="Forgot Password" />
          <div className="max-w-screen-md w-full overflow-hidden flex flex-col gap-4 md:gap-8 p-4">
            <Input
              name="username"
              type="text"
              value={values.username}
              onChangeHandler={handleChange}
              placeholder="Username"
              icon={<FaUserLarge />}
              setFieldTouched={setFieldTouched}
            />
            <Input
              name="email"
              type="email"
              value={values.email}
              onChangeHandler={handleChange}
              placeholder="Email"
              icon={<MdEmail />}
              setFieldTouched={setFieldTouched}
            />
            <div>
              <Button
                style="btn-success w-full mb-4 md:mb-0"
                text="Submit"
                type="submit"
                isOutlineBtn
              />
              <Divider text="OR" style="hidden md:flex" />
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <Button
                  style="btn-secondary w-1/3 grow"
                  text="Login Page"
                  linkTo="/"
                  isLink
                />
                <Button
                  style="btn-accent w-1/3 grow"
                  text="Signup Page"
                  linkTo="/signup"
                  isLink
                />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default memo(ForgotPasswordForm);
