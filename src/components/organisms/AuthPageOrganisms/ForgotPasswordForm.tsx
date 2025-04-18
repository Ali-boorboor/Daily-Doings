import Input from "@a/Input";
import Button from "@a/Button";
import Divider from "@a/Divider";
import AuthPageHeading from "@m/AuthPageHeading";
import { forgotPasswordFormPropsType } from "@type/organismsTypes";
import { forgotPassValidation } from "@v/Validations";
import { useTranslation } from "react-i18next";
import { FaUserLarge } from "react-icons/fa6";
import { Form, Formik } from "formik";
import { memo } from "react";

function ForgotPasswordForm({
  initialValues,
  onSubmitHandler,
}: forgotPasswordFormPropsType) {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={() => forgotPassValidation(t)}
    >
      {({ values, handleChange, setFieldTouched }) => (
        <Form className="h-full basis-full md:basis-1/2 w-full flex gap-4 flex-col justify-center items-center">
          <AuthPageHeading text={t("forgotPassText")} />
          <div className="max-w-screen-md w-full overflow-hidden flex flex-col gap-4 md:gap-8 p-4">
            <Input
              name="identifier"
              type="text"
              value={values.identifier}
              onChangeHandler={handleChange}
              placeholder={t("identifierInput")}
              icon={<FaUserLarge />}
              setFieldTouched={setFieldTouched}
            />
            <div>
              <Button
                style="btn-success w-full mb-4 md:mb-0"
                text={t("submitBtn")}
                type="submit"
                isOutlineBtn
              />
              <Divider
                text={t("authPagesDividerText")}
                style="hidden md:flex"
              />
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <Button
                  style="btn-secondary w-1/3 grow"
                  text={t("navToLogin")}
                  linkTo="/auth/login"
                  isLink
                />
                <Button
                  style="btn-accent w-1/3 grow"
                  text={t("navToSignup")}
                  linkTo="/auth/signup"
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
