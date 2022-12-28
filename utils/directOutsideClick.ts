import { useState, useEffect } from "react";

export const detectOutside: any = (ref: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [navToggle, setNavToggle] = useState<boolean>(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleClick: any = (event: React.FormEvent<HTMLInputElement>) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setNavToggle(false);
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  });

  return [navToggle, setNavToggle];
};
