import React from "react";
import "./Footer.css";
import { appEmail } from "../../../../config/constants/appConstants";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          جميع الحقوق محفوظة © 2025 وزارة الداخلية - عمالة السمارة
        </p>
        <p className="footer-text">
          للتواصل: <a href={`mailto:${appEmail}`}>{appEmail}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
