type modalDetailsStateType = {
  elements: JSX.Element | null;
  isShown: boolean;
};

type toastDetailsStateType = {
  title: String;
  toastState: "alert-success" | "alert-error" | "alert-info" | "alert-warning";
  ringState: "ring-success" | "ring-error" | "ring-info" | "ring-warning";
  isShown: boolean;
};

interface FileInputEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & { files: FileList | null };
}

export type { modalDetailsStateType, toastDetailsStateType, FileInputEvent };
