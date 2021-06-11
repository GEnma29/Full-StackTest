import React from "react";
import * as styleHeader from "./Header.module.css";
const Header = () => {
  return (
  
      <div className={styleHeader.Header}>
        <h1 className={styleHeader.Title}>HN Feed</h1>
        <p className={styleHeader.SubTitle}>We ❤ hacker news!</p>
      </div>
  );
};

export default Header;
