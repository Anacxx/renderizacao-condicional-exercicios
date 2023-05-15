import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin(props) {
  const login = () => {
    // fluxo de login (ainda veremos)
    props.mudarTela("TelaPrincipal")
    const objLogin = {
      email: props.login,
      senha: props.senha
    }
    console.log(objLogin)
  }

  const mostrarTelaCadastro = () => {
    props.mudarTela("TelaCadastro")
  }

  return (
    <FormContainer >
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel>E-mail:
          <Input value={props.login} onChange={props.onChangeLogin}/>
        </StyledLabel>

        <StyledLabel>Senha:
          <Input type={"password"} value={props.senha} onChange={props.onChangeSenha} />
        </StyledLabel>

        <SendButton onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
