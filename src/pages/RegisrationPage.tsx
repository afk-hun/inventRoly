import { redirect } from "react-router-dom";
import Registration from "../components/Registration/Registration";

const RegistrationPage = () => {
  return <Registration />;
};

export default RegistrationPage;

export async function action({ request }: any) {
  const data = await request.formData();

  const signupData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const signupURL = "https://api.leltar.app/users/signup";

  const response = await fetch(signupURL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-API-Key": "d1d1cdbf-ce70-4677-bca4-4016e68267b9",
    },
    body: JSON.stringify(signupData),
  });

  console.log(response);

  if (response.status === 409) {
    return response;
  }
  redirect("/");
}
