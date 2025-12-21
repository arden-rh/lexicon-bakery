import React from "react";
import styles from "@/components/Layout/Layout.module.scss";
import Header from "../Header/Header";

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
				<nav className={styles.navbar}>
					<button
						onClick={() => setCurrentPage("home")}
						className={currentPage === "home" ? styles.active : ""}
					>
						Home
					</button>
					<button
						onClick={() => setCurrentPage("about")}
						className={currentPage === "about" ? styles.active : ""}
					>
						About
					</button>
					<button
						onClick={() => setCurrentPage("products")}
						className={
							currentPage === "products" ? styles.active : ""
						}
					>
						Products
					</button>
					<button
						onClick={() => setCurrentPage("contact")}
						className={
							currentPage === "contact" ? styles.active : ""
						}
					>
						Contact
					</button>
				</nav>
			</Header>

			<main className={styles.mainContent}>{children}</main>
			<footer className={styles.footer}>
				<p>&copy; In progress</p>
			</footer>
		</div>
	);
};

export default Layout;
