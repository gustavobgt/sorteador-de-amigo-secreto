import React, { useState, FormEvent, useRef } from "react";
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante";
import { useMensagemDeErro } from "../state/hooks/useMensagemDeErro";

export function Formulario() {
  const [nome, setNome] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionaNaLista = useAdicionarParticipante();
  const erro = useMensagemDeErro();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    adicionaNaLista(nome);
    setNome("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!nome}>Adicionar</button>
      {erro && <p role="alert">{erro}</p>}
    </form>
  );
}
