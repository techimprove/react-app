import React, { useState, useEffect } from 'react';
import Actions from "../components/Actions";
import AddDetails from '../AddDetails';

function PythonFlask() {
  const [employeeData, setEmployeeData] = useState([]);
  const [toggleDetailsPopUp, setToggleDetailsPopUp] = useState(false);


  const action = (empId, action) => {
    if (action === 'add') {
      setToggleDetailsPopUp(true);
    } else if (action === 'edit') {
      setToggleDetailsPopUp(true);
      alert('Edit details function is in progress   ' + action + ' ' + empId);
    } else {
      fetch(`http://127.0.0.1:5000/delete/${empId}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*"
        },
      }).then(res => res.text()).then((data) => {
        getData();
        alert('Employee ' + empId + ' Record Removed Successfully');
      });
    }
  };

  const getData = () => {
    fetch(`http://127.0.0.1:5000/get-employee-data`).then(res => res.json()).then((data) => {
      const sortedData = data.sort((a, b) => a.emp_id - b.emp_id);
      setEmployeeData(sortedData);
    });
  };

  const updateDetailsPopUp = (event) => {
    setToggleDetailsPopUp(false);
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div style={{ padding: '10px', fontSize: '15px', fontWeight: 700, color: 'green' }}>
        Finally we are able to get the data from Cassandra through Python Flask :)
        </div>
      <div>
        <table class='table table-striped equal-width'>
          <thead class='thead-dark'>
            <tr style={{ backgroundColor: '#123456', color: 'white', fontSize: '15px' }}>
              <td>Employee Id</td>
              <td>Name</td>
              <td>City</td>
              <td>Emil Id</td>
              <td>Marital Status</td>
              <td>Education</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((emp) => (
              <tr>
                <td key={emp.emp_id}>{emp.emp_id}</td>
                <td key={emp.emp_name}>{emp.emp_name}</td>
                <td key={emp.emp_city}>{emp.emp_city}</td>
                <td key={emp.emp_email}>{emp.emp_email}</td>
                <td key={emp.emp_gender}>{emp.emp_gender}</td>
                <td key={emp.emp_degree}>{emp.emp_degree}</td>
                <td><Actions empId={emp.emp_id} action={action}></Actions></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddDetails toggleDetailsPopUp={toggleDetailsPopUp} onToggleChange={updateDetailsPopUp} onAddDetails={getData}></AddDetails>
    </div >

  );
}

export default PythonFlask;
