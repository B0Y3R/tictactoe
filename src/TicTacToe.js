import React, { useState } from 'react';
import Square from './Square';
import './TicTacToe.css';

function TicTacToe() {

    const [squares, setSquares ] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext ] = useState(true);

    const winner = calculateWinner(squares);

    function getStatus() {
        if (winner) {
            return "Winner " + winner;
        } else if (isBoardFull(squares) && !winner) {
            return "Draw!"
        } else {
            return `Next Player is ${isXNext ? 'O' : 'X'}`;
        }
    }

    function playChoice(i) {
        if (isBoardFull(squares) || winner) {
            const clearBoard = Array(9).fill(null);
            setSquares(clearBoard);
        } else {
            const nextSquares = squares.slice();
            
            if (squares[i] === null) {
                nextSquares[i]  = isXNext ? 'O' : 'X';
                setSquares(nextSquares);
                setIsXNext(!isXNext);
            } else {
                return;
            }
        }
    }

    function renderSquare(i) {
        return <Square value={squares[i]} onClick={() => playChoice(i) } />
    }

    function calculateWinner(squares) {
        const possibleLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ];

          for (let i = 0; i < possibleLines.length; i++) {
              const [a, b, c] = possibleLines[i];

              if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                  return squares[a];
              }
          }
          return null;
    }

    function isBoardFull(squares) {
        return squares.filter(s => s === null).length ? false : true;
    }
    
    return (
        <>
            <div className="container">
                <div className="row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <p> {getStatus()} </p>
        </>
    )
}

export default TicTacToe;