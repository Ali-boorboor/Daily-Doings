type useReqHooksPropsType = {
  refetchQueryKey?: string;
  successTitle?: string;
  navigateTo?: string;
  errorTitle?: string;
  url: string;
};

type useGetReqHookPropsType = {
  queryKey: string;
  successTitle?: string;
  errorTitle?: string;
  url: string;
  cacheTime?: number;
  staleTime?: number;
  refetchOnWindowFocus?: boolean;
};

export type { useReqHooksPropsType, useGetReqHookPropsType };
