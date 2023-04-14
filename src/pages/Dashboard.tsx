import { useRouteLoaderData } from "react-router-dom";
import SearchResult from "../components/SearchResult/SearchResult";

const Dashboard = () => {
  const token = useRouteLoaderData("root");
  return (
    <>
      Welcome to INVENTORY app. Somedays here will appear your household.
      {!token && <p>Please login to earn the barcode search function </p>}
    </>
  );
};
export default Dashboard;
