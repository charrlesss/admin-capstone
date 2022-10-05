import { useState, useCallback } from "react";
import Cookie from "js-cookie";

interface useSideBarShowHideHooksTypes {
  isShow: boolean;
  callback: () => void;
}

export const useSideBarShowHideHooks = (): useSideBarShowHideHooksTypes => {
  const [isShow, setIsShow] = useState(Cookie.get("sidebar") ? true : false);

  const callback = useCallback(() => {
    setIsShow((isSHowSideBar): boolean => {
      if (isSHowSideBar) {
        Cookie.set("sidebar", "");
        return !isSHowSideBar;
      }
      Cookie.set("sidebar", "open");
      return !isSHowSideBar;
    });
  }, []);

  return {
    callback,
    isShow,
  };
};
