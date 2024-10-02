import { NavLink, Outlet } from "react-router-dom";

export default function Layout () {
  return (
    <div id='container'>
      <header>
        <nav id='navbar'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blue">Blue</NavLink>
            <NavLink to="/red">Red</NavLink>
        </nav>
      </header>
    <Outlet />
    </div>
  )
}
