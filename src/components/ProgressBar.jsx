import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const progress = () => {
      const scrollTop =
        document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setWidth((scrollTop / height) * 100);
    };

    window.addEventListener("scroll", progress);

    return () =>
      window.removeEventListener(
        "scroll",
        progress
      );
  }, []);

  return (
    <div
      style={{
        width: `${width}%`,
        height: "4px",
        background: "#0d6efd",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    ></div>
  );
};

export default ProgressBar;