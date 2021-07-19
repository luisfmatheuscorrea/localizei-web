import { useState } from "react";
import { TitleGreen } from "../../styles";

function Home() {
  const [valor, setValor] = useState(0);

  function addInValor() {
    setValor(valor + 1);
  }

  return (
    <div>
      <TitleGreen>Contador: {valor}</TitleGreen>
      <button onClick={addInValor}>Clique para adicionar</button>
    </div>
  );
}

export default Home;