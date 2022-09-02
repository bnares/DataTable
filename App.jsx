import React from 'react'
import './App.scss';
import Sidebar from "./components/sidebar/Sidebar.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
import {ENDPOINTS,createApiEndpoint} from "./api/Api.js";
import BasicTable from './components/basicTable/BasicTable';
import DataTable from './components/dataTable/DataTable';

function App() {
  const [allEmployees, setAllEmployees]  = React.useState([]);
  const [wages, setWages] = React.useState([]);
  const [columnsName, setColumnsName] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const [columns,setColumns] = React.useState([]);

  React.useEffect(()=>{
    createApiEndpoint(ENDPOINTS.getAllEmployee).fetchAll()
      .then(response=>{
        setAllEmployees(response.data.data);
      })
      .catch(err=>{
        console.log("error message: ")
        console.log(err);
      });
    
      createApiEndpoint(ENDPOINTS.getAllWages).fetchAll()
          .then(res=>{
            
            setWages(res.data.data);
            setColumnsName(Object.keys(res.data.data[0]))
            let createdRows = getRows();
            let createdColumns = getColumns();
            setRows(createdRows);
            setColumns(createdColumns);
            
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
        columns.push(column);
})
    return columns;
}

const getRows = ()=>{
    let rows = [];
    let wagesCopy = [...wages];
    console.log("Inside getRows");
    wagesCopy.forEach(item=>{
        let name = item.employee.name+" "+item.employee.surname;
        item.employee = name;
        rows = [...rows, {...item, id:item.wageId}]
    })
    return rows;
}

  return (
    <div className="App">
      <div className="left">
        <div className="logo">
            Logo
        </div>
        <Sidebar />
      </div>
      <div className="container">
        <Navbar />
        <BasicTable employees={allEmployees} setEmployees = {setAllEmployees}/>
        <DataTable rows = {getRows()} columns={getColumns()} employees = {allEmployees} setEmployees = {setAllEmployees} updateWages = {getRows}/>
      </div>
    </div>
  );
}

export default App;
