import { useContext } from 'react';
import { TopicContext } from '../../context/topic.context';
import styles from './TopicSelect.module.css';

function TopicSelect() {

	const { topicId, setTopicId } = useContext(TopicContext);

	const changeTopic = (event) => {
		setTopicId(Number(event.target.value));
	};

	return (
		<select name="topic" id="topic" className={styles.select} value={topicId} onChange={changeTopic}>
			<option value="1" className={styles.option}>React</option>
			<option value="2" className={styles.option}>Angular</option>
			<option value="3" className={styles.option}>Node.js</option>
		</select>
	);
}

export default TopicSelect;