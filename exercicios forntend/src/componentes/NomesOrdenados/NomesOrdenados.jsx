import './NomesOrdenados.css';

const NomesOrdenados = ({ nomes }) => {
  const nomesOrdenados = [...nomes].sort(); 

  return (
    <ol className="nomes-ordenados">
      {nomesOrdenados.map((nome, index) => (
        <li key={index}>{nome}</li>
      ))}
    </ol>
  );
};

export default NomesOrdenados;
