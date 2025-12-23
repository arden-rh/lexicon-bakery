import React from "react";
import styles from "./ProductCard.module.scss";
import type { Product } from "@/types/product.types";

interface ProductCardProps {
	product: Product;
	onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
	return (
		<button
			className={styles.card}
			key={product.id}
			onClick={() => onClick(product)}
			aria-label={`View details for ${product.title}`}
		>
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
			<div className={styles.content}>
				<h4 className={styles.title}>{product.title}</h4>
				{product.category == "wedding-cakes" && (
					<p className={styles.price}>
						{product.price.toFixed(2)} kr / portion
					</p>
				)}
				{product.category == "cupcakes" && (
					<p className={styles.price}>
						{product.price.toFixed(2)} kr / cupcake
					</p>
				)}
			</div>
		</button>
	);
};
