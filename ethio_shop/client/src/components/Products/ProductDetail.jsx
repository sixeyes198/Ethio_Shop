import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = (props) => {
  const { ProductsData } = props;
  const [prod, setProd] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const product = ProductsData.find((item) => item.id == params.id);
    console.log(product);
    setProd(product);
  }, []);

  const goToCart = () => {
    navigate(`/cart/${prod.name}/${prod.price}`);
  };

  return (
    <section id="product-detail">
      <div className="container mx-auto">
        <h1>Name: {prod.name}</h1>
        <img src={prod.img} alt={prod.name} />
        <p>Price: {prod.price}</p>
        <p>Description: {prod.description}</p>
        <button
          onClick={() => goToCart()}
          className="btn-buy-now bg-black text-white py-2 px-4 rounded"
        >
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default ProductDetail;
