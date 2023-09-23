import './CardButton.css';

function CardButton({children, className}) {

	const classNames = 'card-button' + (className ? ' '+ className : '');

	return (
		<> 
			<button 
				className={classNames}>
				{children}
			</button> 
		</>
	);
}

export default CardButton;