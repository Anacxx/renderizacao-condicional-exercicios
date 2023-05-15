import React from "react";
import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "../TelaCadastro/styled";
function TelaCadastroEndereco(props){
    const confirmar = () =>{
        props.mudarTela("TelaPrincipal")
    }
    const mostrarTelaLogin = () =>{
        props.mudarTela("TelaLogin")
    }
    return(
        <FormContainer>
        <h1>Endereço </h1>
  
        <Form>
          <StyledLabel htmlFor="titulo">
            Endereço:
            <Input id="titulo" />
          </StyledLabel>
  
          <StyledLabel htmlFor="foto">
            Número da residência:
            <Input id="foto" />
          </StyledLabel>
  
          <StyledLabel htmlFor="descricao">
            Complemento:
            <Input id="descricao" />
          </StyledLabel>
  
          <StyledLabel htmlFor="descricao">
            Telefone:
            <Input id="descricao" />
          </StyledLabel>
  
          <SendButton onClick={confirmar}>Cadastrar</SendButton>
  
          <BackToLoginButton onClick={mostrarTelaLogin}>Já possuo cadastro</BackToLoginButton>
        </Form>
      </FormContainer>
    )
}
export default TelaCadastroEndereco;