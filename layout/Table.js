import styled from 'styled-components'


const Table = styled.table`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-collapse: separate;
  width: 100%;
  border-spacing: 0;
  margin-bottom: 20px;

  th {
    vertical-align: middle;
    border-top: 0;
    font-weight: 700;
    padding: 8px 12px;
    border-bottom: 2px solid #ddd;
  }
  td {
    vertical-align: middle;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 8px 12px;
  }
`

export default Table
