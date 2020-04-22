import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  @import url("https://fonts.googleapis.com/css?family=Pacifico|Fira+Mono&display=swap");
  text-align: center;
  font-family: "Fira Mono", monospace;
  font-size: .8rem;

  h1 {
  @import url("https://fonts.googleapis.com/css?family=Comfortaa&display=swap");
  font-size: 2rem;
  font-family: "Comfortaa","Fira Mono", monospace;
  margin: 2rem auto;
  color: var(--rust);
  }

  @media (min-width: 1824px) {
    h1 {
      font-size: 4rem;
    }

    font-size: 1.2rem;
  }
`;
