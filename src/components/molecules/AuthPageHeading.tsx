import { authPageHeadingPropsType } from "@type/moleculesTypes";
import { memo } from "react";

function AuthPageHeading({ text }: authPageHeadingPropsType) {
  return (
    <>
      <h1 className="font-roboto-bold text-2xl sm:text-3xl md:text-5xl">
        Welcome
      </h1>
      <h2 className="font-roboto-italic text-lg sm:text-xl">{text}</h2>
    </>
  );
}

export default memo(AuthPageHeading);
