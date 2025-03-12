import React, { useState } from "react";
import "./Principal.css";
import ProdSol from "../ProdSol/ProdSol";
import AcessoCliente from "../AcessoCliente/AcessoCliente";
import Sobre from "../Sobre/Sobre";
import Servicos from "../Servicos/Servicos";

function Principal() {
  const [conteudo, setConteudo] = useState("descricao");

  return (
    <>
      <div className="cabecalho">
        <div className="cabecalho-esquerda">
          <h2>LATO</h2>
          <div className="botoes-container">
            <button onClick={() => setConteudo("prodSol")}>Produtos e Soluções</button>
            <button onClick={() => setConteudo("servicos")}>Serviços</button>
            <button onClick={() => setConteudo("sobre")}>Sobre</button>
          </div>
        </div>

        <button className="acesso-clientes" onClick={() => setConteudo("acessoCliente")}>Acesso Cliente</button>
      </div>

      {/*Renderização condicional baseada no estado `conteudo`*/}
      {conteudo === "prodSol" && <ProdSol />}
      {conteudo === "contato" && <Contato />}
      {conteudo === "acessoCliente" && <AcessoCliente />}
      {conteudo === "sobre" && <Sobre />}
      {conteudo === "servicos" && <Servicos />}
    </>
  );
}

export default Principal;
