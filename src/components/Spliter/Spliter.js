import React from "react";
import styles from "./Spliter.module.scss";

const Spliter = ({ className }) => {
  return (
    <div className={`${styles.spliter} ${className}`}>
      <span>OR</span>
    </div>
  );
};

export default Spliter;
