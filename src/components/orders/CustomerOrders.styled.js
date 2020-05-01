import styled from 'styled-components';

export const Layout = styled.div`
  margin: 2em auto;
  max-width: 60em;
  width: 100%;
`;

export const Container = styled.div`
  border: 1px solid var(--rust);
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 2em;
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 2em;
  border-spacing: 0;

  thead {
    th {
      background-color: var(--rust);
      border: 1px solid var(--rust);
      color: white;

      &:first-of-type {
        text-align: left;
      }
    }
  }

  th,td {
    padding: .75em;
  }

  tr {
    margin-bottom: 5em;

    &:nth-child(2n) {
      background-color: var(--lightborange);
    }
  }

  td {
    text-align: center;
    border-left: 1px solid var(--rust);
    border-bottom: 1px solid var(--rust);
    border-right: 1px solid var(--rust);
  }

  td[datatype="currency"] {
    text-align: right;
  }

  td[scope="row"] {
    text-align: left;
  }
`;
