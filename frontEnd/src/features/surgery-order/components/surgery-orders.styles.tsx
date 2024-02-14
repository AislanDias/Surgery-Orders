import styled from 'styled-components'

export const HistoryList = styled.div`
  flex: 1;
  overflow-x: auto;

  #ordersList {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  #ordersList td,
  #ordersList th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  #ordersList tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  #ordersList tr:hover {
    background-color: #ddd;
  }

  #ordersList th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }
`
export const Toogle = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  text-align: center;
  width: 100px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  :hover {
    background-color: #2980b9;
  }
`
