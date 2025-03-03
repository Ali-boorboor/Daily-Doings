type useReqHooksPropsType = {
  refetchQueries?: string[];
  refetchQueryKey?: string;
  successTitle?: string;
  navigateTo?: string;
  errorTitle?: string;
  hasParams?: boolean;
  url?: string;
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
