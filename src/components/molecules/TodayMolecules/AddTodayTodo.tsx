import Input from "@a/Input";
import Button from "@a/Button";
import { useTranslation } from "react-i18next";
import { Form, Formik } from "formik";
import { memo } from "react";

function AddTodayTodo() {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ addTodoInput: "", addTodoPriorityInput: 0 }}
      onSubmit={(values) => console.log(values)}
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
                <option value={0}>
                  {t("todayTodosVeryLowPriority")} (
                  {t("todayTodosPriorityTitle")})
                </option>
                <option value={1}>
                  {t("todayTodosLowPriority")} ({t("todayTodosPriorityTitle")})
                </option>
                <option value={2}>
                  {t("todayTodosMediumPriority")} (
                  {t("todayTodosPriorityTitle")})
                </option>
                <option value={3}>
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

export default memo(AddTodayTodo);
