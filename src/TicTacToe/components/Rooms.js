import Button from '@mui/material/Button';
function Rooms(){
    return (
        <div>
            <div className='Room1'>
                <Button size='large' color='success' variant="contained">Room 1</Button>
            </div>
            <div className='Room2'>
                <Button size='large' color='success' variant="contained">Room 2</Button>
            </div>
            <div className='Room3'>
                <Button size='large' color='success' variant="contained">Room 3</Button>
            </div>
            <div className='Room4'>
                <Button size='large' color='success' variant="contained">Room 4</Button>
            </div>
            <div className='Room5'>
                <Button size='large' color='success' variant="contained">Room 5</Button>
            </div>
        </div>

    )
}
export default Rooms;