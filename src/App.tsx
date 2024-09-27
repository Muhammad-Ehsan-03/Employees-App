import './App.css'

function App() {
// fname f is firsrt
let [fName, setfName] = useState();
    const changefName = (e: any) => {
      setfName(e.target.value);
    }
    
let [lName, setlName] = useState();
const changelName = (e: any) => {
  setlName(e.target.value);
}
let [email, setEmail] = useState();
const changeEmail = (e: any) => {
  setEmail(e.target.value);
}
let [adress, setAdress] = useState();
const changeAdress = (e: any) => {
  setAdress(e.target.value);
}
let [contact, setContact] = useState();
const changeContact = (e: any) => {
  setContact(e.target.value);
}
let [id,setId] = useState ();
let Employid = useRef(0)
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
  Employid.current++
  setId(Employid.current)
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
  seEmployeesData(
    [
    ...EmployeesData
    ]
  )
}
  return (
    <div>
    <div className="container">
        <h1>Add Employee</h1>
        <form id="employeeForm">    
        <input type="text" id="firstName" placeholder="First Name" onChange={changefName} value={fName}/>
            <input type="text" id="lastName" placeholder="Last Name" onChange={changelName} value={lName}/>
            <input type="email" id="email" placeholder="Email" onChange={changeEmail} value={email}/>
            <input type="text" id="Adress" placeholder="Adress" onChange={changeAdress} value={adress}/>
            <input type="text" id="contact" placeholder="Contact Number" onChange={changeContact} value={contact}/>
            <button type="button" onClick={AddEmploy}>Add Employee</button>
        </form>
    </div>
    <div className="Employees List">
            {
                EmployeesData.map( (em: EmployeesDatatype,i) => (
                    <div className='Employees'>
                        <p>First Name: {em. firstName}</p>
                        <p>Last Name: {em.lastName}</p>
                        <p>Email: {em.adress}</p>
                        <p>Email: {em.contact}</p>
                        <button type="button" className="btn btn-success " >Edit Task</button>
                        <br></br>
                        <button type="button" className="btn btn-success" >Delete Task</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default App
