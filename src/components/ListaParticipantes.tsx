import React from "react";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

const ListaParticipantes = () => {
  const participantes: string[] = useListaDeParticipantes();
  return (
    <ul>
      {participantes.map((participante) => {
        return <li key={participante}>{participante}</li>;
      })}
    </ul>
  );
};

export default ListaParticipantes;
