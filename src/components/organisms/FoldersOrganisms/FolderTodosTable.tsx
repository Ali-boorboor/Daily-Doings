import Badge from "@a/Badge";
import i18next from "i18next";
import Button from "@a/Button";
import NoDataAlert from "@m/NoDataAlert";
import useGetReq from "@/hooks/useGetReq";
import TableWrapper from "@m/TableWrapper";
import EditModal from "@m/ModalsMolecules/EditModal";
import RemoveModal from "@m/ModalsMolecules/RemoveModal";
import { modalDetails } from "@st/globalStates";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { memo } from "react";

function FolderTodosTable() {
  const { folderID } = useParams();
  const [, setModalDetails] = useRecoilState(modalDetails);
  const { t } = useTranslation();
  const { language } = i18next;
  const { data } = useGetReq({
    queryKey: ["ALL-FOLDERS", `FOLDER-${folderID}`],
    url: `/folder/${folderID}`,
    cacheTime: 86400000,
    staleTime: 86400000,
  });

  if (data?.status !== 204) {
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
              {data?.data?.result?.map((todo: any, index: number) => {
                return (
                  <tr
                    key={++index}
                    className="border border-base-content drop-shadow-lg"
                  >
                    <th>{++index}</th>
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
                      {todo?.folder?.name}
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
                            elements: <EditModal />,
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
                                  `FOLDER-${folderID}`,
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

export default memo(FolderTodosTable);
