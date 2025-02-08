import { To } from "react-router";

type buttonPropsType = {
  text: string;
  style?: string;
  isLink?: boolean;
  linkTo?: To | any;
  onClickHandler?: any;
  isOutlineBtn?: boolean;
  type?: "button" | "submit";
};

type inputPropsType = {
  value?: any;
  name: string;
  disabled?: boolean;
  isSearch?: boolean;
  maxLength?: number;
  icon?: JSX.Element;
  styleLabel?: string;
  styleInput?: string;
  isCheckBox?: boolean;
  isUploader?: boolean;
  isTextArea?: boolean;
  placeholder?: string;
  isSelectBox?: boolean;
  options?: JSX.Element;
  setFieldValue?: any;
  onChangeHandler?: any;
  setFieldTouched?: any;
  isDefaultChecked?: boolean;
  defaultOptionText?: string;
  onKeyDownHandler?: any;
  type?: "text" | "password" | "email" | "tel";
};

type dividerPropsType = {
  text?: string;
  style?: string;
};

type mainLogoPropsType = {
  style: string;
  linkTo?: To | any;
};

type themeCircleHandlerPropsType = { themeName: string };

type themeCirclePropsType = {
  themeName?: string;
  bgc1: string;
  bgc2?: string;
  title?: string;
};

type circleProgressPropsType = {
  text?: string;
  value: number;
  style: string;
  size?: string;
};

type headerTitlePropsType = {
  title: string;
  style: string;
};

export type {
  buttonPropsType,
  inputPropsType,
  dividerPropsType,
  mainLogoPropsType,
  themeCircleHandlerPropsType,
  themeCirclePropsType,
  circleProgressPropsType,
  headerTitlePropsType,
};
