import Input from "@a/Input";
import Button from "@a/Button";
import HeaderTitle from "@a/HeaderTitle";
import usePutReq from "@/hooks/usePutReq";
import { ChangeUsernameFormOnSubmitValues } from "@type/organismsTypes";
import { changeUsernameValidation } from "@v/Validations";
import { toastDetails } from "@st/globalStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { Form, Formik } from "formik";
import { memo, useEffect } from "react";

function ChangeUsernameForm() {
  const [, setToastDetails] = useRecoilState(toastDetails);
  const { t } = useTranslation();
  const { mutate: putReq, error }: any = usePutReq({
    successTitle: t("successChangeUsernameToast"),
    errorTitle: t("errorChangeUsernameToast"),
    navigateTo: "/settings",
    url: "/user/change-username",
  });

  const onSubmitHandler = (
    values: ChangeUsernameFormOnSubmitValues,
    { resetForm }: any
  ) => {
    putReq({
      reqOptions: {
        newUsername: values.newUsername,
        password: values.password,
      },
    });
    resetForm();
  };

  useEffect(() => {
    if (+error?.status === 401) {
      setToastDetails({
        title: t("errorPassWrong"),
        toastState: "alert-error",
        ringState: "ring-error",
        isShown: true,
      });
    } else if (+error?.status === 409) {
      setToastDetails({
        title: t("repeatedUsername"),
        toastState: "alert-error",
        ringState: "ring-error",
        isShown: true,
      });
    }
  }, [error]);

  return (
    <Formik
      initialValues={{
        newUsername: "",
        password: "",
      }}
      onSubmit={onSubmitHandler}
      validationSchema={() => changeUsernameValidation(t)}
    >
      {({ values, handleChange, setFieldTouched }) => (
        <Form className="h-full m-auto max-w-screen-lg overflow-hidden flex flex-col gap-4 justify-center items-center badge-ghost ring ring-primary rounded-lg drop-shadow-lg ring-offset-2 ring-offset-base-100">
          <HeaderTitle
            title={t("settingsChangeUsernameBtn")}
            style="bg-primary text-primary-content text-xl md:text-2xl p-2 text-center rounded-b-full w-full"
          />
          <div className="flex flex-col gap-4 md:gap-8 justify-center items-center p-4 w-full">
            <Input
              type="text"
              name="newUsername"
              value={values.newUsername}
              onChangeHandler={handleChange}
              placeholder={t("changeUsernameInput")}
              setFieldTouched={setFieldTouched}
              maxLength={20}
            />
            <Input
              type="password"
              name="password"
              value={values.password}
              onChangeHandler={handleChange}
              placeholder={t("passwordInput")}
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

export default memo(ChangeUsernameForm);
