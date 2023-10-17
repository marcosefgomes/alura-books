import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const icones = [perfil, sacola];

const IconesHeader = () => {
  return (
    <Icones>
      {icones.map((icone, indice) => (
        <Icone key={indice}>
          <img src={icone} alt=""></img>
        </Icone>
      ))}
    </Icones>
  );
};

export default IconesHeader;
