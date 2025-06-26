import React from "react";

const sections = [
  {
    title: "Quienes vieron este producto también compraron",
    products: Array(5).fill(0).map((_, i) => ({
      id: i+1,
      name: "Samsung Galaxy A15 128 Gb Azul Oscuro 4 Gb Ram",
      price: "$ 246.135",
      cuotas: "en 6 cuotas de $ 56.327",
      envio: "Envío gratis",
      extra: "",
      image: "https://placehold.co/225x225?text=Producto"
    }))
  },
  {
    title: "Más baratos con envío del exterior",
    products: Array(5).fill(0).map((_, i) => ({
      id: i+6,
      name: "Samsung Galaxy A05 128 Gb 4 Gb 6.7 Pulgadas Dual Sim",
      price: "$ 223.053",
      cuotas: "",
      envio: "Envío gratis",
      extra: "COMPRA INTERNACIONAL",
      image: "https://placehold.co/225x225?text=Producto"
    }))
  },
  {
    title: "Quienes compraron este producto también compraron",
    products: Array(5).fill(0).map((_, i) => ({
      id: i+11,
      name: "Cargador Samsung Ultra Rápido 25w Original Cable",
      price: "$ 33.500",
      cuotas: "en 6 cuotas de $ 7.666",
      envio: "Envío gratis",
      extra: "",
      image: "https://placehold.co/225x225?text=Producto"
    }))
  }
];

const cardStyle = {
  width: '225.188px',
  height: '428.688px',
  boxSizing: 'border-box' as const,
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  background: '#fff',
  display: 'block',
  fontFamily: 'Proxima Nova, -apple-system, Roboto, Arial, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  color: 'rgba(0,0,0,0.9)',
  lineHeight: '18px',
  textAlign: 'left' as const,
  cursor: 'pointer',
  position: 'relative' as const,
  overflow: 'hidden',
  marginRight: '16px',
  marginBottom: '8px',
};

const InterestProductSections = () => {
  return (
    <div className="mx-auto mt-12 mb-12" style={{ width: '1184px', backgroundColor: '#e5e7eb', marginLeft: '-17px', paddingTop: '80px'}}>
      {sections.map((section, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-xl mb-4" style={{color: 'rgba(0, 0, 0, 0.9)',fontFamily:'Proxima Nova, -apple-system, Roboto, Arial, sans-serif', lineHeight: "1.25", fontWeight: "400", fontSize: '24px', WebkitFontSmoothing: "antialiased"}}>{section.title}</h2>
          <div className="flex flex-row gap-4 overflow-x-auto pb-2">
            {section.products.map(product => (
              <div key={product.id} style={cardStyle}>
                <img src={product.image} alt={product.name} style={{width:'100%',height:'225px',objectFit:'cover',background:'#f7f7f7'}} />
                <div className="p-4 flex flex-col justify-between h-[calc(428.688px-225px)]">
                  <div>
                    <div className="text-[22px] font-light mb-1" style={{color:'#333'}}>{product.price}</div>
                    {product.cuotas && <div className="text-gray-600 text-[13px] mb-1">{product.cuotas}</div>}
                    <div className="text-green-600 text-[15px] font-semibold mb-1">{product.envio}</div>
                    {product.extra && <div className="text-xs text-blue-700 font-semibold mb-1">{product.extra}</div>}
                    <div className="text-gray-800 text-[15px] mt-2 font-normal leading-tight line-clamp-3">{product.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InterestProductSections; 