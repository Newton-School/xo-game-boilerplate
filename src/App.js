import React from "react";
const App = ()=>{
    const handleClick = () => {
      // COMPLETE IT 
    };
  
    const jumpTo = (step) => {
    };
  
    const createNew =()=>{
        }
    return (
        <div class="container App">
        <div class="history">
        <div className="result" data-tag='history'>
          <h3>History</h3>
        {/* 
          Show previous moves here, 
          List of previous moves should be clickable. 
          onClicking any, the board should show that state of game. 
          like, if clicking on 3rd move => just show the  game till 3rd move on the board
        */}
        </div>
        </div>
        <div class="boardArea">       
         {/* 
         Show board here
         */}
        </div>
        <div class="headerArea result">
             <h1>X  O Game </h1>
        </div>
        <div class="newgameButton result" data-tag='status'>
         {/* 
         Show the current status of game, show the next move, on finishing show winner here
         */}
        </div>
        <div className="winnerDeclare" data-tag="new-game">
         {/*
          Create a button to start a new game here
          */}
      </div> 
      </div>
   ) 
}

export default App ; 