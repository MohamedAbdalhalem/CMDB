import { Outlet } from "react-router";
import { Nav } from "./Navbar";
import Footerr from "./Footer";


export default function Layout() {
  return (
    <>
          <Nav />
      <Outlet />
      <Footerr/>
    </>
  )
}
