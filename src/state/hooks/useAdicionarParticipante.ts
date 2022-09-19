import { useRecoilValue, useSetRecoilState } from "recoil";
import { erroState, listaParticipantesState } from "../atom";

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState);
  const setErro = useSetRecoilState(erroState);
  const lista = useRecoilValue(listaParticipantesState);

  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
      setErro("Nomes duplicados não são permitidos!");
      setTimeout(() => {
        setErro("");
      }, 3000);
      return;
    }

    return setLista((listaAtual) => [...listaAtual, nomeDoParticipante]);
  };
};
