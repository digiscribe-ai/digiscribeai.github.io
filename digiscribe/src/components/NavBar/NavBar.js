import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
	return (
		<nav className="Nav">
			{/* <img src={logo} alt="logo pic" className="logo-image"></img> */}
			<ul className="nav-links">
				{/* <li><NavLink to="/">home</NavLink></li> */}
				<li><NavLink to="/contact">contact</NavLink></li>
				<li><NavLink to="/sign-in">sign in</NavLink></li>
			</ul>
		</nav>
	);
}

export default NavBar;