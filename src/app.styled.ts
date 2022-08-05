import styled from "styled-components";

export const AppWrappersStyled = styled.div`
  display: grid;
  grid-template-areas:
"header header header"
"nav content content";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
  grid-gap: 10px;
`;
export const AppContentStyled = styled.div`
  width: 100%;
  background-color: green;
  grid-area: content;
`;