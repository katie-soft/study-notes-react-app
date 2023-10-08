// import styles from './Header.module.css';

import TopicSelect from '../TopicSelect/TopicSelect';

function Header() {

	return (
		<>
			<img src="/Logo.svg" alt="Study Notes" />
			<TopicSelect />
		</>			
	);
}

export default Header;