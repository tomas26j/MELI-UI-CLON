import { Smartphone, Camera, Wifi, Fingerprint } from 'lucide-react';

const Specifications = () => {
  const specs = [
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Tamaño de la pantalla",
      value: "6.5\" (1.601 m x 7.68 cm x 8.4 mm)",
      size: "PEQUEÑO",
      sizeColor: "text-blue-600"
    },
    {
      icon: <Camera className="h-5 w-5" />,
      title: "Cámara trasera principal",
      value: "50 Mpx"
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Memoria interna",
      value: "128 GB"
    },
    {
      icon: <Camera className="h-5 w-5" />,
      title: "Cámara frontal principal",
      value: "13 Mpx"
    },
    {
      icon: <Wifi className="h-5 w-5" />,
      title: "Con NFC",
      value: "Sí"
    },
    {
      icon: <Fingerprint className="h-5 w-5" />,
      title: "Desbloqueo",
      value: "Huella dactilar y reconocimiento facial"
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg w-full" style={{ width: '850px' }}>
      <hr className="my-4 border-gray-200" />
      <h2 className="text-xl font-medium mb-6">Características del producto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specs.map((spec, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="text-gray-600 mt-1">{spec.icon}</div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800 mb-1">
                {spec.title}
              </div>
              <div className="text-sm text-gray-600">{spec.value}</div>
              {spec.size && (
                <div className="mt-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-gray-200 rounded">
                      <div className="w-4 h-2 bg-blue-600 rounded"></div>
                    </div>
                    <span className={`text-xs ${spec.sizeColor}`}>
                      {spec.size}
                    </span>
                    <span className="text-xs text-gray-500">GRANDE</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="text-blue-600 text-sm underline mt-6">
        Ver todas las características
      </button>
      <div>
        {/* Separador */}
        <hr className="my-4 border-gray-200" />
      {/* Sección de Descripción */}
        <div className="bg-white p-1 pr-6 rounded-lg mt-6 w-full" style={{ width: '850px' }}>
          <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
          <div className="text-gray-800 space-y-6">
            <div>
              <h3 className="font-medium text-lg mb-1">Más para ver</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisi nec erat.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Capacidad y eficiencia</h3>
              <p className="text-gray-600">Suspendisse potenti. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Desbloqueo facial y dactilar</h3>
              <p className="text-gray-600">Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Gran capacidad de almacenamiento</h3>
              <p className="text-gray-600">Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;

