import { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';
import styles from './JournalItem.module.css';
import cn from 'classnames';


function JournalItem({title, date, text}) {

	const formatedDate = new Intl.DateTimeFormat('en-EN').format(date);

	const { theme } = useContext(ThemeContext);

	return (
		<>
			<h2 className={cn(styles['journal-item__title'], {
				[styles['journal-item__text_theme_dark']]: theme === 'dark',
				[styles['journal-item__text_theme_light']]: theme === 'light'
			})}>{title}</h2>
			<div className={styles['journal-item__body']}>
				<span className={cn(styles['journal-item__date'], {
					[styles['journal-item__date_theme_dark']]: theme === 'dark',
					[styles['journal-item__date_theme_light']]: theme === 'light'
				})}>{formatedDate}</span>
				<p className={cn(styles['journal-item__text'], {
					[styles['journal-item__text_theme_dark']]: theme === 'dark',
					[styles['journal-item__text_theme_light']]: theme === 'light'
				})}>{text}</p>
			</div>
		</>
	);
}

export default JournalItem;