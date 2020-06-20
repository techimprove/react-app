import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Button, Form } from "react-bootstrap";

export const history = createBrowserHistory();

class Validations extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '', lastName: '', email: '', male: '', female: '', location: '', role: '', startDate: null, experience: '',
      degree: '', angular: '', react: '', firstNameError: '', lasttNameError: '', emailError: '', genderError: '', locationError: '',
      roleError: '', startDateError: '', experienceError: '', degreeError: '', certificationError: ''
    }
  }

  validate = () => {
    let firstNameError = '';
    let lasttNameError = '';
    if (this.state.firstName === '') {
      firstNameError = 'First name can not be empty';
      this.setState({ firstNameError });
    } else {
      this.setState({ firstNameError: '' });
    }

    if (this.state.lastName === '') {
      lasttNameError = 'Last name can not be empty';
      this.setState({ lasttNameError });
    } else {
      this.setState({ lasttNameError: '' });
    }

    if (this.state.email === '') {
      this.setState({ emailError: 'Email can not be empty' });
    } else {
      this.setState({ emailError: '' });
    }
    debugger;
    if (this.state.male !== '' || this.state.female !== '') {
      this.setState({ genderError: '' });
    } else {
      this.setState({ genderError: 'Please select the gender' });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const isFormValid = this.validate();
  }

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleFemaleChange = (event) => {
    this.setState({ female: event.target.value })
  }

  handleMaleChange = (event) => {
    this.setState({ male: event.target.value })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '43px' }}>
          <div style={{ width: '1000px', height: '510px', backgroundColor: '#123456', borderRadius: '10px' }}>
            <div style={{
              color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px',
              padding: '7px', fontWeight: '600'
            }}>Please Enter Your Details</div>
            <div style={{ width: '100%', padding: '10px' }}>
              <table>
                <tr style={{ width: '100%' }}>
                  <td style={{
                    width: '55%', paddingLeft: '110px', paddingRight: '50px',
                    paddingBottom: '10px', paddingTop: '15px'
                  }}>
                    <label style={{ color: 'white', fontWeight: '400', width: '80px' }}>First Name</label>
                    <input type='text' value={this.state.firstName} style={{ width: '250px', marginLeft: '10px', color: 'green', fontWeight: 'bold' }}
                      onChange={this.handleFirstNameChange} minLength='5' maxLength='20'></input>
                    <p style={{ float: 'right', fontSize: '12px', fontStyle: 'italic', height: '18px', marginRight: '45px', color: 'red' }}>
                      {this.state.firstNameError}</p>
                  </td>
                  <td style={{ width: '60%', paddingBottom: '10px', paddingTop: '15px' }}>
                    <label style={{ color: 'white', fontWeight: '400', width: '80px' }}>Last Name</label>
                    <input type='text' onChange={this.handleLastNameChange} value={this.state.lastName} style={{ width: '250px', marginLeft: '10px', color: 'green', fontWeight: 'bold' }}></input>
                    <p style={{ float: 'right', fontSize: '12px', fontStyle: 'italic', height: '18px', marginRight: '105px', color: 'red' }}>
                      {this.state.lasttNameError}</p>
                  </td>
                </tr>
                <tr style={{ width: '100%' }}>
                  <td style={{
                    width: '55%', paddingLeft: '110px', paddingRight: '50px',
                    paddingBottom: '10px'
                  }}>
                    <label style={{ color: 'white', fontWeight: '400', width: '80px' }}>Email</label>
                    <input type='email' onChange={this.handleEmailChange} value={this.state.email} style={{ width: '250px', marginLeft: '10px', color: 'green', fontWeight: 'bold' }}></input>
                    <p style={{ float: 'right', fontSize: '12px', fontStyle: 'italic', height: '18px', marginRight: '45px', color: 'red' }}>
                      {this.state.emailError}</p>
                  </td>
                  <td style={{ width: '60%', paddingBottom: '10px' }}>
                    <div>
                      <label style={{ color: 'white', fontWeight: '400', width: '80px' }}>Gender</label>
                      <input type="radio" value={this.state.male} name="gender" id="male" value='male' onChange={this.handleMaleChange} />
                      <label style={{ color: 'white', fontWeight: '400', marginRight: '20px' }} for="male">Male</label>
                      <input type="radio" id="female" name="gender" value='female' onChange={this.handleFemaleChange} />
                      <label style={{ color: 'white', fontWeight: '400' }} for="female">Female</label>
                    </div>
                    <p style={{ float: 'right', fontSize: '12px', fontStyle: 'italic', marginRight: '105px', height: '18px', color: 'red' }}>
                      {this.state.genderError}</p>
                  </td>
                </tr>
                <tr style={{ width: '100%' }}>
                  <td style={{
                    width: '55%', paddingLeft: '110px', paddingRight: '50px',
                    paddingBottom: '10px'
                  }}>
                    <label style={{ color: 'white', fontWeight: '400', width: '80px' }}>Location</label>
                    <select value={this.state.location} style={{ width: '250px', marginLeft: '10px', color: 'green', fontWeight: 'bold', height: '30px' }}>
                      <option>Select</option>
                      <option>Florida</option>
                      <option>New Jersey</option>
                    </select>
                    <p style={{ float: 'right', fontSize: '12px', height: '18px', fontStyle: 'italic', marginRight: '45px', color: 'red' }}>
                      {this.state.locationError}</p>
                  </td>
                  <td style={{ width: '60%', paddingBottom: '10px' }}>
                    <label style={{ color: 'white', fontWeight: '400', width: '80px' }}>Role</label>
                    <select value={this.state.role} style={{ width: '250px', marginLeft: '10px', color: 'green', fontWeight: 'bold', height: '30px' }}>
                      <option>Select</option>
                      <option>Lead Developer</option>
                      <option>Senior Developer</option>
                      <option>Junior Developer</option>
                    </select>
                    <p style={{ float: 'right', fontSize: '12px', height: '18px', fontStyle: 'italic', marginRight: '105px', color: 'red' }}>
                      {this.state.roleError}</p>
                  </td>
                </tr>
                <tr style={{ width: '100%' }}>
                  <td style={{
                    width: '55%', paddingLeft: '110px', paddingRight: '50px',
                    paddingBottom: '10px'
                  }}>
                    <label style={{ color: 'white', fontWeight: '400', width: '80px' }}>Start Date</label>
                    <input type='date' value={this.state.startDate} style={{ width: '250px', marginLeft: '10px', color: 'green', fontWeight: 'bold' }}></input>
                    <p style={{ float: 'right', fontSize: '12px', height: '18px', fontStyle: 'italic', marginRight: '45px', color: 'red' }}>
                      {this.state.startDateError}</p>
                  </td>
                  <td style={{ width: '60%', paddingBottom: '10px' }}>
                    <label style={{ color: 'white', fontWeight: '400', width: '80px' }}>Experience</label>
                    <input type='number' value={this.state.experience} min='5' max='10' style={{ width: '250px', marginLeft: '10px', color: 'green', fontWeight: 'bold' }}></input>
                    <p style={{ float: 'right', height: '10px', fontSize: '12px', height: '18px', fontStyle: 'italic', marginRight: '105px', color: 'red' }}>
                      {this.state.experienceError}</p>
                  </td>
                </tr><tr style={{ width: '100%' }}>
                  <td style={{
                    width: '55%', paddingLeft: '110px', paddingRight: '50px'
                  }}>
                    <label style={{ color: 'white', fontWeight: '400', width: '80px' }}>Degree</label>
                    <input type='text' value={this.state.degree} style={{ width: '250px', marginLeft: '10px', color: 'green', fontWeight: 'bold' }}></input>
                    <p style={{ float: 'right', fontSize: '12px', height: '18px', fontStyle: 'italic', marginRight: '45px', color: 'red' }}
                    >{this.state.degreeError}</p>
                  </td>
                  <td style={{ width: '60%' }}>
                    <div style={{ display: 'inlineBlock' }}>
                      <label style={{ color: 'white', fontWeight: '400', width: '80px' }}>Certification</label>
                      <input value={this.state.angular} type='checkbox' id='angular' style={{ marginLeft: '20px', color: 'green', fontWeight: 'bold' }}></input>
                      <label style={{ color: 'white', fontWeight: '400', marginLeft: '5px' }} for="angular">Angular</label>
                      <input value={this.state.react} type='checkbox' id="react" style={{ marginLeft: '10px', color: 'green', fontWeight: 'bold' }}></input>
                      <label style={{ color: 'white', fontWeight: '400', marginLeft: '5px' }} for="react">React</label>
                    </div>
                    <p style={{ float: 'right', fontSize: '12px', height: '18px', fontStyle: 'italic', marginRight: '105px', color: 'red' }}>
                      {this.state.certificationError}</p>
                  </td>
                </tr>
              </table>
            </div>
            <div style={{ display: 'inline-block', width: '1000px', padding: '0 10px 10px 10px' }}>
              <button type='button' style={{ float: 'left', borderRadius: '10px', width: '100px' }} className='btn btn-secondary'
                onClick={() => history.goBack()}>Back</button>
              <button type='submit' style={{ float: 'right', borderRadius: '10px', width: '100px' }} className='btn btn-success'>Submit</button>
            </div>
          </div>
        </div>
      </Form>
    );
  }
}
export default Validations;
