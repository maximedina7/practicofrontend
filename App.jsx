import { useState } from 'react'
import './App.css'
import Tarjeta from './components/Tarjeta'
import Contador from './components/Contador'
import GeneradorColores from './components/GeneradorColores'
import Emojis from './components/Emojis'
import Adivinanza from './components/Adivinanza'

function App() {
  const [seccion, setSeccion] = useState('tarjeta');

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ marginBottom: '30px' }}>Mi pagina con React y Vite</h1>

      {/* Menú de navegación */}
      <div style={{ marginBottom: '20px' }}>
  <button 
    onClick={() => setSeccion('tarjeta')}
    className={`menu-button ${seccion === 'tarjeta' ? 'active' : ''}`}
  >
    Tarjeta
  </button>
  <button 
    onClick={() => setSeccion('contador')}
    className={`menu-button ${seccion === 'contador' ? 'active' : ''}`}
  >
    Contador
  </button>
  <button 
    onClick={() => setSeccion('colores')}
    className={`menu-button ${seccion === 'colores' ? 'active' : ''}`}
  >
    Colores
  </button>
  <button 
    onClick={() => setSeccion('emojis')}
    className={`menu-button ${seccion === 'emojis' ? 'active' : ''}`}
  >
    Emojis
  </button>
  <button 
    onClick={() => setSeccion('adivinanza')}
    className={`menu-button ${seccion === 'adivinanza' ? 'active' : ''}`}
  >
    Adivinanza
  </button>
</div>


      {/* Mostrar el componente seleccionado */}
      {seccion === 'tarjeta' && (
        <Tarjeta 
          nombre="Maximiliano"
          apellido="Medina"
          profesion="Desarrollador Frontend y Comerciante - Despensa Silvia"
          descripcion="Apasionado por el desarrollo web"
        />
      )}
      {seccion === 'contador' && <Contador />}
      {seccion === 'colores' && <GeneradorColores />}
      {seccion === 'emojis' && <Emojis />}
      {seccion === 'adivinanza' && <Adivinanza />}
    </div>
  )
}

export default App;
