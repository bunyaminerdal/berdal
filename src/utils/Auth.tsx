import { useSpinner } from "@components/SpinnerProvider";
import { PageAuthType } from "@src/types/auth.utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect } from "react";

const Auth = ({
  children,
  auth,
}: { auth?: PageAuthType } & PropsWithChildren) => {
  const { push } = useRouter();
  const { data, status } = useSession();
  const setSpin = useSpinner();
  useEffect(() => {
    setSpin && setSpin(status === "loading");
    return () => {
      setSpin && setSpin(false);
    };
  }, [status, setSpin]);

  if (!auth) return <>{children}</>;
  if (!auth.needAuth) return <>{children}</>;
  if (status === "loading") return <>{auth.loading}</>;
  if (status === "unauthenticated") push(auth.unAuthorizedUrl);
  if (!data) return <>{auth.loading}</>;
  if (data.user?.role.includes(auth.role)) return <>{children}</>;
  else push(auth.unAuthorizedUrl);
  return <div></div>;
};

export default Auth;
