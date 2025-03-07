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

type FormsFromOnSubmitValues = {
  todoSubject: string;
  todoFolder: string;
  todoPriority: string;
  isListTodo: boolean;
  todoDescription: string;
  todoLabel: string;
};

type RecentTableTodos = {
  _id: string;
  subject: string;
  priority: {
    _id: string;
    priority: string;
  };
  status: {
    _id: string;
    status: string;
  };
  folder?: {
    _id: string;
    name: string;
  };
  labelColor: string;
  isListTodo: number;
  description?: string;
  listItems: string[];
  createdAt: Date;
  updatedAt: Date;
};

type getAllTodosResType = {
  data: {
    data: {
      todos: [
        {
          _id: string;
          subject: string;
          priority: {
            _id: string;
            priority: string;
          };
          status: {
            _id: string;
            status: string;
          };
          folder: {
            _id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          labelColor: string;
          isListTodo: number;
          description: string;
          listItems: string[];
          createdAt: string;
          updatedAt: string;
        }
      ];
    };
    status: number;
  };
};

type getAllTodayTodosResType = {
  data: {
    todayTodos: [
      {
        _id: string;
        subject: string;
        priority: {
          _id: string;
          priority: string;
        };
        status: {
          _id: string;
          status: string;
        };
        createdAt: Date;
        updatedAt: Date;
      }
    ];
  };
  onSubmitHandler: any;
};

type getAllFoldersResType = {
  data: {
    data: {
      folders: [
        {
          _id: string;
          name: string;
          createdAt: Date;
          updatedAt: Date;
        }
      ];
    };
  };
};

export type {
  loginFormPropsType,
  signupFormPropsType,
  forgotPasswordFormPropsType,
  changeCoverFormOnSubmitValues,
  ChangeUsernameFormOnSubmitValues,
  ChangePasswordFormOnSubmitValues,
  FormsFromOnSubmitValues,
  RecentTableTodos,
  getAllTodosResType,
  getAllTodayTodosResType,
  getAllFoldersResType,
};
