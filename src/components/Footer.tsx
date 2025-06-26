import React from "react";

const links = [
  { label: "Trabajá con nosotros", url: "#" },
  { label: "Términos y condiciones", url: "#" },
  { label: "Promociones", url: "#" },
  { label: "Cómo cuidamos tu privacidad", url: "#" },
  { label: "Accesibilidad", url: "#" },
  { label: "Información al usuario financiero", url: "#" },
  { label: "Ayuda", url: "#" },
  { label: "Defensa del Consumidor", url: "#" },
  { label: "Información sobre seguros", url: "#" },
  { label: "Libro de quejas online", url: "#" },
];

const Footer = () => {
  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid #e0e0e0', fontFamily: 'Proxima Nova, -apple-system, Roboto, Arial, sans-serif', fontSize: 13, color: 'rgba(0,0,0,0.7)', width: '100%' }}>
      <div className="w-full flex flex-col items-center" style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
        <div className="w-full flex flex-wrap justify-center gap-x-6 gap-y-2 pt-6 pb-2" style={{ fontSize: 14, color: '#222' }}>
          {links.map((l, i) => (
            <a key={i} href={l.url} className="hover:underline" style={{ color: '#222', textDecoration: 'none' }}>{l.label}</a>
          ))}
        </div>
        <div className="w-full text-center text-xs text-gray-700 mb-1" style={{backgroundColor: '#fab6b6', border: '1px dashed darkred' }}>
          Proyecto auto-educativo, sin fines de lucro y sin relación con Mercado Libre. <br />
          Esta web es una imitación para fines de aprendizaje. <br />
          <a href="https://mi-portfolio.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Mi Portafolio </a> | 
          <a href="https://linkdn.com/miusuario" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Linkedin </a> | 
          <a href="https://github.com/miusuario" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> GitHub </a>
        </div>
        <div className="w-full text-center text-xs text-gray-400 pb-4">
          Buenos Aires, Argentina
        </div>
      </div>
    </footer>
  );
};

export default Footer; 