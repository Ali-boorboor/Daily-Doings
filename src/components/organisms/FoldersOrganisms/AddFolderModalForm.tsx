import Input from "@a/Input";
import Button from "@a/Button";
import HeaderTitle from "@a/HeaderTitle";
import { modalDetails } from "@st/globalStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { Form, Formik } from "formik";
import { memo } from "react";

function AddFolderModalForm() {
  const [ModalDetails, setModalDetails] = useRecoilState(modalDetails);
  const { t } = useTranslation();

  return (
    <Formik initialValues={{ folderName: "" }} onSubmit={() => {}}>
      {({ values, handleChange, setFieldTouched }) => (
        <Form className="overflow-hidden flex flex-col gap-4 justify-center items-center badge-ghost ring ring-primary rounded-lg drop-shadow-lg ring-offset-2 ring-offset-base-100">
          <HeaderTitle
            title={t("addFolderBtn")}
            style="bg-primary text-primary-content text-xl md:text-2xl p-2 text-center rounded-b-full w-full"
          />
          <div className="flex flex-col gap-4 md:gap-8 justify-center items-center p-4 w-full">
            <Input
              type="text"
              name="folderName"
              value={values.folderName}
              onChangeHandler={handleChange}
              placeholder={t("folderNameInput")}
              setFieldTouched={setFieldTouched}
            />
            <div className="flex justify-center items-center flex-wrap w-full gap-4">
              <Button
                style="btn-success grow basis-full md:basis-1/3"
                text={t("submitBtn")}
                type="submit"
                isOutlineBtn
              />
              <Button
                style="btn-error grow basis-full md:basis-1/3"
                onClickHandler={() =>
                  setModalDetails({ ...ModalDetails, isShown: false })
                }
                text={t("cancelBtn")}
                type="button"
                isOutlineBtn
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default memo(AddFolderModalForm);
