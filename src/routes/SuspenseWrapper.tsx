import Loading from "@a/Loading";
import { memo, PropsWithChildren, Suspense } from "react";

// ! the SuspenseWrapper to use lazy & code splitting
const SuspenseWrapper = memo(({ children }: PropsWithChildren) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
});

export default SuspenseWrapper;
