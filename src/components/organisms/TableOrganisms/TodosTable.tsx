import Button from "@a/Button";
import Pagination from "@m/Pagination";
import PieChart from "@m/Charts/PieChart";
import TableWrapper from "@m/TableWrapper";
import EditModal from "@m/ModalsMolecules/EditModal";
import RemoveModal from "@m/ModalsMolecules/RemoveModal";
import { modalDetails } from "@st/globalStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { memo } from "react";

function TodosTable() {
  const [, setModalDetails] = useRecoilState(modalDetails);
  const { t } = useTranslation();

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
            <tr className="border border-base-content drop-shadow-lg">
              <th>1</th>
              <td className="border border-base-content drop-shadow-lg">
                Cy Ganderton
              </td>
              <td className="border border-base-content drop-shadow-lg">
                Quality Control Specialist
              </td>
              <td className="border border-base-content drop-shadow-lg">
                Blue
              </td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/10
              </td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/11
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
                      elements: <RemoveModal />,
                      isShown: true,
                    });
                  }}
                />
              </td>
            </tr>
            <tr className="border border-base-content drop-shadow-lg">
              <th>2</th>
              <td className="border border-base-content drop-shadow-lg">
                Hart Hagerty
              </td>
              <td className="border border-base-content drop-shadow-lg">
                Desktop Support Technician
              </td>
              <td className="border border-base-content drop-shadow-lg">
                Purple
              </td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/12
              </td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/13
              </td>
            </tr>
            <tr className="border border-base-content drop-shadow-lg">
              <th>3</th>
              <td className="border border-base-content drop-shadow-lg">
                Brice Swyre
              </td>
              <td className="border border-base-content drop-shadow-lg">
                Tax Accountant
              </td>
              <td className="border border-base-content drop-shadow-lg">Red</td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/8
              </td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/8
              </td>
            </tr>
            <tr className="border border-base-content drop-shadow-lg">
              <th>4</th>
              <td className="border border-base-content drop-shadow-lg">
                Brice Swyre
              </td>
              <td className="border border-base-content drop-shadow-lg">
                Tax Accountant
              </td>
              <td className="border border-base-content drop-shadow-lg">Red</td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/8
              </td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/8
              </td>
            </tr>
            <tr className="border border-base-content drop-shadow-lg">
              <th>5</th>
              <td className="border border-base-content drop-shadow-lg">
                Brice Swyre
              </td>
              <td className="border border-base-content drop-shadow-lg">
                Tax Accountant
              </td>
              <td className="border border-base-content drop-shadow-lg">Red</td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/8
              </td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/8
              </td>
            </tr>
            <tr className="border border-base-content drop-shadow-lg">
              <th>6</th>
              <td className="border border-base-content drop-shadow-lg">
                Brice Swyre
              </td>
              <td className="border border-base-content drop-shadow-lg">
                Tax Accountant
              </td>
              <td className="border border-base-content drop-shadow-lg">Red</td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/8
              </td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/8
              </td>
            </tr>
            <tr className="border border-base-content drop-shadow-lg">
              <th>7</th>
              <td className="border border-base-content drop-shadow-lg">
                Brice Swyre
              </td>
              <td className="border border-base-content drop-shadow-lg">
                Tax Accountant
              </td>
              <td className="border border-base-content drop-shadow-lg">Red</td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/8
              </td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/8
              </td>
            </tr>
            <tr className="border border-base-content drop-shadow-lg">
              <th>8</th>
              <td className="border border-base-content drop-shadow-lg">
                Brice Swyre
              </td>
              <td className="border border-base-content drop-shadow-lg">
                Tax Accountant
              </td>
              <td className="border border-base-content drop-shadow-lg">Red</td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/8
              </td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/8
              </td>
            </tr>
            <tr className="border border-base-content drop-shadow-lg">
              <th>9</th>
              <td className="border border-base-content drop-shadow-lg">
                Brice Swyre
              </td>
              <td className="border border-base-content drop-shadow-lg">
                Tax Accountant
              </td>
              <td className="border border-base-content drop-shadow-lg">Red</td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/8
              </td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/8
              </td>
            </tr>
            <tr className="border border-base-content drop-shadow-lg">
              <th>10</th>
              <td className="border border-base-content drop-shadow-lg">
                Brice Swyre
              </td>
              <td className="border border-base-content drop-shadow-lg">
                Tax Accountant
              </td>
              <td className="border border-base-content drop-shadow-lg">Red</td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/8
              </td>
              <td className="border border-base-content drop-shadow-lg">
                2024/02/8
              </td>
            </tr>
          </tbody>
        }
        pagination={<Pagination style="rounded-none" />}
      />
      <PieChart />
    </div>
  );
}

export default memo(TodosTable);
