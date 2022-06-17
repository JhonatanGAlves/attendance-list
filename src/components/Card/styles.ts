import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 900px;
  max-width: 900px;
  min-width: 200px;
  height: 100px;
  padding: 0 15px;
  margin-bottom: 20px;

  border-radius: 10px;

  color: #FFFFFF;
  background: #0593A2;

  p, small {
    font-size: 20px;
  }

  p {
    font-weight: 700;
  }
`