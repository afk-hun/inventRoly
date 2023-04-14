import { Button } from "@mui/material";
import { Form, NavLink, redirect, useRouteLoaderData } from "react-router-dom";
import "./Navbar.scss";

interface NavbarProps {}

const Navbar = () => {
  const token = useRouteLoaderData("root") as string | null; //localStorage.getItem("token");
  console.log("Navbar token: " + token);

  const logIn = (
    <NavLink to="/auth" style={{ textDecoration: "none" }}>
      <Button variant="contained">Login</Button>
    </NavLink>
  );

  const logOut = (
    <Form action="/logout" method="post">
      <Button variant="contained" type="submit">
        Logout
      </Button>
    </Form>
  );

  return (
    <div className="Navbar">
      <h2 className="Navbar-title">lelTár</h2>
      <ul className="Navbar-links">
        <li className="Navbar-listitem">
          <NavLink to="/" end style={{ textDecoration: "none" }}>
            <Button variant="contained">Dashboard</Button>
          </NavLink>
        </li>
        {token && (
          <li className="Navbar-listitem">
            <NavLink to="/barcode" end style={{ textDecoration: "none" }}>
              <Button variant="contained">Barcode</Button>
            </NavLink>
          </li>
        )}
        <li className="Navbar-listitem">
          {token && logOut}
          {!token && logIn}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
