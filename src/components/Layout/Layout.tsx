import React from "react";
import styles from "@/components/Layout/Layout.module.scss";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

interface LayoutProps {
	children: React.ReactNode;
	currentPage: string;
	setCurrentPage: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({
	children,
	currentPage,
	setCurrentPage,
}) => {
	return (
		<div className={styles.wrapper}>
			<Header>
				<Menu
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</Header>
			<main className={styles.mainContent}>{children}</main>
			<footer className={styles.footer}>
				<p>&copy; In progress</p>
			</footer>
		</div>
	);
};

export default Layout;
