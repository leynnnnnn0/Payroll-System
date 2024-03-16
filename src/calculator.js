const gross_pay_calculator = (salaryRate, lates, advancePay, daysWorked, hoursOvertime, regularHolidays, specialHolidays) => {
    // To calculate the amount to deduct from lates
    const lateDeduction = (salaryRate / 8) * lates
    // Sometimes employees like to get some of their salary in advance
    const advandePayDeduction = advancePay
    // To calculate the amount to pay for days worked 
    const payedDays = salaryRate * daysWorked
    // Overtime pay calculation
    const overtimePay = hoursOvertime * ((salaryRate / 8) * 1.1)
    // Regular holidays addtions to salary calculation
    const regularHolidayPay = (salaryRate + (salaryRate * 0.3)) * regularHolidays
    // Special holidays addtions to salary calculation
    const specialHolidayPay = salaryRate * specialHolidays;

    // To calculate the payments and deductions 
    const payment = payedDays + overtimePay + regularHolidayPay + specialHolidayPay;
    const deductions = lateDeduction + advandePayDeduction;

    // Returing the gross pay
    return payment - deductions
}


// * The government deduction varies on the amount of salary
const government_deductions_calculator = (gross_pay) => {
    const TIN = 0
    const SSS = gross_pay * 0.1
    const PHIL_HEATLH = 100
    const PAG_IBIG = 100
    return TIN + SSS + PHIL_HEATLH + PAG_IBIG
}

export {gross_pay_calculator, government_deductions_calculator}