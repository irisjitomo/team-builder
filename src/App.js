import React, { useState } from 'react';



import './App.css';

import data from './data';
import SubmittedForms from './components/submittedforms';
import Form from './components/form';


function App() {
const [members, setmember] = useState(data)
const SetNewMember = member => {
  setmember([...members, member])
}


  console.log(data)
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form SetNewMember={SetNewMember}/>
      <h1>Completed Forms:</h1>
      <SubmittedForms Member={members}/>
      
    </div>
  );
}

export default App;
