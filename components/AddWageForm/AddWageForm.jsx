import Form from "../form/Form.js";
import React from 'react';
import Controls from "../controls/index.js";
import "./addWageForm.scss";

function AddWageForm(props) {
    const {employees, error, submit} = props;
    const [employeeData, setEmployeeData] = React.useState({
        "employeeId": 1,
        "amount": 0
      });

    const basicData = {
        "employeeId": 0,
        "amount": 0
      };
    const resetForm = {
        "employeeId": 0,
        "amount": 0
      };

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log("On Submit function");
        console.log(employeeData);
        submit(employeeData);
        setEmployeeData(basicData);
    }

    const handleWageChange = (e)=>{
        const {name,value} = e.target;
        setEmployeeData({...employeeData, [name]:value});
        console.log("Wage change");
        console.log(employeeData);
    }

  return (
    <Form onSubmit = {onSubmit}>
        <div className="submitForm">
            <Controls.Select
                label = "Employee"
                name="employeeId"
                value = {employeeData.employeeId}
                onChange = {handleWageChange}
                options = {employees}
                //error = {error.employeeId}
            />

            <Controls.Input
                label="Wage Amount"
                name="amount"
                value = {employeeData.amount}
                onChange = {handleWageChange}
                //error={error.amount}
            />
            <div className='buttonPanel'>
                    <Controls.Button
                        type = 'submit'
                        //onClick={()=>(console.log("Button submit click"))}
                        text="Submit"
                    >
                        Confirm
                    </Controls.Button>                
                
                    <Controls.Button
                       
                        color="secondary"
                        //onClick={handleReset}
                        text="Cancel"
                    >
                        Cancel
                    </Controls.Button>
            </div>
        </div>

    </Form>
  )
}

export default AddWageForm