import styled from "styled-components/native";

export const Container = styled.View `
  background-color: "#FFF";
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  border-top-color: lightgray;
  border-top-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputGroup = styled.View<{showButton: boolean}> `
  flex-direction: row;
  background-color: #EFF1F5;
  padding: 15px;
  border-radius: 8px;
  gap: 10;
  width: ${props => props.showButton ? '85%': '100%'};
`;

export const SendCommentButton = styled.TouchableOpacity `
  background-color: #0F90D9;
  padding: 12px;
  border-radius: 40px;
`;