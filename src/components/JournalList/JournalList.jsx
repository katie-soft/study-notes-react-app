import './JournalList.css';
import JournalItem from '../JournalItem/JournalItem';
import CardButton from '../CardButton/CardButton';

function JournalList() {

	const data = [
		{
			title: 'Заголовок 1',
			date: new Date(),
			text: 'Текст 1'
		},
		{
			title: 'Заголовок 2',
			date: new Date(),
			text: 'Текст 2'
		},
		{
			title: 'Заголовок 3',
			date: new Date(),
			text: 'Текст 3'
		}
	];

	return (
		<ul className='journal-list'>
			<li>
				<CardButton>
					<JournalItem 
						title={data[0].title}
						date={data[0].date}
						text={data[0].text}
					/>
				</CardButton>
			</li>
			<li>
				<CardButton>
					<JournalItem 
						title={data[1].title}
						date={data[1].date}
						text={data[1].text}
					/>
				</CardButton>
			</li>
			<li>
				<CardButton>
					<JournalItem 
						title={data[2].title}
						date={data[2].date}
						text={data[2].text}
					/>
				</CardButton>
			</li>
		</ul>
	);
}

export default JournalList;