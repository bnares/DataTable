import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./basicTable.scss";
import { makeStyles } from '@material-ui/styles';
import { render } from '@testing-library/react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import Modal from "../modal/Modal.jsx";
import { ENDPOINTS, createApiEndpoint} from '../../api/Api';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import GenericModal from '../genericModal/GenericModal';
import AddEmployeeForm from '../addEmployeeForm/AddEmployeeForm';

const styles = makeStyles(theme=>({
    tableRow:{
        cursor:"pointer",
        "&:hover": {
            backgroundColor: "gray"
          }
    }
}))

function BasicTable(props) {
    const {employees, setEmployees} = props;
    const [openModal, setOpenModal] = React.useState(false);
    const [userToDelete, setUserToDelete] = React.useState({});
    const [addUserWindow, setAddUserWindo] = React.useState(false);

    React.useEffect(()=>{
      createApiEndpoint(ENDPOINTS.getAllEmployee).fetchAll()
      .then(response=>{
        setEmployees(response.data.data);
      })
      .catch(err=>{
        console.log("error message: ")
        console.log(err);
      });
    },[openModal,addUserWindow])
    
    const handleClickModalDeleteUser = (user) => {
        setOpenModal((prev)=>!prev);
        setUserToDelete(user);
      };
    
      const handleClose = () => {
        setOpenModal(false);
      };
    
    const openAddUserWindow = ()=>{
        setAddUserWindo(true);
    }

    const closeAddUserWindow = ()=>{
        setAddUserWindo(false);
    }
    
    const classes = styles();
  return (
    <div className="basicTable">
        <div className="addUser">
            
            <Button  color='primary' variant="contained" onClick={openAddUserWindow}> <AddIcon fontSize='small'/> Add User</Button>
        </div>
        
        <TableContainer component={Paper}>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow >
                    <TableCell align='center'>ID</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Surname</TableCell>
                    <TableCell align="right">Age</TableCell>
                    <TableCell align='right'>Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {employees.map((row) => (
                    <TableRow
                    key={row.employeeId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    className = {classes.tableRow}
                    >
                        <TableCell component="th" scope="row">
                            {row.employeeId}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.surname}</TableCell>
                        <TableCell align="right">{row.age}</TableCell>
                        <TableCell align='right'>
                            <div className="icons">
                                <div className="deleteIcon">
                                    <IconButton aria-label="delete"  color="primary" onClick={(e)=>(handleClickModalDeleteUser(row))}>
                                        <DeleteIcon fontSize='small'className='icon'/>
                                    </IconButton>
                                </div>
                                <div className="editIcon">
                                    <IconButton aria-label="delete"  color="secondary" onClick={(e)=>(handleClickModalDeleteUser())}>
                                        <ModeIcon fontSize='small' className='icon'/>
                                    </IconButton>
                                </div>
                            </div>
                            
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>

        <Modal open ={openModal} close= {handleClose} handleClick = {handleClickModalDeleteUser} user = {userToDelete}/>
        <GenericModal openPopup = {addUserWindow} closeOpenPopup = {closeAddUserWindow} title = {"Add User"} children = {<AddEmployeeForm  setCloseWindow = {closeAddUserWindow}/>}/>
    </div>
    
    
    
  )
 
}

export default BasicTable