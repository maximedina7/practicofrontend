import { useState } from 'react';

function Adivinanza() {
  const [numeroSecreto, setNumeroSecreto] = useState(generarNumero());
  const [intento, setIntento] = useState('');
  const [mensaje, setMensaje] = useState('');

  function generarNumero() {
    return Math.floor(Math.random() * 10) + 1; // Número entre 1 y 10
  }

  const manejarCambio = (e) => {
    setIntento(e.target.value);
  };

  const verificarIntento = () => {
    const numero = parseInt(intento);
    if (isNaN(numero)) {
      setMensaje('Por favor ingresa un número válido.');
    } else if (numero === numeroSecreto) {
      setMensaje('¡Correcto! 🎉 Generando uno nuevo...');
      setNumeroSecreto(generarNumero());
    } else {
      setMensaje('Intenta otra vez 😅');
    }
    setIntento('');
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Adivinanza</h2>
      <p>Adivina un número del 1 al 10:</p>
      <input 
        type="number" 
        value={intento} 
        onChange={manejarCambio} 
        placeholder="Tu intento"
        min="1"
        max="10"
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={verificarIntento}>Probar</button>
      <p>{mensaje}</p>
    </div>
  );
}

export default Adivinanza;
