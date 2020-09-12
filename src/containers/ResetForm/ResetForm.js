import React from "react";
import { Input, Button } from "../../components";
import styles from "./ResetForm.module.scss";

const LoginForm = () => {
  return (
    <form action="/">
      <Input type="password" name="password" label="New Password" required>
        <p className={styles.text}>
          Passwords must be at least 8 charcates and include a capital letter,
          number and symbol.
        </p>
      </Input>
      <Input
        type="password"
        name="password"
        label="Re-enter New Password"
        required
      ></Input>
      <Button className={styles.button} bg="seconday">
        Update Your Password
      </Button>
    </form>
  );
};

export default LoginForm;
