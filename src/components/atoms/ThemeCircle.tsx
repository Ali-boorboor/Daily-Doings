import {
  themeCircleHandlerPropsType,
  themeCirclePropsType,
} from "@type/atomsTypes";
import { theme } from "@st/globalStates";
import { useRecoilState } from "recoil";
import { memo } from "react";

function ThemeCircle({ themeName, bgc1, bgc2, title }: themeCirclePropsType) {
  const [, setTheme] = useRecoilState(theme);

  const themeChangeHandler = ({ themeName }: themeCircleHandlerPropsType) => {
    localStorage.setItem("theme", themeName);
    setTheme(themeName);
  };

  return (
    <div className="tooltip" data-tip={title}>
      <span
        className={`relative cursor-pointer ring ring-transparent ring-offset-2 ring-offset-base-content w-4 h-4 inline-block rounded-full ${bgc1} after:w-full after:h-full ${bgc2} after:absolute after:inset-0 after:rotate-45 after:-translate-y-[0.36rem] after:-translate-x-[0.36rem] overflow-hidden`}
        onClick={() => themeChangeHandler({ themeName })}
      ></span>
    </div>
  );
}

export default memo(ThemeCircle);
