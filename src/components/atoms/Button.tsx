import { buttonPropsType } from "@type/atomsTypes";
import { Link } from "react-router-dom";
import { memo } from "react";

function Button({
  text,
  type,
  style,
  linkTo,
  isLink,
  isOutlineBtn,
  onClickHandler,
}: buttonPropsType) {
  if (isLink) {
    return (
      <Link
        className={`btn ${isOutlineBtn && "btn-outline"} ${style}`}
        to={linkTo}
      >
        {text}
      </Link>
    );
  }
  return (
    <button
      className={`btn ${isOutlineBtn && "btn-outline"} ${style}`}
      onClick={onClickHandler}
      type={type}
    >
      {text}
    </button>
  );
}

export default memo(Button);
