import Input from "@a/Input";
import Button from "@a/Button";
import Divider from "@a/Divider";
import { useTranslation } from "react-i18next";
import { MdDelete } from "react-icons/md";
import { Form, Formik } from "formik";
import { memo } from "react";

function TodayTodosForm() {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        checkedTodos: [] as string[],
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, handleChange, setFieldValue }) => (
        <Form className="p-6">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-between items-center p-4 mt-4 rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
            <div className="flex items-center justify-between gap-4 bg-base-100 rounded-full px-4 ring ring-success ring-offset-1 ring-offset-base-100 drop-shadow-lg">
              <Input
                name="checkedTodos"
                placeholder="Test Todo Text num 1"
                onChangeHandler={handleChange}
                value="0"
                styleInput="checkbox-success"
                styleLabel={`${
                  values.checkedTodos.includes("0") && "opacity-70 line-through"
                } transition-all duration-300 ease-linear`}
                isDefaultChecked={values.checkedTodos.includes("0")}
                isCheckBoxCenter
                hasNoError
                isCheckBox
              />
              <Divider style="divider-horizontal  m-0" />
              <MdDelete className="w-6 h-6 fill-error cursor-pointer" />
            </div>
            <div className="flex items-center justify-between gap-4 bg-base-100 rounded-full px-4 ring ring-error ring-offset-1 ring-offset-base-100 drop-shadow-lg">
              <Input
                name="checkedTodos"
                placeholder="Test Todo Text num 2"
                onChangeHandler={handleChange}
                value="1"
                styleInput="checkbox-error"
                styleLabel={`${
                  values.checkedTodos.includes("1") && "opacity-70 line-through"
                } transition-all duration-300 ease-linear`}
                isDefaultChecked={values.checkedTodos.includes("1")}
                isCheckBoxCenter
                hasNoError
                isCheckBox
              />
              <Divider style="divider-horizontal  m-0" />
              <MdDelete className="w-6 h-6 fill-error cursor-pointer" />
            </div>
            <div className="flex items-center justify-between gap-4 bg-base-100 rounded-full px-4 ring ring-warning ring-offset-1 ring-offset-base-100 drop-shadow-lg">
              <Input
                name="checkedTodos"
                placeholder="Test Todo Text num 3"
                onChangeHandler={handleChange}
                value="2"
                styleInput="checkbox-warning"
                styleLabel={`${
                  values.checkedTodos.includes("2") && "opacity-70 line-through"
                } transition-all duration-300 ease-linear`}
                isDefaultChecked={values.checkedTodos.includes("2")}
                isCheckBoxCenter
                hasNoError
                isCheckBox
              />
              <Divider style="divider-horizontal  m-0" />
              <MdDelete className="w-6 h-6 fill-error cursor-pointer" />
            </div>
            <div className="flex items-center justify-between gap-4 bg-base-100 rounded-full px-4 ring ring-info ring-offset-1 ring-offset-base-100 drop-shadow-lg">
              <Input
                name="checkedTodos"
                placeholder="Test Todo Text num 4"
                onChangeHandler={handleChange}
                value="3"
                styleInput="checkbox-info line-through"
                styleLabel={`${
                  values.checkedTodos.includes("3") && "opacity-70 line-through"
                } transition-all duration-300 ease-linear`}
                isDefaultChecked={values.checkedTodos.includes("3")}
                isCheckBoxCenter
                hasNoError
                isCheckBox
              />
              <Divider style="divider-horizontal  m-0" />
              <MdDelete className="w-6 h-6 fill-error cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              style="btn-primary basis-1/3 grow"
              text={t("todayCheckAllBtn")}
              type="button"
              onClickHandler={() => {
                setFieldValue("checkedTodos", ["0", "1", "2", "3"]);
              }}
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
        </Form>
      )}
    </Formik>
  );
}

export default memo(TodayTodosForm);
