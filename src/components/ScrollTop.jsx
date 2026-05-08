import { useEffect, useState } from "react";

import {
  ArrowUp,
  MessageCircle,
} from "lucide-react";

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

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/8610499770"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <MessageCircle size={28} />
      </a>

      {/* Scroll To Top */}
      {show && (

        <button
          className="scroll-top-btn"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <ArrowUp size={24} />
        </button>

      )}

    </>
  );
};

export default ScrollTop;