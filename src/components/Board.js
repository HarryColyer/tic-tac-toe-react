import { useState } from "react";
import Square from "./Square";
import ResetBtn from "./ResetBtn";


function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setXIsNext] = useState(true);
  const [isADraw, setDraw] = useState(false)



  const winner = calculateWinner(squares);
  const status = {
    msg: null,
    span: null
  };

  let {msg, span} = status

  if (winner) {
    msg = "The winner is ";
    span = winner
  } 
  else if (isADraw) {
    msg = "It's draw"
    span = null
  } else {
    msg = "The next player is ";
    span = isXNext ? "x" : "o"
  }

  function handleDraw(squares) {
    if (calculateWinner(squares)) return;
    for(let square of squares) {
      if (!square){
        return false
      }
    }
    setDraw(true)
  }

  function resetGame () {
    const squaresCopy = squares.slice()
    for (let i = 0; i < squaresCopy.length; i++) {
      squaresCopy[i] = null
    }
    setXIsNext(true)
    setSquares(squaresCopy)
    setDraw(false)
  }

  function handleClick(i) {
    const squaresCopy = squares.slice();
    if (squaresCopy[i] || calculateWinner(squaresCopy)) return;

    const result = isXNext ? "x" : "o";
    squaresCopy[i] = result;
    console.log(squares)
    setSquares(squaresCopy);
    setXIsNext(!isXNext);
    handleDraw(squaresCopy)
  }

  return (
    <div className="container">
      <h1 className="status">{msg}<span className="bold">{span}</span></h1>
      <div className="board">
        <Square value={squares[0]} handleEvent={() => handleClick(0)} />
        <Square value={squares[1]} handleEvent={() => handleClick(1)} />
        <Square value={squares[2]} handleEvent={() => handleClick(2)} />
        <Square value={squares[3]} handleEvent={() => handleClick(3)} />
        <Square value={squares[4]} handleEvent={() => handleClick(4)} />
        <Square value={squares[5]} handleEvent={() => handleClick(5)} />
        <Square value={squares[6]} handleEvent={() => handleClick(6)} />
        <Square value={squares[7]} handleEvent={() => handleClick(7)} />
        <Square value={squares[8]} handleEvent={() => handleClick(8)} />
      </div>
      <ResetBtn reset={resetGame} />
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
