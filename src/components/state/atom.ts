import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
  key: "listaParticipantesState",
  default: [],
});

export const erroState = atom<string>({
  key: "erroState",
  default: "",
});
