import UnderConstruction from "@components/UnderConstruction";
import { UserRoleMap } from "@src/types/user-types";
import React from "react";

const Admin = () => {
  return <UnderConstruction />;
};
Admin.auth = {
  role: UserRoleMap.ADMIN,
  needAuth: true,
  unAuthorizedUrl: "/",
  loading: <div>Loading...</div>,
};
export default Admin;
