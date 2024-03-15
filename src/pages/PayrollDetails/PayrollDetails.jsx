import "./PayrollDetails.css"
import SideMenu from "../../components/SideMenu/SideMenu"
import fakeData from "../../components/EmployessTable/fakeData"

const PayrollDetails = () => {
  return (
    <div className="payroll-details flex">
        <div className="menu">
        <SideMenu />
      </div>
      <div className="payroll-details-content w100 padding2">
      <div className="payroll-details-table">
      <table className="table-employees w100 s">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Date of Birth</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {fakeData.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.fullName}</td>
                        <td>{item.email}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.dateOfBirth}</td>
                        <td>{item.address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}

export default PayrollDetails