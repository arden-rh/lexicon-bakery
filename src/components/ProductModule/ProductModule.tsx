import type { Product } from "@/types/product.types";
import styles from "./ProductModule.module.scss";

interface ProductModuleProps {
	product: Product;
	onClose: () => void;
	goToCategory: (category: string) => void;
}

const ProductModule: React.FC<ProductModuleProps> = ({
	product,
	onClose,
	goToCategory,
}) => {
	return (
		<>
			<div className={styles.backdrop} onClick={onClose} />
			<div
				className={styles.productModule}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={styles.imageContainer}>
					<img src={product.image} alt={product.title} />
					<button
						onClick={() => goToCategory(product.category)}
						className={styles.category}
					>
						{product.category}
					</button>
					<button className={styles.closeButton} onClick={onClose}>
						<span className="material-symbols-outlined">close</span>
					</button>
				</div>
				<div className={styles.content}>
					<div className={styles.topContent}>
						<h4>{product.title}</h4>
						<div className={styles.priceStock}>
							<span className={styles.price}>
								Price: {product.price} kr / cupcake
							</span>

							<span className={styles.stock}>
								In stock: {product.inStock ? "Yes" : "No"}
							</span>
						</div>
						<p className={styles.description}>
							{product.description}
						</p>
					</div>
					{product.features && (
						<ul className={styles.features}>
							{product.features.map((feature, index) => (
								<li key={index}>{feature}</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	);
};

export default ProductModule;
