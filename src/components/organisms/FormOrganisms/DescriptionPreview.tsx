import TodoStickyWall from "@m/TodoStickyWall";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function DescriptionPreview({ values }: any) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-2 rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
      <p>{t("formPreviewTitle")} :</p>
      <TodoStickyWall
        subject={values.todoSubject}
        style={`cursor-auto ${values.todoLabel}`}
        description={values.todoDescription}
      />
    </div>
  );
}

export default memo(DescriptionPreview);
