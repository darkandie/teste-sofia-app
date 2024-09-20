import Button from "@/components/Button";
import InputDefault from "@/components/Input";
import styled from "styled-components/native";

const Container = styled.View`
  padding: 20px;
  gap: 30px;
`

export default function Register() {
  return (
    <Container>
      <InputDefault 
        title="Nome de usuário"
        placeholder="Nome de usuário"
      />
      <InputDefault 
        title="E-mail"
        placeholder="Endereço de e-mail"
      />
      <InputDefault 
        title="Senha"
        placeholder="Adicione uma senha"
      />
      <Button title="Criar conta"/>
    </Container>
  )
}