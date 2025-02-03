type loginOnSubmitValues = {
  username: string;
  password: string;
};

type forgotPassOnSubmitValues = {
  username: string;
  email: string;
};

type signupOnSubmitValues = {
  username: string;
  email: string;
  cover: any;
  password: string;
  submitPassword: string;
};

export type {
  loginOnSubmitValues,
  forgotPassOnSubmitValues,
  signupOnSubmitValues,
};
