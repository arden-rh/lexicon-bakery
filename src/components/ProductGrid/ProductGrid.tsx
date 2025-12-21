import React from 'react';
import styles from '@/components/ProductGrid/ProductGrid.module.scss';

interface ProductGridProps {
   children: React.ReactNode;
};

export const ProductGrid: React.FC<ProductGridProps> = ({ children }) => {
    return (
        <div className={styles.productGrid}>
			{children}
        </div>
    )
};
