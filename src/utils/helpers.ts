export enum SideBarItemMap {
  "home" = "home",
  "projects" = "projects",
  "contact" = "contact",
  "admin" = "admin",
}
export const isActiveSideBarButton = (
  pathname: string,
  key: SideBarItemMap
) => {
  if (pathname === "/" && key === SideBarItemMap.home) return true;
  return pathname.includes(key);
};
