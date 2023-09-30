import { useState } from 'react';
import cn from 'classnames';
import Button from '../Button/Button';
import styles from './Form.module.css';

const INITIAL_STATE = {
	title: true,
	date: true,
	text: true
};

function Form({ formSubmit }) {

	const [formValidState, setFormValidState] = useState(INITIAL_STATE);

	const validateForm = (formData) => {
		let isFormValid = true;

		setFormValidState(() => (INITIAL_STATE));

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
			<div className={styles['form-row']}>
				<input 
					name="title" 
					type="text"
					className={cn(styles['input'], styles['input-title'], {
						[styles['input_invalid']]: !formValidState.title
					})} />
			</div>
			<div className={styles['form-row']}>
				<label className={styles['label-wrapper']} htmlFor="date">
					<img src="/calendar.svg" alt="Calendar" />
					<span className={styles.label}>Date</span>
				</label>
				<input 
					name="date" 
					type="date" 
					id="date"
					className={cn(styles['input'], {
						[styles['input_invalid']]: !formValidState.date
					})}/>
			</div>
			<div className={styles['form-row']}>
				<label className={styles['label-wrapper']} htmlFor="tags">
					<img src="/folder.svg" alt="Folder" />
					<span className={styles.label}>Tags</span>
				</label>
				<input 
					name="tags" 
					type="text" 
					id="tags"
					className={cn(styles['input'])}/>
			</div>
			<textarea 
				name="text"
				className={cn(styles['input'], styles['input-text'], styles['input-textarea'], {
					[styles['input_invalid']]: !formValidState.text
				})} ></textarea>

			<Button text="Сохранить"></Button> 
		</form>
	);
}

export default Form;