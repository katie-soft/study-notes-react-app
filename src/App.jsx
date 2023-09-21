import './App.css';
import Body from './layouts/Body/Body';
import NavPanel from './layouts/NavPanel/NavPanel';
import Header from './components/Header/Header';
import NewItemButton from './components/NewItemButton/NewItemButton';
import JournalList from './components/JournalList/JournalList';

function App() {

	return (
		<div className='app'>
			<NavPanel>
				<Header />
				<NewItemButton />
				<JournalList />
			</NavPanel>
			<Body />
		</div>
	);
}

export default App;
