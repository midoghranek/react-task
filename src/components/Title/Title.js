import React from "react";
import styles from "./Title.module.scss";

const Title = ({ children, color }) => {
  return <h2 className={`${color}-color ${styles.title}`}>{children}</h2>;
};

export default Title;
