import { useState, useCallback } from "react";

interface useSideBarShowHideHooksTypes {
  isShow: boolean;
  callback: (value: boolean) => void;
}

export const useSideBarShowHideHooks = (): useSideBarShowHideHooksTypes => {
  const [isShow, setIsShow] = useState(true);
  const callback = useCallback((value: boolean) => {
    setIsShow((): boolean => value);
  }, []);

  return {
    callback,
    isShow,
  };
};
