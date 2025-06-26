import { Star, ChevronRight, ChevronLeft, CheckCircle, Info } from 'lucide-react';
import React, { useState } from 'react';

const ratings = [
  { label: '5', value: 80 },
  { label: '4', value: 12 },
  { label: '3', value: 5 },
  { label: '2', value: 2 },
  { label: '1', value: 1 },
];

const characteristics = [
  { label: 'Relación precio-calidad', value: 5 },
  { label: 'Calidad de la cámara', value: 4 },
  { label: 'Duración de la batería', value: 5 },
  { label: 'Durabilidad', value: 4 },
];

const reviewPhotos = [
  'https://placehold.co/100x170?text=Producto',
  'https://placehold.co/100x170?text=Producto',
  'https://placehold.co/100x170?text=Producto',
  'https://placehold.co/100x170?text=Producto',
  'https://placehold.co/100x170?text=Producto',
];

const reviews = [
  {
    user: 'Comprado a Tienda oficial Motorola',
    date: '16 jun. 2025',
    rating: 5,
    text: 'Por el momento más de lo q esperaba veremos con las próximas actualizaciones si pide cambio 😁.',
    useful: 32,
    photos: [],
  },
  {
    user: 'Comprado a Tienda oficial Motorola',
    date: '22 jun. 2023',
    rating: 5,
    text: 'Esta muy lindo el teléfono pero no sean cuidad0s y larguen los teléfonos con auriculares!!!! déjense de j0der. Era un regalo para mi papá y ahora está 24 7 viendo tiktoks con el volumen al palo jaja.',
    useful: 423,
    photos: [],
  },
  {
    user: '',
    date: '23 ago. 2023',
    rating: 5,
    text: 'Es muy similar al g60s o al g72 el teléfono anda bien y no tiene prácticamente nada de diferencia con los otros dos modelos. La cámara anda normal como la de la mayoría de los celulares, no es una reflex pero saca aceptable. La pantalla se ve bien a pesar de no ser amoled, el procesador corre todo normal y la ram (6gb) al año 2023 es suficiente. Muchas de las opiniones que leí por acá decían que el brillo era bajo, la pantalla mala, la cámara peor. Cualquiera, menos mal que no le dí importancia.',
    useful: 204,
    photos: [],
  },
  {
    user: '',
    date: '17 ago. 2023',
    rating: 5,
    text: 'Es un espectáculo, como lo imaginé y mucho más, la cámara es espectacular, fino, delicado, veloz, buena pantalla, la verdad nada negativo, espero q este comentario los ayude a decidir, sinceramente una belleza, la batería dura mucho tiempo, eso q le di uso continuo, buen tamaño. Excelente. !!!.',
    useful: 129,
    photos: [],
  },
  {
    user: '',
    date: '10 jun. 2023',
    rating: 5,
    text: 'El 2° que compro g32. Excelente producto. Gama media de lo mejor. !!! Este es el color plata. Agrego a lo anterior, calidad de sonido muy bueno, dolby atmos, 128gb buen espacio de almacenamiento, y procesador qualcomm. Le pasa el trapo a varios de la misma gama y mas caros de la competencia!!.',
    useful: 129,
    photos: ['/public/1.jpg', '/public/2.jpg', '/public/3.jpg'],
  },
];

