import { useState } from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
	const [showSuccess, setShowSuccess] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setShowSuccess(true);

		// Reset form
		e.currentTarget.reset();

		// Hide message after 5 seconds
		setTimeout(() => {
			setShowSuccess(false);
		}, 5000);
	};

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
			<div className={styles.contactForm}>
				<h3>Contact Us</h3>
				{showSuccess && (
					<div className={styles.successMessage}>
						✓ Message sent successfully! We'll get back to you as
						soon as possible.
					</div>
				)}
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.formFields}>
						<div>
							<label htmlFor="name">Name</label>
							<input type="text" id="name" name="name" required />

							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								required
							/>
						</div>
						<div>
							<label htmlFor="message">Message</label>
							<textarea
								id="message"
								name="message"
								rows={5}
								required
							/>
						</div>
					</div>
					<button type="submit">Send Message</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
