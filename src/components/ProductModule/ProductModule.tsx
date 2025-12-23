import type { Product } from "@/types/product.types";
import styles from "./ProductModule.module.scss";

interface ProductModuleProps {
	product: Product;
	onClose: () => void;
}

export const ProductModule: React.FC<ProductModuleProps> = ({
	product,
	onClose,
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
					<button className={styles.closeButton} onClick={onClose}>
						<span className="material-symbols-outlined">close</span>
					</button>
				</div>
				<div className={styles.details}>
					<h4>{product.title}</h4>
					<p>{product.description}</p>
					<p>Price: ${product.price}</p>
					<p>Category: {product.category}</p>
					<p>In stock: {product.inStock ? "Yes" : "No"}</p>
				</div>
			</div>
		</>
	);
};

export default ProductModule;
