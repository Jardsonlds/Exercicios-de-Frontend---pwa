import './TamanhoTexto.css';

const TamanhoTexto = ({ texto }) => {
  const tamanho = texto.length; // Calcula o tamanho do texto

  return (
    <div className="tamanho-texto">
      O tamanho do texto é: {tamanho} caracteres
    </div>
  );
};

export default TamanhoTexto;
