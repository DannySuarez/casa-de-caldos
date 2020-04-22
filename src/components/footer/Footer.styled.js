import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 30px 0;
  border-top: 1px solid var(--rust);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--rust);

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    a:first-child {
      text-align:right;
    }

    a {
      flex: 1 0 auto;
      font-size: 1.2em;
    }  

    span {
      margin: 0 10px;
    }  
  }

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
  }
`;
