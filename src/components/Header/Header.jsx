// import styles from './Header.module.css';
import { useContext } from 'react';
import TopicSelect from '../TopicSelect/TopicSelect';
import { ThemeContext } from '../../context/theme.context';

function Header() {

	const { theme } = useContext(ThemeContext);

	const logoSVG = theme === 'dark' ? '/Logo.svg' : '/Logo_dark.svg';

	return (
		<>
			<img src={logoSVG} alt="Study Notes" />
			<TopicSelect />
		</>			
	);
}

export default Header;