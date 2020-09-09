import React from "react";
import styles from "./Button.module.scss";

const Button = ({ icon, bg, onClick, children }) => {
  return (
    <div className={styles.button}>
      <button className={`${bg}-bg`} onClick={onClick}>
        {children}
      </button>
      {icon && <img alt={children} src={icon}></img>}
    </div>
  );
};

export default Button;
