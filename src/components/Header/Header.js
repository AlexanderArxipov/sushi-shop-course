import styles from "./Header.module.css";
import React from "react";
import sushiImage from "../../assets/sushiHeader.jpg";
import HeaderCartButton from "./CartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>
          Суши у бабы Зины
          <div>+7 950 270 81 39</div>
        </h1>
        <HeaderCartButton onShow={props.onShow} />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage} alt="Sushi" />
      </div>
    </React.Fragment>
  );
};

export default Header;
