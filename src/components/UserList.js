import React, { Component } from 'react';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedValue: '' };
    }

    setSelectedValue = (event) => {
        this.setState({ selectedValue: event.target.value });
    };

    render() {

        let options = this.props.dataFromParent.map((data) =>
            <option value={data.title} key={data.id}>{data.title}</option>
        );

        return (
            <div className="drop-downs">
                <select style={{ width: '500px', height: '30px', borderRadius: '6px' }}
                    onChange={this.setSelectedValue}>
                    <option>Select</option>
                    {options}
                </select>
                <button type="button"
                    style={{ marginLeft: '10px', width: '200px', height: '30px', borderRadius: '6px' }}
                    onClick={() => this.props.clickHandlerFromChild(this.state.selectedValue)}>
                    Send Data to Parent
                </button>
                <button type="button" style={{ marginLeft: '10px', width: '70px', height: '30px', borderRadius: '6px' }}
                    onClick={() => history.goBack()}>Back</button>
            </div>
        );
    }
}
export default UserList;