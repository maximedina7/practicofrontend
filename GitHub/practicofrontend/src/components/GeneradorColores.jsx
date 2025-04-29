import { useState } from 'react';

function GeneradorColores() {
  const [color, setColor] = useState('#ffffff');

  const generarColorAleatorio = () => {
    const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    setColor(colorAleatorio);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Generador de Colores</h2>
      <div style={{
        width: "150px",
        height: "150px",
        margin: "20px auto",
        backgroundColor: color,
        border: "2px solid #333",
        borderRadius: "8px"
      }}></div>
      <button onClick={generarColorAleatorio}>
        Cambiar color
      </button>
    </div>
  );
}

export default GeneradorColores;
