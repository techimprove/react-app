import React from 'react';
import './App.css';
import logo from './assets/janasena_logo.jpeg';
import RouterComponent from './components/RouterComponent';

function App() {
  return (
    <div className="App">
      <div style={{display: 'inline'}}>
      <img src={logo} alt="logo" height='40' width='40' style={{float: 'left', margin: '4px'}}></img>
      <div className='app-header'>React Application</div>
      <div style={{float: 'right', margin: '-39px 10px', fontWeight:'500', color:'#123456'}}>Praveen Nimmakayala</div>
      </div>
      <div className='body-content'>
        <RouterComponent></RouterComponent>
      </div>
      <div className='app-footer'>@2020 Copy Rights to only techimprove.com</div>
    </div>
  );
}

export default App;
