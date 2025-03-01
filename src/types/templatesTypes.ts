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

export type {
  loginOnSubmitValues,
  forgotPassOnSubmitValues,
  signupOnSubmitValues,
};
