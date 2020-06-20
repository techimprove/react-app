import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";  

function About() {

  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        setEmployeeData(data);
      });
  }, []);
  
  return (
    <div>
      <div style={{ padding: '10px', fontSize: '15px', fontWeight: 700 }}>
        Use Effect is an React Life cycle hook, that gets called on component initialization!!!
        </div>
      <div>
        <table class='table table-striped'>
          <thead class='thead-dark'>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>User Name</td>
              <td>Email</td>
              <td>Address</td>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee) => (
              <tr>
                <td key={employee.id}>{employee.id}</td>
                <td key={employee.name}><Link to={`/props-for-child-component/${employee.id}`}>{employee.name}</Link></td>
                <td key={employee.username}>{employee.username}</td>
                <td key={employee.email}>{employee.email}</td>
                <td key={employee.address.city}>{employee.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div >
  );
}

export default About;
