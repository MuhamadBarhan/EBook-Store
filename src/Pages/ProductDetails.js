import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../data/Products';
import './Styles/ProductDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const [progress, setProgress] = useState(100);
  const item = products.find((element) => element.id === parseInt(params.id));
  const list = useSelector((state) => state.cart.list);
  const element = list.find((value) => value.id === item.id);

  const addToCart = () => {
    setAlert(true);
    dispatch(addItem(item));

    // Start reducing the progress bar slowly over 3 seconds
    const decrementInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(decrementInterval);
          return 0;
        }
        return prevProgress - 1;
      });
    }, 5); // Decrease the progress every 30 milliseconds

    // Stop decreasing progress bar after 3 seconds
    setTimeout(() => {
      clearInterval(decrementInterval);
      setAlert(false);
    }, 1000);
  };

  return (
    <div>
      {alert && (
        <div>
          <div className="alertBox">
            <span className="alertSuccess">
              Item added to Cart <FontAwesomeIcon icon={faCircleCheck} />
            </span>
          </div>
          <div style={{ width: '100%', }}>
            <div
              style={{
                width: `${progress}%`,
                height: '5px',
                backgroundColor: '#cd004b',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>
      )}
      <div className="product-detail" key={item.id}>
        <div className="pd-image-container">
          <img src={item.image} alt={item.name} className="pd-image" />
        </div>
        <div className="pd-desc">
          <h3 style={{ paddingLeft: '0.5rem', color: '#7A7A7A' }}>{item.name}</h3>
          <span style={{ paddingLeft: '0.5rem', fontWeight: '700', fontSize: '30px' }}>Rs.{item.newprice}</span>
          <span style={{ paddingLeft: '0.5rem', color: 'gray', fontWeight: '500' }}>
            <strike>Rs.{item.oldprice}</strike>
          </span>
          <div className="description">
            <p style={{ paddingLeft: '0.5rem', fontWeight:'800',fontSize:'20px' }}>About this book</p>
            <span style={{ paddingLeft: '0.5rem', fontWeight:'400',margin:'4rem 1rem'}}>Author:</span><span>{item.author}</span>
            <p style={{ paddingLeft: '0.5rem', color: '#7A7A7A', width: '500px' }}>{item.desc}</p>
          </div>

          <div className="buyProduct">
            {element?.count > 0 ? (
              <button className="pd-btn goto" onClick={() => navigate('/cart')}>
                <FontAwesomeIcon icon={faCircleCheck} /> Go to Cart
              </button>
            ) : (
              <button className="pd-btn cart" onClick={addToCart}>
                <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
              </button>
            )}
            <button className="pd-btn buy" onClick={() => navigate(`/buynow/${item.id}`)}>
              <FontAwesomeIcon icon={faBoltLightning} /> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
