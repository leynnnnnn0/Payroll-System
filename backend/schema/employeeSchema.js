import mongoose from "mongoose";


// Schema for the employees
const employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        default: "N/A"
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    TIN: {
        type: Number,
        default: "N/A"
    },
    SSS: {
        type: Number,
        default: "N/A"
    },
    PAGIBIG: {
        type: Number,
        default: "N/A"
    },
    PHILHEALTH: {
        type: Number,
        default: "N/A"
    },
    ADDITIONAL_PAY: {
        type: Number,
        default: 0
    },
    TOTAL_DEDUCTIONS: {
        type: Number,
        default: 0
    },
    GROSS_PAY: {
        type: Number,
        default: 0
    },
    NET_PAY : {
        type: Number,
        default: 0
    }

}, {timestamps: true})

export const Employee = mongoose.model("Employee", employeeSchema);


