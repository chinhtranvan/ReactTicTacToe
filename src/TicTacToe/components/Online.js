import React, { useState } from "react";
import './Online.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function Online() {
    const [open, setOpen] = useState(true);
    const [name, setName] = useState('');
    const handleOK =  () => {
        setOpen(false);
        
    }
    const handleNameChange =  (e) => {
        setName(e.target.value)
    }
	return (
		<div className='Online'>
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

export default Online




