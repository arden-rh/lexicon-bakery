import styles from "./Contact.module.scss";

const Contact = () => {
	return (
		<section className={styles.contact}>
			<div>
				<h2 className="pageHeader">Contact Us</h2>
				<p>
					Home delivery service: All the city of Stockholm (redacted)
					and Malmo (redacted) with additional cost.
					<span>
						Place to pick up order: Via la Costa Avenue. Blue Port
						gated neighbourhood. We will send you the GPS Location
						via WhatsApp.
					</span>
					<span>
						Orders must be placed 2 days before for greater
						security, processing and availability.
					</span>
				</p>
			</div>
			<div className={styles.openingHours}>
				<h3>Opening Hours</h3>
				<p>Tuesday to Saturday 9 a.m. at 2 p.m.</p>
			</div>
		</section>
	);
};

export default Contact;
