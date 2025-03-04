import React, { useState } from "react";

function Principal() {
  const [conteudo, setConteudo] = useState("");
  const [exibirDescricao, setExibirDescricao] = useState(true);
  const [exibirProdSol, setExibirProdSol] = useState("");

  const mostrarInicio = () => {
    setExibirDescricao(true);
    setConteudo("");
    setExibirProdSol("");
  };

  const mostrarProdSol = () => {
    setExibirProdSol("Nossas soluções otimizam a produção, garantindo maior eficiência e segurança.");
    setExibirDescricao(false);
    setConteudo("");
  };

  const mostrarSobre = () => {
    setConteudo("Empresa focada em soluções para a alimentação de linhas de produção, resolvendo problemas de ergonomia, com a eliminação da necessidade da aplicação de mão de obra em tarefas repetitivas.");
    setExibirDescricao(false);
    setExibirProdSol("");
  };

  const mostrarContato = () => {
    setConteudo("Entre em contato conosco pelo e-mail lato@lato.ind.br ou pelo telefone (49) 98829-7638.");
    setExibirDescricao(false);
    setExibirProdSol("");
  };

  return (
    <div>
      <section className="cabecalho">
        <button onClick={mostrarInicio}>Início</button>
        <button onClick={mostrarProdSol}>Produtos e Soluções</button>
        <button onClick={mostrarContato}>Contato</button>
        <button onClick={mostrarSobre}>Sobre</button>
      </section>

      <h1 className="titulo">LATO</h1>

      {exibirDescricao && <p className="descricao">Instalação de máquinas e equipamentos industriais.</p>}
      {exibirProdSol && <p className="descricao">{exibirProdSol}</p>}
      {conteudo && <p className="sobre-info">{conteudo}</p>}

    </div>
  );
}

export default Principal;
