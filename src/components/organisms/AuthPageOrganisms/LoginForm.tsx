import Input from "@a/Input";
import Button from "@a/Button";
import Divider from "@a/Divider";
import AuthPageHeading from "@m/AuthPageHeading";
import { loginFormPropsType } from "@type/organismsTypes";
import { FaUserLarge } from "react-icons/fa6";
import { Form, Formik } from "formik";
import { memo } from "react";

function LoginForm({ initialValues, onSubmitHandler }: loginFormPropsType) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
      {({ values, handleChange, setFieldTouched }) => (
        <Form className="h-full basis-full md:basis-1/2 w-full flex gap-4 flex-col justify-center items-center">
          <AuthPageHeading name={values.username} text="Login To Your Account" />
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
              name="password"
              type="password"
              value={values.password}
              onChangeHandler={handleChange}
              placeholder="Password"
              setFieldTouched={setFieldTouched}
            />
            <div>
              <Button
                style="btn-success w-full mb-4 md:mb-0"
                text="Login"
                type="submit"
                isOutlineBtn
              />
              <Divider text="OR" style="hidden md:flex" />
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <Button
                  style="btn-secondary w-1/3 grow"
                  text="Signup Page"
                  linkTo="/signup"
                  isLink
                />
                <Button
                  style="btn-accent w-1/3 grow"
                  text="Forgot Password Page"
                  linkTo="/forgot-password"
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

export default memo(LoginForm);
