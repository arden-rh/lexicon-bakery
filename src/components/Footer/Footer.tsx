import { useState } from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
	const [showCredits, setShowCredits] = useState(false);

	return (
		<footer className={styles.footer}>
			<p>&copy; In progress</p>
			<div className={styles.creditsHeader}>
				<h3>Unsplash credits</h3>
				<button onClick={() => setShowCredits(!showCredits)}>
					Show Credits
				</button>
			</div>
			{showCredits && (
				<div>
					<h4>Cupcakes</h4>
					<ul>
						<li>
							Photo by{" "}
							<a href="https://unsplash.com/@luisanazl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								luisana zerpa
							</a>{" "}
							on{" "}
							<a href="https://unsplash.com/photos/white-and-red-cupcake-with-white-icing-on-top-MJPr6nOdppw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Unsplash
							</a>
						</li>
						<li>
							Photo by{" "}
							<a href="https://unsplash.com/@lanamattice?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Lana Mattice
							</a>{" "}
							on{" "}
							<a href="https://unsplash.com/photos/white-and-brown-cupcakes-on-white-table-gKrxflp1wv0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Unsplash
							</a>
						</li>
						<li>
							Photo by{" "}
							<a href="https://unsplash.com/@saracervera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Sara Cervera
							</a>{" "}
							on{" "}
							<a href="https://unsplash.com/photos/cupcake-with-pink-icing-on-top-zEwgRzJJIvk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Unsplash
							</a>
						</li>
						<li>
							Photo by{" "}
							<a href="https://unsplash.com/@lore_schodts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Lore Schodts
							</a>{" "}
							on{" "}
							<a href="https://unsplash.com/photos/a-table-topped-with-cupcakes-covered-in-frosting-FIxdY7jOBus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Unsplash
							</a>
						</li>
						<li>
							Photo by{" "}
							<a href="https://unsplash.com/@naz23235?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Naz Khan
							</a>{" "}
							on{" "}
							<a href="https://unsplash.com/photos/pink-cupcake-with-pink-icing-on-top-3nO8wQbVDM8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Unsplash
							</a>
						</li>
						<li>
							Photo by{" "}
							<a href="https://unsplash.com/@wachalala?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Jr R
							</a>{" "}
							on{" "}
							<a href="https://unsplash.com/photos/chocolate-cupcake-with-white-icing-on-white-ceramic-plate-90HdOlGbjck?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Unsplash
							</a>
						</li>
						<li>
							Photo by{" "}
							<a href="https://unsplash.com/@darkouu023?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Darko Trajkovic
							</a>{" "}
							on{" "}
							<a href="https://unsplash.com/photos/a-cupcake-with-chocolate-frosting-and-a-snowflake-on-top-Kh6iEyCS-Mg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Unsplash
							</a>
						</li>
						<li>
							Photo by{" "}
							<a href="https://unsplash.com/@bryamb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Bryam Blanco
							</a>{" "}
							on{" "}
							<a href="https://unsplash.com/photos/cupcakes-with-white-icing-on-top-nXKWLn8y9qE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Unsplash
							</a>
						</li>
					</ul>
					<h4>Wedding Cakes</h4>
					<ul>
						<li></li>
					</ul>
				</div>
			)}
		</footer>
	);
};

export default Footer;
