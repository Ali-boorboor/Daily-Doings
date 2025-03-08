import { To } from "react-router-dom";

type buttonPropsType = {
  text: string | JSX.Element;
  style?: string;
  isLink?: boolean;
  disabled?: boolean;
  linkTo?: To | any;
  onClickHandler?: any;
  isOutlineBtn?: boolean;
  type?: "button" | "submit";
};

type inputPropsType = {
  value?: any;
  ref?: any;
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
  isCheckBoxCenter?: boolean;
  isDefaultChecked?: boolean;
  onKeyDownHandler?: any;
  hasNoError?: boolean;
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

type alertPropsType = {
  text: string | JSX.Element;
  alertStatus: "alert-success" | "alert-error" | "alert-warning" | "alert-info";
};

type badgePropsType = {
  text: string | JSX.Element;
  badgeStatus: "badge-success" | "badge-error" | "badge-warning" | "badge-info";
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
  alertPropsType,
  badgePropsType,
};
