import React from 'react'
import "./dataTable.scss";
import { DataGrid } from '@mui/x-data-grid';
import {ENDPOINTS,createApiEndpoint} from "../../api/Api.js";
import Button from '../controls/Button';
import AddIcon from '@mui/icons-material/Add';
import GenericModal from '../genericModal/GenericModal';
import AddWageForm from '../AddWageForm/AddWageForm';


function DataTable(props) {
    const {rows, columns,employees,updateWages} = props;
    const [addWageWindow, setAddWageWindo] = React.useState(false);
    const [allEmployees, setAllEmployees] = React.useState([]);
    
    const closeAddWageWindow = ()=>{
        setAddWageWindo(false);
    }
    const openAddWageWindow = ()=>{
        setAddWageWindo(true);
    }

    const submitWageForm = (dataToSubmit) =>{
        createApiEndpoint(ENDPOINTS.addWage).create(dataToSubmit)
            .then(response=>{
                closeAddWageWindow();
                updateWages();
            })
            .catch(err=>{
                console.log("error from submitWageForm");
                console.log(err);
            })
    }

    React.useEffect(()=>{ 
        createApiEndpoint(ENDPOINTS.getAllEmployee).fetchAll()
            .then(response=>{
                setAllEmployees(response.data.data);
            })
            .catch(err=>{
                console.log("error message");
                console.log(err);
            })
    },[addWageWindow])

    return (
    <div className="dataTable">
        <div className="addWage">
            <Button variant="contained" color="primary" onClick = {openAddWageWindow}><AddIcon /> Add Wage</Button>
        </div>
        
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
        <GenericModal title="Add Wage" 
                      children = {<AddWageForm employees={employees} submit={submitWageForm}/>}
                      openPopup ={addWageWindow} 
                      closeOpenPopup = {closeAddWageWindow}
        />
    </div>
    
  )
}

export default DataTable