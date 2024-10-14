import './Multiplicacao.css';

const Multiplicacao = ({ num1, num2 }) => {
  const resultado = num1 * num2;

  return (
    <div className="multiplicacao">
      A multiplicação de {num1} * {num2} é: {resultado}
    </div>
  );
};

export default Multiplicacao;
