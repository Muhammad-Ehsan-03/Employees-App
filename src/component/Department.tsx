import { useEffect, useRef, useState } from 'react';
import EmployessCrud from './EmployeesCrud';
function Department() {
  useEffect(() => {
    if (localStorage.getItem('departmentData') != null) {
      console.log('page Refresh');
      const oldData = JSON.parse(localStorage.departmentData);
      setdepartmentData(oldData);
    }
    else {
      console.log('page Refresh But Data Empty');
    }
  }, []);

  let [dpName, setDpName] = useState();
  let [dpDescription, setDpDescription] = useState();
  let [departmentData, setdepartmentData] = useState<Array<DepartmentDatatype>>([]);
  let [isCreating, setCreating] = useState(false);
  let [isEditing, setEditing] = useState(false);
  let [isCrud, setCrud] = useState(false);
  let [isdepartment, setdepartment] = useState(true);
  let [departmentid, setdepartmentId] = useState<number>();
  let [isList, setList] = useState(true);
  let departmentIdd =useRef(0);
  interface DepartmentDatatype {
    id: number;
    department: string;
    description: string;
  };
  const AddEmploy = () => {
    debugger;
    if (isCreating == true) {
      if (departmentid && dpName && dpDescription) {
        departmentData.push(
          {
            id:departmentid,
            department: dpName,
            description: dpDescription
          }
        )
      }
    }
    if (isEditing == true) {
      let index;
      departmentData.map((d, i) => {
        if (d.id == departmentid) {
          index = i;
        }
      }
      )
      departmentData[index].description = dpDescription;
      departmentData[index].department = dpName;
    }
    setList(true);
    const newData = [...departmentData];
    setdepartmentData(newData);
    localStorage.setItem('departmentData', JSON.stringify(newData));
    setCreating(false);
    setEditing(false);
  }
  const EditDepartmentData = (e) => {
    setEditing(true);
    setCreating(false);
    setdepartmentId(e.id);
    setDpName(e.department);
    setDpDescription(e.description);
    setList(false)
  }
  const CreateDepartmentData = () => {
    setList(false)
     setDpDescription('');
     setDpName('');
     departmentIdd.current++;
     setdepartmentId(departmentIdd.current);
     setEditing(false);
     setCreating(true);
  }
  const DeleteDepartment = (iD) => {
    let index;
    departmentData.map((d, i) => {
      if (d.id == iD) {
        index = i;
      }
    }
    )
    departmentData.splice(index, 1);
    const newData = [...departmentData];
    setdepartmentData(newData);
    localStorage.setItem('departmentData', JSON.stringify(newData));
  }
  const Crud = () => {
    setCrud(true);
    setdepartment(false);
  }
  return (
    <div>
        <div className={isCrud==true? "cd":"cd d-none"}>
    <EmployessCrud></EmployessCrud>
    </div> 
      <div className={isdepartment==true?"main":"main"}>
      <div className="header">
        <div className="home_icon">
          <i className="fa-solid fa-house-chimney"></i>
        </div>
        <div className="user_icon">
          <i className="fa-solid fa-user"></i> <h5>Department Managment</h5>
        </div>
      </div>
      <div className="space"></div>
      <div className="Main">
        <div className={isEditing == true || isCreating == true ? "row " : "row d-none"}>
          <div className="Header">
            <h4>Update Department</h4>
            <div className="back-button">
              <button type="button" className="btn btn-success"><i className="fa-solid fa-circle-arrow-left"></i> BACK</button>
            </div>
          </div>
          <div className="input">
            <div className="one">Department <p> Name</p><span>*</span><input type="text" className="form-control" placeholder="Enter Department Name" value={dpName} onChange={(e) => { setDpName(e.target.value) }} /></div>
            <div className="one"> Description<span>*</span><input type="text" className="form-control" placeholder="Enter Department Description" value={dpDescription} onChange={(e) => { setDpDescription(e.target.value) }} /></div>
            <div className="col-md-2 mx-auto">
              <button type="button" className="btn btn-success" onClick={AddEmploy}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Header-2">
        <div className={isList == true ? "Employees List" : "Employees List d-none"}>
          <div className="header-2">
            <h4>Manage DepartMent</h4>
            <div className="back-button">
              <button type="button" className="btn btn-success" onClick={CreateDepartmentData}>Add</button>
            </div>
            <div className="back-button">
              <button type="button" className="btn btn-success" onClick={Crud}>Back</button>
            </div>
          </div>
          {
            departmentData.map((dp: DepartmentDatatype, i) => (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Department Id</th>
                    <th scope="col">Department Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>{dp.id}</td>
                    <td>{dp.department}</td>
                    <td>{dp.description}</td>
                    <td className="text-danger"><i className="fa-solid fa-trash"   onClick={() => { DeleteDepartment(dp.id) }}></i></td>
                    <td className="text-warning"><i className="fa-solid fa-pen-to-square" onClick={() => { EditDepartmentData(dp); }}></i></td>
                  </tr>
                </tbody>
              </table>
            ))
          }
        </div>
      </div>
      </div>
    </div>
  )
}

export default Department