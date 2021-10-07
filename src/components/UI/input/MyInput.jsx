import React from 'react';
import s from './MyInput.module.css'
const MyInput = React.forwardRef((props, ref) => {
	return (
		<input ref={ref} {...props} className={s.myInput} />
	);
});

export default MyInput;
