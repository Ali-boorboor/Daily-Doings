import { To } from "react-router";

type buttonPropsType = {
  text: string;
  style?: string;
  isLink?: boolean;
  linkTo?: To | any;
  isOutlineBtn?: boolean;
  onClickHandler?: any;
  type?: "button" | "submit";
};

type inputPropsType = {
  type: "text" | "password" | "email" | "tel";
  name: string;
  value: any;
  disabled?: boolean;
  isSearch?: boolean;
  icon?: JSX.Element;
  isCheckBox?: boolean;
  isUploader?: boolean;
  isTextArea?: boolean;
  placeholder: string;
  isSelectBox?: boolean;
  options?: JSX.Element;
  setFieldValue?: any;
  onChangeHandler: any;
  setFieldTouched?: any;
  isDefaultChecked?: boolean;
  defaultOptionText?: string;
};

type dividerPropsType = {
  text?: string;
  style?: string;
};

type mainLogoPropsType = {
  style: string;
  linkTo?: To | any;
};

export type {
  buttonPropsType,
  inputPropsType,
  dividerPropsType,
  mainLogoPropsType,
};
