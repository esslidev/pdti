import React from "react";
import logo from "../../../../assets/images/morocco-symbol.png";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left text */}
        <div className="header-left">
          <p>المملكة المغربية</p>
          <p>وزارة الداخلية</p>
          <p>ولاية جهة العيون الساقية الحمراء</p>
          <p>عمالة اقليم السمارة</p>
        </div>

        {/* Centered logo */}
        <div className="header-center">
          <img src={logo} alt="Logo" />
        </div>

        {/* Right text */}
        <div className="header-right">
          <p>ⵜⴰⴳⵍⴷⵉⵜ ⵏ ⵍⵎⵖⵔⵉⴱ</p>
          <p>ⵜⴰⵎⴰⵡⴰⵙⵜ ⵏ ⵓⴳⵏⵙⵓ</p>
          <p>ⵍⵡⵉⵍⴰⵢⴰ ⵏ ⵜⵎⵏⴰⴹⵜ ⵏ ⵍⵄⵢⵓⵏ - ⵙⵙⴰⵇⵢⴰ ⵍⵃⵎⵕⴰ</p>
          <p>ⵜⴰⵎⵏⴱⴰⴹⵜ ⵏ ⵜⵙⴳⴰ ⵏ ⵙⵙⵎⴰⵕⴰ</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
