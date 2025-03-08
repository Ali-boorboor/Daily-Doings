import Input from "@a/Input";
import Button from "@a/Button";
import ThemeCircle from "@a/ThemeCircle";
import useGetReq from "@/hooks/useGetReq";
import { TodoItem, TodoItemsList } from "@st/organismsStates";
import { EditModalInputsProps } from "@type/moleculesTypes";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { memo } from "react";

function EditModalInputs({
  values,
  handleChange,
  setFieldTouched,
}: EditModalInputsProps) {
  const [todoItemsList, setTodoItemsList] =
    useRecoilState<string[]>(TodoItemsList);
  const [todoItem, setTodoItem] = useRecoilState(TodoItem);
  const { t } = useTranslation();
  const { data } = useGetReq({
    queryKey: "ALL-FOLDERS",
    url: "/folder?limit=2000",
    cacheTime: 86400000,
    staleTime: 86400000,
  });

  return (
    <>
      <div className="flex lg:flex-nowrap flex-wrap gap-4 items-center justify-center">
        <p className="basis-1/2 grow">{t("formSubject")} :</p>
        <Input
          name="todoSubject"
          value={values.todoSubject}
          onChangeHandler={handleChange}
          setFieldTouched={setFieldTouched}
          styleLabel="input-primary grow"
          placeholder={t("formSubject")}
          maxLength={10}
          type="text"
          hasNoError
        />
      </div>
      <div className="flex lg:flex-nowrap flex-wrap gap-4 items-center justify-center">
        <p className="basis-1/2 grow">{t("formFolder")} :</p>
        <Input
          name="todoFolder"
          value={values.todoFolder}
          onChangeHandler={handleChange}
          styleLabel="grow basis-5/6 grow"
          styleInput="select-primary"
          options={
            <>
              <option value={""} disabled>
                {t("formNoFolderOption")}
              </option>
              {data?.data?.folders?.map(
                (folder: { name: string; _id: string }, index: number) => {
                  return (
                    <option key={++index} value={folder?._id}>
                      {folder?.name}
                    </option>
                  );
                }
              )}
            </>
          }
          isSelectBox
        />
      </div>
      <div className="flex lg:flex-nowrap flex-wrap gap-4 items-center justify-center">
        <p className="basis-1/2 grow">{t("formStatus")} :</p>
        <Input
          name="todoStatus"
          value={values.todoStatus}
          onChangeHandler={handleChange}
          styleLabel="grow basis-5/6 grow"
          styleInput="select-primary"
          options={
            <>
              <option value={"67bc63eca74538ab87c5a922"}>
                {t("doneStatus")}
              </option>
              <option value={"67bc643ca74538ab87c5a923"}>
                {t("notDoneStatus")}
              </option>
              <option value={"67bc6447a74538ab87c5a924"}>
                {t("awaitStatus")}
              </option>
              <option value={"67bc6464a74538ab87c5a925"}>
                {t("inProgressStatus")}
              </option>
            </>
          }
          isSelectBox
        />
      </div>
      <div className="flex lg:flex-nowrap flex-wrap gap-4 items-center justify-center">
        <p className="basis-1/2 grow">{t("formPriority")} :</p>
        <Input
          name="todoPriority"
          value={values.todoPriority}
          onChangeHandler={handleChange}
          styleLabel="grow basis-5/6 grow"
          styleInput="select-primary"
          options={
            <>
              <option value={"67bc5bf2a74538ab87c5a911"}>
                {t("todayTodosVeryLowPriority")}
              </option>
              <option value={"67bc5c85a74538ab87c5a912"}>
                {t("todayTodosLowPriority")}
              </option>
              <option value={"67bc5ca9a74538ab87c5a913"}>
                {t("todayTodosMediumPriority")}
              </option>
              <option value={"67bc5cc9a74538ab87c5a914"}>
                {t("todayTodosHighPriority")}
              </option>
            </>
          }
          isSelectBox
        />
      </div>
      <div className="flex lg:flex-nowrap flex-wrap gap-4 items-center justify-center">
        <div className="basis-1/2 grow flex flex-wrap justify-start items-center gap-4">
          {t("formColor")} : <ThemeCircle bgc1={values.todoLabel} />
        </div>
        <Input
          name="todoLabel"
          value={values.todoLabel}
          onChangeHandler={handleChange}
          styleLabel="grow basis-5/6 grow"
          styleInput="select-primary"
          options={
            <>
              <option className="badge-primary" value="badge-primary">
                Primary
              </option>
              <option className="badge-secondary" value="badge-secondary">
                Secondary
              </option>
              <option className="badge-accent" value="badge-accent">
                Accent
              </option>
              <option className="badge-info" value="badge-info">
                Info
              </option>
              <option className="badge-success" value="badge-success">
                Success
              </option>
              <option className="badge-error" value="badge-error">
                Error
              </option>
              <option className="badge-warning" value="badge-warning">
                Warning
              </option>
            </>
          }
          isSelectBox
        />
      </div>
      {values.isListTodo ? (
        <div className="flex flex-col lg:flex-nowrap flex-wrap gap-4 items-center justify-center">
          <div className="flex lg:flex-nowrap flex-wrap gap-4 items-center justify-center w-full">
            <p className="basis-1/2 grow">{t("formTodoItem")} :</p>
            <Input
              name="todoItem"
              value={todoItem}
              onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTodoItem(e.target.value)
              }
              styleLabel="input-primary grow"
              placeholder={t("formTodoItem")}
              maxLength={18}
              type="text"
              hasNoError
            />
          </div>
          <Button
            style="btn-success w-full mb-4 md:mb-0"
            onClickHandler={() => {
              setTodoItemsList([...todoItemsList, todoItem]);
              setTodoItem("");
            }}
            text={t("formAddItemToListBtn")}
            type="button"
            isOutlineBtn
          />
        </div>
      ) : (
        <div className="flex lg:flex-nowrap flex-wrap gap-4 items-center justify-center">
          <p className="basis-1/2 grow">{t("formDescription")} :</p>
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
    </>
  );
}

export default memo(EditModalInputs);
