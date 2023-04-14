import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import { FC, FormEvent } from "react";
import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import "./Registration.scss";
import useInput from "../../utils/hooks/useInput";
import { action } from "../../pages/RegisrationPage";

interface RegistrationProps {}

const isNotEmpty = (value: string) => value.trim() !== '';
const isEmail = (value: string) => value.includes('@');

const Registration: FC<RegistrationProps> = () => {

  const {
    value: firstName,
    isValid: firstNameIsvalid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpty);

const {
    value: lastName,
    isValid: lastNameIsvalid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpty);

  const {
    value: email,
    isValid: emailIsvalid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail);

  const {
    value: password,
    isValid: passwordIsvalid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword
  } = useInput(isNotEmpty);

  const {
    value: password2,
    isValid: password2Isvalid,
    hasError: password2HasError,
    valueChangeHandler: password2ChangeHandler,
    inputBlurHandler: password2BlurHandler,
    reset: resetPassword2
  } = useInput(isNotEmpty);

  // const data = useActionData() as ReturnType<typeof action>;
  // data?.then((res) => {
  //   console.log(res)
  // });
  // TODO missing error handling


  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";

  const onRegisterHandler = () => {
    navigate("/auth");
  };

  const passwordsHasError: boolean = !password2HasError && !passwordHasError && passwordIsvalid && password2Isvalid && password !== password2
  const formIsValid: boolean = firstNameIsvalid && lastNameIsvalid && emailIsvalid && passwordIsvalid && password2Isvalid;
  
  const onSubmitHandler = (event: FormEvent<HTMLFormElement> | undefined) => {
    event?.preventDefault();

    if (!formIsValid) return;

    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
    resetPassword2();
  };

  return (
    <div className="Registration">
      <p>To use the awesome INVENTORY app, you have to register. Just do it and enjoy the future.</p>
      <Form
        className="RegistrationForm"
        method="post"
        //onSubmit={onSubmitHandler}
      >
        <TextField
          className="LoginForm-textfield"
          id="firstname"
          type="text"
          name="firstname"
          label="First Name"
          error={firstNameHasError}
          //value={firstName}
          helperText={firstNameHasError ? "Please add your Firs Name" : undefined}
          variant="outlined"
          size="small"
          required
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          defaultValue="afk"
        />

        <TextField
          className="LoginForm-textfield"
          id="lastname"
          type="text"
          name="lastname"
          label="Last Name"
          error={lastNameHasError}
          //value={lastName}
          helperText={lastNameHasError ? "Please add your Last Name" : undefined}
          variant="outlined"
          size="small"
          required
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          defaultValue="afk"
        />

        <TextField
          className="LoginForm-textfield"
          id="email"
          type="email"
          name="email"
          label="E-mail"
          error={emailHasError}
          //value={email}
          helperText={emailHasError ? "Please add your email address with @ sign" : undefined}
          variant="outlined"
          size="small"
          required
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          defaultValue="user@example.com"
        />

        <TextField
          className="LoginForm-textfield"
          id="password"
          type="password"
          name="password"
          label="Password"
          error={passwordHasError}
          //value={password}
          helperText={passwordHasError ? "Please add a password" : undefined}
          size="small"
          required
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          defaultValue="stringst"
        />

        <TextField
          className="LoginForm-textfield"
          id="password2"
          type="password"
          name="password2"
          label="Password again"
          error={password2HasError || passwordsHasError}
          //value={password2}
          helperText={password2HasError ? "Please repeat your password" : passwordsHasError ? "Passwords are not the same" : undefined  }
          size="small"
          required
          onChange={password2ChangeHandler}
          onBlur={password2BlurHandler}
          defaultValue="stringst"
        />

        <LoadingButton
          sx={{ width: "10rem" }}
          loading={isSubmitting ? true : false}
          loadingIndicator="Submitting…"
          type="submit"
          variant="outlined"
          size="medium"
          fullWidth={true}
          //disabled={!formIsValid}
        >
          Register
        </LoadingButton>
      </Form>
    </div>
  );
};

export default Registration;
