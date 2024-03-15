import "./SalaryForm.css";

// I hate formsssssssssssssssssssssssssssssss
const SalaryForm = () => {
  return (
    <div className="salary-form BR20 padding1 flexCol gap">
      <span className="xs">Employee Name: Nathaniel Alvarez</span>
      <form className="flexCol">
        <section className="flex gap">
          <div className="flexCol halfGap">
            <div className="form-input-l flexCol xs">
              <input
                type="text"
                className="form-control inputBox"
                id="salaryRate"
                placeholder="Salary Rate"
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
                />
                <label className="form-label" htmlFor="late">
                  Lates
                </label>
              </div>
              <div className="form-input-s flexCol">
                <input
                  type="text"
                  className="form-control"
                  id="absents"
                  placeholder="Absents"
                />
                <label className="form-label" htmlFor="absents">
                  Rate
                </label>
              </div>
            </div>
            <div className="duo flex xs gap">
              <div className="form-input-s flexCol">
                <input
                  type="text"
                  className="form-control"
                  id="hours-worked"
                  placeholder="Hours"
                />
                <label className="form-label" htmlFor="hours-worked">
                  Hours Worked
                </label>
              </div>
              <div className="form-input-s flexCol">
                <input
                  type="text"
                  className="form-control"
                  id="hours-overtime"
                  placeholder="Hours"
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
                  id="regular-holiday"
                  placeholder="Days"
                />
                <label className="form-label" htmlFor="regular-pay">
                  Regular Holidays
                </label>
              </div>
              <div className="form-input-l flexCol xs">
                <input
                  type="text"
                  className="form-control"
                  id="special-holiday"
                  placeholder="Days"
                />
                <label className="form-label" htmlFor="special-holiday">
                  Special Holidays
                </label>
              </div>
              <div className="form-input-l flexCol xs">
                <input
                  type="text"
                  className="form-control"
                  id="extra-pay"
                  placeholder="Extra Amount"
                />
                <label className="form-label" htmlFor="extra-pay">
                  Extra Pay
                </label>
              </div>
            </div>
          </div>
        </section>
        <div className="submit-button">
            <button className="button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SalaryForm;
