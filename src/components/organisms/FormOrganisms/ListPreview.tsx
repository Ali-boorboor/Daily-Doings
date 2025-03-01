import Input from "@a/Input";
import Button from "@a/Button";
import TodoStickyWall from "@m/TodoStickyWall";
import { TodoItem, TodoItemsList } from "@st/organismsStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function ListPreview({ values, setFieldValue }: any) {
  const { t } = useTranslation();
  const [todoItem, setTodoItem] = useRecoilState(TodoItem);
  const [todoItemsList, setTodoItemsList]: any = useRecoilState(TodoItemsList);

  useEffect(() => {
    return () => {
      setTodoItem("");
      setTodoItemsList([]);
      setFieldValue("todoDescription", "");
    };
  }, []);

  return (
    <>
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
      {todoItemsList.length > 0 && (
        <div className="flex flex-col gap-4 justify-center items-center p-2 rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
          <p>{t("formPreviewTitle")} :</p>
          <TodoStickyWall
            subject={values.todoSubject}
            style={`cursor-auto ${values.todoLabel}`}
            listItems={todoItemsList}
            hasNoOnClickModal
            isList
          />
        </div>
      )}
    </>
  );
}

export default memo(ListPreview);
