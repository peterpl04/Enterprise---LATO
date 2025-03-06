import "./ProdSol.css";
import prod1 from "../../assets/prod1.jpg";
import prod2 from "../../assets/prod2.jpg";

function ProdSol() {

  const produtos = [
    { nome: "Máquina 1"},
    { nome: "Máquina 2"},
    { nome: "Máquina 3"},
    { nome: "Máquina 4"}
  ];
  return (
    <>
      <h1 className="tituloProdSol">Produtos e Soluções</h1>
      <div className="container">
        {produtos.map((produto, index) => (
          <div key={index} className="item">
            {index === 0 && <img src={prod1} alt="Produto 1" className="produtoImg" />}
            {index === 1 && <img src={prod2} alt="Produto 1" className="produtoImg" />}
          </div>
        ))}
      </div>
    </>
  );
}
export default ProdSol;
