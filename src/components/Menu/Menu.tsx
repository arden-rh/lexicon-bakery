import React from "react";
import styles from "@/components/Menu/Menu.module.scss";

interface MenuProps {
	currentPage: string;
	setCurrentPage: (page: string) => void;
}

const Menu: React.FC<MenuProps> = ({ currentPage, setCurrentPage }) => {

	const [isOpen, setIsOpen] = React.useState(false);
	const [isDesktop, setIsDesktop] = React.useState(false);

	React.useEffect(() => {
		const checkWidth = () => {
			const desktop = window.innerWidth >= 768;
			setIsDesktop(desktop);
			if (desktop) {
				setIsOpen(true);
			} else {
				setIsOpen(false);
			}
		};

		checkWidth();
		window.addEventListener("resize", checkWidth);

		return () => window.removeEventListener("resize", checkWidth);
	}, []);

	return (
		<>
			<div className={styles.menuButtonWrapper}>
				<button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
					<span className="material-symbols-outlined">menu</span>
				</button>
			</div>
			{isOpen && (
				<nav className={styles.links}>
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
			)}
		</>
	);
};

export default Menu;
