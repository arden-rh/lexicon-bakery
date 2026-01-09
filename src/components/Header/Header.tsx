import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
	children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
	return (
		<header className={styles.header}>
			<div className={styles.topRow}>
				<a href="/" className={styles.branding}>
					<img src="/images/icon.png" alt="Munamii Cakery Logo" />
					<h1 className={styles.logo}>Munamii Cakery</h1>
				</a>
			</div>
			{children}
		</header>
	);
};

export default Header;
