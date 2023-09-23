import { useState } from 'react';
import Button from '../Button/Button';
import './Form.css';

function Form({ formSubmit }) {

	const [formValidState, setFormValidState] = useState({
		title: true,
		text: true,
		date: true
	});

	const validateForm = (formData) => {
		let isFormValid = true;
		setFormValidState(state => ({...state,
			title: true,
			text: true,
			date: true}));
		if (!formData.title.trim().length) {
			setFormValidState(state => ({...state, title: false}));
			isFormValid = false;
		}
		if (!formData.text.trim().length) {
			setFormValidState(state => ({...state, text: false}));
			isFormValid = false;
		}
		if (!formData.date) {
			setFormValidState(state => ({...state, date: false}));
			isFormValid = false;
		}
		return isFormValid;
	};

	const handleForm = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		if (validateForm(formProps)) {
			formSubmit(formProps);
		}
	};

	return (
		<form className='form' onSubmit={handleForm}> 
			<input name="title" type="text" className={`${!formValidState.title ? 'input_invalid' : ''}`} />
			<textarea name="text" id="" cols="30" rows="10"></textarea>
			<input name="date" type="date" />
			<Button text="Сохранить"></Button> 
		</form>
	);
}

export default Form;