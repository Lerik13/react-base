import React from 'react';
import s from './Navbar.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {
	return (
		<div className={s.navbar}>
			<div className={s.navbar__links}>
				<Link to="/about">About site</Link>
				<Link to="/posts">Posts</Link>
			</div>
		</div>
	);
};

export default Navbar;

