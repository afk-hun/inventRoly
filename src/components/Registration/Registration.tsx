import { LoadingButton } from "@mui/lab";
import { Button, TextField } from "@mui/material";
import React, { ChangeEvent, FC, FocusEvent, useState } from "react";
import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import "./Registration.scss";

type InputTextAndBlur = {
  enteredText: string;
  inputBlur: boolean;
};

interface RegistrationProps {}

const Registration: FC<RegistrationProps> = () => {
  const [firstName, setFirstName] = useState<InputTextAndBlur>({
    enteredText: "",
    inputBlur: false,
  });
  const [lastName, setLastName] = useState<InputTextAndBlur>({
    enteredText: "",
    inputBlur: false,
  });
  const [email, setEmail] = useState<InputTextAndBlur>({
    enteredText: "",
    inputBlur: false,
  });
  const [password, setPassword] = useState<InputTextAndBlur>({
    enteredText: "",
    inputBlur: false,
  });
  const [password2, setPassword2] = useState<InputTextAndBlur>({
    enteredText: "",
    inputBlur: false,
  });

  const data = useActionData();
  console.log(data);

  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";

  const onRegisterHandler = () => {
    navigate("/auth");
  };

  const firstNameIsvalid =
    firstName.enteredText.trim() !== "" && firstName.inputBlur;
  const lasstNameIsvalid =
    lastName.enteredText.trim() !== "" && lastName.inputBlur;
  const emailIsvalid = email.enteredText.includes("@") && email.inputBlur;
  const passwordIsvalid =
    password.enteredText.trim() !== "" && password.inputBlur;
  const password2Isvalid =
    password2.enteredText.trim() !== "" && password2.inputBlur;

  const nameInputChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFirstName({
      ...firstName,
      enteredText: event.target.value,
    });
  };

  const nameInputBlurHandler = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFirstName({
      ...firstName,
      inputBlur: true,
    });
  };

  const onSubmitHandler = () => {
    setFirstName({ enteredText: "", inputBlur: false });
  };

  return (
    <div className="Registration">
      <Form
        className="RegistrationForm"
        method="post"
        onSubmit={onSubmitHandler}
      >
        <TextField
          className="LoginForm-textfield"
          id="firstname"
          type="text"
          name="firstname"
          label="First Name"
          //defaultValue="John"
          variant="outlined"
          size="small"
          required
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />

        {!firstNameIsvalid && <p>Please add a valid name</p>}

        <TextField
          className="LoginForm-textfield"
          id="lastname"
          type="text"
          name="lastname"
          label="Last Name"
          //defaultValue="Doe"
          variant="outlined"
          size="small"
          required
        />

        <TextField
          className="LoginForm-textfield"
          id="email"
          type="email"
          name="email"
          label="E-mail"
          //defaultValue="user@example.com"
          variant="outlined"
          size="small"
          required
        />
        <TextField
          className="LoginForm-textfield"
          id="password"
          type="password"
          name="password"
          label="Password"
          //defaultValue="stringst"
          size="small"
          required
        />
        <TextField
          className="LoginForm-textfield"
          id="password2"
          type="password"
          name="password2"
          label="Password again"
          //defaultValue="stringst"
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
          Register
        </LoadingButton>
      </Form>
    </div>
  );
};

export default Registration;
