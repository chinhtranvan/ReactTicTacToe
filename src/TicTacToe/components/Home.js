import Button from '@mui/material/Button';
import './Home.css';
import { useNavigate } from "react-router-dom";
import GreenButton from '../Elements/GreenButton'
import TicTacToe from '../TicTacToe';
import Rooms from './Rooms';
// import ParticlesBg from 'particles-bg'
function Home() {
    const navigate = useNavigate();
    const handleTwoPlayer = () => {
        navigate('/2players');
        
    }
    const handleAIPlayer = () => {
        navigate('/AIplayers');      
    }
    return (
        <div>
            <div className='Home'>   
                <div>
                    <h1 className='tittle'>XO GAME</h1>
                    <div className='ChinhButton1'>
                        <GreenButton onClick={handleTwoPlayer} >Player 1 vs Player 2</GreenButton>
                    </div>
                    <div className='ChinhButton2'>
                        <GreenButton onClick={handleAIPlayer}  >Player vs AI Player</GreenButton>
                    </div>
             
                </div>
                
            </div>
        </div>

    )  
}
//  <div className='ChinhButton1'>
//                         <GreenButton size='large' color='success' onClick={handleTwoPlayer} variant="contained">Player 1 vs Player 2</GreenButton>
//                     </div>
//                     <div className='ChinhButton2'>
//                         <GreenButton size='large' color='success' onClick={handleAIPlayer}  variant="contained">Player vs AI Player</GreenButton>
//                     </div>
export default Home;