import React from "react";
import styles from "./Input.module.scss";

const Input = ({ type, name, label, children, ...rest }) => {
  if (type === "checkbox") {
    return (
      <div className={styles.check}>
        <input type={type} name={name} {...rest}></input>
        <label for={name}>{children}</label>
      </div>
    );
  } else {
    return (
      <div className={styles.input}>
        <label for={name}>{label}</label>
        <input type={type} name={name} {...rest}></input>
        {children}
      </div>
    );
  }
};

export default Input;
