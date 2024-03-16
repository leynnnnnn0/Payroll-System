import "./PayrollDetails.css"
import SideMenu from "../../components/SideMenu/SideMenu"
import { employeesStore } from "../../store/employeesStore"
import { useEffect } from "react";

const PayrollDetails = () => {
  const {employeesList, fetchEmployees} = employeesStore();
  useEffect(() => {
    fetchEmployees()
  }, [0])
  useEffect(() => {}, [employeesList])
  return (
    <>
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
                {employeesList?.map(item => (
                  <tr className={item.NET_PAY > 0 ? "green" : "red"} key={item.id}>
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
  )
}

export default PayrollDetails