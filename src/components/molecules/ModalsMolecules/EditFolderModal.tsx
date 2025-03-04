import Input from "@a/Input";
import Button from "@a/Button";
import usePutReq from "@/hooks/usePutReq";
import HeaderTitle from "@a/HeaderTitle";
import { modalDetails } from "@st/globalStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { Form, Formik } from "formik";
import { memo } from "react";

function EditFolderModal({ folderID }: any) {
  const [ModalDetails, setModalDetails] = useRecoilState(modalDetails);
  const { t } = useTranslation();
  const { mutate: putReq } = usePutReq({
    successTitle: t("successEditFolderToast"),
    errorTitle: t("errorEditFolderToast"),
    refetchQueryKey: "ALL-FOLDERS",
    hasParams: true,
  });

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <HeaderTitle
        title={t("editFolderTitle")}
        style="badge-primary rounded-lg text-xl md:text-2xl p-2 w-full text-center ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg"
      />
      <Formik
        initialValues={{
          folderName: "",
        }}
        onSubmit={(values) => {
          putReq({
            urlString: `/folder/${folderID}`,
            reqOptions: { name: values?.folderName },
          });
          setModalDetails({ ...ModalDetails, isShown: false });
        }}
      >
        {({ values, handleChange, setFieldTouched }) => (
          <Form className="flex flex-col gap-4 w-full">
            <div className="flex lg:flex-nowrap flex-wrap gap-4 items-center justify-center">
              <p className="basis-1/2 grow">{t("folderNameInput")} :</p>
              <Input
                name="folderName"
                value={values.folderName}
                onChangeHandler={handleChange}
                setFieldTouched={setFieldTouched}
                styleLabel="input-primary grow"
                placeholder={t("folderNameInput")}
                maxLength={10}
                type="text"
                hasNoError
              />
            </div>
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
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default memo(EditFolderModal);
