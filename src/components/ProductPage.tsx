import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductDetails from './ProductDetails';
import RelatedProducts from './RelatedProducts';
import Specifications from './Specifications';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import ProductReviews from './ProductReviews';
import InterestProductSections from './InterestProductSections';
import Footer from './Footer';

const ProductPage = () => {
  return (
    <div className="bg-white mx-auto px-4 py-6" style={{ width: '1183px' }}>
      <div className="flex gap-4">
        {/* Left side - Product Gallery */}
        <div className="flex-shrink-0 sticky top-8" style={{ width: '480px', maxHeight: '570px' }}>
          <ProductGallery />
        </div>

        {/* Center - Product Title, Price and Details */}
        <div className="flex-shrink-0 max-w-[350px] w-full" style={{ maxHeight: '750px' }}>
          <ProductInfo />
        </div>

        {/* Right side - Purchase Options */}
        <div className="flex-shrink-0" style={{ width: '300px' }}>
          <div className="sticky top-8 flex flex-col gap-6">
            {/* Bloque 1: Entrega, stock, botones, info vendedor */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col gap-4">
              {/* Entrega */}
              <div>
                <div className="text-green-600 font-medium text-[15px] leading-tight">Llega gratis hoy</div>
                <div className="text-xs text-gray-700 leading-tight">Comprando dentro de las próximas<br/>9 h 31 min</div>
                <button className="text-blue-600 text-xs mt-1 hover:underline">Más formas de entrega</button>
              </div>
              <div>
                <span className="text-green-600 font-medium text-[15px] leading-tight">Retirá gratis a partir de mañana</span>
                <span className="text-gray-700 text-[15px]"> en correos y otros puntos</span>
                <div className="text-xs text-gray-700 leading-tight">Comprando dentro de las próximas<br/>9 h 31 min</div>
                <button className="text-blue-600 text-xs mt-1 hover:underline">Ver en el mapa</button>
              </div>
              {/* Stock */}
              <div className="text-[17px] font-semibold text-gray-800">¡Última disponible!</div>
              {/* Botones */}
              <div className="flex flex-col gap-2">
                <button className="w-full bg-blue-500 text-white py-2.5 rounded font-medium text-[16px] hover:bg-blue-600 transition">Comprar ahora</button>
                <button className="w-full bg-blue-100 text-blue-500 py-2.5 rounded font-medium text-[16px] cursor-not-allowed">Agregar al carrito</button>
              </div>
              {/* Info vendedor */}
              <div className="mt-2">
                <div className="text-xs text-gray-600">Vendido por <span className="text-blue-700 font-medium cursor-pointer hover:underline">CAMUS</span></div>
                <div className="text-xs text-gray-800 font-semibold">MercadoLíder | <span className="font-bold">+10mil ventas</span></div>
                <div className="text-xs text-gray-500">Hace Factura A</div>
              </div>
              {/* Info extra */}
              <div className="mt-2 space-y-1">
                <div className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="text-blue-600">•</span>
                  <span><span className="text-blue-600 cursor-pointer hover:underline">Devolución gratis.</span> Tenés 30 días desde que lo recibís.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="text-blue-600">•</span>
                  <span><span className="text-blue-600 cursor-pointer hover:underline">Compra Protegida,</span> recibí el producto que esperabas o te devolvemos tu dinero.</span>
                </div>
              </div>
            </div>
            {/* Bloque 2: Vendedor */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col items-center gap-3">
              {/* Imagen y nombre */}
              <div className="flex items-center gap-3 w-full">
                <div className="w-[54px] h-[54px] bg-gray-200 rounded overflow-hidden flex items-center justify-center">
                  <span className="text-gray-400 text-lg">CAMUS</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-gray-800">CAMUS</span>
                    <button className="bg-blue-100 text-blue-600 text-xs font-medium rounded px-2 py-0.5 ml-1">Seguir</button>
                  </div>
                  <div className="text-xs text-gray-500">+500 Seguidores <span className="mx-1">•</span> +1000 Productos</div>
                </div>
              </div>
              {/* MercadoLíder Platinum */}
              <div className="w-full mt-1">
                <div className="text-green-600 text-sm font-semibold flex items-center gap-1">
                  <span className="text-lg">🏅</span> MercadoLíder Platinum
                </div>
                <div className="text-xs text-gray-500 -mt-1">¡Uno de los mejores del sitio!</div>
              </div>
              {/* Termómetro */}
              <div className="w-[171px] h-[10px] flex items-center gap-1 mt-2">
                {[0,1,2,3,4].map(i => (
                  <div key={i} className={`w-[51px] h-[6px] rounded ${i===4 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                ))}
              </div>
              {/* Stats */}
              <div className="flex justify-between w-full mt-2">
                <div className="flex flex-col items-center">
                  <span className="text-sm font-semibold text-gray-800">+10mil</span>
                  <span className="text-[11px] text-gray-500">Ventas concretadas</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/public/message-positive-v2.svg" alt="Atención" className="w-6 h-6 mb-0.5" />
                  <span className="text-[11px] text-gray-500">Brinda buena<br/>atención</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/public/time-positive-v2.svg" alt="Despacha a tiempo" className="w-6 h-6 mb-0.5" />
                  <span className="text-[11px] text-gray-500">Despacha sus<br/>productos a tiempo</span>
                </div>
              </div>
              {/* Botón */}
              <button className="w-full bg-blue-100 text-blue-600 font-medium rounded py-2 mt-2 hover:bg-blue-200 transition">Ir a la página del vendedor</button>
            </div>
            {/* Bloque 3: Medios de pago */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col gap-3">
              <div className="text-[17px] font-semibold text-gray-800 mb-1">Medios de pago</div>
              {/* Cuotas sin tarjeta */}
              <div className="mb-2">
                <div className="text-sm text-gray-700 font-medium mb-1">Cuotas sin Tarjeta</div>
                <img src="/public/0_MercadoPago.svg" alt="MercadoPago" width="84" height="32" className="mb-1" />
              </div>
              {/* Tarjetas de crédito */}
              <div className="mb-2">
                <div className="text-sm text-gray-700 font-medium mb-1">Tarjetas de crédito</div>
                <div className="flex items-center gap-2 flex-wrap">
                  <img src="/public/1_Visa.svg" alt="Visa" width="42" height="32" />
                  <img src="/public/2_AmericanExpress.svg" alt="AmericanExpress" width="32" height="32" />
                  <img src="/public/3_MasterCard.svg" alt="MasterCard" width="32" height="32" />
                  <img src="/public/4_NaranjaX.svg" alt="NaranjaX" width="70" height="32" />
                </div>
              </div>
              {/* Tarjetas de débito */}
              <div className="mb-2">
                <div className="text-sm text-gray-700 font-medium mb-1">Tarjetas de débito</div>
                <div className="flex items-center gap-2 flex-wrap">
                  <img src="/public/5_VisaDebito.svg" alt="Visa Débito" width="70" height="32" />
                  <img src="/public/6_maestro.svg" alt="Maestro" width="32" height="32" />
                  <img src="/public/7_CabalDebito.svg" alt="Cabal Débito" width="60" height="32" />
                  <img src="/public/8_MasterCardDebito.svg" alt="MasterCard Débito" width="60" height="32" />
                </div>
              </div>
              {/* Efectivo */}
              <div className="mb-2">
                <div className="text-sm text-gray-700 font-medium mb-1">Efectivo</div>
                <div className="flex items-center gap-2 flex-wrap">
                  <img src="/public/9_PagoFacil.svg" alt="Pago Fácil" width="32" height="32" />
                  <img src="/public/10_rapipago.svg" alt="Rapipago" width="144" height="32" />
                </div>
              </div>
              <a href="#" className="text-blue-600 text-sm hover:underline mt-1">Conocé otros medios de pago</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Nueva fila: productos relacionados debajo de izquierda+central */}
      <div className="flex mt-6 gap-4">
        {/* Ocupa el mismo ancho que izquierda+central (ahora 850px) */}
        <div style={{ width: '850px' }}>
          <RelatedProducts />
          <div className="mt-8">
            <Specifications />
          </div>
          <QuestionsAndAnswers />
          <ProductReviews />
        </div>
        {/* Espacio para mantener alineación con la columna derecha */}
        <div style={{ width: '310px' }}></div>
      </div>
      {/* Sección de productos de interés fuera del container central */}
      <InterestProductSections />
      <Footer />
    </div>
  );
};

export default ProductPage;