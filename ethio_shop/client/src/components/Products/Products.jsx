import { Link } from "react-router-dom";

function Products({ ProductsData }) {
  return (
    <section id="products">
      <div className="mt-14 mb-20">
        <div className="container mx-auto">
          {/* Header section */}
          <div className="text-center mb-10 max-w-600px max-auto">
            <p className="text-lg md:text-xl lg:text-2xl text-primary">
              Top selling products
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Products
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-500">
              Best quality products
            </p>
          </div>
          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center place-items-center">
            {/* Product cards */}
            {ProductsData.map((data) => {
              return (
                <div
                  key={data.id}
                  className="space-y-3 text-center rounded-md bg-white shadow-md hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                >
                  <img
                    src={data.img}
                    alt={data.name}
                    className="h-56 w-full object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{data.name}</h3>
                    <p className="text-sm text-gray-700">{data.price}</p>
                    <Link to={`/product/${data.id}`} key={data.id}>
                      <button className="btn-buy-now bg-black text-white py-2 px-4 rounded">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
