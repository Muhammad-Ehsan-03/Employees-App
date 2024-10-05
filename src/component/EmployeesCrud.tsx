import { useEffect, useRef, useState } from 'react';
import  Department,{DepartmentDatatype} from './Department';
function EmployessCrud() {
  useEffect(() => {
    if (localStorage.getItem('EmployeesData') != null) {
      console.log('page Refresh');
      const oldData = JSON.parse(localStorage.EmployeesData);
      setEmployeesData(oldData);
    }
    else {
      console.log('page Refresh But Data Empty');
    }
    // Fetching data of departments
    if (localStorage.getItem('departmentData') != null) {
      console.log('page Refresh');
      const depData = JSON.parse(localStorage.departmentData);
      setdpData(depData);
    }
    else {
      console.log('page Refresh But Data Empty');
    }
  }, []);
  // fname f is firsrt
 let [fName, setFName] = useState('');
  const changefirstName = (e: any) => {
    setFName(e.target.value);
  }
  let [isEducationCreating, setEducationCreating] = useState(false);
  let [isEducationEditing, setEducationEditing] = useState(false);
  let [Name, setName] = useState('');

  let [lName, setLName] = useState('');
  console.log()
  let [dpData,setdpData]=useState<Array<DepartmentDatatype>>([]);
  // <Array<DepartmentDatatype>></Array>
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

  let [idd, setIdd] = useState<number>(1);
  let [ide, setIde] = useState<number>(1);
  let [isEditing, setEditing] = useState(false);
  let [extraid, setextraId] = useState();
  let [employInformation, setempInformation] = useState(false);
  let [isCreating, setCreating] = useState(false);
  let [isList, setList] = useState(true);
  let [isEducationList, setEducationList] = useState(false);
  let Employeesid = useRef(1)
  let [isChanges, setChanges] = useState(false);
  let [EducationInput, setEducationInput] = useState(false);
  let [Buttoon, setButtoon] = useState(true);
  let [BackButtoon, setBackButtoon] = useState(false);
  let [title, setTitle] = useState();
  let [Image, setimage] = useState();
  let [Level, setlevel] = useState();
  let [crud, setcrud] = useState(true);
  let [Ehsan, setEhsan] = useState(true);
  let [deperatment, setdeperatment] = useState(false);
  let EmployeesEducationid = useRef(0);
  let [id, setId] = useState<number>(1);
  let [dep, setdep] = useState<number>(1);
  let [EmployeesData, setEmployeesData] = useState<Array<EmployeesDatatype>>([]);
   interface EmployeesDatatype {
    id: number; //Primary Key
    firstName: string;
    lastName: string;
    email: string;
    adress: string;
    contact: number;
     departmentId:number;  // Foreign key
     educations: Array<Education>;
  };
  interface Education {
    id: number;
    title: string;
    level: number;
  }
  const AddEmploy = () => {
    setempInformation(true);
    setChanges(false)
    debugger
    setList(true)
    if (isCreating == true) {
      if (id && fName && lName && email && adress && contact) {
        EmployeesData.push(
          {
            id: id,
            firstName: fName,
            lastName: lName,
            email: email,
            adress: adress,
            contact: contact,
            educations: [],
            departmentId:dep
          }
        )
        setempInformation(false);
      }
    }
    if (isEditing == true) {
      let index;
      EmployeesData.map((d, i) => {
        if (d.id == id) {
          index = i;
        }
      }
      )
      EmployeesData[index].lastName = lName;
      EmployeesData[index].firstName = fName;
      EmployeesData[index].email = email;
      EmployeesData[index].adress = adress;
      EmployeesData[index].contact = contact;
      setList(false);
    }
    const newData = [...EmployeesData];
    setEmployeesData(newData);
    localStorage.setItem('EmployeesData', JSON.stringify(newData));
    setCreating(false);
    setEditing(false)
  }
  const EditEmployeesData = (d) => {
    setList(false)
    setChanges(true)
    setEditing(true);
    setCreating(false);
    setId(d.id);
    setFName(d.firstName);
    setLName(d.lastName);
    setEmail(d.email);
    setAdress(d.adress);
    setContact(d.contact);
    setempInformation(false);
  }
  const CreateEmployeesData = () => {
    setChanges(true)
    setAdress('');
    setContact('');
    setFName('');
    setLName("");
    setEmail("");
    setdep('');
    setList(false);
    setEditing(false);
    setCreating(true);
    Employeesid.current++
    setId(Employeesid.current)
  }
  const DeleteEmploy = (iD) => {
    let index;
    EmployeesData.map((d, i) => {
      if (d.id == iD) {
        index = i;
      }
    }
    )
    EmployeesData.splice(index, 1);
    const newData = [...EmployeesData]
    setEmployeesData(newData);
    localStorage.setItem('EmployeesData', JSON.stringify(newData));
  }
  const changes = () => {
    setChanges(false);
    setList(true);
    setEducationInput(false);
    setEducationList(false);
  }
  const Educationchanges = () => {
    setChanges(false)
    setList(false);
    setEducationInput(false);
    setEducationList(true);
  }

  const BackEducation = () => {
    setempInformation(false)
    setList(true);
    setEducationList(false);
  }
  // Today Code 
  const ShowEmployeesEducation = (e) => {
    let index;
    EmployeesData.map((d, i) => {
      if (d.id == e) {
        index = i;
      }
    }
    )
    setBackButtoon(true);
    setName(EmployeesData[index].firstName);
    setIde(index);
    console.log(ide);
    setEducationList(true);
    setList(false);
  }
  const ShowInputsEducation = () => {
    setEducationList(false);
    setTitle('');
    setlevel('');
    console.log(ide);
    setEducationInput(true);
    setEducationEditing(false);
    setEducationCreating(true);
    EmployeesEducationid.current++
    setIdd(EmployeesEducationid.current);
  }
  const saveEducation = () => {
    console.log(ide);
    if (isEducationCreating == true) {
      EmployeesData[ide].educations.push(
        {
          id: idd,
          title: title,
          level: Level
        }
      );
    }
    if (isEducationEditing == true) {
      debugger
      let index;
      let indexEdu;
      console.log(title);
      EmployeesData.map((d, i) => {
        d.educations.map((e,a) => {
          if(e.id==idd)
          {
            index=i;
            indexEdu=a;
          }
        })
      }
    )
      EmployeesData[index].educations[indexEdu].title = title;
      EmployeesData[index].educations[indexEdu].level = Level;
    }
    setEducationInput(false);
    const newData = [...EmployeesData];
    setEmployeesData(newData);
    localStorage.setItem('EmployeesData', JSON.stringify(newData));
    setEducationList(true);
    setButtoon(false);
    setBackButtoon(true);
  }
  const EditingEducation = (e) => {
    setEducationInput(true);
    setEducationEditing(true);
    setEducationCreating(false);
    setEducationList(false);
    setIdd(e.id);
    setTitle(e.title);
    setlevel(e.Level);
  }
  const DeleteEducation = (e) => {
    let index;
    EmployeesData.map((d, i) => {
      if (d.id == e) {
        index = i;
      }
    }
    );
    EmployeesData[index].educations.splice(0, 1);
    const newData = [...EmployeesData]
    setEmployeesData(newData);
    localStorage.setItem('EmployeesData', JSON.stringify(newData));
    setBackButtoon(false);
    setButtoon(true);
  }
  const ShowEmployeesInformation = (e) => {
    let index;
    EmployeesData.map((d, i) => {
      if (d.id == e) {
        index = i;
      }
    }
    );
    setextraId(index);
    setempInformation(true);
    console.log(extraid);
    setList(false)
  }
  const Main = () => {
    setdeperatment(true);
    setcrud(false);
  }
  // const handleImage = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   const file=e.target.files?.[0];
  //   if(file)
  //   {
  //       const reader=new FileReader();
  //       reader.onloadend=() => {
  //         const base64Image=reader.result as string;
  //         setimage(base64Image);
  //       }
  //       reader.readAsDataURL(file);
  //   }

  // }
  return (
    <div>
      {/* <input type='file' onChange={handleImage}/>
      {Image && <img src={Image} alt="Uploaded Preview" style={{ width: '200px', height:'auto'} }/>} */}

        <div className={deperatment==true?"show":'show d-none'}>
          <Department></Department>          
        </div>
        <div className={crud==true?'main':'main d-none'}>
      <div className="header">
        <div className="home_icon">
          <i className="fa-solid fa-house-chimney"></i>
        </div>
        <div className="user_icon">
          <i className="fa-solid fa-user"></i> <h5>Employees Managment</h5>
        </div>
      </div>
      <div className="space"></div>
      <div className={isChanges == true ? "Main" : 'Main d-none'}>
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
            <div className="one">Contact <span>*</span><input type="text" className="form-control" placeholder="Contact Number" onChange={changeContact} value={contact}/></div>
            <div className="one">Department <span>*</span>
              
            <select className="form-select form-select-lg mb-3" aria-label="Large select example" value={dep} onChange={(e) => {setdep(e.target.value)}}>
                     <option selected>Select Level</option>
           {dpData.map((d:DepartmentDatatype) => (
                     <option value={d.code}>{d.department}</option>
             ))
            }
             </select>
            </div>
            <div className="col-md-2 mx-auto">
              <button type="button" className="btn btn-success" onClick={AddEmploy}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
      <div className={EducationInput == true ? 'col-md-5 mx-auto' : 'col-md-4 d-none'}>
        <div className="Header">
          <h4 className="  animate_animate__fadeInDownBig ">Update Employee</h4>
          <div className="back-button">
            <button type="button" className="btn btn-success" onClick={Educationchanges}><i className="fa-solid fa-circle-arrow-left"></i> BACK</button>
          </div>
        </div>
        <div className="input">
          {/* <div className="one">Title <span>*</span><input type="text" className="form-control" placeholder="Title"  value={title} onChange={(e) => {setTitle(e.target.value)}}/></div> */}
          {/* <div className="one">Level<span>*</span><input type="text" className="form-control" placeholder="Level" value={Level} onChange={(e) => {setlevel(e.target.value)}}/></div> */}
          <select className="form-select form-select-lg mb-3" aria-label="Large select example" value={title} onChange={(e) => { setTitle(e.target.value) }}>
            <option selected>Select Degree</option>
            <option value="Matriculation">Matriculation</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="MPhil">MPhil</option>
            <option value="PhD">PhD</option>
          </select>
          <select className="form-select form-select-lg mb-3" aria-label="Large select example" value={Level} onChange={(e) => { setlevel(e.target.value) }}>
            <option selected>Select Level</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
            <option value="20">20</option>
          </select>
          <div className="col-md-2 mx-auto">
            <button type="button" className="btn btn-success" onClick={saveEducation}>SUBMIT</button>
          </div>
        </div>
      </div>
      <div className="Header-2">
        <div className={isList == true ? "Employees List" : "Employees List d-none"}>
          <div className="header-2">
            <h4>Manage Employees</h4>
            <div className="back-button">
            <button type="button" className="btn btn-success" onClick={Main}>Department</button>
            </div>
            <div className="back-button-depart">
              <button type="button" className="btn btn-success" onClick={CreateEmployeesData}>Add</button>
            </div>
          </div>
          {
            EmployeesData.map((em: EmployeesDatatype, i) => (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Employ Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><button id="Name" onClick={() => { ShowEmployeesInformation(em.id) }}>{em.firstName} {em.lastName}</button></td>
                  </tr>
                </tbody>
              </table>
            ))
          }
        </div>
      </div>
      <div className="Header-2">
        <div className={employInformation == true ? "Employees List" : "Employees List d-none"}>
          <div className="header-2">
            <h4>View Employee Information</h4>
            <div className="back-button">
              <button type="button" className="btn btn-success " onClick={BackEducation}><i className="fa-solid fa-circle-arrow-left"></i> BACK</button>
            </div>
          </div>
          {
            EmployeesData.map((em: EmployeesDatatype, i) => (
              <table className={extraid == i ? "table table-striped" : "table table-striped d-none"}>
                <tbody>
                  <tr>
                    <td><label><b>First Name</b></label></td>
                    <td>{em.firstName}</td>
                  </tr>
                  <tr>
                    <td><label><b>Last Name</b></label></td>
                    <td>{em.lastName}</td>
                  </tr>
                  <tr>
                    <td><label><b>Email</b></label></td>
                    <td>{em.email}</td>
                  </tr>
                  <tr>
                    <td><label><b>Address</b></label></td>
                    <td>{em.adress}</td>
                  </tr>
                  <tr>
                    <td><label><b>Contact</b></label></td>
                    <td>{em.contact}</td>
                  </tr>
                  <tr>
                  <td><label><b>Department</b></label></td>
                  {dpData.map((d:DepartmentDatatype) => (
                    <td className={d.code==em.departmentId? 'row':'row d-none'}>
                      {d.department}
                    </td>
                  ))}
                </tr>
                  <tr>
                    <td><label><b>Action 1</b></label></td>
                    <td className="text-warning"><i className="fa-solid fa-pen-to-square" onClick={() => { EditEmployeesData(em); }}></i></td>
                  </tr>
                  <tr>
                    <td><label><b>Action 2</b></label></td>
                    <td className="text-danger"><i className="fa-solid fa-trash" onClick={() => { DeleteEmploy(em.id) }}></i></td>
                  </tr>
                  <tr>
                    <td><button className="btn btn-success" onClick={() => { ShowEmployeesEducation(em.id) }}>Qualification</button></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            ))
          }
        </div>
      </div>
      <div className={isEducationList == true ? 'Header-2' : 'Header-2 d-none'}>
        <div className="Employees">
          <div className="header-2">
            <h4 className="  animate_animate__fadeInDownBig ">Qualification of {Name}</h4>
            <div className="Add-Education">
              <button type="button" className="btn btn-success" onClick={ShowInputsEducation}><i className="fa-solid fa-book-open"></i>Add Education</button>
            </div>
          </div>
          {
            //  'table table-striped'
            EmployeesData.map((emp: EmployeesDatatype, i) => (
              <div className={emp.educations.length > 0 ? 'Education' : 'Education d-none'}>
                <div className={ide == i ? 'row' : 'row d-none'}>
                  {emp.educations.map((em: Education, i) => (
                    <table className='table table-striped'>
                      <thead>
                        <tr>
                          <th scope="col">Title</th>
                          <th scope="col">Level</th>
                          <th scope="col">Action1</th>
                          <th scope="col">Action2</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{em.title}</td>
                          <td>{em.level}</td>
                          <td className="text-danger"><i className="fa-solid fa-trash" onClick={() => { DeleteEducation(emp.id) }}></i></td>
                          <td className="text-warning"><i className="fa-solid fa-pen-to-square" onClick={() => { EditingEducation(em); }}></i></td>
                        </tr>
                      </tbody>
                    </table>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </div>
      </div>
    </div>
  )
}
export default EmployessCrud;
