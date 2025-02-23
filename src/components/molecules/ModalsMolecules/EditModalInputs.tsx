import Input from "@a/Input";
import Button from "@a/Button";
import ThemeCircle from "@a/ThemeCircle";
import { TodoItem, TodoItemsList } from "@st/organismsStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { memo } from "react";

function EditModalInputs({ values, handleChange, setFieldTouched }: any) {
  const [todoItemsList, setTodoItemsList]: any = useRecoilState(TodoItemsList);
  const [todoItem, setTodoItem] = useRecoilState(TodoItem);
  const { t } = useTranslation();

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
              <option value={0} disabled>
                {t("formNoFolderOption")}
              </option>
              <option value={1}>Folder A</option>
              <option value={2}>Folder B</option>
              <option value={3}>Folder C</option>
              <option value={4}>Folder D</option>
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
              <option value={1}>{t("todayTodosVeryLowPriority")}</option>
              <option value={2}>{t("todayTodosLowPriority")}</option>
              <option value={3}>{t("todayTodosMediumPriority")}</option>
              <option value={4}>{t("todayTodosHighPriority")}</option>
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
            <p className="basis-1/6 grow">{t("formTodoItem")} :</p>
            <Input
              name="todoItem"
              value={todoItem}
              onChangeHandler={(e: any) => setTodoItem(e.target.value)}
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
