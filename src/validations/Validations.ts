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

export {
  loginValidation,
  signupValidation,
  forgotPassValidation,
  changeCoverValidation,
};
