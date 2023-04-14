import React from "react";
import { LoadingButton } from "@mui/lab";
import { Button, TextField } from "@mui/material";
import { Form, useNavigate, useNavigation } from "react-router-dom";
import "./LoginForm.scss";

const LoginForm = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";

  const onRegisterHandler = () => {
    navigate("/auth/registration");
  };

  return (
    <div className="Login-container">
      Please login to use the awesome INVERTORY app 😄
      <Form className="LoginForm" method="post">
        <TextField
          className="LoginForm-textfield"
          id="email"
          type="email"
          name="email"
          label="E-mail"
          defaultValue="user@example.com"
          variant="outlined"
          size="small"
          required
        />
        <TextField
          className="LoginForm-textfield"
          id="password"
          type="password"
          name="password"
          label="E-mail"
          defaultValue="stringst"
          size="small"
          required
        />
        <LoadingButton
          sx={{ width: "10rem" }}
          loading={isSubmitting ? true : false}
          loadingIndicator="Submitting…"
          type="submit"
          variant="outlined"
          size="medium"
          fullWidth={true}
        >
          Login
        </LoadingButton>
      </Form>
      <p>
        If you don't have an account yet just click to
        <Button variant="text" onClick={onRegisterHandler}>
          Registration
        </Button>
      </p>
    </div>
  );
};

export default LoginForm;
