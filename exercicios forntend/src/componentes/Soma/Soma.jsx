import './Soma.css';

const Soma = ({ num1, num2 }) => {
  const resultado = num1 + num2;

  return (
    <div className="soma">
      A soma desses números é {num1} + {num2} = {resultado}
    </div>
  );
};

export default Soma;
