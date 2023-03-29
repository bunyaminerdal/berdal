import { NextComponentType, NextPageContext } from "next";
import { ReactElement } from "react";
import { UserRoleMap } from "./user-types";

export type PageAuthType = {
  role: UserRoleMap;
  needAuth: boolean;
  unAuthorizedUrl: string;
  loading: ReactElement;
};
/**
 * Authentication configuration
 */
export interface AuthEnabledComponentConfig {
  auth: PageAuthType;
}

/**
 * A component with authentication configuration
 */
export type ComponentWithAuth<PropsType = any> = React.FC<PropsType> &
  AuthEnabledComponentConfig;
