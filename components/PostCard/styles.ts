import styled from "styled-components/native";

export const Container = styled.TouchableOpacity `
  margin-top: 5;
  margin-bottom: 5;
  margin-left: 10;
  margin-right: 10;
  padding: 15px;
  background-color: #FFF;
  border-radius: 16px;
`;

export const CardHeader = styled.View `
  justify-content: space-between;
  flex-direction: row;
`;

export const UserDataContainer = styled.View `
  flex-direction: row;
  align-items: center;
  margin-bottom: 10;
`;

export const Avatar = styled.Image `
  width: 40;
  height: 40;
  border-radius: 20px;
  margin-right: 10px;
`;

export const ContentContainer = styled.View `
`;
