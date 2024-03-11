import React from 'react';
import './Styles/home.css';
import { Link } from 'react-router-dom';
import { products } from '../data/Products';
import ProductCard from './Components/ProductCard'
import { category } from '../data/category';


const Home = () => {

  return (
    <div>
      <div className="container">
        <div className="category-container">
          {category.map((product, index) => (
            <div className="shop-category">
              <Link to={product.link}><img src={product.image} alt={product.name} className="shopImage" id='cat-img' /></Link>
              <label for='cat-img' className='catlabel'>{product.name}</label>
            </div>
          ))}
        </div>
        <div className="productCardContainer">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
