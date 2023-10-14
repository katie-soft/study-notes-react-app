import { useLocalStorage } from './hooks/use-localstorage.hook';
import styles from './App.module.css';
import { TopicContextProvider } from './context/topic.context';
import Body from './layouts/Body/Body';
import NavPanel from './layouts/NavPanel/NavPanel';
import Header from './components/Header/Header';
import NewItemButton from './components/NewItemButton/NewItemButton';
import JournalList from './components/JournalList/JournalList';
import Form from './components/Form/Form';
import { mapItems } from './utils/mapItems';
import { ThemeContextProvider } from './context/theme.context';
import ThemeSelect from './components/ThemeSelect/ThemeSelect';

function App() {	

	const [items, setItems] = useLocalStorage('data');

	const addItem = newItem => {
		setItems([...mapItems(items), {
			...newItem,
			id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1,
			date: new Date(newItem.date)
		}]);
	};

	return (
		<ThemeContextProvider>
			<TopicContextProvider>
				<div className={styles.app}>
					<NavPanel>
						<Header />
						<NewItemButton />
						<JournalList  listItems={mapItems(items)}/>
					</NavPanel>
					<Body>
						<ThemeSelect />
						<Form formSubmit={addItem} />
					</Body>
				</div>
			</TopicContextProvider>
		</ThemeContextProvider>

	);
}

export default App;
