import Input from "@a/Input";
import Button from "@a/Button";
import FormInputs from "@o/FormOrganisms/FormInputs";
import ListPreview from "@o/FormOrganisms/ListPreview";
import DescriptionPreview from "@o/FormOrganisms/DescriptionPreview";
import { Formik, Form as FormikForm } from "formik";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function FormsFrom({ onSubmitHandler }: any) {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        todoSubject: "",
        todoFolder: "",
        todoPriority: "67bc5bf2a74538ab87c5a911",
        isListTodo: false,
        todoDescription: "",
        todoLabel: "badge-primary",
      }}
      onSubmit={onSubmitHandler}
    >
      {({ values, handleChange, setFieldValue, setFieldTouched }) => (
        <FormikForm className="flex flex-col gap-4 lg:gap-10 p-4 lg:px-8 lg:py-4">
          <FormInputs
            values={values}
            handleChange={handleChange}
            setFieldTouched={setFieldTouched}
          />
          {values.isListTodo ? (
            <ListPreview values={values} setFieldValue={setFieldValue} />
          ) : (
            <div className="flex lg:flex-nowrap flex-wrap gap-4 items-center justify-center">
              <p className="basis-1/6 grow">{t("formDescription")} :</p>
              <Input
                name="todoDescription"
                value={values.todoDescription}
                onChangeHandler={handleChange}
                setFieldTouched={setFieldTouched}
                styleInput="grow textarea-primary max-h-60 resize-y"
                placeholder={t("formDescription")}
                maxLength={200}
                isTextArea
              />
            </div>
          )}
          {values.todoDescription.length > 0 && (
            <DescriptionPreview values={values} />
          )}
          <Button
            style="btn-success w-full mb-4 md:mb-0"
            text={t("submitBtn")}
            type="submit"
            isOutlineBtn
          />
        </FormikForm>
      )}
    </Formik>
  );
}

export default memo(FormsFrom);
