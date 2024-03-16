import {create} from "zustand";
import axios from "axios";

export const employeesStore = create((set) => ({
    employeesList: [],
    fetchEmployees: async () => {
        try {
            const result = await axios.get("http://localhost:8000/payroll-system/get-employees");
            set({employeesList: result.data})
        } catch (err) {
            console.log(err);
        }
    },
    addEmployee: async (fullName, email, phoneNumber, address, TIN, SSS, PAGIBIG, PHILHEALTH) => {
        try {
            const res = await axios.post("http://localhost:8000/payroll-system/add-employee", {fullName, email, phoneNumber, address, TIN, SSS, PAGIBIG, PHILHEALTH});
            console.log(res)
        } catch (err) {
            console.log(err);
        }
    },
    deleteEmployee: async (_id) => {
        try {
            const res = await axios.delete(`http://localhost:8000/payroll-system/delete-employee/${_id}`);
            console.log(res)
        } catch (err) {
            console.log(err);
        }
    },
    setSalary: async (_id, GROSS_PAY, TOTAL_DEDUCTIONS, ADDITIONAL_PAY, NET_PAY) => {
        try {
            const res = await axios.put(`http://localhost:8000/payroll-system/set-salary/${_id}`, {GROSS_PAY, TOTAL_DEDUCTIONS, ADDITIONAL_PAY, NET_PAY});
            console.log(res)
        } catch (err) {
            console.log(err);
        }
    },
}))