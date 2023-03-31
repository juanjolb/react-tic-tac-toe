import Square from "./Square";

import "./board.css";
import { useState } from "react";

const Board = () => {
  const [value, setValue] = useState<string[]>(Array(9).fill(null));
  const [chooseValue, setChooseValue] = useState(true);

  const handleClick = (index: number) => {
    if (value[index] || calculateWinner(value)) return;
    const newArray = value.slice();
    chooseValue ? (newArray[index] = "X") : (newArray[index] = "O");
    setChooseValue(!chooseValue);
    setValue(newArray);
  };

  const calculateWinner = (board: string[]): string | null => {
    let winner: string | null = null;

    const winLines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winLines.forEach((line) => {
      const [a, b, c] = line;
      if (
        board[a] === board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      )
        winner = board[a];
    });
    return winner;
  };

  return (
    <div className="board">
      <div className="board-row">
        <Square value={value[0]} onSquareClick={() => handleClick(0)} />
        <Square value={value[1]} onSquareClick={() => handleClick(1)} />
        <Square value={value[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={value[3]} onSquareClick={() => handleClick(3)} />
        <Square value={value[4]} onSquareClick={() => handleClick(4)} />
        <Square value={value[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={value[6]} onSquareClick={() => handleClick(6)} />
        <Square value={value[7]} onSquareClick={() => handleClick(7)} />
        <Square value={value[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};
export default Board;
