import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h1>Something went wrong</h1>
    </>
  );
};

export default ErrorPage;
