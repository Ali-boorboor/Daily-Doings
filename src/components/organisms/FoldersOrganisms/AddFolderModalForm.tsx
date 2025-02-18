import Input from "@a/Input";
import Button from "@a/Button";
import HeaderTitle from "@a/HeaderTitle";
import { Form, Formik } from "formik";
import { memo } from "react";
import { useTranslation } from "react-i18next";

function AddFolderModalForm() {
  const { t } = useTranslation();

  return (
    <Formik initialValues={{ folderName: "" }} onSubmit={() => {}}>
      {({ values, handleChange, setFieldTouched }) => (
        <Form className="overflow-hidden flex flex-col gap-4 justify-center items-center badge-ghost ring ring-primary rounded-lg drop-shadow-lg ring-offset-2 ring-offset-base-100">
          <HeaderTitle
            title={t("addFolderBtn")}
            style="bg-primary text-primary-content text-xl md:text-2xl p-2 text-center rounded-b-full w-full"
          />
          <div className="flex flex-col gap-4 md:gap-8 justify-center items-center p-4 w-full">
            <Input
              type="text"
              name="folderName"
              value={values.folderName}
              onChangeHandler={handleChange}
              placeholder={t("folderNameInput")}
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

export default memo(AddFolderModalForm);
