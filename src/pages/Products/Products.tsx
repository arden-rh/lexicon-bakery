import { useState } from "react";
import type { ProductResponse, Product } from "../../types/product.types";
import rawData from "../../data/products.json";

import styles from "@/pages/Products/Products.module.scss";

import { ProductCard } from "@/components/ProductCard/ProductCard";
import { ProductGrid } from "@/components/ProductGrid/ProductGrid";
import { ProductModule } from "@/components/ProductModule/ProductModule";

// Cast the imported JSON to your Interface
const data = rawData as ProductResponse;
const products: Product[] = data.products;
const categories: string[] = data.metadata.categories;

const Products = () => {
	const [currentCategory, setCurrentCategory] = useState<string>("cupcakes");
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(
		null
	);

	const handleProductClick = (product: Product) => {
		setSelectedProduct(product);
	};

	const handleCloseModal = () => {
		setSelectedProduct(null);
	};

	const goToCategory = (category: string) => {
		setCurrentCategory(category);
		setSelectedProduct(null);
	};

	return (
		<section className={styles.products}>
			<div className={styles.hero}>
				<h2 className="pageHeader">Our Products</h2>
				<p className="textBox">
					Discover our delicious range of baked goods, crafted with
					love and the finest ingredients to satisfy your cravings.
				</p>
			</div>
			<section className={styles.productList}>
				<div className={styles.categories}>
					<h3>Categories</h3>
					<p>
						Read more about each product by clicking on the images
						below.
					</p>
					<div className={styles.categoryButtons}>
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setCurrentCategory(category)}
								className={
									currentCategory === category
										? styles.activeCategory
										: ""
								}
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
							<ProductCard
								key={product.id}
								product={product}
								onClick={handleProductClick}
							/>
						))}
				</ProductGrid>
			</section>
			{selectedProduct && (
				<ProductModule
					product={selectedProduct}
					onClose={handleCloseModal}
					goToCategory={goToCategory}
				/>
			)}
		</section>
	);
};

export default Products;
