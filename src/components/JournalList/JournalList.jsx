import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { sortArrayByDate } from '../../utils/sort';
import styles from './JournalList.module.css';
import { useContext } from 'react';
import { TopicContext } from '../../context/topic.context';

function JournalList( {listItems} ) {

	const { topicId } = useContext(TopicContext);

	if (listItems.length === 0) {
		return <span>Записей пока нет. Добавьте первую</span>;
		
	} else {
		return (
			<ul className={styles['journal-list']}>
				{listItems
					.filter(item => item.topicId === topicId)
					.sort(sortArrayByDate)
					.map((item) => (
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