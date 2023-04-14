import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const RootPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootPage;
