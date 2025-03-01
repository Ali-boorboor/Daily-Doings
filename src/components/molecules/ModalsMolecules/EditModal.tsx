import Button from "@a/Button";
import HeaderTitle from "@a/HeaderTitle";
import RemoveModal from "@m/ModalsMolecules/RemoveModal";
import EditModalInputs from "@m/ModalsMolecules/EditModalInputs";
import { EditModalPropsType } from "@type/moleculesTypes";
import { modalDetails } from "@st/globalStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { Form, Formik } from "formik";
import { memo } from "react";

function EditModal({ hasRemoveModal }: EditModalPropsType) {
  const [ModalDetails, setModalDetails] = useRecoilState(modalDetails);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <HeaderTitle
        title={t("editTodosTitle")}
        style="badge-primary rounded-lg text-xl md:text-2xl p-2 w-full text-center ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg"
      />
      <Formik
        initialValues={{
          todoSubject: "",
          todoFolder: 0,
          todoPriority: 1,
          isListTodo: false,
          todoDescription: "",
          todoLabel: "badge-primary",
        }}
        onSubmit={(values) => console.log(values)}
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
                type="button"
                style="btn-success w-1/3 grow ring ring-success ring-offset-2 ring-offset-base-100 drop-shadow-lg"
                text={t("submitBtn")}
                onClickHandler={() => {
                  setModalDetails({ ...ModalDetails, isShown: false });
                }}
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
                  setModalDetails({ elements: <RemoveModal />, isShown: true });
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
