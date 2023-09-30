export const INITIAL_STATE = {
	isValid: {
		title: true,
		date: true,
		text: true
	},
	values: {
		title: '',
		date: '',
		text: '',
		tags: ''
	},
	isReadyToSubmit: false
};

export function formReducer(state, action) {
	switch (action.type) {

	case 'SET_VALUE': 
		return {...state, values: { ...state.values, ...action.payload}};

	case 'RESET_VALIDITY':
		return {...state, isValid: INITIAL_STATE.isValid};

	case 'CLEAR': 
		return {...state, values: INITIAL_STATE.values};

	case 'SUBMIT': {
		const titleValidity = state.values.title.trim().length;
		const textValidity = state.values.text.trim().length;
		const dateValidity = state.values.date;

		return {
			...state,
			isValid: {
				title: titleValidity,
				date: dateValidity,
				text: textValidity
			},
			isReadyToSubmit: titleValidity && textValidity && dateValidity
		};
	}
	}
}