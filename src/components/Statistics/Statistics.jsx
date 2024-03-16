import { useEffect } from "react";
import { employeesStore } from "../../store/employeesStore"
import "./Statistics.css"

const Statistics = () => {
    const {employeesList} = employeesStore();
    useEffect(() => {
    }, [employeesList])
    let totalGrossPay = 0
    let totalNetPay = 0 
    let totalDeductions = 0
    let totalAdditionalPay = 0
    if (employeesList.length > 0) {
        employeesList.map(item => {
            totalGrossPay += item.GROSS_PAY
            totalNetPay += item.NET_PAY
            totalDeductions += item.TOTAL_DEDUCTIONS
            totalAdditionalPay += item.ADDITIONAL_PAY
        })
    }
  return (
    <div className="statistics BR10 w100 padding2 flexCSA">
        <div className="about-money flexCol">
            <span className="s">TOTAL NET SALARY</span>
            <span className="l">₱{totalNetPay.toLocaleString()}</span>
        </div>
        <div className="about-money flexCol">
            <span className="s">TOTAL GROSS PAY</span>
            <span className="l">₱{totalGrossPay.toLocaleString()}</span>
        </div>
        <div className="about-money flexCol">
            <span className="s">TOTAL ADDITIONAL PAY</span>
            <span className="l">₱{totalAdditionalPay.toLocaleString()}</span>
        </div>
        <div className="about-money flexCol">
            <span className="s">TOTAL GOVERNMENT DEDUCTIONS</span>
            <span className="l">₱{totalDeductions.toLocaleString()}</span>
        </div>
    </div>
  )
}

export default Statistics