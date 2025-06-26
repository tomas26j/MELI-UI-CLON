import { Heart } from 'lucide-react';
import ProductDetails from './ProductDetails';

const ProductInfo = () => {
  return (
    <div className="relative max-w-[350px] bg-white p-0">
      {/* Heart icon arriba a la derecha */}
      <div className="absolute top-0 right-0 mt-2 mr-2">
        <Heart className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer" />
      </div>

      {/* Estado y vendidos */}
      <div className="text-xs text-gray-400 mb-1">Nuevo | +50mil vendidos</div>

      {/* Título */}
      <h1 className="text-2xl font-normal text-gray-800 leading-tight mb-2">
        Samsung Galaxy A15 128 GB<br />Negro azulado 4 GB RAM
      </h1>

      {/* Rating */}
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-sm font-medium text-gray-700">4.7</span>
        <div className="flex text-blue-500 text-base">
          <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
        </div>
        <span className="text-xs text-gray-500">(14735)</span>
      </div>

      {/* Precios */}
      <div className="mb-1">
        <div className="text-gray-400 line-through text-base">$ 359.990</div>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-light text-gray-800 leading-none">$ 244.470</span>
          <span className="text-green-600 text-base font-semibold">32% OFF</span>
        </div>
        <div className="text-sm text-gray-700 mt-1">en 6 cuotas de <span className="font-medium">$ 55.946<sup className='text-xs'>96</sup></span></div>
        <div className="text-xs text-gray-500">Precio sin impuestos nacionales: $ 244.470</div>
        <button className="text-blue-600 text-sm mt-1">Ver los medios de pago</button>
      </div>

      {/* Color */}
      <div className="mt-4 mb-2">
        <div className="text-sm mb-1">Color: <span className="font-medium">Negro Azulado</span></div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 border-2 border-blue-500 rounded bg-gradient-to-b from-blue-900 to-black flex items-center justify-center">
            <img src="/public/logo_large_plus.webp" alt="Negro Azulado" className="w-8 h-8 rounded object-cover" />
          </div>
        </div>
      </div>

      {/* Separador */}
      <hr className="my-4 border-gray-200" />

      {/* Sección de características */}
      <ProductDetails />
    </div>
  );
};

export default ProductInfo;