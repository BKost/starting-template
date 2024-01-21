import { useEffect, useState } from "react";

function useScrollHeight() {
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);

  function handleScroll() {
    setScrollHeight(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollHeight };
}
export default useScrollHeight;
