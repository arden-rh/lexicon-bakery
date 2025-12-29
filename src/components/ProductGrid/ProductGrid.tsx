import React from 'react';
import styles from "./ProductGrid.module.scss";

interface ProductGridProps {
   children: React.ReactNode;
};

const ProductGrid: React.FC<ProductGridProps> = ({ children }) => {
	return <div className={styles.productGrid}>{children}</div>;
};

export default ProductGrid;
