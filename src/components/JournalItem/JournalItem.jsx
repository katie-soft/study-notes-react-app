import './JournalItem.css';

function JournalItem({title, date, text}) {

	const formatedDate = new Intl.DateTimeFormat('en-EN').format(date);

	return (
		<>
			<h2 className='journal-item__title'>{title}</h2>
			<div className='journal-item__body'>
				<span className='journal-item__date'>{formatedDate}</span>
				<p className='journal-item__text'>{text}</p>
			</div>
		</>
	);
}

export default JournalItem;