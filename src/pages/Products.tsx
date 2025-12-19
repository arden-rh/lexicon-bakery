import rawData from '../data/products.json';
import type { ProductResponse, Product } from '../types/product.types';

// Cast the imported JSON to your Interface
const data = rawData as ProductResponse;

const Products = () => {
    return (
        <section>
            <h2>Our Products</h2>
            <ul>
                <li>Assorted Pastries</li>
                <li>Custom Cakes</li>
            </ul>
        </section>
    )
}

export default Products