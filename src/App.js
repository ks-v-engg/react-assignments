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

function App() {
  const [form,setform] = React.useState({});
  const [studentlist,setstudentlist] = React.useState([]);
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
    </div>
  );
}

export default App;
