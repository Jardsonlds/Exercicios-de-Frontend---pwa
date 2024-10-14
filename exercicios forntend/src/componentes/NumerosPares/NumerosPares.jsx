import './NumerosPares.css'; 

const NumerosPares = ({ numeros }) => {
  
  const numerosPares = numeros.filter(num => num % 2 === 0);

  return (
    <ul className="numeros-pares">
      {numerosPares.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  );
};

export default NumerosPares;
