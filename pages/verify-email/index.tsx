import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { verifyEmailWithToken } from "@src/services/verify-email";
import { enqueueSnackbar } from "notistack";

const VerifyEmail = () => {
  const {
    query: { token },
    push,
  } = useRouter();
  const verifyToken = token && token.toString();

  const verifyEmail = async (verifyToken: string) => {
    const res = await verifyEmailWithToken(verifyToken);
    if (res.status === 200) {
      enqueueSnackbar(res.data, { variant: "success" });
      push("/login");
    } else {
      enqueueSnackbar(res.data, { variant: "error" });
      push("/");
    }
  };
  useEffect(() => {
    if (!verifyToken) return;
    verifyEmail(verifyToken);
  }, [verifyToken]);

  return <div>Email Verifying...</div>;
};

export default VerifyEmail;
