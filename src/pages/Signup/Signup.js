import React from "react";

import { Title, Spliter, Button } from "../../components";
import { SignupForm } from "../../containers";

import styles from "./Signup.module.scss";

const Signup = () => {
  return (
    <div className={styles.sign}>
      <div>
        <Title color="primary">Create Account</Title>
        <SignupForm />
        <p className={`center ${styles.text}`}>
          Already have an account? <a href="#!">Login</a>
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
