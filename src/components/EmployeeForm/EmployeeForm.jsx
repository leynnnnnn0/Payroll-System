import { useState } from "react"
import "./EmployeeForm.css"
import { employeesStore } from "../../store/employeesStore"
import { ToastContainer } from "react-toastify"
import { notifySuccess, notifyError, notifyIncomplete } from "../../alerts.js"
import 'react-toastify/dist/ReactToastify.css';

const EmployeeForm = () => {
    const {addEmployee} = employeesStore();
    const [info, setInfo] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        TIN: "",
        SSS: "",
        PAGIBIG: "",
        PHILHEALTH: ""
    })
    const handleChange = (e) => {
        setInfo({
         ...info,
            [e.target.name]: e.target.value
        })
        console.log(info)
    }
    const handleClick = (e) => {
        e.preventDefault()
        const {fullName, email, phoneNumber, address, TIN, SSS, PAGIBIG, PHILHEALTH} = info
        if(fullName, phoneNumber, address) {
            addEmployee(fullName, email, parseFloat(phoneNumber), address, parseFloat(TIN), parseFloat(SSS), parseFloat(PAGIBIG), parseFloat(PHILHEALTH));
            notifySuccess();
            setInfo({
                fullName: "",
                email: "",
                phoneNumber: "",
                address: "",
                TIN: "",
                SSS: "",
                PAGIBIG: "",
                PHILHEALTH: ""
            })
        }else {
            notifyIncomplete();
        }
    }
  return (
    <div className='employee-form'>
        <ToastContainer/>
        <div className="add-employee-content padding2 flexCol gap">
        <div className="add-employee-header">
          <span className="l">Employee Details</span>
        </div>
        <div className="add-employee-form">
          <form className="flexCol gap xs">
            <div className="form-group flexCol">
              <input
                type="text"
                className="form-control inputBox"
                placeholder="Enter Full Name"
                name="fullName"
                value={info.fullName}
                onChange={handleChange}
              />
              <label>Full Name</label>
            </div>
            <div className="form-group flexCol">
              <input
                type="email"
                className="form-control inputBox"
                placeholder="Enter Email"
                name="email"
                value={info.email}
                onChange={handleChange}
              />
              <label>Email</label>
            </div>
            <div className="form-group flexCol">
              <input
                type="text"
                className="form-control inputBox"
                placeholder="Enter Phone"
                name="phoneNumber"
                value={info.phoneNumber}
                onChange={handleChange}
              />
              <label>Phone</label>
            </div>
            <div className="form-group flexCol">
              <input
                type="text"
                className="form-control inputBox"
                name="address"
                placeholder="Enter Address"
                value={info.address}
                onChange={handleChange}
              />
              <label>Address</label>
            </div>
            <div className="form-group flexCol">
              <input
                type="Number"
                className="form-control inputBox"
                placeholder="Enter TIN Number"
                name="TIN"
                value={info.TIN}
                onChange={handleChange}
              />
              <label>TIN</label>
            </div>
            <div className="form-group flexCol">
              <input
                type="Number"
                className="form-control inputBox"
                placeholder="Enter SSS Number"
                name="SSS"
                value={info.SSS}
                onChange={handleChange}
              />
              <label>SSS</label>
            </div>
            <div className="form-group flexCol">
              <input
                type="Number"
                className="form-control inputBox"
                placeholder="Enter Pag-ibig Number"
                name="PAGIBIG"
                value={info.PAGIBIG}
                onChange={handleChange}
              />
              <label>Pag-ibig</label>
            </div>
            <div className="form-group flexCol">
              <input
                type="Number"
                className="form-control inputBox"
                placeholder="Enter Phil Health Number"
                name="PHILHEALTH"
                value={info.PHILHEALTH}
                onChange={handleChange}
              />
              <label>Phil Health</label>
            </div>
            <div className="form-group add-button">
                <button className="button" onClick={handleClick}>ADD</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmployeeForm