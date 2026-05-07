import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      {show && (
        <button
          className="btn btn-primary rounded-circle"
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollTop;