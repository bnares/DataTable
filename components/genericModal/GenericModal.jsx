import React from 'react';
import "./genericModal.scss";
import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import Controls from "../controls/index.js";

const useStyle = makeStyles(theme=>({
    dialogWrapper:{
        padding: theme.spacing(2),
        position:'absolute',
        top:theme.spacing(5),
    },
    buttonCancel:{
        border: '1px solid red',
        padding:"0px",
        color:"black",
        margin:"10px",
    },
    dialogTitle:{
        paddingRight:'0px'
    }
    
    
}))


function GenericModal(props) {
  const {title,children, openPopup, closeOpenPopup} = props;
    const classes = useStyle();
  return (
    <Dialog open= {openPopup} maxWidth="sm" classes={{paper :classes.dialogWrapper}}>
        <DialogTitle className={classes.dialogTitle}>
            <div style = {{display:'flex'}}>
            
              <Typography variant='h6' component="div" style ={{flexGrow:1}}>
                  {title}
              </Typography>
              <div className="cancelButton">
                <Controls.Button 
                      color="secondary"
                      size="small"
                      startIcon={<CloseIcon />}
                      onClick = {closeOpenPopup}
                ></Controls.Button>
              </div>
            </div>
        </DialogTitle>
        <DialogContent dividers>
           
            {children}
        </DialogContent>
    </Dialog>
  )
}

export default GenericModal;