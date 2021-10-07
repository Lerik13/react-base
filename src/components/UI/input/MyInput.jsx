import React from 'react';
import s from './MyInput.module.css'
const MyInput = (props) => {
	return (
		<input {...props} className={s.myInput} />
	);
};

export default MyInput;
