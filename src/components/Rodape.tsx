import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

const Rodape = () => {
  const participantes = useListaDeParticipantes();
  const navegarPara = useNavigate();

  const handleClick = () => {
    navegarPara("/sorteio");
  };

  return (
    <footer>
      <button onClick={handleClick} disabled={participantes.length < 3}>
        Iniciar brincadeira!
      </button>
    </footer>
  );
};

export default Rodape;
