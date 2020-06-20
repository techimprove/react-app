import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import UserList from './UserList';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();


function Summary() {

  let { id } = useParams();
  const [employeeDetail, SetEmployeeDetail] = useState([]);
  const [selectedDropdownVal, setSelectedDropdownVal] = useState('');

  const outputEvent = (event) => {
    setSelectedDropdownVal(event);
  };

  useEffect(() => {
    if(id === ':id'){
      alert('Oops..:( Direct Navigation to this Tab is not allowed. Please navigate from Use Effect & Use State');
      history.goBack();
    }
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => res.json()).then((data) => {
      SetEmployeeDetail(data);
    });
  });

  return (
    <div className="App">
      <div style={{ padding: '10px' }}><b>{'Welcome "' + selectedDropdownVal + '"  data passed from Child Component'}</b></div>
      <UserList dataFromParent={employeeDetail} clickHandlerFromChild={outputEvent}></UserList>
    </div>
  );
}
export default Summary;
