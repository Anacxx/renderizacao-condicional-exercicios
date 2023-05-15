import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import TelaCadastroEndereco from "./components/TelaCadastroEndereco/TelaCadastroEndereco";
const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [telaAtual, setTelaAtual] = useState("TelaLogin")

  const [login, setLogin]= useState("")
  const [senha, setSenha]= useState("")
  function onChangeLogin(event){
    setLogin(event.target.value)
  }
  function onChangeSenha(event){
    setSenha(event.target.value)
  }
  const mudarTela = (novaTela) => {
    setTelaAtual(novaTela)
  }

  const renderizaTela = () => {
    switch (telaAtual) {
      case "TelaLogin":
        return <TelaLogin 
        mudarTela={mudarTela}
        login = {login}
        onChangeLogin = {onChangeLogin}
        senha = {senha}
        onChangeSenha = {onChangeSenha}
         />;

      case "TelaCadastro":
        return <TelaCadastro mudarTela={mudarTela} />;

      case "TelaPrincipal":
        return <TelaPrincipal mudarTela={mudarTela} />
      case "TelaCadastroEndereco":
        return <TelaCadastroEndereco mudarTela={mudarTela} />
      default:
        return <p>Tela inválida</p>
    }
  }

  return (
    <MainContainer >
      <GlobalStyled />

      {renderizaTela()}
    </MainContainer>
  );
}

export default App;