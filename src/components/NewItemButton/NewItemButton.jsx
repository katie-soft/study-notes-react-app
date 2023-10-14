import CardButton from '../CardButton/CardButton';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';
import styles from './NewItemButton.module.css';
import cn from 'classnames';

function NewItemButton() {

	const { theme } = useContext(ThemeContext);

	return (
		<CardButton className={cn(styles['new-item-button'], {
			[styles['new-item-button_theme_dark']]: theme === 'dark',
			[styles['new-item-button_theme_light']]: theme === 'light'
		})}>
			<img src="/plus.svg" alt="+" />
			<span>Add a note</span>
		</CardButton>
	);
}

export default NewItemButton;