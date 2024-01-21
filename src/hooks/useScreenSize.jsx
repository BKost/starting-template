import { useEffect, useState } from "react";

function useScreenSize() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [screenHeight, setScreenHeight] = useState(window.screen.height);

  function handleResize() {
    setScreenWidth(window.screen.width);
    setScreenHeight(window.screen.height);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenHeight, screenWidth };
}
export default useScreenSize;
