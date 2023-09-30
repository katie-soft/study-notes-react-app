import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Body from './layouts/Body/Body';
import NavPanel from './layouts/NavPanel/NavPanel';
import Header from './components/Header/Header';
import NewItemButton from './components/NewItemButton/NewItemButton';
import JournalList from './components/JournalList/JournalList';
import Form from './components/Form/Form';
import { INITIAL_DATA } from './utils/constants';

function App() {

	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(INITIAL_DATA);
	}, []);

	useEffect(() => {
		if (items.length) {
			localStorage.setItem('data', JSON.stringify(items));
		}
	}, [items]);

	const addItem = newItem => {
		setItems(items => [...items, {
			id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1,
			title: newItem.title,
			date: new Date(newItem.date),
			text: newItem.text
		}]);
	};

	return (
		<div className={styles.app}>
			<NavPanel>
				<Header />
				<NewItemButton />
				<JournalList  listItems={items}/>
			</NavPanel>
			<Body>
				<Form formSubmit={addItem} />
			</Body>
		</div>
	);
}

export default App;
