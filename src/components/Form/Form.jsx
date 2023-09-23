import { useState } from 'react';
import cn from 'classnames';
import Button from '../Button/Button';
import styles from './Form.module.css';

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
		<form className={styles.form} onSubmit={handleForm}> 
			<input 
				name="title" 
				type="text" 
				className={cn(styles['input'], {
					[styles['input_invalid']]: !formValidState.title
				})} />
			<textarea 
				name="text"
				className={cn(styles['input'], {
					[styles['input_invalid']]: !formValidState.text
				})} ></textarea>
			<input 
				name="date" 
				type="date" 
				className={cn(styles['input'], {
					[styles['input_invalid']]: !formValidState.date
				})}/>
			<Button text="Сохранить"></Button> 
		</form>
	);
}

export default Form;