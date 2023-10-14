import { useState } from 'react';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import styles from './App.module.css';
import Body from './layouts/Body/Body';
import NavPanel from './layouts/NavPanel/NavPanel';
import Header from './components/Header/Header';
import NewItemButton from './components/NewItemButton/NewItemButton';
import JournalList from './components/JournalList/JournalList';
import Form from './components/Form/Form';
import ThemeSelect from './components/ThemeSelect/ThemeSelect';
import { mapItems } from './utils/mapItems';
import { TopicContextProvider } from './context/topic.context';
import { ThemeContextProvider } from './context/theme.context';

function App() {	

	const [items, setItems] = useLocalStorage('data');
	const [selectedItem, setSelectedItem] = useState({});

	const addItem = newItem => {
		if (!newItem.id) {
			setItems([...mapItems(items), {
				...newItem,
				id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1,
				date: new Date(newItem.date)
			}]);
		} else {
			setItems([...mapItems(items).map(i => {
				if (i.id === newItem.id) {
					return {
						...newItem
					};
				}
				return i;
			})]);
		}

	};

	return (
		<ThemeContextProvider>
			<TopicContextProvider>
				<div className={styles.app}>
					<NavPanel>
						<Header />
						<NewItemButton />
						<JournalList listItems={mapItems(items)} setItem={setSelectedItem}/>
					</NavPanel>
					<Body>
						<ThemeSelect />
						<Form formSubmit={addItem} data={selectedItem} />
					</Body>
				</div>
			</TopicContextProvider>
		</ThemeContextProvider>

	);
}

export default App;
