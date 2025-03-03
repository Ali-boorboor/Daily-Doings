import Input from "@a/Input";
import Button from "@a/Button";
import Divider from "@a/Divider";
import { getAllTodayTodosResType } from "@type/organismsTypes";
import { useTranslation } from "react-i18next";
import { MdDelete } from "react-icons/md";
import { Form, Formik } from "formik";
import { memo } from "react";

function TodayTodosContainer({
  data,
  onSubmitHandler,
}: getAllTodayTodosResType) {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ checkedTodos: [] as string[] }}
      onSubmit={onSubmitHandler}
    >
      {({ values, handleChange, setFieldValue }) => (
        <Form className="p-6">
          <div className="flex flex-wrap gap-4 justify-center items-center p-4 mt-4 rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
            {data?.todayTodos?.map((todo, index) => {
              return (
                <div
                  key={++index}
                  className={`flex items-center justify-between gap-4 bg-base-100 rounded-full px-4 ring ${
                    todo?.priority?.priority === "very-low"
                      ? "ring-success"
                      : todo?.priority?.priority === "high"
                      ? "ring-error"
                      : todo?.priority?.priority === "low"
                      ? "ring-info"
                      : "ring-warning"
                  } ring-offset-1 ring-offset-base-100 drop-shadow-lg`}
                >
                  <Input
                    name="checkedTodos"
                    placeholder={todo?.subject}
                    onChangeHandler={handleChange}
                    value={todo?._id}
                    styleLabel={`${
                      values?.checkedTodos?.includes(todo?._id) ||
                      (todo?.status?.status === "Done" &&
                        "opacity-70 line-through")
                    } transition-all duration-300 ease-linear`}
                    isDefaultChecked={
                      values?.checkedTodos?.includes(todo?._id) ||
                      todo?.status?.status === "Done"
                    }
                    isCheckBoxCenter
                    hasNoError
                    isCheckBox
                  />
                  <Divider style="divider-horizontal  m-0" />
                  <MdDelete className="w-6 h-6 fill-error cursor-pointer" />
                </div>
              );
            })}
          </div>
          <Button
            style="btn-success w-full grow mt-8 mb-4"
            text={t("saveTodayTodos")}
            type="submit"
            isOutlineBtn
          />
          <div className="flex flex-wrap gap-4">
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

export default memo(TodayTodosContainer);
