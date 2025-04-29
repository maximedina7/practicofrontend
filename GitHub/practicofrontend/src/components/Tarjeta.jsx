// src/components/Tarjeta.jsx

function Tarjeta({ nombre, apellido, profesion, descripcion }) {
    return (
      <div style={{
        border: "2px solid #ccc",
        borderRadius: "12px",
        padding: "20px",
        maxWidth: "300px",
        margin: "auto",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}>
        <h2>{nombre} {apellido}</h2>
        <h4>{profesion}</h4>
        <p>{descripcion}</p>
      </div>
    );
  }
  
  export default Tarjeta;
  