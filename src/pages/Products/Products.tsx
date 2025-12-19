import { ProductCard } from "@/components/ProductCard/ProductCard";

import styles from '@/pages/Products/Products.module.scss';


import rawData from "../../data/products.json";
import type { ProductResponse, Product } from "../../types/product.types";

// Cast the imported JSON to your Interface
const data = rawData as ProductResponse;
const products: Product[] = data.products;

const Products = () => {
	return (
		<>
			<section className={styles.hero}>
				<h2>Our Products</h2>
				<ul>
					<li>Assorted Pastries</li>
					<li>Custom Cakes</li>
				</ul>
			</section>
			<section className={styles.productList}>
				<h2>Products</h2>
				<div>
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</section>
		</>
	);
};

export default Products;
