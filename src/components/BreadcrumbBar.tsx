import React from "react";

const chevron = (
  <span style={{ display: 'inline-flex', alignItems: 'center', margin: '0 4px' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" style={{ verticalAlign: 'middle' }}>
      <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
    </svg>
  </span>
);
const verticalBar = (
  <span style={{ display: 'inline-flex', alignItems: 'center', margin: '0 4px' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="16" style={{ verticalAlign: 'middle' }}>
      <rect x="2.5" y="5" width="1" height="12" fill="#666" />
    </svg>
  </span>
);

const BreadcrumbBar = () => {
  return (
    <div style={{ background: '#EDEDED', borderBottom: '1px solid #e6e6e6', fontFamily: 'Proxima Nova, -apple-system, Roboto, Arial, sans-serif', fontSize: 14, lineHeight: '18px', color: '#333', minWidth: 1200 }}>
      <div style={{ maxWidth: '72rem', minWidth: '1180px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px 5px 16px' }}>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" style={{ flex: 1 }}>
          <ol style={{ display: 'flex', alignItems: 'center', listStyle: 'none', padding: 0, margin: 0 }}>
            <li>
              <a href="https://www.mercadolibre.com.ar/c/celulares-y-telefonos" style={{ color: '#3483fa', textDecoration: 'none' }}>Volver</a>
              {verticalBar}
            </li>
            <li>
              <a href="https://listado.mercadolibre.com.ar/celulares-telefonos/celulares-smartphones/" style={{ color: '#3483fa', textDecoration: 'none' }}>Celulares y Smartphones</a>
              {chevron}
            </li>
            <li>
              <a href="https://listado.mercadolibre.com.ar/samsung" style={{ color: '#3483fa', textDecoration: 'none' }}>Samsung</a>
            </li>
          </ol>
        </nav>
        {/* Acciones rápidas */}
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <a href="https://www.mercadolibre.com.ar/syi/core/list/equals?itemId=MLA1936287320&productId=MLA32427104" style={{ color: '#3483fa', textDecoration: 'none', marginRight: 16, fontWeight: 400 }}>
            Vender uno igual
          </a>
          <span style={{marginLeft: '-10px', marginRight: '5px', color:'#BBBBBB'}}>|</span>
          <a href="https://www.mercadolibre.com.ar/syi/core/list/equals?itemId=MLA1936287320&productId=MLA32427104" style={{ color: '#3483fa', textDecoration: 'none', marginRight: 16, fontWeight: 400 }}>
            Compartir
          </a>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbBar; 