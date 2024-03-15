import "./AddEmployee.css";
import SideMenu from "../../components/SideMenu/SideMenu";

const AddEmployee = () => {
  return (
    <div className="add-employee flex HandW">
      <div className="menu">
        <SideMenu />
      </div>
      <div className="add-employee-content padding2 flexCol gap">
        <div className="add-employee-header">
          <h1>Add Employee</h1>
        </div>
        <div className="add-employee-form">
          <form className="flexCol gap xs">
            <div className="form-group flexCol">
              <input
                type="text"
                className="form-control inputBox"
                placeholder="Enter Full Name"
              />
              <label>Full Name</label>
            </div>
            <div className="form-group flexCol">
              <input
                type="text"
                className="form-control inputBox"
                placeholder="Enter Email"
              />
              <label>Email</label>
            </div>
            <div className="form-group flexCol">
              <input
                type="text"
                className="form-control inputBox"
                placeholder="Enter Phone"
              />
              <label>Phone</label>
            </div>
            <div className="form-group flexCol">
              <input
                type="text"
                className="form-control inputBox"
                placeholder="Enter Address"
              />
              <label>Address</label>
            </div>
            <div className="form-group flexCol">
              <input
                type="Number"
                className="form-control inputBox"
                placeholder="Enter TIN Number"
              />
              <label>TIN</label>
            </div>
            <div className="form-group flexCol">
              <input
                type="Number"
                className="form-control inputBox"
                placeholder="Enter SSS Number"
              />
              <label>SSS</label>
            </div>
            <div className="form-group flexCol">
              <input
                type="Number"
                className="form-control inputBox"
                placeholder="Enter Pag-ibig Number"
              />
              <label>Pag-ibig</label>
            </div>
            <div className="form-group flexCol">
              <input
                type="Number"
                className="form-control inputBox"
                placeholder="Enter Phil Health Number"
              />
              <label>Phil Health</label>
            </div>
            <div className="form-group add-button">
                <button className="button">ADD</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
