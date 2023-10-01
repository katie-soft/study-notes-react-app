import { useLocalStorage } from './hooks/use-localstorage.hook';
import styles from './App.module.css';
import Body from './layouts/Body/Body';
import NavPanel from './layouts/NavPanel/NavPanel';
import Header from './components/Header/Header';
import NewItemButton from './components/NewItemButton/NewItemButton';
import JournalList from './components/JournalList/JournalList';
import Form from './components/Form/Form';
import { mapItems } from './utils/mapItems';

function App() {	

	const [items, setItems] = useLocalStorage('data');

	const addItem = newItem => {
		setItems([...mapItems(items), {
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
				<JournalList  listItems={mapItems(items)}/>
			</NavPanel>
			<Body>
				<Form formSubmit={addItem} />
			</Body>
		</div>
	);
}

export default App;
