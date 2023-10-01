import { useEffect, useReducer, useRef } from 'react';
import { formReducer, INITIAL_STATE } from './Form.state';
import cn from 'classnames';
import Button from '../Button/Button';
import styles from './Form.module.css';

function Form({ formSubmit }) {

	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const {isValid, values, isReadyToSubmit} = formState;

	const titleRef = useRef();
	const dateRef = useRef();
	const textRef = useRef();

	const focusError = (isValid) => {
		switch(true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.text:
			textRef.current.focus();
			break;
		}
	};

	useEffect(() => {
		let timerId;

		if (!isValid.title || !isValid.text || !isValid.date) {
			focusError(isValid);
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY'});
			}, 2000);
		}

		return () => {
			clearTimeout(timerId);
		}; 
	}, [isValid]);

	useEffect(() => {
		if (isReadyToSubmit) {
			formSubmit(values);
			dispatchForm({ type: 'CLEAR'});
		}
	}, [isReadyToSubmit, values, formSubmit]);

	const onChange = (event) => {
		dispatchForm({ 
			type: 'SET_VALUE', 
			payload: {[event.target.name]: event.target.value}});
	};

	const handleForm = (event) => {
		event.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};

	return (
		<form className={styles.form} onSubmit={handleForm}> 
			<div className={styles['form-row']}>
				<input 
					name="title" 
					type="text"
					ref={titleRef}
					value={values.title}
					onChange={onChange}
					className={cn(styles['input'], styles['input-title'], {
						[styles['input_invalid']]: !isValid.title
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
					ref={dateRef}
					value={values.date}
					onChange={onChange}
					className={cn(styles['input'], {
						[styles['input_invalid']]: !isValid.date
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
					value={values.tags}
					onChange={onChange}
					className={cn(styles['input'])}/>
			</div>
			<textarea 
				name="text"
				ref={textRef}
				value={values.text}
				onChange={onChange}
				className={cn(styles['input'], styles['input-text'], styles['input-textarea'], {
					[styles['input_invalid']]: !isValid.text
				})} ></textarea>

			<Button text="Сохранить"></Button> 
		</form>
	);
}

export default Form;