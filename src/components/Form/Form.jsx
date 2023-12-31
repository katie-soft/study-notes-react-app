import { useContext, useEffect, useReducer, useRef } from 'react';
import { formReducer, INITIAL_STATE } from './Form.state';
import cn from 'classnames';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Form.module.css';
import { TopicContext } from '../../context/topic.context';
import { ThemeContext } from '../../context/theme.context';

function Form({ formSubmit, data, onDelete }) {

	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const {isValid, values, isReadyToSubmit} = formState;

	const titleRef = useRef();
	const dateRef = useRef();
	const textRef = useRef();

	const { topicId } = useContext(TopicContext);
	const { theme } = useContext(ThemeContext);

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
		if (!data) {
			dispatchForm({ type: 'CLEAR'});
			dispatchForm({ type: 'SET_VALUE', payload: { topicId }});
		}
		dispatchForm({ type: 'SET_VALUE', payload: { ...data }});
	}, [data]);

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
			dispatchForm({ type: 'SET_VALUE', payload: { topicId }});
		}
	}, [isReadyToSubmit, values, formSubmit]);

	useEffect(() => {
		dispatchForm({ type: 'SET_VALUE', payload: { topicId }});
	}, [topicId]);

	const onChange = (event) => {
		dispatchForm({ 
			type: 'SET_VALUE', 
			payload: {[event.target.name]: event.target.value}});
	};

	const handleForm = (event) => {
		event.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};

	const deleteJournalItem = () => {
		onDelete(data.id);
		dispatchForm({ type: 'CLEAR'});
		dispatchForm({ type: 'SET_VALUE', payload: { topicId }});
	};

	return (
		<form className={styles.form} onSubmit={handleForm}> 
			<div className={styles['form-row']}>
				<Input 
					name="title" 
					type="text"
					placeholder="Title"
					isTitle
					isValid={isValid.title}
					ref={titleRef}
					value={values.title}
					onChange={onChange}
				/>
				{data?.id && 
				<button className={cn(styles['button-archive'], {
					[styles['button-archive_theme_dark']]: theme === 'dark',
					[styles['button-archive_theme_light']]: theme === 'light'
				})} type="button" onClick={deleteJournalItem}>
					<img src="/archive.svg" alt="Archive" />
				</button>
				}
			</div>
			<div className={styles['form-row']}>
				<label className={styles['label-wrapper']} htmlFor="date">
					<img src="/calendar.svg" alt="Calendar" />
					<span className={cn(styles['label'], {
						[styles['label_theme_dark']]: theme === 'dark',
						[styles['label_theme_light']]: theme === 'light'
					})}>Date</span>
				</label>
				<Input 
					name="date" 
					type="date" 
					id="date"
					isValid={isValid.date}
					ref={dateRef}
					value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''}
					onChange={onChange}/>
			</div>
			<div className={styles['form-row']}>
				<label className={styles['label-wrapper']} htmlFor="tags">
					<img src="/folder.svg" alt="Folder" />
					<span className={cn(styles['label'], {
						[styles['label_theme_dark']]: theme === 'dark',
						[styles['label_theme_light']]: theme === 'light'
					})}>Tags</span>
				</label>
				<Input 
					name="tags" 
					type="text" 
					id="tags"
					value={values.tags}
					onChange={onChange}/>
			</div>
			<textarea 
				name="text"
				ref={textRef}
				value={values.text}
				onChange={onChange}
				className={cn(styles['input-textarea'], {
					[styles['input_invalid']]: !isValid.text,
					[styles['input-textarea_theme_dark']]: theme === 'dark',
					[styles['input-textarea_theme_light']]: theme === 'light'
				})} ></textarea>

			<Button>Сохранить</Button> 
		</form>
	);
}

export default Form;