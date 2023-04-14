import { json, redirect } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return <LoginForm />;
};

export default Login;

export async function action({ request }: any) {
  const data = await request.formData();
  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const loginURL = "https://api.leltar.app/users/login";

  const response = await fetch(loginURL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-API-Key": "d1d1cdbf-ce70-4677-bca4-4016e68267b9",
    },
    body: JSON.stringify(loginData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "could not authenticate user." }, { status: 500 });
  }

  const resData = await response.json();
  const token = resData.access_token;
  //console.log(token);
  localStorage.setItem("token", token);
  localStorage.setItem("user", data.get("email"));
  
  return redirect("/");
}
