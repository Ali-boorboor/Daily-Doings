import { FaEye, FaEyeSlash } from "react-icons/fa";
import { inputPropsType } from "@type/atomsTypes";
import { memo, useState } from "react";

function Input({
  icon,
  type,
  name,
  value,
  options,
  disabled,
  isSearch,
  isCheckBox,
  isUploader,
  isTextArea,
  placeholder,
  isSelectBox,
  setFieldValue,
  onChangeHandler,
  setFieldTouched,
  isDefaultChecked,
  defaultOptionText,
}: inputPropsType) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  if (isUploader) {
    return (
      <input
        type="file"
        name={name}
        value={value}
        disabled={disabled}
        onChange={setFieldValue}
        className="file-input file-input-bordered file-input-primary w-full max-w-xs"
      />
    );
  } else if (isSelectBox) {
    return (
      <select
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChangeHandler}
        className="select select-bordered w-full max-w-xs"
      >
        <option disabled selected>
          {defaultOptionText}
        </option>
        {options}
      </select>
    );
  } else if (isTextArea) {
    return (
      <textarea
        name={name}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChangeHandler}
        onKeyDown={() => setFieldTouched(name)}
        className="textarea textarea-bordered"
      ></textarea>
    );
  } else if (isCheckBox) {
    return (
      <div className="form-control">
        <label htmlFor={name} className="label cursor-pointer">
          <span className="label-text">{placeholder}</span>
          <input
            name={name}
            value={value}
            type="checkbox"
            disabled={disabled}
            className="checkbox"
            onChange={onChangeHandler}
            defaultChecked={isDefaultChecked}
          />
        </label>
      </div>
    );
  } else if (type === "password") {
    return (
      <label
        htmlFor={name}
        className="input input-bordered flex items-center gap-2"
      >
        {isSearch || icon}
        <input
          name={name}
          type={isPasswordShown ? "text" : "password"}
          value={value}
          className="grow"
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChangeHandler}
          onKeyDown={() => setFieldTouched(name)}
        />
        {isPasswordShown ? (
          <FaEyeSlash
            className="cursor-pointer"
            onClick={() => setIsPasswordShown(false)}
          />
        ) : (
          <FaEye
            className="cursor-pointer"
            onClick={() => setIsPasswordShown(true)}
          />
        )}
      </label>
    );
  }
  return (
    <label
      htmlFor={name}
      className="input input-bordered flex items-center gap-2"
    >
      {isSearch || icon}
      <input
        name={name}
        type={type}
        value={value}
        className="grow"
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChangeHandler}
        onKeyDown={() => setFieldTouched(name)}
      />
      {isSearch && icon}
    </label>
  );
}

export default memo(Input);
