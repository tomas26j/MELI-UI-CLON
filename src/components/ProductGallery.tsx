import { useState } from 'react';

const placeholder = 'https://placehold.co/250x500?text=Producto';

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const thumbnails = [
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
  ];

  return (
    <div className="flex 1">
      {/* Thumbnail column */}
      <div className="w-20 mr-4">
        {thumbnails.map((thumb, index) => (
          <div
            key={index}
            className={`border-2 rounded mb-2 cursor-pointer p-1 ${
              selectedImage === index ? 'border-blue-500' : 'border-gray-200'
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-16 object-cover rounded"
            />
          </div>
        ))}
        <div className="border-2 border-gray-200 rounded p-1 cursor-pointer flex items-center justify-center h-16 bg-gray-50">
          <span className="text-gray-500 text-sm">+3</span>
        </div>
      </div>

      {/* Main image */}
      <div style={{ width: '350px' }} className="flex-2">
        <div style={{ width: '350px', height: '500px' }} className="border border-gray-200 rounded-lg p-4 bg-white flex items-center justify-center">
          <img
            src={thumbnails[selectedImage]}
            alt="Samsung Galaxy A15"
            style={{ width: '350px', height: '500px' }}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;