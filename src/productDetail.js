import React from 'react';
import { useHistory } from 'react-router-dom';
import ReactImageZoom from 'react-image-zoom';

const ProductDetail = props => {
  const history = useHistory();
  const product = props.product;
  const obj = {
    width: 300,
    zoomWidth: 300,
    img: product.image,
    zoomPosition: 'right'
  };

  if (JSON.stringify(product) !== '{}') {
    return (
      <div className="container">
        <a
          onClick={() => {
            history.push('/');
          }}
        >
          Go Back
        </a>
        <div className="row m-3">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="img-zoom-container">
              {/* <img style={{ width: '80%' }} src={product.image} /> */}
              <ReactImageZoom {...obj} />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h3>{product.title}</h3>
            <h5>Price - ${product.price}</h5>
            <div className="m-3">
              <h5>Discription</h5>
              <p>{product.description}</p>
            </div>
            <div className="m-3">
              <h5>Category: </h5>
              <span className="category-tag">{product.category}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <a
          onClick={() => {
            history.push('/');
          }}
        >
          Go Back
        </a>
        <h5>Select product...</h5>
      </div>
    );
  }
};

export default ProductDetail;
