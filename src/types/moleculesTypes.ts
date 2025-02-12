type authPageHeadingPropsType = {
  text: string;
  name?: string;
};

type searchInputPropsType = {
  style: string;
};

type themePalettePropsType = {
  styleWrapper?: string;
  styleThemesContainer?: string;
};

type sidebarLinksPropsType = {
  icon: JSX.Element;
  title: string;
  href: string;
};

type stickyWallPropsType = {
  subject?: string;
  description?: string;
  style: string;
  isList?: boolean;
  listItems?: stickyWallListItemsType[];
  dataSwapyItem?: string;
  dataSwapySlot?: string;
};

type stickyWallListItemsType = string;

type overviewProgressPropsType = {
  style: string;
  title: string;
  count: number;
  totalCount: number;
  text: string;
  value: number;
};

type tableWrapperPropsType = {
  tbody: JSX.Element;
  thead: JSX.Element;
  headerTitle: string;
  headerLink?: JSX.Element;
  pagination?: JSX.Element;
};

type paginationPropsType = { style?: string };

export type {
  authPageHeadingPropsType,
  searchInputPropsType,
  themePalettePropsType,
  sidebarLinksPropsType,
  stickyWallPropsType,
  stickyWallListItemsType,
  overviewProgressPropsType,
  tableWrapperPropsType,
  paginationPropsType,
};
