import styled from "styled-components/native";

export const ComentTitle = styled.View`
  padding: 15px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
  border-top-color: lightgray;
`;

export const Container = styled.View `
  padding: 15px;
`;

export const CommentHeader = styled.View `
  flex-direction: row;
`;

export const CommentBody = styled.View `
  margin-left: 35px;
`;

export const Avatar = styled.Image `
  width: 24px;
  height: 24px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const Separator = styled.View `
  width: 100%;
  height: 1px;
  background-color: lightgray;
`;