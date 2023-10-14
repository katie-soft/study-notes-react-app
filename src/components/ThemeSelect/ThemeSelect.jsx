import { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';
import styles from './ThemeSelect.module.css';

function ThemeSelect() {

	const { theme, setTheme } = useContext(ThemeContext);

	const setLightTheme = () => {
		setTheme('light');
		document.body.style.color = '#181818';
		document.body.style.backgroundColor = '#DEDEDE';
	};

	const setDarkTheme = () => {
		setTheme('dark');
		document.body.style.color = '#DEDEDE';
		document.body.style.backgroundColor = '#181818';
	};

	return (
		<>
			{theme === 'dark' && <button className={styles['theme-button']} onClick={setLightTheme}>
				<img src="/sun.svg" alt="Sun" />
			</button>
			}
			{theme === 'light' && <button className={styles['theme-button']} onClick={setDarkTheme}>
				<img src="/moon.svg" alt="Moon" />
			</button>}
		</>

	);
}

export default ThemeSelect;