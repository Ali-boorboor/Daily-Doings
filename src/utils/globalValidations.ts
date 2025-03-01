import * as Yup from "yup";

const username = (t: (key: string) => string) => {
  return Yup.string()
    .matches(/^[a-zA-Z0-9_.]{1,20}$/, t("usernameRegexValidation"))
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
    .matches(/^(([^@\s]+)@([\w-]+\.)+[\w-]{2,5})$/, t("emailRegexValidation"))
    .required(t("emailRequiredValidation"));
};

const identifier = (t: (key: string) => string) => {
  return Yup.string()
    .matches(/^(([^@\s]+)@([\w-]+\.)+[\w-]{2,5})|^[a-zA-Z0-9_.]{1,20}$/)
    .required();
};

export { username, password, submitPassword, email, identifier };
