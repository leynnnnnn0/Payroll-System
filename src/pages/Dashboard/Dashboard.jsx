import "./Dashboard.css";
import SideMenu from "../../components/SideMenu/SideMenu";
import Statistics from "../../components/Statistics/Statistics";
import EmployeesTable from "../../components/EmployessTable/EmployeesTable";
import { useState } from "react";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import OutsideClickHandler from "react-outside-click-handler";

const Dashboard = () => {
    const [showEdit, setShowEdit] = useState(false);
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
