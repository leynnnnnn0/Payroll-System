import "./EmployeesTable.css"
import fakeData from "./fakeData"


const EmployeesTable = ({handleClick}) => {
  return (
    <div className="employees-table w100">
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
            <tbody className="cursor">
                {fakeData.map(item => (
                    <tr onClick={() => handleClick()} className={item.totalSalary > 0 ? "green" : "red"} key={item.id}>
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
  )
}

export default EmployeesTable