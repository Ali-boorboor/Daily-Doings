import HeaderTitle from "@a/HeaderTitle";
import usePostReq from "@/hooks/usePostReq";
import docTitle from "@/utils/documentTitle";
import FormsFrom from "@o/FormOrganisms/FormsFrom";
import { FormsFromOnSubmitValues } from "@type/organismsTypes";
import { TodoItemsList } from "@st/organismsStates";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { memo, useEffect } from "react";

function Form() {
  const { t } = useTranslation();
  const todoItemsList = useRecoilValue(TodoItemsList);
  const { mutate: postReq } = usePostReq({
    successTitle: t("successAddTodoFormToast"),
    errorTitle: t("errorAddTodoFormToast"),
    refetchQueries: [
      "ALL-TODOS",
      "ALL-FOLDERS",
      "RECENT-TODOS",
      "TODOS-OVERVIEW",
      "FOLDERS-OVERVIEW",
    ],
    navigateTo: "/table",
    url: "/todo",
  });

  useEffect(() => {
    docTitle("Form Page");
  }, []);

  return (
    <div className="max-w-screen-2xl m-auto badge-ghost rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
      <HeaderTitle
        style="text-xl font-bold p-2 text-center bg-primary text-primary-content rounded-b-full drop-shadow-lg"
        title={t("formTitle")}
      />
      <FormsFrom
        onSubmitHandler={(
          values: FormsFromOnSubmitValues,
          { resetForm }: any
        ) => {
          postReq({
            reqOptions: {
              subject: values.todoSubject,
              folder: values.todoFolder ? values.todoFolder : null,
              priority: values.todoPriority,
              isListTodo: values.isListTodo ? 1 : 0,
              description: values.isListTodo ? null : values.todoDescription,
              listItems: values.isListTodo ? todoItemsList : null,
              labelColor: values.todoLabel,
            },
          });
          resetForm();
        }}
      />
    </div>
  );
}

export default memo(Form);
