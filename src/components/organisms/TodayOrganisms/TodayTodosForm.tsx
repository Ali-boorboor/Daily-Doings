import Input from "@a/Input";
import Button from "@a/Button";
import { useTranslation } from "react-i18next";
import { Form, Formik } from "formik";
import { memo } from "react";

function TodayTodosForm() {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        testTodo1: false,
        testTodo2: false,
        testTodo3: false,
        testTodo4: true,
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, handleChange }) => (
        <Form className="p-6">
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,1fr))] justify-items-center items-center p-4 mt-4 rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
            <Input
              name="testTodo1"
              placeholder="Test Todo Text 1"
              onChangeHandler={handleChange}
              value={values.testTodo1}
              styleInput="checkbox-success"
              styleLabel={`${
                values.testTodo1 && "opacity-70 line-through"
              } transition-all duration-300 ease-linear`}
              isDefaultChecked={values.testTodo1}
              isCheckBoxCenter
              hasNoError
              isCheckBox
            />
            <Input
              name="testTodo2"
              placeholder="Test Todo Text 2"
              onChangeHandler={handleChange}
              value={values.testTodo2}
              styleInput="checkbox-error"
              styleLabel={`${
                values.testTodo2 && "opacity-70 line-through"
              } transition-all duration-300 ease-linear`}
              isDefaultChecked={values.testTodo2}
              isCheckBoxCenter
              hasNoError
              isCheckBox
            />
            <Input
              name="testTodo3"
              placeholder="Test Todo Text 3"
              onChangeHandler={handleChange}
              value={values.testTodo3}
              styleInput="checkbox-warning"
              styleLabel={`${
                values.testTodo3 && "opacity-70 line-through"
              } transition-all duration-300 ease-linear`}
              isDefaultChecked={values.testTodo3}
              isCheckBoxCenter
              hasNoError
              isCheckBox
            />
            <Input
              name="testTodo4"
              placeholder="Test Todo Text 4"
              onChangeHandler={handleChange}
              value={values.testTodo4}
              styleInput="checkbox-info line-through"
              styleLabel={`${
                values.testTodo4 && "opacity-70 line-through"
              } transition-all duration-300 ease-linear`}
              isDefaultChecked={values.testTodo4}
              isCheckBoxCenter
              hasNoError
              isCheckBox
            />
          </div>
          <div className="flex flex-wrap gap-4 mt-8 mb-4">
            <Button
              style="btn-primary basis-1/3 grow"
              text={t("todayCheckAllBtn")}
              type="button"
              onClickHandler={() => {}}
              isOutlineBtn
            />
            <Button
              style="btn-error basis-1/3 grow"
              text={t("todayRemoveAllBtn")}
              type="button"
              onClickHandler={() => {}}
              isOutlineBtn
            />
          </div>
          <Button
            style="btn-success w-full"
            text={t("submitBtn")}
            type="submit"
            isOutlineBtn
          />
        </Form>
      )}
    </Formik>
  );
}

export default memo(TodayTodosForm);
