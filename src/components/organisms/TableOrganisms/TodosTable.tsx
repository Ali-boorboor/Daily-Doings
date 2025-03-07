import Badge from "@a/Badge";
import i18next from "i18next";
import Button from "@a/Button";
import NoDataAlert from "@m/NoDataAlert";
import TableWrapper from "@m/TableWrapper";
import EditModal from "@m/ModalsMolecules/EditModal";
import RemoveModal from "@m/ModalsMolecules/RemoveModal";
import useInfiniteGetTodosReq from "@/hooks/useInfiniteGetTodosReq";
import { modalDetails } from "@st/globalStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function TodosTable() {
  const [, setModalDetails] = useRecoilState(modalDetails);
  const { data, fetchNextPage } = useInfiniteGetTodosReq();
  const { t } = useTranslation();
  const { language } = i18next;

  const scrollendHandler = () => {
    fetchNextPage();
  };

  useEffect(() => {
    window.addEventListener("scrollend", scrollendHandler);

    return () => window.removeEventListener("scrollend", scrollendHandler);
  }, []);

  if (data?.pages[0]?.status !== 204) {
    return (
      <div className="max-w-screen-2xl m-auto flex flex-col gap-4 lg:gap-10">
        <TableWrapper
          headerTitle={t("tableTitle")}
          headerLink={
            <Button
              text={t("dashboardStatusBtn")}
              style="btn-accent drop-shadow-lg"
              linkTo="/form"
              isLink
            />
          }
          thead={
            <thead>
              <tr className="border text-base border-primary-content drop-shadow-lg bg-primary text-primary-content">
                <th className="border border-primary-content drop-shadow-lg">
                  {t("tablesNumberField")}
                </th>
                <th className="border border-primary-content drop-shadow-lg">
                  {t("tablesNameField")}
                </th>
                <th className="border border-primary-content drop-shadow-lg">
                  {t("tablesStatusField")}
                </th>
                <th className="border border-primary-content drop-shadow-lg">
                  {t("tablesFolderField")}
                </th>
                <th className="border border-primary-content drop-shadow-lg">
                  {t("tablesCreatedAtField")}
                </th>
                <th className="border border-primary-content drop-shadow-lg">
                  {t("tablesUpdatedAtField")}
                </th>
                <th className="border border-primary-content drop-shadow-lg">
                  {t("tablesEditField")}
                </th>
                <th className="border border-primary-content drop-shadow-lg">
                  {t("tablesRemoveField")}
                </th>
              </tr>
            </thead>
          }
          tbody={
            <tbody>
              {data?.pages?.map((data: any, pagesIndex: number) => {
                return data?.data?.todos?.map((todo: any, index: number) => {
                  return (
                    <tr
                      key={pagesIndex + ++index}
                      className="border border-base-content drop-shadow-lg"
                    >
                      <th>{`${
                        pagesIndex === 0 ? "" : pagesIndex
                      }${++index}`}</th>
                      <td className="border border-base-content drop-shadow-lg">
                        {todo?.subject}
                      </td>
                      <td className="border border-base-content drop-shadow-lg">
                        {todo?.status?.status === "Done" ? (
                          <Badge
                            text={t("doneStatus")}
                            badgeStatus="badge-success"
                          />
                        ) : todo?.status?.status === "Not Done" ? (
                          <Badge
                            text={t("notDoneStatus")}
                            badgeStatus="badge-error"
                          />
                        ) : todo?.status?.status === "Await" ? (
                          <Badge
                            text={t("awaitStatus")}
                            badgeStatus="badge-warning"
                          />
                        ) : (
                          <Badge
                            text={t("inProgressStatus")}
                            badgeStatus="badge-info"
                          />
                        )}
                      </td>
                      <td className="border border-base-content drop-shadow-lg">
                        {todo?.folder?.name ? (
                          <Button
                            style={`${
                              index % 2 === 0 ? "btn-secondary" : "btn-primary"
                            } grow w-full`}
                            text={todo?.folder?.name}
                            isOutlineBtn
                            linkTo="/folder"
                            isLink
                          />
                        ) : (
                          "- - -"
                        )}
                      </td>
                      <td className="border border-base-content drop-shadow-lg">
                        {language === "fa"
                          ? new Date(todo?.createdAt).toLocaleDateString(
                              "fa-IR-u-nu-latn"
                            )
                          : new Date(todo?.createdAt).toLocaleDateString()}
                      </td>
                      <td className="border border-base-content drop-shadow-lg">
                        {language === "fa"
                          ? new Date(todo?.updatedAt).toLocaleDateString(
                              "fa-IR-u-nu-latn"
                            )
                          : new Date(todo?.updatedAt).toLocaleDateString()}
                      </td>
                      <td className="border border-base-content drop-shadow-lg">
                        <Button
                          type="button"
                          style="btn-info w-full grow ring ring-info ring-offset-2 ring-offset-base-100 drop-shadow-lg"
                          text={t("tablesEditField")}
                          onClickHandler={() => {
                            setModalDetails({
                              elements: <EditModal todoID={todo?._id} />,
                              isShown: true,
                            });
                          }}
                        />
                      </td>
                      <td className="border border-base-content drop-shadow-lg">
                        <Button
                          type="button"
                          style="btn-error w-full grow ring ring-error ring-offset-2 ring-offset-base-100 drop-shadow-lg"
                          text={t("tablesRemoveField")}
                          onClickHandler={() => {
                            setModalDetails({
                              elements: (
                                <RemoveModal
                                  url={`/todo/${todo?._id}`}
                                  refetchQueries={[
                                    "FOLDERS-OVERVIEW",
                                    "TODOS-OVERVIEW",
                                    "RECENT-TODOS",
                                    "ALL-FOLDERS",
                                    "ALL-TODOS",
                                  ]}
                                />
                              ),
                              isShown: true,
                            });
                          }}
                        />
                      </td>
                    </tr>
                  );
                });
              })}
            </tbody>
          }
        />
      </div>
    );
  } else {
    return (
      <div className="max-w-screen-2xl m-auto flex flex-col gap-4 lg:gap-10">
        <NoDataAlert />
      </div>
    );
  }
}

export default memo(TodosTable);
