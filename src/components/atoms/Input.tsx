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
  styleInput,
  styleLabel,
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
  const [file, setFile]: any = useState(null);

  if (isUploader) {
    return (
      <div className="flex justify-start items-start gap-4">
        <label
          className={`form-control w-full ${
            file ? "max-w-full w-4/5" : "max-w-full"
          } ${styleLabel}`}
        >
          <input
            type="file"
            name={name}
            value={value}
            disabled={disabled}
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e: any) => {
              setFile(URL.createObjectURL(e.target.files[0]));
              setFieldValue(e);
            }}
            className={`file-input file-input-bordered w-full  ${styleInput}`}
          />
          <div className="label">
            <span className="label-text">{placeholder}</span>
          </div>
        </label>
        {file && (
          <img
            src={file}
            alt="uploaded-file"
            className="w-1/5 h-20 object-cover rounded-md"
          />
        )}
      </div>
    );
  } else if (isSelectBox) {
    return (
      <select
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChangeHandler}
        className={`select select-bordered w-full max-w-xs ${styleInput}`}
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
        className={`textarea textarea-bordered ${styleInput}`}
      ></textarea>
    );
  } else if (isCheckBox) {
    return (
      <div className="form-control items-start">
        <label className={`label cursor-pointer ${styleLabel}`}>
          <input
            name={name}
            value={value}
            type="checkbox"
            disabled={disabled}
            onChange={onChangeHandler}
            className={`checkbox ${styleInput}`}
            defaultChecked={isDefaultChecked}
          />
          <span className="label-text">{placeholder}</span>
        </label>
      </div>
    );
  } else if (type === "password") {
    return (
      <label
        htmlFor={name}
        className={`input input-bordered flex items-center gap-2 ${styleLabel}`}
      >
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
        <input
          name={name}
          type={isPasswordShown ? "text" : "password"}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChangeHandler}
          className={`grow ${styleInput}`}
          onKeyDown={() => setFieldTouched(name)}
        />
      </label>
    );
  }
  return (
    <label
      htmlFor={name}
      className={`input input-bordered flex items-center gap-2 ${styleLabel}`}
    >
      {isSearch || icon}
      <input
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChangeHandler}
        className={`grow ${styleInput}`}
        onKeyDown={() => setFieldTouched(name)}
      />
      {isSearch && icon}
    </label>
  );
}

export default memo(Input);
