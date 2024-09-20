import styled from "styled-components/native";

export const Text = styled.Text<{color?: string; fontSize?: string}> `
  font-family: 'NunitoSans_400Regular';
  color: ${props => props.color || '#1C1F24'};
  font-size: ${props => props.fontSize || '16px'};
`