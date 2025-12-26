import styles from "./Home.module.scss";

const Home = () => {
    return (
		<section className={styles.home}>
			<h2 className="pageHeader">Hi! Welcome to Munamii Cakery!</h2>
			<p className="textBox">
				We offer you the most delicious cakes and cupcakes for all kinds
				of events and celebrations. Browse around to discover what you
				would like to buy.
			</p>
		</section>
	);
}

export default Home
