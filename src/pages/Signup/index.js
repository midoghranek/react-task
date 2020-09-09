import React from "react";
import { Input, Button, Title } from "../../components";
import styles from "./Signup.module.scss";

const Signup = () => {
  return (
    <div className={styles.sign}>
      <Title color="primary">Create Account</Title>
      <form action="/">
        <Input type="text" name="name" label="Full Name"></Input>
        <Input type="email" name="email" label="Email"></Input>
        <Input type="password" name="password" label="Password">
          <p className={styles.text}>
            Passwords must be at least 8 charcates and include a capital letter,
            number and symbol.
          </p>
        </Input>
        <Input
          type="password"
          name="repassword"
          label="Re-enter Password"
        ></Input>
        <Input type="checkbox" name="terms">
          I have read and agree the{" "}
          <a title="terms" href="!#">
            terms & conditions
          </a>
        </Input>
        <Button bg="seconday">Create My free Account</Button>
      </form>
      <p className={`center ${styles.text}`}>
        Already have an account? <a href="#!">Login</a>
      </p>
    </div>
  );
};

export default Signup;
