export type Category = "cupcakes" | "wedding-cakes";
export type InStock = true | false;

export interface Product {
	id: string;
	title: string;
	category: Category;
	price: number;
	image: string;
	description: string;
	rating: number;
	inStock: InStock;
	features?: string[]; // Optional array for things like "Gluten-Free"
}

export interface ProductResponse {
	metadata: {
		generatedAt: string;
		totalItems: number;
		categories: Category[];
		currency: string;
		storeStatus: "open" | "closed";
	};
	products: Product[];
}
