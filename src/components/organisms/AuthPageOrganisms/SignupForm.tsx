import Input from "@a/Input";
import Button from "@a/Button";
import Divider from "@a/Divider";
import AuthPageHeading from "@m/AuthPageHeading";
import { signupFormPropsType } from "@type/organismsTypes";
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Form, Formik } from "formik";
import { memo } from "react";

function SignupForm({ initialValues, onSubmitHandler }: signupFormPropsType) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
      {({ values, handleChange, setFieldValue, setFieldTouched }) => (
        <Form className="h-full basis-full md:basis-1/2 w-full flex gap-4 flex-col justify-center items-center">
          <AuthPageHeading text="Create an account account" />
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
            <Input
              name="cover"
              styleLabel="max-w-full"
              styleInput="max-w-full file-input-bordered file-input-primary"
              placeholder="Pick an Avatar (png, jpg)"
              setFieldValue={(e: any) => {
                setFieldValue("cover", e.target.files[0]);
              }}
              isUploader
            />
            <div className="flex justify-center items-center gap-4">
              <Input
                name="password"
                type="password"
                placeholder="Password"
                styleLabel="w-1/3 grow"
                value={values.password}
                onChangeHandler={handleChange}
                setFieldTouched={setFieldTouched}
              />
              <Input
                type="password"
                name="submitPassword"
                styleLabel="w-1/3 grow"
                value={values.submitPassword}
                placeholder="Submit Password"
                onChangeHandler={handleChange}
                setFieldTouched={setFieldTouched}
              />
            </div>
            <div>
              <Button
                style="btn-success w-full mb-4 md:mb-0"
                text="Signup"
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

export default memo(SignupForm);
