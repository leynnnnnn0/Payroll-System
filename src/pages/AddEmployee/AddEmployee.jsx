import "./AddEmployee.css";
import SideMenu from "../../components/SideMenu/SideMenu";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";

const AddEmployee = () => {
  return (
    <div className="add-employee flex HandW">
      <div className="menu">
        <SideMenu />
      </div>
        <EmployeeForm/>
    </div>
  );
};

export default AddEmployee;
