import React from "react";
import { Input, Button } from "../../components";
import styles from "./SignupForm.module.scss";
import { useHistory } from "react-router-dom";

const SignupForm = () => {
  const history = useHistory();

  const nextPage = () => {
    history.push("/");
  };

  return (
    <form action="/" onSubmit={nextPage}>
      <Input type="text" name="name" label="Full Name" required></Input>
      <Input type="email" name="email" label="Email " required></Input>
      <Input type="password" name="password" label="Password" required>
        <p className={styles.text}>
          Passwords must be at least 8 charcates and include a capital letter,
          number and symbol.
        </p>
      </Input>
      <Input
        type="password"
        name="repassword"
        label="Re-enter Password"
        required
      ></Input>
      <Input type="checkbox" name="terms" required>
        I have read and agree the{" "}
        <a title="terms" href="!#">
          terms & conditions
        </a>
      </Input>
      <Button bg="seconday">Create My free Account</Button>
    </form>
  );
};

export default SignupForm;
