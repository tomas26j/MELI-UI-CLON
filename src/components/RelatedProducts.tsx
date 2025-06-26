import React from "react";

const relatedProducts = [
  {
    id: 1,
    name: "Moto G24 Power 128gb + 8gb Azul Medianoche...",
    price: 399990,
    oldPrice: null,
    discount: null,
    cuotas: 6,
    cuotaValue: 66665,
    image: "/0_MercadoPago.svg",
    envioGratis: true,
    cuotasText: "Mismo precio en 6 cuotas de $ 66.665"
  },
  {
    id: 2,
    name: "Google Streamer Smart Tv 32gb Netflix Google Tv 4...",
    price: 182350,
    oldPrice: 280000,
    discount: 34,
    cuotas: 6,
    cuotaValue: 41730,
    image: "/1_Visa.svg",
    envioGratis: true,
    cuotasText: "en 6 cuotas de $ 41.730"
  }
];

const RelatedProducts = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-medium mb-4">Productos del vendedor</h2>
      <div className="flex flex-col md:flex-row gap-4">
        {relatedProducts.map((product) => (
          <div key={product.id} className="flex border border-gray-200 rounded-lg p-4 w-full md:w-1/2 items-center gap-4 hover:border-blue-500 transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-contain rounded bg-gray-50"
            />
            <div className="flex-1">
              <h3 className="text-base font-medium text-gray-800 mb-1 line-clamp-2">{product.name}</h3>
              {product.oldPrice && (
                <span className="text-xs text-gray-400 line-through mr-2">$ {product.oldPrice.toLocaleString()}</span>
              )}
              <span className="text-lg font-bold text-gray-900">$ {product.price.toLocaleString()}</span>
              {product.discount && (
                <span className="text-xs text-green-600 font-semibold ml-2">{product.discount}% OFF</span>
              )}
              <div className="text-sm text-emerald-700 mt-1">{product.cuotasText}</div>
              {product.envioGratis && (
                <div className="text-sm text-green-600 font-semibold mt-1">Envío gratis</div>
              )}
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="text-blue-600 text-sm mt-4 inline-block hover:underline">Ir a la página del vendedor</a>
    </div>
  );
};

export default RelatedProducts; 