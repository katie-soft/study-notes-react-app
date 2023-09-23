import { useState } from 'react';
import './App.css';
import Body from './layouts/Body/Body';
import NavPanel from './layouts/NavPanel/NavPanel';
import Header from './components/Header/Header';
import NewItemButton from './components/NewItemButton/NewItemButton';
import JournalList from './components/JournalList/JournalList';
import Form from './components/Form/Form';
import { INITIAL_DATA } from './utils/constants';

function App() {

	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = newItem => {
		setItems(items => [...items, {
			id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1,
			title: newItem.title,
			date: new Date(newItem.date),
			text: newItem.text
		}]);
	};

	return (
		<div className='app'>
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
