import Button from "@a/Button";
import HeaderTitle from "@a/HeaderTitle";
import useGetReq from "@/hooks/useGetReq";
import usePutReq from "@/hooks/usePutReq";
import RemoveModal from "@m/ModalsMolecules/RemoveModal";
import EditModalInputs from "@m/ModalsMolecules/EditModalInputs";
import { EditModalPropsType } from "@type/moleculesTypes";
import { TodoItem, TodoItemsList } from "@st/organismsStates";
import { formsFormValidation } from "@v/Validations";
import { modalDetails, toastDetails } from "@st/globalStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { Form, Formik } from "formik";
import { memo } from "react";

function EditModal({ hasRemoveModal, todoID }: EditModalPropsType) {
  const [ModalDetails, setModalDetails] = useRecoilState(modalDetails);
  const [todoItemsList, setTodoItemsList] = useRecoilState(TodoItemsList);
  const [, setToastDetails] = useRecoilState(toastDetails);
  const [, setTodoItem] = useRecoilState(TodoItem);
  const { t } = useTranslation();
  const { data } = useGetReq({
    queryKey: ["ALL-TODOS", `TODO-${todoID}`],
    url: `/todo/${todoID}`,
    cacheTime: 86400000,
    staleTime: 86400000,
  });
  const { mutate: putReq } = usePutReq({
    successTitle: t("successEditTodoToast"),
    errorTitle: t("errorEditTodoToast"),
    url: `/todo/${todoID}`,
    refetchQueries: [
      "SEARCH",
      "ALL-TODOS",
      "ALL-FOLDERS",
      "RECENT-TODOS",
      "TODOS-OVERVIEW",
      "FOLDERS-OVERVIEW",
      `TODO-${todoID}`,
    ],
  });

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <HeaderTitle
        title={t("editTodosTitle")}
        style="badge-primary rounded-lg text-xl md:text-2xl p-2 w-full text-center ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg"
      />
      <Formik
        enableReinitialize
        initialValues={{
          todoSubject: data?.data?.result?.subject,
          todoFolder: data?.data?.result?.folder?._id || ("" as string),
          todoStatus: data?.data?.result?.status?._id,
          todoPriority: data?.data?.result?.priority?._id,
          isListTodo: data?.data?.result?.isListTodo === 1 ? true : false,
          todoDescription: data?.data?.result?.description,
          todoLabel: data?.data?.result?.labelColor,
        }}
        validationSchema={() => formsFormValidation(t)}
        onSubmit={(values, { resetForm }) => {
          if (values.isListTodo && todoItemsList.length < 1) {
            setToastDetails({
              title: t("listItemWarningToast"),
              toastState: "alert-warning",
              ringState: "ring-warning",
              isShown: true,
            });
          } else {
            putReq({
              reqOptions: {
                subject: values.todoSubject,
                priority: values.todoPriority,
                folder: values.todoFolder || null,
                status: values.todoStatus,
                labelColor: values.todoLabel,
                isListTodo: values.isListTodo ? 1 : 0,
                description: values.todoDescription,
                listItems:
                  todoItemsList.length === 0
                    ? data?.data?.result?.listItems || null
                    : todoItemsList,
              },
            });
            setModalDetails({ ...ModalDetails, isShown: false });
            setTodoItemsList([]);
            setTodoItem("");
            resetForm();
          }
        }}
      >
        {({ values, handleChange, setFieldTouched }) => (
          <Form className="flex flex-col gap-4 w-full">
            <EditModalInputs
              values={values}
              handleChange={handleChange}
              setFieldTouched={setFieldTouched}
            />
            <div className="flex justify-center items-center gap-4 w-full">
              <Button
                type="submit"
                style="btn-success w-1/3 grow ring ring-success ring-offset-2 ring-offset-base-100 drop-shadow-lg"
                text={t("submitBtn")}
              />
              <Button
                type="button"
                style="btn-error w-1/3 grow ring ring-error ring-offset-2 ring-offset-base-100 drop-shadow-lg"
                text={t("cancelBtn")}
                onClickHandler={() => {
                  setModalDetails({ ...ModalDetails, isShown: false });
                }}
              />
            </div>
            {hasRemoveModal && (
              <Button
                type="button"
                style="btn-error w-full grow ring ring-error ring-offset-2 ring-offset-base-100 drop-shadow-lg"
                text={t("removeTodoBtn")}
                onClickHandler={() => {
                  setModalDetails({
                    elements: (
                      <RemoveModal
                        url={`/todo/${todoID}`}
                        refetchQueries={[
                          "ALL-TODOS",
                          "ALL-FOLDERS",
                          "RECENT-TODOS",
                          "TODOS-OVERVIEW",
                          "FOLDERS-OVERVIEW",
                        ]}
                      />
                    ),
                    isShown: true,
                  });
                }}
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default memo(EditModal);
