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

export type {
  loginFormPropsType,
  signupFormPropsType,
  forgotPasswordFormPropsType,
};
