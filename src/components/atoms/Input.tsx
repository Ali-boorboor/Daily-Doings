import { FaEye, FaEyeSlash } from "react-icons/fa";
import { inputPropsType } from "@type/atomsTypes";
import { forwardRef, memo, useEffect, useState } from "react";
import { ErrorMessage } from "formik";

const Input = forwardRef(
  (
    {
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
      maxLength,
      isUploader,
      isTextArea,
      placeholder,
      isSelectBox,
      setFieldValue,
      onChangeHandler,
      hasNoError,
      setFieldTouched,
      isCheckBoxCenter,
      isDefaultChecked,
      onKeyDownHandler,
    }: inputPropsType,
    ref?: any
  ) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [file, setFile] = useState<string | null>(null);

    useEffect(() => {
      if (!ref?.current?.value) {
        setFile(null);
      }
    }, [ref?.current?.value]);

    if (isUploader) {
      return (
        <div className="flex flex-col w-full">
          <div className="flex justify-start items-start gap-4">
            <label
              className={`form-control w-full ${
                file ? "max-w-full w-4/5" : "max-w-full"
              } ${styleLabel}`}
            >
              <input
                ref={ref}
                type="file"
                name={name}
                value={value}
                disabled={disabled}
                accept="image/png, image/jpeg, image/jpg"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const files = e.target.files;
                  if (files && files.length > 0) {
                    setFile(URL.createObjectURL(files[0]));
                  } else {
                    setFile(null);
                  }
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
                className="hidden md:inline-block w-1/5 h-20 object-cover rounded-md"
              />
            )}
          </div>
          <p className={`text-error ${hasNoError && "hidden"}`}>
            <ErrorMessage name={name} />
          </p>
        </div>
      );
    } else if (isSelectBox) {
      return (
        <div className="flex flex-col gap-2 w-full">
          <select
            name={name}
            value={value}
            disabled={disabled}
            onChange={onChangeHandler}
            className={`select select-bordered ${styleInput}`}
          >
            {options}
          </select>
          <p className={`text-error ${hasNoError && "hidden"}`}>
            <ErrorMessage name={name} />
          </p>
        </div>
      );
    } else if (isTextArea) {
      return (
        <div className="flex flex-col gap-2 w-full">
          <textarea
            name={name}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChangeHandler}
            onKeyDown={() => setFieldTouched && setFieldTouched(name)}
            className={`textarea textarea-bordered ${styleInput}`}
            maxLength={maxLength}
          ></textarea>
          <p className={`text-error ${hasNoError && "hidden"}`}>
            <ErrorMessage name={name} />
          </p>
        </div>
      );
    } else if (isCheckBox) {
      return (
        <div className="flex flex-col w-full">
          <div
            className={`form-control ${
              isCheckBoxCenter ? "items-center" : "items-start"
            }`}
          >
            <label className={`label flex gap-2 cursor-pointer ${styleLabel}`}>
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
          <p className={`text-error ${hasNoError && "hidden"}`}>
            <ErrorMessage name={name} />
          </p>
        </div>
      );
    } else if (type === "password") {
      return (
        <div className="flex flex-col gap-2 w-full">
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
              maxLength={maxLength}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                setFieldTouched && setFieldTouched(name);
                onKeyDownHandler && onKeyDownHandler(e);
              }}
            />
          </label>
          <p className={`text-error ${hasNoError && "hidden"}`}>
            <ErrorMessage name={name} />
          </p>
        </div>
      );
    }
    return (
      <div className="flex flex-col gap-2 w-full">
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
            maxLength={maxLength}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              setFieldTouched && setFieldTouched(name);
              onKeyDownHandler && onKeyDownHandler(e);
            }}
          />
          {isSearch && icon}
        </label>
        <p className={`text-error ${hasNoError && "hidden"}`}>
          <ErrorMessage name={name} />
        </p>
      </div>
    );
  }
);

export default memo(Input);
