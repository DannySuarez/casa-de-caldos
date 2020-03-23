import styled from 'styled-components';

export const Card = styled.div`

  background-color: #ab3f1529;
  border: 1px solid rgba(85,85,85,.2);
  border-radius: 3px;
  text-align: center;

  input[type=email],
  input[type=tel],
  input[type=text] {
    max-width: 100%;
    min-height: 1.8em;
    padding: 1px 0 1px 6px;
    border: 1px solid #aaa;
    line-height: 1.5;
    color: #333;
    font-size: .75em;
  }

  h2 {
  background-color: #b03a0c;
  margin-top: 0;
  color: white;
  }

  p {
    color: #b03a0c;
  }

`;
