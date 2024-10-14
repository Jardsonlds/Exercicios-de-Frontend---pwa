import './Subtracao.css';

const Subtracao = ({ num1, num2 }) => {
  const resultado = num1 - num2;

  return (
    <div className="subtracao">
      A subtração desses números é {num1} - {num2} é: {resultado}
    </div>
  );
};

export default Subtracao;
