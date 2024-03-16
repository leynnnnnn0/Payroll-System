import { useEffect } from "react";
import { employeesStore } from "../../store/employeesStore.js"
import "./EmployeesTable.css"
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


const EmployeesTable = ({handleEdit}) => {
    const {fetchEmployees, employeesList, deleteEmployee} = employeesStore();
    useEffect(() => {
        fetchEmployees()
    }, [0])
    useEffect(() => {}, [employeesList])
    const handleDelete = (_id) => {
        deleteEmployee(_id);
    }
  return (
    <div className="employees-table w100">
        <table className="table-employees w100 xs">
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Modify</th>
                </tr>
            </thead>
            <tbody className="cursor">
                {employeesList && employeesList.map(item => (
                    <tr key={item._id}>
                        <td>{item.fullName}</td>
                        <td>{item.email}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.address}</td>
                        <td><span className="edit-icon cursor" onClick={() => handleEdit()}><FaEdit /></span><span className="edit-icon cursor" onClick={() => handleDelete(item._id)}><MdDeleteForever /></span></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default EmployeesTable