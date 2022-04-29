import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import GreenButton from '../Elements/GreenButton'
import './OnlineAndOffline.css';
function OnlineAndOffline(){
    const navigate = useNavigate();
    const handleOnline = () => {
        navigate('/2players/Online');
        
    }
    const handleOffline = () => {
        navigate('/2players/offline');
        
    }
    return (
        <div className='bg'>
            <div className='Online'>
                <GreenButton onClick={handleOnline}>Online</GreenButton>
            </div>
            <div className='Offline'>
                <GreenButton onClick={handleOffline}>Offline</GreenButton>            
            </div>     
        </div>

    )
}
export default  OnlineAndOffline;

// <div className='Online'>
//                 <Button size='large' color='success' variant="contained" onClick={handleOnline}>Online</Button>
//             </div>
//             <div className='Offline'>
//                 <Button size='large' color='success' variant="contained" onClick={handleOffline}>Offline</Button>
//             </div> 