import './Button.css';

function Button({ text }) {

	return (
		<>
			<button className='button button_color_accent'>{text}</button>
		</>
	);
}

export default Button;