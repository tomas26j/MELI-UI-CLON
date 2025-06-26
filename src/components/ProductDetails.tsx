const ProductDetails = () => {
    const features = [
      "Memoria RAM: 4 GB.",
      "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
      "Pantalla Super AMOLED de 6.5\".",
      "Tiene 3 cámaras traseras de 50Mpx/5Mpx/2Mpx.",
      "Cámara delantera de 13Mpx.",
      "Procesador MediaTek Helio G99 Octa-Core de 2.2GHz con 4GB de RAM.",
      "Batería de 5000mAh.",
      "Memoria interna de 128GB.",
      "Resistente a las salpicaduras.",
      "Con reconocimiento facial y sensor de huella dactilar.",
      "Resistente al polvo."
    ];
  
    return (
      <div className="">
        <h2 className="text-base font-semibold mb-2 text-gray-800">Lo que tenés que saber de este producto</h2>
        <ul className="mb-2 ml-4 list-disc text-[15px] text-gray-800 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="leading-snug">{feature}</li>
          ))}
        </ul>
        <a href="#" className="text-blue-600 text-sm hover:underline">Ver características</a>
      </div>
    );
  };
  
  export default ProductDetails;