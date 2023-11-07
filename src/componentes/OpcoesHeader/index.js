import styled from "styled-components";
import { Link } from "react-router-dom";

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "ESTANTE"];

const OpcoesHeader = () => {
  return (
    <Opcoes>
      {textoOpcoes.map((texto, indice) => (
        <Link to={`/${texto.toLowerCase()}`} key={indice}>
          <Opcao>
            <p>{texto}</p>
          </Opcao>
        </Link>
      ))}
    </Opcoes>
  );
};

export default OpcoesHeader;
