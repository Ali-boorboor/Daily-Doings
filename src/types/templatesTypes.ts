type loginOnSubmitValues = {
  identifier: string;
  password: string;
};

type forgotPassOnSubmitValues = {
  identifier: string;
};

type signupOnSubmitValues = {
  username: string;
  email: string;
  cover: any;
  password: string;
  submitPassword: string;
  agreeToTerms: boolean;
};

type TodayOnSubmitValues = {
  addTodoInput: string;
  addTodoPriorityInput: string;
};

export type {
  loginOnSubmitValues,
  forgotPassOnSubmitValues,
  signupOnSubmitValues,
  TodayOnSubmitValues,
};
