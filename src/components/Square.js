import React from "react";

const Square = () => {
  //Each button of the board should have data-tag= index of that button considering it a array of size 9. 
  return (
    <button  data-tag={index}>
      {value}
    </button>
  );
};

export default Square;
