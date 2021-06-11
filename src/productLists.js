import React from 'react';
import { useHistory } from 'react-router-dom';

const ProductLists = props => {
  const history = useHistory();

  const showProductDetail = product => {
    props.selectedProduct(product);
    history.push('/product');
  };

  console.log(props.products);
  const products = props.products;
  return (
    <div className="container">
      <div className="row">
        {products && products.length > 0 ? (
          products.map(product => {
            return (
              <div key={product.id} className="col-lg-4 col-md-6 col-sm-12">
                <div
                  onClick={() => showProductDetail(product)}
                  className="card m-2 mycard"
                >
                  <img
                    style={{ width: '300px', height: '350px' }}
                    className="card-img-top d-flex align-self-center"
                    src={product.image}
                    alt="Card image cap"
                  />
                  <div
                    style={{ height: '185px', overflow: 'hidden' }}
                    className="card-body"
                  >
                    <h5 className="card-title">
                      {product.title}
                      <h5>${product.price}</h5>
                    </h5>
                    <p className="card-text">
                      {product.description.slice(0, 65) + '...'}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h3>No products</h3>
        )}
      </div>
    </div>
  );
};

export default ProductLists;
