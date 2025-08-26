import { useState } from "react"
import Nav from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommned from "./Recommended/Recommned"
import Sidebar from "./Sidebar/Sidebar"
import data from "./DB/date"
import Card from "./components/Card"
import "./index.css"

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")

  const handleInputChange = event => setQuery(event.target.value)
  const handleChange = event => setSelectedCategory(event.target.value)
  const handleClick = event => setSelectedCategory(event.target.value)

  const filterItems = data.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  )

  function filterData(data, selected, query) {
    let filteredProducts = data

    if (query) filteredProducts = filterItems
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      )
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    )
  }

  const result = filterData(data, selectedCategory, query)

  return (
    <div className="app-container">
      <Sidebar handleChange={handleChange} className="sidebar" />
      <div className="main-content">
        <Nav query={query} handleInputChange={handleInputChange} className="navbar" />
        <Recommned handleClick={handleClick} />
        <div className="products-section">{result}</div>
      </div>
    </div>
  )
}

export default App
