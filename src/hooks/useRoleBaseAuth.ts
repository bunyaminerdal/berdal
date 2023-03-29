import { UserRoleMap } from "@src/types/user-types";

const useRoleBaseAuth = (role: UserRoleMap, userRoles?: UserRoleMap[]) => {
  if (!userRoles || !role) return { isHaveAccessRight: false };
  return { isHaveAccessRight: userRoles.includes(role) };
};
export default useRoleBaseAuth;
