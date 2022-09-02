import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles(theme=>({
    root:{
     '& .MuiFormControl-root':{
         width:'80%',
         margin:theme.spacing(1)
     }
    }
 }))
export default function Form(props){
    const classes = useStyle();
    const {children, ...other} = props;
    return(
    <form className={classes.root} autoComplete="off" onSubmit={other.onSubmit}>
        {children}
    </form>
    )
}