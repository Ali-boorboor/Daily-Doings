type authPageHeadingPropsType = {
  text: string;
  name?: string;
};

type searchInputPropsType = {
  style: string;
};

type themePalettePropsType = {
  style: string;
};

type sidebarLinksPropsType = {
  icon: JSX.Element;
  title: string;
  href: string;
};

type stickyWallPropsType = {
  subject: string;
  description?: string;
  bgTextColors: string;
  isList?: boolean;
  listItems?: stickyWallListItemsType[];
};

type stickyWallListItemsType = {
  title: string;
};

export type {
  authPageHeadingPropsType,
  searchInputPropsType,
  themePalettePropsType,
  sidebarLinksPropsType,
  stickyWallPropsType,
  stickyWallListItemsType,
};
