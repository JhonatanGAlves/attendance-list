import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;

  background: #151F30;

  h1 {
    padding: 0;
    font-size: 40px;

    color: #FFFFFF
  }

  input {
    margin: 30px 0 20px;
    width: 400px;
    height: 40px;
    padding: 10px 20px;
    
    border: none;
    outline: none;
    border-radius: 5px;

    font-size: 16px;

    background: #d9d9d9;
    color: #181818;
  }

  button {
    width: 250px;
    padding: 10px;
    font-size: 22px;
    font-weight: bold;
    border: none;
    border-radius: 15px;

    cursor: pointer;

    color: #FFFFFF;
    background: #FF7A48;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  hr {
    width: 100%;
    margin: 50px;
  }
`