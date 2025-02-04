import Input from "@a/Input";
import { searchInputPropsType } from "@type/moleculesTypes";
import { IoSearchOutline } from "react-icons/io5";
import { memo } from "react";

function SearchInput({ style }: searchInputPropsType) {
  return (
    <div className="tooltip tooltip-bottom" data-tip="Search">
      <Input
        name=""
        value=""
        onChangeHandler={() => {}}
        onKeyDownHandler={() => {}}
        icon={<IoSearchOutline className="cursor-pointer" />}
        styleInput={style}
        styleLabel={`${style} input-secondary`}
        placeholder="Search"
        type="text"
        isSearch
      />
    </div>
  );
}

export default memo(SearchInput);
