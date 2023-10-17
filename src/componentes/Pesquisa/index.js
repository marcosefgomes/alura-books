import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Pesquisa = () => {
  const [livrosPesquisados, setlivrosPesquisados] = useState([]);

  function fazPesquisa(evento) {
    const textoDigitado = evento.target.value;
    const resultadoPesquisa = livros.filter((livro) =>
      livro.nome.includes(textoDigitado)
    );
    setlivrosPesquisados(resultadoPesquisa);
  }

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa instante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onChange={(evento) => fazPesquisa(evento)}
      />
      {livrosPesquisados.map((livro) => (
        <Resultado>
          <p>{livro.nome}</p>
          <img src={livro.src} alt={livro.nome} />
        </Resultado>
      ))}
    </PesquisaContainer>
  );
};

export default Pesquisa;
