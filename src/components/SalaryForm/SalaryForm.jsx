import { useEffect, useState } from "react";
import "./SalaryForm.css";
import { gross_pay_calculator, government_deductions_calculator } from "../../calculator.js";
import { employeesStore } from "../../store/employeesStore.js";
import {notifyIncomplete} from "../../alerts.js"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// I hate formsssssssssssssssssssssssssssssss
const SalaryForm = ({name, _id, setShowForm}) => {
  const {setSalary, employeesList, fetchEmployees} = employeesStore();
  const [info, setInfo] = useState({
    salaryRate: "",
    lates: "",
    advance: "",
    daysWorked: "",
    hoursOvertime: "",
    regularHolidays: "",
    specialHolidays: "",
    extraPay: ""
  })

  useEffect(() => {}, [employeesList])

  const handleChange = e => {
    const {name, value} = e.target
    setInfo({...info, [name]: parseFloat(value)})
  }

  const handleSubmit = e => {
    e.preventDefault();
    const {salaryRate,
    lates,
    advance,
    daysWorked,
    hoursOvertime,
    regularHolidays,
    specialHolidays,} = info;
    if (daysWorked > 0) {
      const GROSS_PAY = gross_pay_calculator(salaryRate, lates, advance, daysWorked, hoursOvertime, regularHolidays, specialHolidays);
      const TOTAL_DEDUCTIONS = government_deductions_calculator(GROSS_PAY);
      const ADDITIONAL_PAY = info.extraPay;
      const NET_PAY = GROSS_PAY + ADDITIONAL_PAY - TOTAL_DEDUCTIONS;
      console.log(NET_PAY)
      setSalary(_id, GROSS_PAY, TOTAL_DEDUCTIONS, ADDITIONAL_PAY, NET_PAY)
      fetchEmployees()
      setShowForm()
    }else {
      notifyIncomplete();
    }


  }
  return (
    <>
      <ToastContainer />
      <div className="salary-form BR20 padding1 flexCol gap">
      <span className="xs">Employee Name: {name && name}</span>
      <form className="flexCol">
        <section className="flex gap">
          <div className="flexCol halfGap">
            <div className="form-input-l flexCol xs">
              <input
                type="text"
                className="form-control inputBox"
                id="salaryRate"
                placeholder="Salary Rate"
                name="salaryRate"
                value={info.salaryRate}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="salaryRate">
                SalaryRate
              </label>
            </div>
            <div className="duo flex xs gap">
              <div className="form-input-s flexCol">
                <input
                  type="text"
                  className="form-control"
                  id="lates"
                  placeholder="Lates"
                  name="lates"
                  value={info.lates}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="late">
                  Lates
                </label>
              </div>
              <div className="form-input-s flexCol">
                <input
                  type="text"
                  className="form-control"
                  id="advance"
                  placeholder="Advance Pay"
                  name="advance"
                  value={info.advance}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="advance">
                  Advance Amount
                </label>
              </div>
            </div>
            <div className="duo flex xs gap">
              <div className="form-input-s flexCol">
                <input
                  type="text"
                  className="form-control"
                  id="daysWorked"
                  placeholder="Days of work"
                  name="daysWorked"
                  value={info.daysWorked}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="daysWorked">
                  Days Worked
                </label>
              </div>
              <div className="form-input-s flexCol">
                <input
                  type="text"
                  className="form-control"
                  id="hoursOvertime"
                  placeholder="Hours"
                  name="hoursOvertime"
                  value={info.hoursOvertime}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="rate">
                  Hours Overtime
                </label>
              </div>
            </div>
            <div className="flexCol halfGap">
              <div className="form-input-l flexCol xs">
                <input
                  type="text"
                  className="form-control"
                  id="regularHolidays"
                  placeholder="Days"
                  name="regularHolidays"
                  value={info.regularHolidays}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="regular-pay">
                  Regular Holidays
                </label>
              </div>
              <div className="form-input-l flexCol xs">
                <input
                  type="text"
                  className="form-control"
                  id="specialHolidays"
                  placeholder="Days"
                  name="specialHolidays"
                  value={info.specialHolidays}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="specialHolidays">
                  Special Holidays
                </label>
              </div>
              <div className="form-input-l flexCol xs">
                <input
                  type="text"
                  className="form-control"
                  id="extraPays"
                  placeholder="Extra Amount"
                  name="extraPay"
                  value={info.extraPay}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="extraPays">
                  Bonus / Incentives
                </label>
              </div>
            </div>
          </div>
        </section>
        <div className="submit-button">
            <button className="button" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default SalaryForm;
