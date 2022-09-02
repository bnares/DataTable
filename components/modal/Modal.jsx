import React from 'react';
import "./modal.scss";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {ENDPOINTS, createApiEndpoint} from "../../api/Api.js";

function Modal(props) {
    const {open, close, handleClick,user} = props;
  
    const deleteUser = ()=>{
        const url = ENDPOINTS.deleteEmployee;
        createApiEndpoint(url).delete(user.employeeId)
            .then(response=>{
                console.log("User Deleted");
                close();
            });
    }

    

  return (
    <div>
      
      <Dialog open={open} onClose={()=>handleClick()}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are You sure To Delete {user.name} {user.surname}?
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={()=>deleteUser()}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  
}

export default Modal