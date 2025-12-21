import { useEffect, useState } from "react";
import styles from "@/components/Menu/Menu.module.scss";

interface MenuProps {
	currentPage: string;
	setCurrentPage: (page: string) => void;
}

const Menu: React.FC<MenuProps> = ({ currentPage, setCurrentPage }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
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

	const navigateToPage = (page: string) => {
		setCurrentPage(page);
		if (!isDesktop) {
			setIsOpen(false);
		}
	};

	return (
		<>
			<div className={styles.menuButtonWrapper}>
				<button
					className={styles.menuButton}
					onClick={() => setIsOpen(!isOpen)}
				>
					<span className="material-symbols-outlined">menu</span>
				</button>
			</div>
			{isOpen && (
				<nav className={styles.links}>
					<button
						onClick={() => navigateToPage("home")}
						className={currentPage === "home" ? styles.active : ""}
					>
						Home
					</button>
					<button
						onClick={() => navigateToPage("about")}
						className={currentPage === "about" ? styles.active : ""}
					>
						About
					</button>
					<button
						onClick={() => navigateToPage("products")}
						className={
							currentPage === "products" ? styles.active : ""
						}
					>
						Products
					</button>
					<button
						onClick={() => navigateToPage("contact")}
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
