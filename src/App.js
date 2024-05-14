import React from 'react';
import './App.css';
import { Studentlistcontext } from './context/studentcontext';
import Studentform from './Components/Studentform';
import Onandoff from './Components/Assignmentone';
import Header from './Components/Header';
import Oddoreven from './Components/Oddoreven';
import Weekday from './Components/Weekday';
import Login from './Components/Login';
import Cltofh from './Components/Cltofh';
import Cltofhincontext from './Components/Cltofhincontext';
import { Cltof } from './context/cltofhcontext';
import Loginref from './Components/Loginref';

function App() {
  const [form,setform] = React.useState({});
  const [studentlist,setstudentlist] = React.useState([]);

  const [cl,setcl] = React.useState(0);
  const [fl,setfl] = React.useState(32);

  return (
  <div>
    <div>
      <Header />
      <Onandoff />
      <Oddoreven />
      <Weekday />
      <Login />
      <Cltofh />
    </div>
    <div className="App">
    <Studentlistcontext.Provider value={{form,setform,studentlist,setstudentlist}}>
      <Studentform />
    </Studentlistcontext.Provider>
     </div>
     <div>
      <Cltof.Provider value={{cl,setcl,fl,setfl}}>
        <Cltofhincontext />
      </Cltof.Provider>
     </div>
     <Loginref />
    </div>
  );
}

export default App;
