import axios from "axios";

const BaseUrl = "https://localhost:7178/api/";

export const ENDPOINTS = {
    getAllEmployee:"Employee/GetAllEmployees",
    deleteEmployee:"Employee/DeleteEmployee",
    addEmployee:"Employee/addEmployee",
    getAllWages:"Wage/GetWages",
    addWage:"Wage/addNewWage",
}


export const createApiEndpoint= (endpoint)=>{
    let url = BaseUrl+endpoint+"/";
    return {
        fetchAll: ()=>axios.get(url),
        fetchById: (id)=>axios.get(url+id),
        create: newRecord =>axios.post(url, newRecord),
        update: (id,updateRecord)=>axios.put(url+id,updateRecord),
        delete:(id)=>axios.delete(url+id)
    }
}