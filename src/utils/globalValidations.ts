import * as Yup from "yup";

const username = (t: (key: string) => string) => {
  return Yup.string()
    .matches(/^[a-zA-Z]\S+$/, t("usernameRegexValidation"))
    .min(3, t("usernameMinValidation"))
    .required(t("usernameRequiredValidation"));
};

const password = (t: (key: string) => string) => {
  return Yup.string()
    .matches(/^\S+$/, t("passwordRegexValidation"))
    .min(3, t("passwordMinValidation"))
    .required(t("passwordRequiredValidation"));
};

const submitPassword = (t: (key: string) => string) => {
  return Yup.string()
    .oneOf([Yup.ref("password")], t("submitPasswordRefValidation"))
    .required(t("submitPasswordRequiredValidation"));
};

const email = (t: (key: string) => string) => {
  return Yup.string()
    .matches(/^\S+@\S+\.\S+$/, t("emailRegexValidation"))
    .required(t("emailRequiredValidation"));
};

export { username, password, submitPassword, email };
