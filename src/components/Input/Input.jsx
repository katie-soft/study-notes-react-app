import { forwardRef } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';
import styles from './Input.module.css';
import cn from 'classnames';

const Input = forwardRef(function Input({ className, isValid = true, isTitle, ...props}, ref) {

	const { theme } = useContext(ThemeContext);

	return (
		<input {...props} ref={ref} className={cn(className, styles['input'], {
			[styles['input_invalid']]: !isValid,
			[styles['input-title']]: isTitle,
			[styles['input_theme_dark']]: theme === 'dark',
			[styles['input_theme_light']]: theme === 'light'
		})}/>
	);
});

export default Input;