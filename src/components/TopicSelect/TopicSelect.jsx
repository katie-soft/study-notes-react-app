import { useContext } from 'react';
import { TopicContext } from '../../context/topic.context';
import { ThemeContext } from '../../context/theme.context';
import styles from './TopicSelect.module.css';
import cn from 'classnames';

function TopicSelect() {

	const { topicId, setTopicId } = useContext(TopicContext);

	const { theme } = useContext(ThemeContext);

	const changeTopic = (event) => {
		setTopicId(Number(event.target.value));
	};

	return (
		<select name="topic" id="topic" className={cn(styles['select'], {
			[styles['select_theme_dark']]: theme === 'dark',
			[styles['select_theme_light']]: theme === 'light'
		})} value={topicId} onChange={changeTopic}>
			<option value="1" className={styles.option}>React</option>
			<option value="2" className={styles.option}>Angular</option>
			<option value="3" className={styles.option}>Node.js</option>
		</select>
	);
}

export default TopicSelect;