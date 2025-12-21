import React from "react";
import styles from "@/components/ProductCard/ProductCard.module.scss";
import type { Product } from "@/types/product.types";

interface ProductCardProps {
	product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	return (
		<div className={styles.card} key={product.id}>
			<img
				src={product.image}
				alt={product.title}
				className={styles.image}
			/>
			<div className={styles.content}>
				<h4 className={styles.title}>{product.title}</h4>
				<p className={styles.price}>${product.price.toFixed(2)}</p>
				<p className={styles.description}>{product.description}</p>
			</div>
		</div>
	);
};
