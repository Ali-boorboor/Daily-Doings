import Input from "@a/Input";
import Button from "@a/Button";
import HeaderTitle from "@a/HeaderTitle";
import { useTranslation } from "react-i18next";
import { Form, Formik } from "formik";
import { memo } from "react";

function ChangeCoverForm() {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        cover: null,
        password: "",
      }}
      onSubmit={() => {}}
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
            <Button style="btn-success w-full" text={t("submitBtn")} type="submit" isOutlineBtn />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default memo(ChangeCoverForm);
