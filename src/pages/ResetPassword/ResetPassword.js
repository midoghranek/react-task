import React from "react";

import { Title } from "../../components";
import { ResetForm } from "../../containers";

import styles from "./ResetPassword.module.scss";

const RestPassword = () => {
  return (
    <div className={styles.reset}>
      <div>
        <Title color="primary">Reset Your Password</Title>
        <ResetForm />
      </div>
      <div className={styles.social} />
    </div>
  );
};

export default RestPassword;
