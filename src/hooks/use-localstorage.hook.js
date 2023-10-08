import { useState, useEffect } from 'react';
import { INITIAL_DATA } from '../utils/constants';

export function useLocalStorage(key) {
	const [data, setData] = useState();

	useEffect(() => {
		if (localStorage.getItem(key) === 'undefined' || localStorage.getItem(key) === null) {
			saveData(INITIAL_DATA);
		} else {
			setData(JSON.parse(localStorage.getItem(key)));
		}
	}, []);

	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData];
}