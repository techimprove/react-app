import React, { Component } from 'react';
import trash_icon from '../assets/icon-delete-1.png';
import add_icon from '../assets/icon-add.png';
import edit_icon from '../assets/icon-edit-1.png';

class Actions extends Component {
    render() {
        return (
            <div className="actions">
                <img src={add_icon} alt="add" style={{float: 'left', marginRight: '15px', height: '25px', width: '30px', cursor: 'pointer',
                 borderStyle: 'solid', borderColor: 'green', borderRadius: '5px'}}
                onClick={() => this.props.action(this.props.empId, 'add')}></img>
                <img src={edit_icon} alt="edit" style={{float: 'left', marginRight: '15px',height: '25px', width: '30px', cursor: 'pointer',
                 borderStyle: 'solid', borderColor: 'green', borderRadius: '5px'}}
                onClick={() => this.props.action(this.props.empId, 'edit')}></img>
                <img src={trash_icon} alt="trash" style={{float: 'left', marginRight: '15px', height: '25px', width: '30px', cursor: 'pointer',
                 borderStyle: 'solid', borderColor: 'green', borderRadius: '5px'}}
                onClick={() => this.props.action(this.props.empId, 'delete')}></img>
            </div>
        );
    }
}
export default Actions;