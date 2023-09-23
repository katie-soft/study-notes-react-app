import styles from './Body.module.css';

function Body({ children }) {

	return (
		<div className={styles.body}>
			<h1>Заголовок</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius debitis nam quia aliquam enim quidem incidunt eos error, quisquam, consequatur iste doloremque ea recusandae quaerat maxime modi excepturi. Rem!</p>
			{ children }
		</div>
	);
}

export default Body;