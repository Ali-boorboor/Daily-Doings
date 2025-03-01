import {
  loginOnSubmitValues,
  signupOnSubmitValues,
  forgotPassOnSubmitValues,
} from "@type/templatesTypes";
import { FormikHelpers } from "formik";

type loginFormPropsType = {
  initialValues: loginOnSubmitValues;
  onSubmitHandler: ((
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>) &
    ((
      values: any,
      formikHelpers: FormikHelpers<any>
    ) => void | (Promise<any> & (() => void)));
};

type signupFormPropsType = {
  initialValues: signupOnSubmitValues;
  onSubmitHandler: ((
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>) &
    ((
      values: any,
      formikHelpers: FormikHelpers<any>
    ) => void | (Promise<any> & (() => void)));
};

type forgotPasswordFormPropsType = {
  initialValues: forgotPassOnSubmitValues;
  onSubmitHandler: ((
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>) &
    ((
      values: any,
      formikHelpers: FormikHelpers<any>
    ) => void | (Promise<any> & (() => void)));
};

type changeCoverFormOnSubmitValues = {
  cover: any;
  password: string;
};

type ChangeUsernameFormOnSubmitValues = {
  newUsername: string;
  password: string;
};

type ChangePasswordFormOnSubmitValues = {
  currentPassword: string;
  newPassword: string;
  submitPassword: string;
};

export type {
  loginFormPropsType,
  signupFormPropsType,
  forgotPasswordFormPropsType,
  changeCoverFormOnSubmitValues,
  ChangeUsernameFormOnSubmitValues,
  ChangePasswordFormOnSubmitValues,
};
