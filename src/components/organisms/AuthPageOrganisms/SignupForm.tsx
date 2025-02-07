import Input from "@a/Input";
import Button from "@a/Button";
import Divider from "@a/Divider";
import AuthPageHeading from "@m/AuthPageHeading";
import { signupFormPropsType } from "@type/organismsTypes";
import { signupValidation } from "@v/Validations";
import { FaUserLarge } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { MdEmail } from "react-icons/md";
import { Form, Formik } from "formik";
import { memo } from "react";

function SignupForm({ initialValues, onSubmitHandler }: signupFormPropsType) {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={() => signupValidation(t)}
    >
      {({ values, handleChange, setFieldValue, setFieldTouched }) => (
        <Form className="h-full basis-full md:basis-1/2 w-full flex gap-4 flex-col justify-center items-center">
          <AuthPageHeading name={values.username} text={t("signupText")} />
          <div className="max-w-screen-md w-full overflow-hidden flex flex-col gap-4 md:gap-8 p-4">
            <Input
              name="username"
              type="text"
              value={values.username}
              onChangeHandler={handleChange}
              placeholder={t("usernameInput")}
              icon={<FaUserLarge />}
              setFieldTouched={setFieldTouched}
              maxLength={20}
            />
            <Input
              name="email"
              type="email"
              value={values.email}
              onChangeHandler={handleChange}
              placeholder={t("emailInput")}
              icon={<MdEmail />}
              setFieldTouched={setFieldTouched}
            />
            <Input
              name="cover"
              styleLabel="max-w-full"
              styleInput="max-w-full file-input-bordered file-input-primary"
              placeholder={t("signupFileUploaderText")}
              setFieldValue={(e: any) => {
                setFieldValue("cover", e.target.files[0]);
              }}
              isUploader
            />
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Input
                name="password"
                type="password"
                placeholder={t("passwordInput")}
                value={values.password}
                onChangeHandler={handleChange}
                setFieldTouched={setFieldTouched}
              />
              <Input
                type="password"
                name="submitPassword"
                value={values.submitPassword}
                placeholder={t("submitPasswordInput")}
                onChangeHandler={handleChange}
                setFieldTouched={setFieldTouched}
              />
            </div>
            <Input
              name="agreeToTerms"
              value={values.agreeToTerms}
              styleInput="checkbox-primary"
              placeholder={t("agreeToTerms")}
              onChangeHandler={handleChange}
              isCheckBox
            />
            <div>
              <Button
                style="btn-success w-full mb-4 md:mb-0"
                text={t("signupBtn")}
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
                  text={t("navToForgotPass")}
                  linkTo="/auth/forgot-password"
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
