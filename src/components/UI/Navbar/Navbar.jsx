import React, { useContext } from 'react';
import s from './Navbar.module.css';
import {Link} from "react-router-dom";
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const Navbar = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext)
	const logOut = event => {
		setIsAuth(false)
	}

	return (
		<div className={s.navbar}>
			{ isAuth &&
				<MyButton onClick={logOut}>
					LogOut
				</MyButton>
			}
			<div className={s.navbar__links}>
				<Link to="/about">About site</Link>
				<Link to="/posts">Posts</Link>
			</div>
		</div>
	);
};

export default Navbar;

