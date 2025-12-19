import { useState } from "react"
import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import Products from "./pages/Products.tsx"
import Contact from "./pages/Contact.tsx"
import Layout from "./components/Layout/Layout.tsx"

const App = () => {

  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        {currentPage === "home" && <Home />}
        {currentPage === "about" && <About />}
        {currentPage === "products" && <Products />}
        {currentPage === "contact" && <Contact />}
      </Layout>


    </>
  )
}

export default App
