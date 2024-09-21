import styled from "styled-components/native";

export const ProfileHeader = styled.View `
  background-color: #FFF;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
  margin-bottom: 5px;
`;

export const UserDataContainer = styled.View `
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image `
  width: 64;
  height: 64;
  border-radius: 50px;
  margin-right: 10px;
`;

export const UserInfosContainer = styled.View `
  margin-top: 15px;
  gap: 5px;
`;

export const UserInfoItem = styled.View `
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;