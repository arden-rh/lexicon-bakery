import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
	children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
	return (
		<header className={styles.header}>
			<div className={styles.topRow}>
				<div className={styles.branding}>
					<img
						src="/src/assets/images/icon.png"
						alt="Munamii Cakery Logo"
					/>
					<h1 className={styles.logo}>Munamii Cakery</h1>
					{/* <img src="/src/assets/images/logotype.png" alt="Munamii Cakery Logotype" /> */}
				</div>
			</div>
			{children}
		</header>
	);
};

export default Header;
