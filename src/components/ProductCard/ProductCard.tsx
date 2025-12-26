import React from "react";
import styles from "./ProductCard.module.scss";
import type { Product } from "@/types/product.types";

interface ProductCardProps {
	product: Product;
	onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
	product,
	onClick,
}) => {
	return (
		<button
			className={styles.card}
			key={product.id}
			onClick={() => onClick(product)}
			aria-label={`View details for ${product.title}`}
		>
			<div className={styles.imageContainer}>
				<img
					src={product.image}
					alt={product.title}
					className={styles.image}
				/>
				{product.features && (
					<ul className={styles.features}>
						{product.features.map((feature, index) => (
							<li key={index}>{feature}</li>
						))}
					</ul>
				)}
				{product.category == "wedding-cakes" && (
					<div className={styles.price}>
						{product.price} kr / portion
					</div>
				)}
				{product.category == "cupcakes" && (
					<div className={styles.price}>
						{product.price} kr / cupcake
					</div>
				)}
			</div>
			<div className={styles.content}>
				<h4 className={styles.title}>{product.title}</h4>
			</div>
		</button>
	);
};
