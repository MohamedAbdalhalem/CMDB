import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from "flowbite-react";
import { Link, NavLink } from 'react-router';
import { useSelector } from "react-redux"
import useLogout from "../Hooks/useLogout";
import useDarkMood from "../Hooks/useDarkMood";
import { ourStoreType } from "../lib/store";


export function Nav() {
  const {token} = useSelector((state: ourStoreType) => state.authsilce)
  const { isDark, handleDarkMood } = useDarkMood()
  const handleLogout = useLogout()
  return (
    <Navbar  className=" fixed z-[1000000] shadow-lg w-full px-5" fluid>
      <NavbarBrand href="https://flowbite-react.com">
        <Link to='/'>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CMDB</span>
        </Link >
      </NavbarBrand>
      <div className="flex md:order-2 gap-2 cursor-pointer">
        <Dropdown color='alternative' className=" cursor-pointer" label="Setting">
      <DropdownHeader className="border-b border-gray-100  dark:border-gray-600 ">
        <span className="block font-bold ">3ab7alim</span>
          </DropdownHeader>
          {token ? <DropdownItem onClick={handleLogout}>log-out</DropdownItem> : 
            <>
              <DropdownItem as={NavLink} to="/login">Log-in</DropdownItem>
      <DropdownItem as={NavLink} to="/register">Register</DropdownItem>
            </>}
      
      <DropdownDivider />
          <DropdownItem onClick={handleDarkMood}>{ isDark }</DropdownItem>
    </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse >
        {token && <>
          <NavbarLink ><NavLink to='/'>Home</NavLink></NavbarLink>
          <NavbarLink ><NavLink to='/Movies'>Movies</NavLink></NavbarLink>
        <NavbarLink><NavLink to='/tvShows'>TvShows</NavLink></NavbarLink>
        <NavbarLink><NavLink to='/People'>People</NavLink></NavbarLink>
        <NavbarLink className="border-b-0"><a target="_blank" href="https://developer.themoviedb.org/docs/getting-started">Api Documentation</a></NavbarLink>
        </>}
        
      </NavbarCollapse>
    </Navbar>
  );
}
