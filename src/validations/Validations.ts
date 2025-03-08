import * as Yup from "yup";
import {
  email,
  identifier,
  password,
  submitPassword,
  username,
} from "@/utils/globalValidations";

const loginValidation = (t: (key: string) => string) => {
  return Yup.object().shape({
    identifier: identifier(t),
    password: password(t),
  });
};

const signupValidation = (t: (key: string) => string) => {
  return Yup.object().shape({
    username: username(t),
    password: password(t),
    submitPassword: submitPassword(t),
    email: email(t),
    agreeToTerms: Yup.boolean().oneOf([true], t("agreeToTermsValidation")),
  });
};

const forgotPassValidation = (t: (key: string) => string) => {
  return Yup.object().shape({
    identifier: identifier(t),
  });
};

const changeCoverValidation = (t: (key: string) => string) => {
  return Yup.object().shape({
    cover: Yup.mixed().required(),
    password: password(t),
  });
};

const changePasswordValidation = (t: (key: string) => string) => {
  return Yup.object().shape({
    currentPassword: password(t),
    newPassword: password(t),
    submitPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], t("submitPasswordRefValidation"))
      .required(t("submitPasswordRequiredValidation")),
  });
};

const changeUsernameValidation = (t: (key: string) => string) => {
  return Yup.object().shape({
    newUsername: username(t),
    password: password(t),
  });
};

const todayTodoFormValidation = (t: (key: string) => string) => {
  return Yup.object().shape({
    addTodoInput: Yup.string().required(),
  });
};

export {
  loginValidation,
  signupValidation,
  forgotPassValidation,
  changeCoverValidation,
  changePasswordValidation,
  changeUsernameValidation,
  todayTodoFormValidation,
};
