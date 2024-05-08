import { useParams, Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "../../App";

const Cart = () => {
  const params = useParams();
  const { myCart, setMyCart } = useContext(AppContext);

  useEffect(() => {
    myCart.push({ name: params.name, price: params.price });
    setMyCart([...myCart]);
  }, []);

  const clearCart = () => {
    setMyCart([]);
  };

  console.log("my cart:", myCart);
  return (
    <div className="container mx-auto mt-14">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {myCart.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-gray-700">{item.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          onClick={() => clearCart()}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
        >
          Clear Cart
        </button>
        <button
          onClick={() => console.log("item purchsed")}
          className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
        >
          order now
        </button>
      </div>
      <div className="mt-2">
        <Link to="/" className="text-blue-500 hover:text-blue-600 underline">
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
