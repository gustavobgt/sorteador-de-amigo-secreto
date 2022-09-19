import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

describe("O comportamento do <Formulario/>", () => {
  test("Quando o input está vazio, novos participantes não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    // Encontrar o input no DOM
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    // Encontrar o botão
    const botao = screen.getByRole("button", { name: "Adicionar" });

    // Garantir que o input esteja no documento
    expect(input).toBeInTheDocument();

    // Garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled();
  });

  test("Adicionar um participante caso exista um nome preenchido", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    // Encontrar o input no DOM
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    // Encontrar o botão
    const botao = screen.getByRole("button", { name: "Adicionar" });

    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    // Clicar no botão submeter
    fireEvent.click(botao);

    // Garantir que o input esteja com foco ativo
    expect(input).toHaveFocus();

    // Garantir que o input não tenha valor
    expect(input).toHaveValue("");
  });

  test("Nomes duplicados não podem ser adicionados na lista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button", { name: "Adicionar" });

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    fireEvent.click(botao);

    const mensagemDeErro = screen.getByRole("alert");

    expect(mensagemDeErro.textContent).toBe(
      "Nomes duplicados não são permitidos!"
    );
  });

  test("A mensagem de erro deve sumir apóso os timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button", { name: "Adicionar" });

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    fireEvent.click(botao);

    let mensagemDeErro = screen.queryByRole("alert");
    expect(mensagemDeErro).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    mensagemDeErro = screen.queryByRole("alert");
    expect(mensagemDeErro).toBeNull();
  });
});
