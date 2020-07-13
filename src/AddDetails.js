import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class AddDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employeeName: '', city: '', employeeId: '', education: '', status: '', emailId: ''
        }
    }

    setFormData = (event) => {
        switch (event.target.name) {
            case 'employeeId':
                this.setState({ employeeId: event.target.value });
                break;
            case 'employeeName':
                this.setState({ employeeName: event.target.value });
                break;
            case 'education':
                this.setState({ education: event.target.value });
                break;
            case 'city':
                this.setState({ city: event.target.value });
                break;
            case 'status':
                this.setState({ status: event.target.value });
                break;
            case 'emailId':
                this.setState({ emailId: event.target.value });
                break;
        }
    }

    addDetails(event) {
        const detailsObj = {
            'empId': this.state.employeeId,
            'empName': this.state.employeeName,
            'education': this.state.education,
            'city': this.state.city,
            'status': this.state.status,
            'emailId': this.state.emailId
        }
        fetch(`http://127.0.0.1:5000/add-details`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*"
        },
        body: JSON.stringify(detailsObj)
      }).then(res => res.text()).then((data) => {
        alert('Record Added Successfully');
      });
      this.props.onAddDetails();
      this.props.onToggleChange();
    }

    render() {
        return (
            <div>
                <Modal show={this.props.toggleDetailsPopUp}>
                    <Modal.Header closeButton onClick={() => this.props.onToggleChange()}>
                        <Modal.Title>Add Employee Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div >
                            <table>
                                <tr>
                                    <td>
                                        <div>Employee Id: <input type="text" name='employeeId' onChange={this.setFormData} /></div>
                                    </td>
                                    <td>
                                        <div>Name: <input type="text" name='employeeName' onChange={this.setFormData} /></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>Education: <input type="text" name='education' onChange={this.setFormData} /></div>
                                    </td>
                                    <td>
                                        <div>City: <input type="text" name='city' onChange={this.setFormData} /></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>Marital Status: <input type="text" name='status' onChange={this.setFormData} /></div>
                                    </td>
                                    <td>
                                        <div>Email Id: <input type="text" name='emailId' onChange={this.setFormData} /></div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.props.onToggleChange()}>Close</Button>
                        <Button variant="primary" onClick={() => this.addDetails()}>Save Changes</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }

}
export default AddDetails