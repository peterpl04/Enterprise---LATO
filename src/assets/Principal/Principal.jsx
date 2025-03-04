import React, { useState } from "react";
import "./Principal.css";
import ProdSol from "../ProdSol/ProdSol"; // Importação correta
import Contato from "../Contato/Contato";

function Principal() {
  const [conteudo, setConteudo] = useState("");
  const [exibirDescricao, setExibirDescricao] = useState(true);
  const [exibirComponente, setExibirComponente] = useState(null);
  const [exibirContato, setExibirContato] = useState(false);

  const mostrarProdSol = () => {
    setExibirComponente(<ProdSol />);
    setExibirDescricao(false);
    setConteudo("");
    setExibirContato(false);
  };

  const mostrarSobre = () => {
    setConteudo("Empresa focada em soluções para a alimentação de linhas de produção, resolvendo problemas de ergonomia, com a eliminação da necessidade da aplicação de mão de obra em tarefas repetitivas.");
    setExibirDescricao(false);
    setExibirComponente(null);
    setExibirContato(false);
  };

  const mostrarContato = () => {
    setExibirContato(true);
    setConteudo("");
    setExibirDescricao(false);
    setExibirComponente(null);
    setExibirContato(<Contato />);
  };

  return (
    <div>
      <section className="cabecalho">
        <h2>LATO</h2>
        <button onClick={mostrarProdSol}>Produtos e Soluções</button>
        <button onClick={mostrarContato}>Serviços</button>
        <button onClick={mostrarSobre}>Sobre</button>
      </section>

      <h1 className="titulo">LATO</h1>

      {exibirDescricao && <p className="descricao">Instalação de máquinas e equipamentos industriais.</p>}
      {conteudo && <p className="sobre-info">{conteudo}</p>}
      {exibirContato}
      {exibirComponente}
    </div>
  );
}

export default Principal;
