import React, { useState } from "react";
import "./Principal.css";
import ProdSol from "../ProdSol/ProdSol";
import Contato from "../Contato/Contato";
import AcessoCliente from "../AcessoCliente/AcessoCliente";
import Sobre from "../Sobre/Sobre";

function Principal() {
  const [conteudo, setConteudo] = useState("descricao");

  return (
    <>
      <div className="cabecalho">
        <div className="cabecalho-esquerda">
          <h2>LEPO</h2>
          <div className="botoes-container">
            <button onClick={() => setConteudo("prodSol")}>Produtos e Soluções</button>
            <button onClick={() => setConteudo("contato")}>Serviços</button>
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
    </>
  );
}

export default Principal;
