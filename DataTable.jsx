import React from 'react'
import "./dataTable.scss";
import { DataGrid } from '@mui/x-data-grid';
import {ENDPOINTS,createApiEndpoint} from "../../api/Api.js";



function DataTable() {
    
    const [wages, setWages] = React.useState([]);
    const [columnsName, setColumnsName] = React.useState([]);

    React.useEffect(()=>{
        createApiEndpoint(ENDPOINTS.getAllWages).fetchAll()
          .then(res=>{
            
            setWages(res.data.data);
            setColumnsName(Object.keys(res.data.data[0]))
          })
          .catch(err=>{
            console.log("errorMessage");
            console.log(err);
          });
    },[])

    const getColumns = ()=>{
        const columns = [];
        
        columnsName.forEach(item=>{
            let column = {field:item, headerName:item, width:200};
            //console.log(column);
            columns.push(column);
    })
        return columns;
    }

    const getRows = ()=>{
        let rows = [];
        wages.forEach(item=>{
            console.log("getRows");
            console.log(item);
            item.employee = item.employee.name+" "+item.employee.surname;
            console.log(item);
            rows = [...rows, {...item, id:item.wageId}]
            
        })
        return rows;
    }
    return (
    <div className="dataTable">
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={getRows()}
                columns={getColumns()}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    </div>
  )
}

export default DataTable