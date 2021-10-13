import React from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

const Login = () => {
	return (
		<div>
			<h1>Page for Login</h1>
			<form>
				<MyInput type="text" placeholder="Input login name"/>
				<MyInput type="password" placeholder="Input password"/>
				<MyButton>Login</MyButton>
			</form>
		</div>
	);
};

export default Login;