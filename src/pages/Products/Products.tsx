import { useState } from "react";
import type { ProductResponse, Product } from "../../types/product.types";
import rawData from "../../data/products.json";

import styles from "@/pages/Products/Products.module.scss";

import { ProductCard } from "@/components/ProductCard/ProductCard";
import { ProductGrid } from "@/components/ProductGrid/ProductGrid";

// Cast the imported JSON to your Interface
const data = rawData as ProductResponse;
const products: Product[] = data.products;
const categories: string[] = data.metadata.categories;

const Products = () => {
	const [currentCategory, setCurrentCategory] = useState<string>("cupcakes");
	return (
		<>
			<section className={styles.hero}>
				<h2>Our Products</h2>
				<p>
					Discover our delicious range of baked goods, crafted with
					love and the finest ingredients to satisfy your cravings.
				</p>
			</section>
			<section className={styles.productList}>
				<div className={styles.categories}>
					<h3>Categories</h3>
					<div className={styles.categoryButtons}>
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setCurrentCategory(category)}
							>
								{category}
							</button>
						))}
					</div>
				</div>
				<ProductGrid>
					{products
						.filter(
							(product) => product.category === currentCategory
						)
						.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</ProductGrid>
			</section>
		</>
	);
};

export default Products;
