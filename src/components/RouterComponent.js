import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Summary from "./Summary";
import About from "./About";
import Validations from "./Validations";
import Dashboard from "./Dashboard";
import PythonFlask from "./PythonFlask";

function RouterComponent() {
    return (
        <Router>
            <nav className="nav justify-content-start">
                <a style={{ paddingTop: '10px', paddingLeft: '10px' }} href="#" className="nav-item nav-link active">
                    <Link to="/dashboard">Charting Component</Link>
                </a>
                <a style={{ paddingTop: '10px', paddingLeft: '10px' }} href="#" className="nav-item nav-link active">
                    <Link to="/useEffect-useState">Use Effect & Use State</Link>
                </a>
                <a href="#" className="nav-item nav-link" style={{ paddingTop: '10px', paddingLeft: '5px' }}>
                    <Link to="/props-for-child-component/:id">Props for Child component</Link>
                </a>
                <a href="#" className="nav-item nav-link" style={{ paddingTop: '10px', paddingLeft: '5px' }}>
                    <Link to="/validations">Validations</Link>
                </a>
                <a href="#" className="nav-item nav-link" style={{ paddingTop: '10px', paddingLeft: '5px' }}>
                    <Link to="/python-flask">Python Flask Cassandra</Link>
                </a>
            </nav>
            <div className='child-component-gutters'>
                <Switch>
                    <Route exact path="/"><Dashboard /></Route>
                    <Route path="/dashboard"><Dashboard /></Route>
                    <Route path="/useEffect-useState"><About /></Route>
                    <Route path="/props-for-child-component/:id"><Summary /></Route>
                    <Route path="/validations"><Validations /></Route>
                    <Route path="/python-flask"><PythonFlask /></Route>
                </Switch>
            </div>
        </Router >
    )
}

export default RouterComponent;