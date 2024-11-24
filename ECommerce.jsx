import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import image1 from './Images/image1.jpg';
import image2 from './Images/image2.jpg';
import image3 from './Images/image3.jpg';
import image4 from './Images/image4.jpg';
import image5 from './Images/image5.jpg';
import image6 from './Images/image6.jpg';
import image7 from './Images/image7.jpg';
import image8 from './Images/image8.jpg';
import image9 from './Images/image9.jpg';
import image10 from './Images/image10.jpg';
import image11 from './Images/image11.jpg';
import icon from './Images/icon.png'
import './ECommerce.css';

const ECommerce = () => {
  const [List, setList] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const imageArr = [
    { image: image1, ProductName: 'Black Snickers', StrikeAmount: 850, Price: 450 },
    { image: image2, ProductName: 'Casual Whites', StrikeAmount: 650, Price: 350 },
    { image: image3, ProductName: 'Casual Brown', StrikeAmount: 950, Price: 750 },
    { image: image4, ProductName: 'Black Casuals', StrikeAmount: 750, Price: 650 },
    { image: image5, ProductName: 'Green Western', StrikeAmount: 650, Price: 550 },
    { image: image6, ProductName: 'Red Rat', StrikeAmount: 800, Price: 600 },
    { image: image7, ProductName: 'ROASTER', StrikeAmount: 900, Price: 750 },
    { image: image8, ProductName: 'HOT STYLE', StrikeAmount: 1850, Price: 980 },
    { image: image9, ProductName: 'GLOSSY LIFE', StrikeAmount: 1250, Price: 900 },
    { image: image10, ProductName: 'SPARX', StrikeAmount: 800, Price: 500 },
    { image: image11, ProductName: 'Whites', StrikeAmount: 550, Price: 300 },
    { image: image1, ProductName: 'Black Shoe', StrikeAmount: 850, Price: 450 }
  ];
  const ListingProducts = (index) => {
    const product = imageArr[index];
    setList((prev) => [...prev, product]);
    setIsPopupVisible(true);
    setTimeout(() => setIsPopupVisible(false), 2000);
  };
  const RemoveProduct = (index) => {
    const updatedList = List.filter((_, i) => i !== index);
    setList(updatedList);
  };
  return (
    <div id='body'>
      {isPopupVisible && (
        <div
          className="popup-overlay d-flex justify-content-center align-items-center position-fixed top-0 left-0"
          style={{
            left: '0',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          }}
        >
          <div
            className="popup-content p-3 rounded-2"
            style={{
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              maxWidth: '300px',
              width: '100%',
            }}
          >
            <h4 className="text-center">Product Added to Cart</h4>
          </div>
        </div>
      )}

      <div className="container-fluid "style={{backgroundColor:'#E9ECE'}}>
        <div className="row">
          <nav className="navbar navbar-light bg-light p-2">
            <img src={icon} alt="" width='40' height='40'
              className='rounded p-1 ' /><h4 className='text-black'>WalkAura</h4>
            <form action="" className="d-flex m-auto justify-content-center gap-5">
              <input
                type="search"
                placeholder="Search products"
                className="ps-3 border-1 border-dark rounded-1"
                style={{ width: '350px' }}
              />
              <button className="rounded btn btn-outline-dark">Search</button>
            </form>
            <label htmlFor="check" className="rounded btn btn-outline-dark me-4">
              <span className="bi bi-cart-check"></span>
            </label>
          </nav>
        </div>

        <div className="row gap-3 d-flex justify-content-center mt-3">
          {imageArr.map((val, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
              <div className="card m-3 p-2" style={{ Width: '100%' }}>
                <img src={val.image} alt={val.ProductName} width="200" height="250" className="m-auto" />
                <div className="card-title ms-4 mt-3 mb-3">
                  <b>Product Name: {val.ProductName}</b>
                  <br />
                  <b>
                    Price: <s className="text-danger">{val.StrikeAmount}</s> {val.Price}
                  </b>
                </div>
                <div className="button d-flex justify-content-center gap-2" style={{ width: '100%' }}>
                  <button className="btn btn-outline-dark">Buy Now</button>
                  <button className="btn btn-outline-dark" onClick={() => ListingProducts(index)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <input type="checkbox" id="check" style={{ display: 'none' }} />
      <div className="card overflow-scroll" id="Display">
        <div className='' style={{ height: '100vh' }}>
          <h5 className=" Cart text-center m-3 text-dark text-decoration-underline ">CART ITEMS  <span className="bi bi-cart-check"></span></h5>
          <div className="row m-3">
            {List.map((val, index) => (
              <div key={index} className="col-12 d-flex justify-content-center ">
                <div className="card m-2 p-2" style={{ width: 'fit-content' }}>
                  <img src={val.image} alt={val.ProductName} width="200" height="250" className="m-auto" />
                  <div className="card-title" style={{ width: '100%' }}>
                    <b className=''>Product Name: {val.ProductName}</b>
                    <br />
                    <b>
                      Price: <s className="text-danger">{val.StrikeAmount}</s> {val.Price}
                    </b>
                  </div>
                  <button className="btn btn-outline-dark m-2">Buy Now</button>
                  <button className="btn btn-outline-dark m-2" onClick={() => RemoveProduct(index)}>
                    Remove Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className='bg-light border-top mt-3 border-dark' style={{height:'80px',width:'100%'}}>
        <div className="container pt-3">
          <div className="row pb-2">
            <div className="col d-flex ms-5">
            <span className='text-end'>Contact   Number - 7200877947</span>
            </div>
            <div className="col">
            <span className='text-end'>Email - jayasuryan77@gmail.com</span>
            </div>
            <div className="col">
            <span className='text-end'>Address - Salem, Kondalampatti , 636010</span>
            </div>
            
            <div className="col d-flex justify-content-end mt-2"> 
        <img src={icon} alt="" width='40' height='40'
              className='rounded p-1' /><h4 className='text-black'>WalkAura</h4>
              </div>
            </div>
               </div>
               
      </footer>
    </div>
  );
};

export default ECommerce;
