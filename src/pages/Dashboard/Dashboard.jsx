import "./Dashboard.css";
import SideMenu from "../../components/SideMenu/SideMenu";
import Statistics from "../../components/Statistics/Statistics";
import EmployeesTable from "../../components/EmployessTable/EmployeesTable";
// import SalaryForm from "../../components/SalaryForm/SalaryForm";
import { useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";

const Dashboard = () => {
    // const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    // const handleClick = () => {
    //     setShow(true)
    // }
    const handleEdit = () => {
      setShowEdit(true)
    }
  return (
    <>
      <div className="edit-details-area BR20">
        <OutsideClickHandler onOutsideClick={() => setShowEdit(false)}>
            {showEdit && <EmployeeForm />}
        </OutsideClickHandler>
      </div>
      {/* <div className="salary-form-area">
        <OutsideClickHandler onOutsideClick={() => setShow(false)}>
            {show && <SalaryForm />}
        </OutsideClickHandler>
      </div> */}
      <div className="dashboard flex HandW">
        <div className="menu">
          <SideMenu />
        </div>
        <div className="dashboard-content w100 padding2 gap">
          <section className="statistics-area">
            <Statistics />
          </section>
          <span className="m">EMPLOYEE LIST</span>
          <section className="employees-table-area">
            <EmployeesTable handleEdit={handleEdit}/>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
