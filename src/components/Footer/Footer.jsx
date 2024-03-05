import React from "react";
import "./Footer.scss";

const Footer = () => {
  // return <p className="footer">© {new Date().getFullYear()} Мякинин Михаил</p>;
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {new Date().getFullYear()} Мякинин Михаил
      </p>
    </footer>
  );
};

export default Footer;
