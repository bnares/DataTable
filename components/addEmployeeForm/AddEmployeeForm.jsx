import React from 'react'
import "./addEmployeeForm.scss";
import Controls from "../controls/index.js";
import Grid from '@mui/material/Grid';
import Form  from "../form/Form.js";
import {ENDPOINTS, createApiEndpoint} from "../../api/Api.js";


function AddEmployeeForm(props) {
    const {setCloseWindow} = props;
    const [initialFieldValues, setInitialFieldValues] = React.useState({
        name: "",
        surname: "",
        age: 0
    });

    const addUser = ()=>{
        createApiEndpoint(ENDPOINTS.addEmployee).create(initialFieldValues)
            .then(response=>{
                setInitialFieldValues(basicForm);
                setCloseWindow();
            })
            .catch(er=>{
                console.log("error message from add User")
                console.log(er);
            })
    }

    const basicForm = {
        name: "",
        surname: "",
        age: 0
    }
    const errors = {};
    
    const handleInputChange = e=>{
        const {name,value} = e.target;
        setInitialFieldValues({...initialFieldValues, [name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addUser();
    }

  return (
    <Form onSubmit={handleSubmit}>
           
                <Grid item xs={6}>
                    <div className="addNewUser">
                        <div className="fields">
                            <Controls.Input 
                            name='name'
                            label="Name"
                            value={initialFieldValues.name}
                            onChange = {(e)=>handleInputChange(e)}
                            error = {errors.name} 
                            />
                    
                            <Controls.Input 
                            name="surname"
                            label="Surname"
                            value={initialFieldValues.surname}
                            onChange = {(e)=>handleInputChange(e)}
                            error = {errors.surname}
                            />

                            <Controls.Input 
                                name="age"
                                label="Age"
                                value={initialFieldValues.age}
                                onChange = {(e)=>handleInputChange(e)}
                                error={errors.age}
                            />
                        </div>
                        <div className='buttonPanel'>
                    <Controls.Button
                        type = 'submit'
                        onClick={handleSubmit}
                        text="Submit"
                    >
                        Confirm
                    </Controls.Button>
                
                
                    <Controls.Button
                       
                        color="secondary"
                        onClick={setCloseWindow}
                        type="button"
                    >
                        Cancel
                    </Controls.Button>
                </div>
                    </div>
                    

                </Grid>
                
                
        
        </Form>
  )
}

export default AddEmployeeForm