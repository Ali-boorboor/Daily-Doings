import * as Yup from "yup";

const loginValidation = Yup.object().shape({
  username: Yup.string()
    .matches(/^[a-zA-Z]\w+$/)
    .min(3)
    .required(),
  password: Yup.string().matches(/^\w+$/).min(3).required(),
});

export default loginValidation;
