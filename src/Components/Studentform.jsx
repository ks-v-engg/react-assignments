import React from "react";
import { Studentlistcontext } from "../context/studentcontext";

const Studentform = () => {

  const [languages,setlanguage] = React.useState([]);
  const [gender,setgender] = React.useState('');

  const getgender = (event) => {
    setgender(event.target.value)
  }

  const getlanguage = (event) => {
    var updatedList = [...languages];
        if (event.target.checked) {
            updatedList = [...languages, event.target.value+", "];
        } else {
            updatedList.splice(languages.indexOf(event.target.value), 1);
        }
        setlanguage(updatedList);
  }

  const options = [
    {
      label: "Chennai",
      value: "Chennai",
    },
    {
      label: "Madurai",
      value: "Madurai",
    },
    
  ];

  const checkList = ["English", "Tamil", "Hindi", "Malayalam"];
  const studentcontext = React.useContext(Studentlistcontext);
  const btnsubmit = () => {
    studentcontext.setstudentlist([...studentcontext.studentlist,studentcontext.form]);
    studentcontext.setform({});
  } 

      return <div>
        <hr></hr>
        <h2>Student form</h2>
        <label>Name : </label>
        <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter name"
            value={studentcontext.form.name}
            onChange={(event) => studentcontext.setform({...studentcontext.form,name: event.target.value})} 
            /> <br />
        <label>Age : </label>
        <input 
            type="text"
            id="age"
            name="age"
            placeholder="Enter Age"
            value={studentcontext.form.age}
            onChange={(event) => studentcontext.setform({...studentcontext.form,age: event.target.value})}
        /> <br />
        <label>Date of birth : </label>
        <input 
            type="date"
            id="dob"
            name="dob"
            placeholder="Enter DOB"
            value={studentcontext.form.dob}
            onChange={(event) => studentcontext.setform({...studentcontext.form,dob: event.target.value})}
            /> <br />
        <label>Language : </label>
         {checkList.map((item, index) => (
          <div key={index}>
            <input value={item} type="checkbox" onChange={getlanguage}/>
            <span>{item}</span>
          </div>
        ))}

        
        <label>City : </label>
        <select 
            value={studentcontext.form.city}
            onChange={(event) => studentcontext.setform({...studentcontext.form,city: event.target.value})}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select> <br />

          <label>Gender : </label>
          <div onChange={getgender}>
            <input type="radio" id="male" name="gender" value="Male"/>
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="Female"/>
            <label htmlFor="female">Female</label> <br />
          </div>

          <label>Comments : </label> <br />
          <textarea id="comment" name="comment" rows="4" cols="50"
          value={studentcontext.form.comment}
          onChange={(event) => studentcontext.setform({...studentcontext.form,comment: event.target.value})}
          /> <br />   

          <button onClick={btnsubmit}>Submit</button>
           <br /> <hr></hr>

          <table> 
            <thead> 
              <th>Sl.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Date of birth</th>
              <th>Language</th>
              <th>City</th>
              <th>Gender</th>
              <th>Comments</th>
            </thead>
            <tbody>
              {
                studentcontext.studentlist.map((student,index) => {
                return <React.Fragment key={index}>
              <tr> 
                <td> {index+1} </td>
                <td> {student.name}  </td>
                <td> {student.age} </td>
                <td> {student.dob} </td>
                <td> {languages} </td>
                <td>{student.city}  </td>
                <td> {gender} </td>
                <td>{student.comment} </td>
              </tr>
              </React.Fragment>
                })
              }
            </tbody>
         </table>
     </div>
}
export default Studentform;
