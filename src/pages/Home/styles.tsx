import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  height: 100vh;

  background: #151F30;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 900px;

    div {
      display: flex;
      align-items: center;
    }

    h1 {
      padding: 0;
      font-size: 40px;
  
      color: #FFFFFF
    }

    strong {
      margin-right: 10px;

      color: #FFFFFF;
    }

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }

  .add-new-student {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    margin-top: 30px;
    width: 900px;

    input {
      width: 830px;
      height: 40px;
      padding: 10px 20px;
      
      border: none;
      outline: none;
      border-radius: 10px 0 0 10px;
  
      font-size: 16px;
  
      background: #d9d9d9;
      color: #181818;
    }

    svg {
      font-size: 20px;
      padding: 10px 20px;

      cursor: pointer;

      border-radius: 0 10px 10px 0;
  
      color: #FFFFFF;
      background: #FF7A48;
  
      transition: filter 0.2s;
  
      &:hover {
        filter: brightness(0.9);
      }
    }
  
    /* button {
      width: 50px;
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
    } */
  }


  hr {
    width: 100%;
    margin: 50px;
  }
`