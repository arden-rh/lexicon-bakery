import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import Products from "./pages/Products/Products.tsx";
import Contact from "./pages/Contact.tsx";
import Layout from "./components/Layout/Layout.tsx";

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/products" element={<Products />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
