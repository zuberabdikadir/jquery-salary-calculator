console.log('Hello')
let employee = [];
let employeeList = $('#employee');


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
        newEmployee(firstName, lastName, id, title, annualSalary);
        console.log('employee', employee);
        $('#employee').append(`<li>${firstName} ${lastName} ${id} ${title} ${annualSalary}</li>`)
        $('#firstNameInput').val('');
        $('#lastNameInput').val('');
        $('#idInput').val('');
        $('#titleInput').val('');
        $('#annualSalaryInput').val('');


    }
}

function newEmployee(firstNameInput, lastNameInput, idInput, titleInput, annualSalary){
    const newEmployeeObject ={
        firstName: firstNameInput,
        lastName: lastNameInput,
        id: idInput,
        title: titleInput,
        annualSalary: annualSalaryInput
    }
    employee.push(newEmployeeObject);

}