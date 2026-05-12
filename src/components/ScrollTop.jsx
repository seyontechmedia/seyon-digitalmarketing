import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
// Import Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/8610499770"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        style={{
          backgroundColor: "#25D366", // Official WhatsApp Green
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          fontSize: "40px",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
          position: "fixed",
          bottom: "20px",
          marginBottom: "80px",
          right: "20px", // Standard position for WA
          zIndex: 1000
        }}
      >
        <FontAwesomeIcon icon={faWhatsapp} />
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
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000
          }}
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollTop;