import React from "react";
import styled from "styled-components";
import TicTacToe from "./TicTacToe";


function App() {
  return (
     <div>
       <div style={{backgroundColor:"#197528", marginLeft:"73vh", marginTop:"25vh",width:"50vh", height:"60vh",}}>
      <Main>   
      <p style={{fontSize:"5vh"}}>Tic Tac Toe Game</p>   
      <TicTacToe />
      </Main>
      </div>
      </div>
    
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  padding-top: 0vh;
  font-family: "Reggae One", cursive;
  color: #ebebeb;
`;


export default App;