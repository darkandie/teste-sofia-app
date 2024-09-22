import styled from "styled-components/native";

export const Container = styled.SafeAreaView `
  position: relative;
  flex: 1;
`;

export const Form = styled.View `
  gap: 30px;
  margin: 20px;
`;

export const ButtonContainer = styled.View `
  padding: 20px;
  position: absolute;
  bottom: 20;
  left: 0;
  right: 0;
  width: 100%;
  border-top-width: 1px;
  border-top-color: lightgray;
`;