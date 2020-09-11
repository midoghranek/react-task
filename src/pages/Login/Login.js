import React from "react";

import { Title, Spliter, Button } from "../../components";
import { LoginForm } from "../../containers";

import styles from "./Login.module.scss";

const Signup = () => {
  return (
    <div className={styles.log}>
      <div>
        <Title color="primary">Your Account</Title>
        <LoginForm />
        <p className={`center ${styles.text}`}>
          Don't have account? <a href="#!">Signup</a>
        </p>
      </div>
      <Spliter className={styles.spliter} />
      <div className={styles.social}>
        <Button bg="primary">Login w/ Google</Button>
        <Button bg="primary">Login w/ Facebook</Button>
      </div>
    </div>
  );
};

export default Signup;
