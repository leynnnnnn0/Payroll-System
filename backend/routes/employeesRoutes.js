import express from "express";
const route = express.Router();
import { Employee } from "../schema/employeeSchema.js";


// To get all the employees
route.get("/get-employees", async (req, res) => {
  try {
    const result = await Employee.find({})
    res.send(result)
  }catch (err) {
    console.log(err);
  }
});


// To add an employee
route.post("/add-employee", async (req, res) => {
    const {
        fullName,
        email,
        phoneNumber,
        address,
        TIN,
        SSS,
        PAGIBIG,
        PHILHEALTH,
      } = req.body;
  try {
    const employee = new Employee(
      {
        fullName,
        email,
        phoneNumber,
        address,
        TIN,
        SSS,
        PAGIBIG,
        PHILHEALTH, 
      }
    );
    await employee.save();
    res.send({ message: "Created" });
  } catch (err) {
    res.send({ message: err.message });
  }
});

// To add a new employee
route.put('/update-employee-details/:_id', async (req, res) => {
    const {_id} = req.params;
    const {
        fullName,
        email,
        phoneNumber,
        address,
        TIN,
        SSS,
        PAGIBIG,
        PHILHEALTH,
      } = req.body;
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
        _id,
        {
            $set: {
                fullName,
                email,
                phoneNumber,
                address,
                TIN,
                SSS,
                PAGIBIG,
                PHILHEALTH,
            }
        },
        { new: true } // Return the updated document
    );
    res.send({updatedEmployee})
  }catch(err) {
    console.log(err);
  }
})

// To delete an employee
route.delete("/delete-employee/:_id", async (req,res) => {
    const {_id} = req.params;
    try {
        await Employee.findByIdAndDelete(_id);
        res.send({message: "deleted"})
    }catch(err) {
        res.send({message: err.message});
    }
})

// Salary setter 
route.put("/set-salary/:_id", async (req,res) => {
    const {_id} = req.params;
    const {ADDITIONAL_PAY, TOTAL_DEDUCTIONS, GROSS_PAY, NET_PAY} = req.body;
    try {
        const result = await Employee.findByIdAndUpdate(_id, {$set: {
            ADDITIONAL_PAY,
            TOTAL_DEDUCTIONS,
            GROSS_PAY,
            NET_PAY
        }}, {new: true})
        res.send({message: result})
        
    } catch (err) {
        res.send({message: err.message})
    }

})

export default route;
