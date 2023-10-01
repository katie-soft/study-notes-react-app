import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

const Input = forwardRef(function Input({ className, isValid = true, isTitle, ...props}, ref) {

	return (
		<input {...props} ref={ref} className={cn(className, styles['input'], {
			[styles['input_invalid']]: !isValid,
			[styles['input-title']]: isTitle
		})}/>
	);
});

export default Input;