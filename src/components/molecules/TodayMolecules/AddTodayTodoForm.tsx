import Input from "@a/Input";
import Button from "@a/Button";
import { AddTodayTodoFormProps } from "@type/moleculesTypes";
import { useTranslation } from "react-i18next";
import { Form, Formik } from "formik";
import { memo } from "react";

function AddTodayTodoForm({ onSubmitHandler }: AddTodayTodoFormProps) {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        addTodoInput: "",
        addTodoPriorityInput: "67bc5bf2a74538ab87c5a911",
      }}
      onSubmit={onSubmitHandler}
    >
      {({ values, handleChange }) => (
        <Form className="p-6 pb-0 flex flex-wrap sm:flex-nowrap gap-4">
          <Input
            type="text"
            name="addTodoInput"
            value={values.addTodoInput}
            onChangeHandler={handleChange}
            placeholder={t("addTodayTodosInputText")}
            styleLabel="input-primary"
            maxLength={20}
          />
          <Input
            name="addTodoPriorityInput"
            value={values.addTodoPriorityInput}
            onChangeHandler={handleChange}
            styleLabel="grow"
            styleInput="select-primary"
            options={
              <>
                <option value={"67bc5bf2a74538ab87c5a911"}>
                  {t("todayTodosVeryLowPriority")} (
                  {t("todayTodosPriorityTitle")})
                </option>
                <option value={"67bc5c85a74538ab87c5a912"}>
                  {t("todayTodosLowPriority")} ({t("todayTodosPriorityTitle")})
                </option>
                <option value={"67bc5ca9a74538ab87c5a913"}>
                  {t("todayTodosMediumPriority")} (
                  {t("todayTodosPriorityTitle")})
                </option>
                <option value={"67bc5cc9a74538ab87c5a914"}>
                  {t("todayTodosHighPriority")} ({t("todayTodosPriorityTitle")})
                </option>
              </>
            }
            isSelectBox
          />
          <Button
            style="btn-success w-full sm:w-auto"
            text={t("submitBtn")}
            type="submit"
            isOutlineBtn
          />
        </Form>
      )}
    </Formik>
  );
}

export default memo(AddTodayTodoForm);
