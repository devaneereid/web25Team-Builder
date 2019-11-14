import React, {useState} from 'react';
import TeamMembers from "./TeamMembers";
import TeamInfo from "./TeamInfo";
import './App.css';

function App() {

  const [info, setInfo] = useState(TeamInfo);

const handleChanges = e => {
  setInfo({...info, [e.target.name]: e.target.value});
  console.log(e.target.value);
}
  return (
    <div className="App">
      <h1>Team Builder App!</h1>
        <TeamMembers info={info} />
        
    </div>
  );
}

export default App;
