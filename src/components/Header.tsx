import { Search, ShoppingCart, MapPin, Menu, Truck } from 'lucide-react';

const Header = () => {
  return (
    <header style={{ background: '#FFE600', color: '#191919', fontFamily: 'Proxima Nova, -apple-system, Roboto, Arial, sans-serif', minWidth: 1280, fontSize: 14, lineHeight: '18px', fontWeight: 400, letterSpacing: 'normal', paddingBottom: 5 }}>
      {/* Primera fila: logo, búsqueda, links superiores */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 60, maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
        {/* Logo */}
        <div style={{ width: 162, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 32 }}>
          <img src="/logo_large_plus.webp" alt="Logo Mercado Libre" width={134} height={34} style={{ display: 'block' }} />
        </div>
        {/* Barra de búsqueda */}
        <div style={{ width: 600, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <input
            type="text"
            placeholder="Buscar productos, marcas y más..."
            style={{ width: 600, height: 40, borderRadius: 4, border: '1px solid #e0e0e0', padding: '0 16px', fontSize: 14, color: '#191919', background: '#fff', fontWeight: 400, outline: 'none', fontFamily: 'Proxima Nova, -apple-system, Roboto, Arial, sans-serif', lineHeight: '18px', letterSpacing: 'normal' }}
          />
        </div>
        {/* Links superiores */}
        <div style={{ width: 390, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginLeft: 'auto', gap: 24 }}>
          <span className="hover:underline cursor-pointer" style={{ fontSize: 14, fontWeight: 400 }}>Creá tu cuenta</span>
          <span className="hover:underline cursor-pointer" style={{ fontSize: 14, fontWeight: 400 }}>Ingresá</span>
          <span className="hover:underline cursor-pointer" style={{ fontSize: 14, fontWeight: 400 }}>Mis compras</span>
          <span style={{ fontSize: 22, fontWeight: 700 }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart" viewBox="0 0 18 18">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></span>
        </div>
      </div>
      {/* Segunda fila: ubicación, navegación, links superiores (a la derecha) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 35, maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
        {/* Ubicación */}
        <div style={{ width: 160, height: 30, display: 'flex', alignItems: 'center', fontSize: 14, marginRight: 16, fontWeight: 400 }}>
          <span style={{ fontSize: 20, marginRight: 4 }}>📍</span>
          <span>Enviar a <b>Capital Federal</b></span>
        </div>
        {/* Navegación */}
        <nav style={{ width: 600, height: 35, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, fontSize: 14, fontWeight: 400, lineHeight: '18px', letterSpacing: 'normal' }}>
          <span className="hover:underline cursor-pointer">Categorías <span style={{ fontSize: 10 }}>▼</span></span>
          <span className="hover:underline cursor-pointer">Ofertas</span>
          <span className="hover:underline cursor-pointer">Cupones</span>
          <span className="hover:underline cursor-pointer">Supermercado</span>
          <span className="hover:underline cursor-pointer">Moda</span>
          <span className="hover:underline cursor-pointer">Vender</span>
          <span className="hover:underline cursor-pointer">Ayuda</span>
        </nav>
        {/* Links superiores (espaciador para alinear) */}
        <div style={{ width: 390, height: 30 }} />
      </div>
    </header>
  );
};

export default Header;