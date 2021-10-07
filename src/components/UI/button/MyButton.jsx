import React from 'react';
import s from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
	return (
		<div>
			<button {...props} className={s.myBtn}>
				{children}
			</button>
		</div>
	);
};

export default MyButton;