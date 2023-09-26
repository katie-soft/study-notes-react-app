import './NewItemButton.css';
import CardButton from '../CardButton/CardButton';

function NewItemButton() {

	return (
		<CardButton className='new-item-button'>
			<img src="/plus.svg" alt="+" />
			<span>Add a note</span>
		</CardButton>
	);
}

export default NewItemButton;