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
  hasNoOnClickModal?: boolean;
  todoID?: string;
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

type paginationPropsType = { style?: string; data: any };

type EditModalPropsType = {
  hasRemoveModal?: boolean;
  todoID?: string;
};

type PieChartPropsType = {
  data: {
    allTodosCount: number;
    doneTodos: {
      doneTodosCount: number;
      doneTodosPercent: number;
    };
    notDoneTodos: {
      notDoneTodosCount: number;
      notDoneTodosPercent: number;
    };
    awaitTodos: {
      awaitTodosCount: number;
      awaitTodosPercent: number;
    };
    inProgressTodos: {
      inProgressTodosCount: number;
      inProgressTodosPercent: number;
    };
  };
};

type BarChartPropsType = {
  foldersOverview: [
    {
      name: string;
      doneTodos: number;
    }
  ];
};

type RemoveModalPropsType = {
  url: string;
  navigateTo?: string;
  refetchQueryKey?: string;
  refetchQueries?: string[];
};

type FolderBoxProps = {
  folderName: string;
  folderID: string;
  index: number;
};

type EditFolderModalProps = {
  folderName: string;
  folderID: string;
};

type EditModalInputsPropsFormValues = {
  todoSubject: string;
  todoFolder: string;
  todoStatus: string;
  todoPriority: string;
  todoLabel: string;
  todoItem?: string;
  todoDescription?: string;
  isListTodo: boolean;
};

type EditModalInputsProps = {
  values: EditModalInputsPropsFormValues;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  setFieldTouched: (field: string) => void;
};

type AddTodayTodoFormValues = {
  addTodoInput: string;
  addTodoPriorityInput: string;
};

type AddTodayTodoFormProps = {
  onSubmitHandler: (values: AddTodayTodoFormValues, { resetForm }: any) => void;
};

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
  EditModalPropsType,
  PieChartPropsType,
  BarChartPropsType,
  RemoveModalPropsType,
  FolderBoxProps,
  EditFolderModalProps,
  EditModalInputsProps,
  AddTodayTodoFormProps,
};
