import Input from "@a/Input";
import { searchInputPropsType } from "@type/moleculesTypes";
import { IoSearchOutline } from "react-icons/io5";
import { toastDetails } from "@st/globalStates";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Form, Formik } from "formik";
import { memo } from "react";

function SearchInput({ style }: searchInputPropsType) {
  const [, setToastDetails] = useRecoilState(toastDetails);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const initialValues = { search: "" };

  const onSubmitHandler: any = (
    values: { search: string },
    { resetForm }: any
  ) => {
    if (values.search) {
      navigate(`/search?subject=${values.search}`);
      resetForm();
    } else {
      setToastDetails({
        title: t("searchWarningToast"),
        ringState: "ring-warning",
        toastState: "alert-warning",
        isShown: true,
      });
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
      {({ values, handleChange, setFieldTouched }) => (
        <Form
          className="tooltip tooltip-bottom w-full"
          data-tip={t("searchInput")}
        >
          <Input
            name="search"
            value={values.search}
            onChangeHandler={handleChange}
            setFieldTouched={setFieldTouched}
            icon={
              <button type="submit">
                <IoSearchOutline className="hidden lg:inline-block cursor-pointer" />
              </button>
            }
            styleInput={style}
            styleLabel={`${style} input-secondary`}
            placeholder={t("searchInput")}
            type="text"
            isSearch
          />
        </Form>
      )}
    </Formik>
  );
}

export default memo(SearchInput);
