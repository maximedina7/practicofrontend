import { useState } from 'react';

function Emojis() {
  const listaDeEmojis = ['😀', '😂', '😎', '😱', '🥳', '🧐', '🤖', '👻', '🐱‍👓', '🦄'];
  const [emoji, setEmoji] = useState('😀');

  const cambiarEmoji = () => {
    const aleatorio = Math.floor(Math.random() * listaDeEmojis.length);
    setEmoji(listaDeEmojis[aleatorio]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Emoji Aleatorio</h2>
      <div style={{ fontSize: "4rem", margin: "20px" }}>{emoji}</div>
      <button onClick={cambiarEmoji}>Mostrar otro emoji</button>
    </div>
  );
}

export default Emojis;
