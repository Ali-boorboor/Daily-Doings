import ThemeCircle from "@a/ThemeCircle";
import { themePalettePropsType } from "@type/moleculesTypes";
import { memo } from "react";

function ThemePalette({ style }: themePalettePropsType) {
  return (
    <div
      className={`flex flex-col justify-center items-start gap-2 mb-2 ${style}`}
    >
      <p className="">Theme</p>
      <div className="flex justify-center md:justify-between items-center gap-2 md:gap-1 w-full px-4 flex-wrap">
        <ThemeCircle
          bgc1="bg-[#282a36]"
          bgc2="after:bg-[#de68ac]"
          themeName="dracula"
          title="Dracula"
        />
        <ThemeCircle
          bgc1="bg-white"
          bgc2="after:bg-[#58b177]"
          themeName="emerald"
          title="Emerald"
        />
        <ThemeCircle
          bgc1="bg-[#ece3ca]"
          bgc2="after:bg-[#d08481]"
          themeName="retro"
          title="Retro"
        />
        <ThemeCircle
          bgc1="bg-[#1d232a]"
          bgc2="after:bg-[#646ee4]"
          themeName="dark"
          title="Dark"
        />
        <ThemeCircle
          bgc1="bg-[#eceff4]"
          bgc2="after:bg-[#516f95]"
          themeName="nord"
          title="Nord"
        />
        <ThemeCircle
          bgc1="bg-[#2a303c]"
          bgc2="after:bg-[#8aca7a]"
          themeName="dim"
          title="Dim"
        />
        <ThemeCircle
          bgc1="bg-[#0f172a]"
          bgc2="after:bg-[#38bdf8]"
          themeName="night"
          title="Night"
        />
      </div>
    </div>
  );
}

export default memo(ThemePalette);
