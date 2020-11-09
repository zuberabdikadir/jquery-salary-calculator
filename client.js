console.log('Hello')
let employees = [];
let totalMonthlySalary = 0;

$(document).ready(onReady);

function onReady(){
    $( '#submitButton' ).on( 'click', employeeInput)
}

function employeeInput(){
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let annualSalary = $('#annualSalaryInput').val();
    if ( firstName === '' || lastName === '' || id === '' || title === '' || annualSalary === ''){
        return;
    } else {
        newEmployee(firstName, lastName, id, title, Number(annualSalary));
        console.log('employees', employees);
        $('#employees').append(`<tr><td>${firstName}</td> <td>${lastName}</td> <td>${id}</td><td>${title}</td><td>$${annualSalary}</td><td><button onclick="deleteEmployee('${id}')">Delete</button></td></tr>`)
        $('#firstNameInput').val('');
        $('#lastNameInput').val('');
        $('#idInput').val('');
        $('#titleInput').val('');
        $('#annualSalaryInput').val('');
    }
}

function newEmployee(firstNameInput, lastNameInput, idInput, titleInput, annualSalaryInput){
    let newEmployeeObject ={
        firstName: firstNameInput,
        lastName: lastNameInput,
        id: idInput,
        title: titleInput,
        annualSalary: annualSalaryInput
    }
    employees.push(newEmployeeObject);
    updateMonthlySalary(annualSalaryInput);
}

function deleteEmployee(id) {
    let employeeTable = $('#employees')[0];
    let employeeIndex = getEmployeeIndex(id);
    let employee = employees[employeeIndex];
    employees.splice(employeeIndex, 1);
    employeeTable.children[employeeIndex + 1].remove();
    updateMonthlySalary(employee.annualSalary * -1);
}

function getEmployeeIndex(id){
    for(let i = 0; i < employees.length; i++) {
        if(employees[i].id === id) {
            return i;
        }
    }
}

function updateMonthlySalary(yearlySalary) {
    totalMonthlySalary += yearlySalary / 12;
    $('#total-monthly').text(`$${totalMonthlySalary}`);

    if(totalMonthlySalary > 20000) {
        $('#total-monthly-salary').css('background-color', 'red');
    } else {
        $('#total-monthly-salary').css('background-color', 'transparent');
    }

}