const ProductReviews = () => {
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="bg-white p-8 rounded-lg mt-8 w-full" style={{ width: '850px' }}>
      <h2 className="text-2xl font-semibold mb-6">Opiniones del producto</h2>
      <div className="flex gap-8">
        {/* Panel lateral izquierdo */}
        <div className="w-64 flex-shrink-0">
          <div className="flex items-end gap-2 mb-2">
            <span className="text-4xl font-bold text-blue-700">4.7</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 5 ? 'text-blue-500' : 'text-gray-300'}`} fill="#3483fa" />
              ))}
            </div>
          </div>
          <div className="text-gray-600 text-sm mb-2">7.604 calificaciones</div>
          <div className="mb-4">
            {ratings.map((r, i) => (
              <div key={i} className="flex items-center gap-2 text-xs mb-1">
                <span className="w-3 text-gray-500">{r.label}</span>
                <div className="w-32 h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-blue-500 rounded" style={{ width: `${r.value}%` }}></div>
                </div>
                <span className="w-6 text-gray-500 text-right">{r.value}%</span>
              </div>
            ))}
          </div>
          <div className="text-sm font-semibold mb-2">Calificación de características</div>
          <div className="space-y-2">
            {characteristics.map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-40 text-gray-700 text-xs">{c.label}</span>
                <div className="flex">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < c.value ? 'text-blue-500' : 'text-gray-300'}`} fill={j < c.value ? '#3483fa' : 'none'} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Panel derecho */}
        <div className="flex-1">
          {/* Opiniones con fotos */}
          <div className="mb-6">
            <div className="font-semibold mb-2">Opiniones con fotos</div>
            <div className="flex items-center gap-2">
              <button onClick={() => setPhotoIndex(Math.max(photoIndex - 1, 0))} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50" disabled={photoIndex === 0}>
                <ChevronLeft className="w-5 h-5 text-gray-500" />
              </button>
              {reviewPhotos.slice(photoIndex, photoIndex + 4).map((src, i) => (
                <div key={i} className="relative w-20 h-28 rounded overflow-hidden border border-gray-200 flex items-end justify-center">
                  <img src={src} alt="Foto opinión" className="object-cover w-full h-full" />
                  <div className="absolute bottom-1 left-1 bg-white bg-opacity-80 rounded px-1 text-xs font-bold text-blue-700 flex items-center gap-0.5"><Star className="w-3 h-3 text-blue-500" fill="#3483fa" />5</div>
                </div>
              ))}
              <button onClick={() => setPhotoIndex(Math.min(photoIndex + 1, reviewPhotos.length - 4))} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50" disabled={photoIndex >= reviewPhotos.length - 4}>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
          {/* Filtros */}
          <div className="flex gap-2 mb-4">
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>Ordenar</option>
            </select>
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>Calificación</option>
            </select>
            <button className="bg-blue-50 text-blue-600 font-medium rounded px-3 py-1 text-sm border border-blue-100 flex items-center gap-1">
              Comprado a Tienda oficial Motorola <CheckCircle className="w-4 h-4 text-blue-500" />
            </button>
          </div>
          {/* Opinión destacada */}
          <div className="mb-6">
            <div className="font-semibold mb-1">Opiniones destacadas <span className="text-gray-500 font-normal">2.062 comentarios</span></div>
            <div className="bg-gray-50 rounded p-4 mb-2">
              <div className="text-gray-800 mb-2">El teléfono ofrece una excelente relación calidad/precio, destacándose por su buen rendimiento y capacidad de respuesta en aplicaciones. La cámara toma fotos de buena calidad y el dispositivo es cómodo y moderno. Además, cuenta con buena memoria y una batería que dura bastante, lo que lo hace ideal para el uso diario.</div>
              <div className="flex items-center gap-2 text-xs text-blue-700 cursor-pointer hover:underline">
                <Info className="w-4 h-4" /> Resumen de opiniones generado por IA
              </div>
            </div>
            <button className="flex items-center gap-1 text-gray-600 text-xs font-medium px-2 py-1 rounded hover:bg-gray-100">
              Es útil <span className="text-gray-500">32</span>
            </button>
          </div>
          {/* Lista de opiniones */}
          <div className="space-y-8">
            {reviews.map((r, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex">
                    {[...Array(r.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-blue-500" fill="#3483fa" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{r.user && <span className="font-medium text-gray-700">{r.user}</span>} {r.date}</span>
                </div>
                <div className="text-gray-800 text-[15px] mb-2">{r.text}</div>
                {r.photos.length > 0 && (
                  <div className="flex gap-2 mb-2">
                    {r.photos.map((src, idx) => (
                      <img key={idx} src={src} alt="Foto opinión" className="w-16 h-16 object-cover rounded border border-gray-200" />
                    ))}
                  </div>
                )}
                <button className="flex items-center gap-1 text-gray-600 text-xs font-medium px-2 py-1 rounded hover:bg-gray-100">
                  Es útil <span className="text-gray-500">{r.useful}</span>
                </button>
              </div>
            ))}
          </div>
          <a href="#" className="block text-blue-600 text-base font-medium hover:underline mt-8">Mostrar todas las opiniones</a>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews; 