import { useContext } from 'react';
import styles from './Button.module.css';
import cn from 'classnames';
import { ThemeContext } from '../../context/theme.context';

function Button({ children, onClick }) {

	const { theme } = useContext(ThemeContext);

	return (

		<button 
			className={cn(styles['button'], {
				[styles['button_theme_dark']]: theme === 'dark',
				[styles['button_theme_light']]: theme === 'light'
			})}
			onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;