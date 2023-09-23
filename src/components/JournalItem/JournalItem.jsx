import styles from './JournalItem.module.css';

function JournalItem({title, date, text}) {

	const formatedDate = new Intl.DateTimeFormat('en-EN').format(date);

	return (
		<>
			<h2 className={styles['journal-item__title']}>{title}</h2>
			<div className={styles['journal-item__body']}>
				<span className={styles['journal-item__date']}>{formatedDate}</span>
				<p className={styles['journal-item__text']}>{text}</p>
			</div>
		</>
	);
}

export default JournalItem;