import './ListaProdutos.css';

const ListaProdutos = ({ produtos }) => {
  return (
    <ul className="lista-produtos">
      {produtos.map((produto, index) => (
        <li key={index}>{produto}</li>
      ))}
    </ul>
  );
};

export default ListaProdutos;
