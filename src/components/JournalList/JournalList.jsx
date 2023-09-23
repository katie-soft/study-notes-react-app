import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { sortArrayByDate } from '../../utils/sort';
import './JournalList.css';

function JournalList( {listItems} ) {

	if (listItems.length === 0) {
		return <span>Записей пока нет. Добавьте первую</span>;
		
	} else {
		return (
			<ul className='journal-list'>
				{listItems.sort(sortArrayByDate).map((item) => (
					<li key={item.id}>
						<CardButton>
							<JournalItem 
								title={item.title}
								date={item.date}
								text={item.text}
							/>
						</CardButton>
					</li>
				))}
			</ul>
		);
	}
}

export default JournalList;