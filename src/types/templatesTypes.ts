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
  agreeToTerms: boolean;
};

export type {
  loginOnSubmitValues,
  forgotPassOnSubmitValues,
  signupOnSubmitValues,
};
