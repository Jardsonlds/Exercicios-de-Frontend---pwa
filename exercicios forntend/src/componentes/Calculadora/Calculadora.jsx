import './Calculadora.css';

const Calculadora = ({ num1, num2, operacao }) => {
  let resultado;

  switch (operacao) {
    case 'soma':
      resultado = num1 + num2;
      break;
    case 'subtracao':
      resultado = num1 - num2;
      break;
    case 'multiplicacao':
      resultado = num1 * num2;
      break;
    case 'divisao':
      resultado = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Divisão por zero não permitida';
      break;
    default:
      resultado = 'Operação inválida';
  }

  return (
    <div className="calculadora">
      O resultado da {operacao} de {num1} e {num2} é: {resultado}
    </div>
  );
};

export default Calculadora;
