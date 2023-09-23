import styles from './NavPanel.module.css';

function NavPanel({children}) {

	return (
		<div className={styles.panel}>{children}</div>
	);
}

export default NavPanel;