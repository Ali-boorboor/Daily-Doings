import Input from "@a/Input";
import Button from "@a/Button";
import HeaderTitle from "@a/HeaderTitle";
import usePutReq from "@/hooks/usePutReq";
import { ChangePasswordFormOnSubmitValues } from "@type/organismsTypes";
import { useTranslation } from "react-i18next";
import { Form, Formik } from "formik";
import { memo } from "react";

function ChangePasswordForm() {
  const { t } = useTranslation();
  const { mutate: putReq } = usePutReq({
    successTitle: t("successChangePassToast"),
    errorTitle: t("errorChangePassToast"),
    navigateTo: "/settings",
    url: "/user/change-password",
  });

  const onSubmitHandler = (values: ChangePasswordFormOnSubmitValues) => {
    putReq({
      currentPassword: values.currentPassword,
      newPassword: values.newPassword,
    });
  };

  return (
    <Formik
      initialValues={{
        currentPassword: "",
        newPassword: "",
        submitPassword: "",
      }}
      onSubmit={onSubmitHandler}
    >
      {({ values, handleChange, setFieldTouched }) => (
        <Form className="h-full m-auto max-w-screen-lg overflow-hidden flex flex-col gap-4 justify-center items-center badge-ghost ring ring-primary rounded-lg drop-shadow-lg ring-offset-2 ring-offset-base-100">
          <HeaderTitle
            title={t("settingsChangePasswordBtn")}
            style="bg-primary text-primary-content text-xl md:text-2xl p-2 text-center rounded-b-full w-full"
          />
          <div className="flex flex-col gap-4 md:gap-8 justify-center items-center p-4 w-full">
            <Input
              type="password"
              name="currentPassword"
              value={values.currentPassword}
              onChangeHandler={handleChange}
              placeholder={t("changePasswordCurrentInput")}
              setFieldTouched={setFieldTouched}
            />
            <Input
              type="password"
              name="newPassword"
              value={values.newPassword}
              onChangeHandler={handleChange}
              placeholder={t("changePasswordNewInput")}
              setFieldTouched={setFieldTouched}
            />
            <Input
              type="password"
              name="submitPassword"
              value={values.submitPassword}
              onChangeHandler={handleChange}
              placeholder={t("changePasswordSubmitInput")}
              setFieldTouched={setFieldTouched}
            />
            <Button
              style="btn-success w-full"
              text={t("submitBtn")}
              type="submit"
              isOutlineBtn
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default memo(ChangePasswordForm);
