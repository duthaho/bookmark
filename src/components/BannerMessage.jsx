import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #709425;
  color: #fafafa;
  padding: 10px 5px;
  @media screen and (max-width: 700px) {
    padding: 20px 8px;
  }
  text-align: center;
  box-sizing: border-box;
  font-size: 0.8em;
  a {
    color: currentColor;
  }
`;
