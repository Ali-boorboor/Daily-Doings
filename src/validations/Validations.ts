import * as Yup from "yup";
import {
  email,
  password,
  submitPassword,
  username,
} from "@/utils/globalValidations";

const loginValidation = (t: (key: string) => string) => {
  return Yup.object().shape({
    identifier: Yup.string()
      .matches(/^(([^@\s]+)@([\w-]+\.)+[\w-]{2,5})|^[a-zA-Z0-9_.]{1,20}$/)
      .required(),
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
    username: username(t),
    email: email(t),
  });
};

export { loginValidation, signupValidation, forgotPassValidation };
