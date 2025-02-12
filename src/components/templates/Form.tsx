import HeaderTitle from "@a/HeaderTitle";
import docTitle from "@/utils/documentTitle";
import FormsFrom from "@o/FormOrganisms/FormsFrom";
import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";

function Form() {
  const { t } = useTranslation();

  useEffect(() => {
    docTitle("Form Page");
  }, []);

  return (
    <div className="max-w-screen-2xl m-auto badge-ghost rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
      <HeaderTitle
        style="text-xl font-bold p-2 text-center bg-primary text-primary-content rounded-b-full drop-shadow-lg"
        title={t("formTitle")}
      />
      <FormsFrom />
    </div>
  );
}

export default memo(Form);
