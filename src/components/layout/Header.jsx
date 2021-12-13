import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/other-route">Other</NavLink>
		</header>
	);
}

export default Header;
