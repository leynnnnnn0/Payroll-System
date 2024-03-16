import "./PayrollDetails.css";
import SideMenu from "../../components/SideMenu/SideMenu";
import { employeesStore } from "../../store/employeesStore";
import { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import SalaryForm from "../../components/SalaryForm/SalaryForm";
const PayrollDetails = () => {
  const [id, setId] = useState()
  const [name, setName] = useState("")
  const [showForm, setShowForm] = useState(false);
  const { employeesList, fetchEmployees } = employeesStore();
  useEffect(() => {
    fetchEmployees();
  }, [0]);
  const handleClick = (name, _id) => {
    setShowForm(!showForm);
    setName(name)
    setId(_id)
  };
  useEffect(() => {}, [employeesList]);
  return (
    <>
      <div className="salary-form-area">
        <OutsideClickHandler onOutsideClick={() => setShowForm(false)}>
          {showForm && <SalaryForm name={name} _id={id} setShowForm={() => setShowForm(false)}/>}
        </OutsideClickHandler>
      </div>
      <div className="payroll-details flex">
        <div className="menu">
          <SideMenu />
        </div>
        <div className="payroll-details-content w100 padding2">
          <div className="payroll-details-table">
            <table className="table-employees w100 s">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Gross Pay</th>
                  <th>Total Deductions</th>
                  <th>Additional Pay</th>
                  <th>Net Salary</th>
                </tr>
              </thead>
              <tbody>
                {employeesList?.map((item) => (
                  <tr
                    onClick={() => handleClick(item.fullName, item._id)}
                    className={item.NET_PAY > 0 ? "green" : "red cursor"}
                    key={item._id}
                  >
                    <td>{item.fullName}</td>
                    <td>{item.GROSS_PAY}</td>
                    <td>{item.TOTAL_DEDUCTIONS}</td>
                    <td>{item.ADDITIONAL_PAY}</td>
                    <td>{item.NET_PAY}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayrollDetails;
