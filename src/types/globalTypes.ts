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

export type { modalDetailsStateType, toastDetailsStateType };
