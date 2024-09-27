import { useRef, useState } from 'react';
import './App.css'

function App() {
// fname f is firsrt
let [fName, setfName] = useState('');
    const changefName = (e: any) => {
      setfName(e.target.value);
    }
    
let [lName, setlName] = useState('');
const changelName = (e: any) => {
  setlName(e.target.value);
}
let [email, setEmail] = useState('');
const changeEmail = (e: any) => {
  setEmail(e.target.value);
}
let [adress, setAdress] = useState('');
const changeAdress = (e: any) => {
  setAdress(e.target.value);
}
let [contact, setContact] = useState<number>(0);
const changeContact = (e: any) => {
  setContact(e.target.value);
}
let [id,setId] = useState <number>(0);
let [isEditing,setEditing] = useState(false);
let [isCreating,setCreating] = useState(false);
let Employeesid =useRef(0)
let [EmployeesData, seEmployeesData] = useState<Array<EmployeesDatatype>>([]);
interface EmployeesDatatype {
  id: number;
  firstName: string;
  lastName:string;
  email:string;
  adress:string;
  contact:number;
};
const AddEmploy =() =>{
  if(isCreating==true)
  {
  EmployeesData.push(
    {
      id:id,
      firstName:fName,
      lastName:lName,
      email:email,
      adress:adress,
      contact:contact
    }
  )
}
if(isEditing==true)
{
  let index;
  EmployeesData.map( (d,i) =>{
    if(d.id=id)
    {
      index=i;
    }
  }
)
EmployeesData[index].firstName=fName;
EmployeesData[index].lastName=lName;
EmployeesData[index].email=email;
EmployeesData[index].adress=adress;
EmployeesData[index].contact=contact;
}
  seEmployeesData(
    [
    ...EmployeesData
    ]
  )
  setCreating(false);
  setEditing(false)
}
const EditEmployeesData = (d) => {
 setEditing(true);
 setCreating(false);
 setfName(d.fname);
 setlName(d.lName);
 setEmail(d.email);
 setAdress(d.adress);
 setContact(d.contact);
}
const CreateEmployeesData =() => {
  setEditing(false);
  setCreating(true);
  Employeesid.current++
  setId(Employeesid.current)
 }
 const DeleteEmploy = (i) => {
  debugger;
  EmployeesData.splice(i,1);
  seEmployeesData(
    [
    ...EmployeesData
    ]
  )
 }
  return (
    <div>
    <div className={isEditing==true || isCreating==true? "col-md-12  ": "col-md-4 d-none"}>
        <h1>Add Employee</h1>
        <input type="text" className="form-control" placeholder="First Name" onChange={changefName} value={fName}/>
            <input type="text"  className="form-control" placeholder="Last Name" onChange={changelName} value={lName}/>
            <input type="email" className="form-control" placeholder="Email" onChange={changeEmail} value={email}/>
            <input type="text"  className="form-control" placeholder="Adress" onChange={changeAdress} value={adress}/>
            <input type="text"  className="form-control" placeholder="Contact Number" onChange={changeContact} value={contact}/>
            <button type="button" className="btn btn-primary" onClick={AddEmploy}>Save</button>
    </div>
    <button type="button" className="btn btn-primary" onClick={CreateEmployeesData}>Add Employ</button>
    <div className="Employees List">
            {
                EmployeesData.map( (em: EmployeesDatatype,i) => (
                    <div className='Employees'>
                        <p>First Name: {em. firstName}</p>
                        <p>Last Name: {em.lastName}</p>
                        <p>Address: {em.adress}</p>
                        <p>Email:{em.email}</p>
                        <p>Contact: {em.contact}</p>
                        <button type="button" className="btn btn-success " onClick={() => {EditEmployeesData(em)}}>Edit Task</button>
                        <br></br>
                        <button type="button" className="btn btn-success" onClick={() =>{DeleteEmploy(i)}}>Delete Task</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default App
