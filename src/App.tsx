import { useRef, useState } from 'react';
import './App.css'

function App() {
  // fname f is firsrt
  let [fName, setFName] = useState('');
  const changefirstName = (e: any) => {
    setFName(e.target.value);
  }

  let [lName, setLName] = useState('');
  const changelastName = (e: any) => {
    setLName(e.target.value);
  }
  let [email, setEmail] = useState('');
  const changeEmail = (e: any) => {
    setEmail(e.target.value);
  }
  let [adress, setAdress] = useState('');
  const changeAdress = (e: any) => {
    setAdress(e.target.value);
  }
  let [contact, setContact] = useState(0);
  const changeContact = (e: any) => {
    setContact(e.target.value);
  }
  let [id, setId] = useState<number>(0);
  let [isEditing, setEditing] = useState(false);
  let [isCreating, setCreating] = useState(false);
  let [isList, setList] = useState(true);
  let Employeesid = useRef(0)
  let [EmployeesData, seEmployeesData] = useState<Array<EmployeesDatatype>>([]);
  interface EmployeesDatatype {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    adress: string;
    contact: number;
  };
  const AddEmploy = () => {
    setList(true)
    if (isCreating == true) {
      EmployeesData.push(
        {
          id: id,
          firstName: fName,
          lastName: lName,
          email: email,
          adress: adress,
          contact: contact
        }
      )
    }
    console.log(EmployeesData)
    if (isEditing == true) {
      let index;
      EmployeesData.map((d, i) => {
        if (d.id = id) {
          index = i;
        }
      }
      )
      EmployeesData[index].firstName = fName;
      EmployeesData[index].lastName = lName;
      EmployeesData[index].email = email;
      EmployeesData[index].adress = adress;
      EmployeesData[index].contact = contact;
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
    console.log(EmployeesData);
    setEditing(true);
    setCreating(false);
    setFName(d.firstName);
    setLName(d.lastName);
    setEmail(d.email);
    setAdress(d.adress);
    setContact(d.contact);
  }
  const CreateEmployeesData = () => {
    setAdress('');
    setContact("");
    setFName('');
    setLName("");
    setEmail("");
    setList(false);
    setEditing(false);
    setCreating(true);
    Employeesid.current++
    setId(Employeesid.current)
  }
  const DeleteEmploy = (i) => {
    EmployeesData.splice(i, 1);
    seEmployeesData(
      [
        ...EmployeesData
      ]
    )
  }
  const changes=() => 
  {
    document.querySelector('.Main').style.display='none';
    setList(true);
  }
  return (
    <div>
      <div className="header">
        <div className="home_icon">
          <i className="fa-solid fa-house-chimney"></i>
        </div>
        <div className="user_icon">
          <i className="fa-solid fa-user"></i> <h5>Employees Managment</h5>
        </div>
      </div>
      <div className="space"></div>
      <div className="Main">
        <div className={isEditing == true || isCreating == true ? "row " : "row d-none"}>
          <div className="Header">
            <h4>Update Employee</h4>
            <div className="back-button">
              <button type="button" className="btn btn-success" onClick={changes}><i className="fa-solid fa-circle-arrow-left"></i> BACK</button>
            </div>
          </div>
          <div className="input">
            <div className="one">First <p> Name</p><span>*</span><input type="text" className="form-control" placeholder="First Name" onChange={changefirstName} value={fName} /></div>
            <div className="one">Last <p> Name</p><span>*</span><input type="text" className="form-control" placeholder="Last Name" onChange={changelastName} value={lName} /></div>
            <div className="one">Email <span>*</span><input type="email" className="form-control" placeholder="Email" onChange={changeEmail} value={email} /></div>
            <div className="one">Address <span>*</span><input type="text" className="form-control" placeholder="Adress" onChange={changeAdress} value={adress} /></div>
            <div className="one">Contact <span>*</span><input type="text" className="form-control" placeholder="Contact Number" onChange={changeContact} value={contact} /></div>
            <div className="col-md-2 mx-auto">
              <button type="button" className="btn btn-success" onClick={AddEmploy}>SUBMIT</button>
            </div>
          </div>
        </div>
        </div>
        <div className="Header-2">
        <div className={isList == true ? "Employees List" : "Employees List d-none"}>
          <div className="header-2">
            <h4>Manage Employees</h4>
            <div className="back-button">
              <button type="button" className="btn btn-success" onClick={CreateEmployeesData}>Add</button>
            </div>
          </div>
          {
            EmployeesData.map((em: EmployeesDatatype, i) => (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">phone</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{em.firstName}</td>
                    <td>{em.lastName}</td>
                    <td>{em.email}</td>
                    <td>{em.adress}</td>
                    <td>{em.contact}</td>
                    <td className="text-danger"><i className="fa-solid fa-trash" onClick={() => { DeleteEmploy(i) }}></i></td>
                    <td className="text-warning"><i className="fa-solid fa-pen-to-square" onClick={() => { EditEmployeesData(em); }}></i></td>
                  </tr>
                </tbody>
              </table>
            ))
          }
        </div>
        </div>
    </div>
  )
}

export default App
