import { useState } from 'react';

function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Contador</h2>
      <p>Cuenta actual: {cuenta}</p>
      <button onClick={() => setCuenta(cuenta + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default Contador;
