import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    try {
      if (!ref.current.contains(e.target)) {
        callback();
      }
    } catch (error) {
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
