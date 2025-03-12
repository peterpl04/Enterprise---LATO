import { useState } from "react";
import "./ProdSol.css";
import prod1 from "../../assets/prod1.jpg";
import prod2 from "../../assets/prod2.jpg";

function ProdSol() {
  const produtos = [
    { id: 1, imagem: prod1, descricao: "Máquina escorregadora de frango" },
    { id: 2, imagem: prod2, descricao: "Máquina trituradora de frango" },
  ];

  const [flipped, setFlipped] = useState(Array(produtos.length).fill(false));

  const handleClick = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <>
      <h1 className="tituloAba">Produtos e Soluções</h1>
      <div className="container">
        {produtos.map((produto, index) => (
          <div
            key={index}
            className={`item ${flipped[index] ? "flipped" : ""}`}
            onClick={() => handleClick(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={produto.imagem} alt={`Produto ${produto.id}`} className="produtoImg" />
              </div>
              <div className="card-back">
                <p>{produto.descricao}</p>
                <button>Ver mais</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProdSol;
