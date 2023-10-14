import { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';
import './CardButton.css';

function CardButton({children, className}) {

	const { theme } = useContext(ThemeContext);

	const classNames = 'card-button' + (className ? ' '+ className : '') + ` card-button_theme_${theme}`;

	return (
		<> 
			<button 
				className={classNames}>
				{children}
			</button> 
		</>
	);
}

export default CardButton;