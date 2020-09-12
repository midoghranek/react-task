import React from "react";
import { Input, Button } from "../../components";
import styles from "./LoginForm.module.scss";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();

  const nextPage = () => {
    history.push("/");
  };

  return (
    <form action="/" onSubmit={nextPage}>
      <Input type="email" name="email" label="Email" required></Input>
      <Input type="password" name="password" label="Password" required></Input>

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
