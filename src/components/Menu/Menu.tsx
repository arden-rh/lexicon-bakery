import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu: React.FC = () => {
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

	const handleNavClick = () => {
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
					{isOpen ? (
						<span className="material-symbols-outlined">close</span>
					) : (
						<span className="material-symbols-outlined">menu</span>
					)}
				</button>
			</div>
			{isOpen && (
				<nav className={styles.links}>
					<NavLink
						to="/"
						onClick={handleNavClick}
						className={({ isActive }) =>
							isActive ? styles.active : ""
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/about"
						onClick={handleNavClick}
						className={({ isActive }) =>
							isActive ? styles.active : ""
						}
					>
						About
					</NavLink>
					<NavLink
						to="/products"
						onClick={handleNavClick}
						className={({ isActive }) =>
							isActive ? styles.active : ""
						}
					>
						Products
					</NavLink>
					<NavLink
						to="/contact"
						onClick={handleNavClick}
						className={({ isActive }) =>
							isActive ? styles.active : ""
						}
					>
						Contact
					</NavLink>
				</nav>
			)}
		</>
	);
};

export default Menu;
