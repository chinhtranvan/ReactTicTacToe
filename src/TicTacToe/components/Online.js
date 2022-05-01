// import React, { useState } from "react";
// import './Online.css'
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { io } from "socket.io-client";
// const socket = io('http://localhost:3001/',{ transports : ['websocket'] });
// socket.on("connect", () => {
//     console.log(socket.id); 
//     console.log('thanh cong roi')
// });
// function Online() {

    // const [open, setOpen] = useState(true);
    // const [name, setName] = useState('');
    
    // const handleOK =  () => {
    //     setOpen(false);
        
    // }
    // const handleNameChange =  (e) => {
    //     setName(e.target.value)
    // }
// 	return (
// 		<div className='Online'>
        //     <div>
        //         Hello, {name}
        //     </div>
    
		// 	<Dialog open={open}>
        //         <DialogTitle>Please Enter Your Name</DialogTitle>
        //         <DialogContent>
            
        //         <TextField
        //             onChange={handleNameChange}
        //             autoFocus
        //             margin="dense"
        //             id="name"
        //             label="Your Name"
        //             autoComplete="off"
        //             fullWidth
        //             variant="standard"
        //         />
        //         </DialogContent>
        //         <DialogActions>
        //             <Button onClick={handleOK}>OK</Button>
        //         </DialogActions>
        //     </Dialog>
		// </div>
// 	);
// }

// export default Online



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Board } from "./Board";

import { ScoreBoard } from "./ScoreBoard";
import './Online.css';

import GreenButton from '../Elements/GreenButton'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { io } from "socket.io-client";
const socket = io('http://localhost:3001/',{ transports : ['websocket'] });
socket.on("connect", () => {
    console.log(socket.id); 
    console.log('thanh cong roi')
});
const Online = () => {
    const navigate = useNavigate();
    const handleExit = () => {
        navigate('/');       
        }
    const WIN_CONDITIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    const [open, setOpen] = useState(true);
    const [name, setName] = useState('');
    const [xPlaying, setXPlaying] = useState(true);
    const [board, setBoard] = useState(Array(9).fill(null))
    const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
    const [gameOver, setGameOver] = useState(false);
    const handleOK =  () => {
        setOpen(false);
        
    }
    const handleNameChange =  (e) => {
        setName(e.target.value)
    }
    const handleNextTurn =(boxIdx) => {
        const updatedBoard = board.map((value, idx) => {
            if (idx === boxIdx) {
                return xPlaying ? "X" : "O";
            }else {
                return value;
            }
        })

        setBoard(updatedBoard);

        // Step 2: Check if either player has won the game
        const winner = checkWinner(updatedBoard);

        if (winner) {
            if (winner === "O") {
                let { oScore } = scores;
                oScore += 1;
                setScores({ ...scores, oScore })
            }else {
                let { xScore } = scores;
                xScore += 1;
                setScores({ ...scores, xScore })
            }
        }

        // Step 3: Change active player
        setXPlaying(!xPlaying);
    }
    const handleBoxClick = (boxIdx) => {  // Step 1: Update the board
        socket.emit('next turn',boxIdx)
        handleNextTurn(boxIdx)
    }

    const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
        const [x, y, z] = WIN_CONDITIONS[i];

        // Iterate through win conditions and check if either player satisfies them
        if (board[x] && board[x] === board[y] && board[y] === board[z]) {
            setGameOver(true);
            return board[x];
        }
        }
    }

    const resetBoard = () => {
        setGameOver(false);
        setBoard(Array(9).fill(null));
    }
    socket.on("next turn", (res) => {
        console.log('Doi ban vua danh')
        console.log(res)
        handleNextTurn(res)
    })
    return (
        <div className="Online">
            <ScoreBoard scores={scores} xPlaying={xPlaying} />
            <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
            <GreenButton  onClick={resetBoard}>Player Again</GreenButton>  
            <GreenButton  onClick={handleExit}>Exit</GreenButton>  
            <div>
                Hello, {name}
            </div>
    
			<Dialog open={open}>
                <DialogTitle>Please Enter Your Name</DialogTitle>
                <DialogContent>
            
                <TextField
                    onChange={handleNameChange}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Your Name"
                    autoComplete="off"
                    fullWidth
                    variant="standard"
                />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOK}>OK</Button>
                </DialogActions>
            </Dialog>
		</div>
      
    );
}

export default Online;

