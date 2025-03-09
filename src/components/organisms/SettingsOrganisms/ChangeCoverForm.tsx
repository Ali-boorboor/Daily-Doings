import Input from "@a/Input";
import Button from "@a/Button";
import HeaderTitle from "@a/HeaderTitle";
import usePutReq from "@/hooks/usePutReq";
import { changeCoverFormOnSubmitValues } from "@type/organismsTypes";
import { changeCoverValidation } from "@v/Validations";
import { toastDetails } from "@st/globalStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { Form, Formik } from "formik";
import { memo, useEffect, useRef } from "react";

function ChangeCoverForm() {
  const { t } = useTranslation();
  const fileInputRef: any = useRef(null);
  const [, setToastDetails] = useRecoilState(toastDetails);
  const { mutate: putReq, error }: any = usePutReq({
    successTitle: t("successChangeCoverToast"),
    errorTitle: t("errorChangeCoverToast"),
    navigateTo: "/settings",
    url: "/user/change-cover",
  });

  const onSubmitHandler = (
    values: changeCoverFormOnSubmitValues,
    { resetForm }: any
  ) => {
    const formData = new FormData();

    formData.append("cover", values.cover);
    formData.append("password", values.password);

    putReq({ reqOptions: formData });
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
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [error]);

  return (
    <Formik
      initialValues={{
        cover: null,
        password: "",
      }}
      onSubmit={onSubmitHandler}
      validationSchema={() => changeCoverValidation(t)}
    >
      {({ values, handleChange, setFieldValue, setFieldTouched }) => (
        <Form className="h-full m-auto max-w-screen-lg overflow-hidden flex flex-col gap-4 justify-center items-center badge-ghost ring ring-primary rounded-lg drop-shadow-lg ring-offset-2 ring-offset-base-100">
          <HeaderTitle
            title={t("settingsChangeCoverBtn")}
            style="bg-primary text-primary-content text-xl md:text-2xl p-2 text-center rounded-b-full w-full"
          />
          <div className="flex flex-col gap-4 md:gap-8 justify-center items-center p-4 w-full">
            <Input
              name="cover"
              ref={fileInputRef}
              styleLabel="max-w-full"
              styleInput="max-w-full file-input-bordered file-input-primary"
              placeholder={t("signupFileUploaderText")}
              setFieldValue={(e: any) => {
                setFieldValue("cover", e.target.files[0]);
              }}
              isUploader
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

export default memo(ChangeCoverForm);
