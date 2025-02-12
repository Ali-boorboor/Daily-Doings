import Input from "@a/Input";
import ThemeCircle from "@a/ThemeCircle";
import { PiListBulletsFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import { MdDescription } from "react-icons/md";
import { memo } from "react";

function FormInputs({ values, handleChange, setFieldTouched }: any) {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex lg:flex-nowrap flex-wrap gap-4 items-center justify-center">
        <p className="basis-1/6 grow">{t("formSubject")} :</p>
        <Input
          name="todoSubject"
          value={values.todoSubject}
          onChangeHandler={handleChange}
          setFieldTouched={setFieldTouched}
          styleLabel="input-primary grow"
          placeholder={t("formSubject")}
          maxLength={18}
          type="text"
          hasNoError
        />
      </div>
      <div className="flex lg:flex-nowrap flex-wrap gap-4 items-center justify-center">
        <p className="basis-1/6 grow">{t("formFolder")} :</p>
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
        <p className="basis-1/6 grow">{t("formPriority")} :</p>
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
        <div className="basis-1/6 grow flex flex-wrap justify-start items-center gap-4">
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
      <div className="flex justify-center items-center gap-4 bg-primary text-primary-content p-2 rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
        <p className="text-lg font-bold">{t("formIsListTodoText")}</p>
        <label dir="rtl" className="flex items-center cursor-pointer gap-2">
          <div
            className="tooltip tooltip-bottom"
            data-tip={t("formDescriptionToggleBtn")}
          >
            <MdDescription className="w-5 h-5" />
          </div>
          <input
            name="isListTodo"
            onChange={handleChange}
            type="checkbox"
            className="toggle toggle-secondary"
            defaultChecked={values.isListTodo}
          />
          <div
            className="tooltip tooltip-bottom"
            data-tip={t("formListToggleBtn")}
          >
            <PiListBulletsFill className="w-5 h-5" />
          </div>
        </label>
      </div>
    </>
  );
}

export default memo(FormInputs);
