import React from "react";
import { Input, Button } from "../../components";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <form action="/">
      <Input type="email" name="email" label="Email"></Input>
      <Input type="password" name="password" label="Password"></Input>

      <div className="line-bw">
        <Input type="checkbox" name="remember">
          <span className={styles.span}>Remember me</span>
        </Input>
        <a href="!#">Forgotten Password?</a>
      </div>

      <Button bg="seconday">Log In</Button>
    </form>
  );
};

export default LoginForm;
