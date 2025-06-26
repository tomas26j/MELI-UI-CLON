import React from 'react';

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Test Simple</h1>
      <p>Si puedes ver esto, el problema está en los componentes complejos.</p>
      <p>Fecha y hora: {new Date().toLocaleString()}</p>
    </div>
  );
};

export default App; 