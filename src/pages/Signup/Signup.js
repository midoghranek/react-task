import React from "react";

import { Title } from "../../components";
import { SignupForm } from "../../containers";

import styles from "./Signup.module.scss";

const Signup = () => {
  return (
    <div className={styles.sign}>
      <Title color="primary">Create Account</Title>
      <SignupForm />
      <p className={`center ${styles.text}`}>
        Already have an account? <a href="#!">Login</a>
      </p>
    </div>
  );
};

export default Signup;
