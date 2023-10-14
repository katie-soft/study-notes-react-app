import { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';
import './CardButton.css';

function CardButton({ children, className, ...props }) {

	const { theme } = useContext(ThemeContext);

	const classNames = 'card-button' + (className ? ' '+ className : '') + ` card-button_theme_${theme}`;

	return (
		<> 
			<button 
				className={classNames}
				{...props}>
				{children}
			</button> 
		</>
	);
}

export default CardButton;