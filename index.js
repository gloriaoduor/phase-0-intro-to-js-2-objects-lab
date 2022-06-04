const employee = {name : "Glo", streetAddress : "Nairobi"}
const copyOfEmployee = {...employee};

function updateEmployeeWithKeyAndValue (employee, key, value){
    copyOfEmployee.name = "Sam";
    copyOfEmployee.streetAddress = "11 Broadway"
    return copyOfEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway"
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    delete copyOfEmployee.name;
    return copyOfEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}