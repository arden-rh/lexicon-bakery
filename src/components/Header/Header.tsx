import React from "react";
import styles from "@/components/Header/Header.module.scss";

interface HeaderProps {
	children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
	return (
		<header className={styles.header}>
			<div className={styles.branding}>
				<img
					src="/src/static/images/icon.png"
					alt="Munamii Cakery Logo"
				/>
				<h1 className={styles.logo}>Munamii Cakery</h1>
				{/* <img src="/src/static/images/logotype.png" alt="Munamii Cakery Logotype" /> */}
			</div>

			<div>{children}</div>
		</header>
	);
};

export default Header;
