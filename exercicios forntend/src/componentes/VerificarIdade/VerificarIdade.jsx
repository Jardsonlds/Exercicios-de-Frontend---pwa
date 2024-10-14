import './VerificarIdade.css';

const VerificarIdade = ({ idade }) => {
  const isAdult = idade >= 18;

  return (
    <div className={`verificarIdade ${isAdult ? 'maior' : 'menor'}`}>
      {idade} anos, é {isAdult ? 'maior' : 'menor'} de idade
    </div>
  );
};

export default VerificarIdade;
