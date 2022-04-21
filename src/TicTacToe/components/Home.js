import Button from '@mui/material/Button';
import { useState } from 'react';
import './Home.css';
import TicTacToe from '../TicTacToe';
function Home() {
    const [isGameStart, setIsGameStart] = useState(false);
    return (
		<div className='Home'>
            {isGameStart ? <TicTacToe/> : <Menu setGameStart={setIsGameStart}/> }
		</div>
	);
}
function Menu(props){
    const handleTwoPlayer = () => {
        props.setGameStart(true);
    }
    return (
        <div>
            <div className='ChinhButton1'>
                <Button size='large' color='success' onClick={handleTwoPlayer} variant="contained">Player 1 vs Player 2</Button>
            </div>
            <div className='ChinhButton2'>
                <Button size='large' color='success' variant="contained">Player vs AI Player</Button>
            </div>
        </div>

    )
}

export default Home;