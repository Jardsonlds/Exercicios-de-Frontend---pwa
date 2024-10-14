import './Divisao.css';

const Divisao = ({ num1, num2 }) => {
 
    const resultado = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Divisão por zero não é permitida';

  return (
    <div className="divisao">
      A divisão de {num1} / {num2} é: {resultado}
    </div>
  );
};

export default Divisao;
