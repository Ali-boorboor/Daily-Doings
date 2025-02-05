import Input from "@a/Input";
import { searchInputPropsType } from "@type/moleculesTypes";
import { IoSearchOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Form, Formik } from "formik";

function SearchInput({ style }: searchInputPropsType) {
  const { t } = useTranslation();

  return (
    <Formik initialValues={{ search: "" }} onSubmit={() => {}}>
      {({ values, handleChange, setFieldTouched }) => (
        <Form className="tooltip tooltip-bottom" data-tip="Search">
          <Input
            name="search"
            value={values.search}
            onChangeHandler={handleChange}
            setFieldTouched={setFieldTouched}
            icon={<IoSearchOutline className="cursor-pointer" />}
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
