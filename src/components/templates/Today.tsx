import NoDataAlert from "@m/NoDataAlert";
import HeaderTitle from "@a/HeaderTitle";
import useGetReq from "@/hooks/useGetReq";
import usePutReq from "@/hooks/usePutReq";
import usePostReq from "@/hooks/usePostReq";
import docTitle from "@/utils/documentTitle";
import AddTodayTodoForm from "@m/TodayMolecules/AddTodayTodoForm";
import TodayTodosContainer from "@o/TodayOrganisms/TodayTodosContainer";
import TodayTodoPriorityGuide from "@m/TodayMolecules/TodayTodoPriorityGuide";
import { TodayOnSubmitValues } from "@type/templatesTypes";
import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";

function Today() {
  const { t } = useTranslation();
  const { data } = useGetReq({
    queryKey: "ALL-TODAY-TODOS",
    url: "/today-todo",
    cacheTime: 86400000,
    staleTime: 86400000,
  });
  const { mutate: postReq } = usePostReq({
    successTitle: t("successAddTodoFormToast"),
    errorTitle: t("errorAddTodoFormToast"),
    refetchQueryKey: "ALL-TODAY-TODOS",
    url: "/today-todo",
  });
  const { mutate: putCheckedTodosReq } = usePutReq({
    successTitle: t("successCheckedTodoToast"),
    errorTitle: t("errorCheckedTodoToast"),
    refetchQueryKey: "ALL-TODAY-TODOS",
    url: "/today-todo/check",
  });

  useEffect(() => {
    docTitle("Today Page");
  }, []);

  return (
    <div className="max-w-screen-2xl m-auto">
      <div className="badge-ghost rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
        <HeaderTitle
          title={t("todayTodosTitle")}
          style="bg-primary text-primary-content text-xl md:text-2xl text-center p-2 rounded-b-full"
        />
        <AddTodayTodoForm
          onSubmitHandler={(
            values: TodayOnSubmitValues,
            { resetForm }: any
          ) => {
            postReq({
              reqOptions: {
                subject: values.addTodoInput,
                priority: values.addTodoPriorityInput,
              },
            });
            resetForm();
          }}
        />
        <TodayTodoPriorityGuide />
        {data?.status === 204 ? (
          <NoDataAlert />
        ) : (
          <TodayTodosContainer
            data={data?.data}
            onSubmitHandler={(values: any, { resetForm }: any) => {
              putCheckedTodosReq({
                reqOptions: { checked: values?.checkedTodos },
              });
              resetForm();
            }}
          />
        )}
      </div>
    </div>
  );
}

export default memo(Today);
