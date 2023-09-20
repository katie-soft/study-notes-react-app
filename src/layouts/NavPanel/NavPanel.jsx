import './NavPanel.css';
import Header from '../../components/Header/Header';
import NewItemButton from '../../components/NewItemButton/NewItemButton';
import JournalList from '../../components/JournalList/JournalList';


function NavPanel() {

	return (
		<div className='panel'>
			<Header />
			<NewItemButton />
			<JournalList />
		</div>
	);
}

export default NavPanel;