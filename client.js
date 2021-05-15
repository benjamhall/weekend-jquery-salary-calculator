console.log('js loaded');

let totalSalary = 0;
let monthlyCosts = 0; 

$(document).ready(readyNow);
// DOM is ready for information to be addded 

function readyNow() {  //when submit button is clicked the input value is pushed to the table
    console.log('jQuery ready');
    $('#submitButton').on('click', collectInfo)
    
} //end readyNow

function collectInfo(){  //function to add employee info to the table
    console.log('submit button works');
    let employeeInfo = $('.input').val();

    $('#employeeData').append(`
    <td>
        ${employeeInfo};
    </td>
    `);
} //end handleForm function 