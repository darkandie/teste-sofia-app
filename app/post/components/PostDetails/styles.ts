import styled from "styled-components/native";

export const Container = styled.View `
  padding: 15px;
`;

export const CardHeader = styled.View `
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const UserDataContainer = styled.TouchableOpacity `
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
  gap: 10px;
`