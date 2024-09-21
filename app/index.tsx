import Button from "@/components/Button";
import InputDefault from "@/components/Input";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const LoginContainer = styled.SafeAreaView `
  flex: 1;
  margin: 20px;
  gap: 30px;
`;

const Title = styled.Text `
  align-self: center;
  font-weight: bold;
  font-size: 24px;
  margin-top: 40px;
  font-family: 'NunitoSans_700Bold';
`;

const RegisterLink = styled.Text `
  align-self: center;
  color: #0F90D9;
  font-size: 16px;
`

export default function Login() {
  const goToRegisterScreen = () => {
    router.navigate("/(tabs)/home");
  }

  return(
    <LoginContainer>
      <Title>LOGIN</Title>
      <InputDefault 
        title="E-mail"
        placeholder="Endereço de e-mail"
      />
      <InputDefault 
        title="Senha"
        placeholder="Senha"
      />
      <Button title="Entrar"/>
      <TouchableOpacity
        onPress={goToRegisterScreen}
      >
        <RegisterLink>Criar nova conta</RegisterLink>
      </TouchableOpacity>
    </LoginContainer>
  )
}