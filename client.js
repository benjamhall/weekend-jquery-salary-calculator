console.log('js loaded');

let totalSalary = 0;
let monthlyCosts = 0; 

$(document).ready(readyNow);
// DOM is ready for information to be addded 

function readyNow() {  //when submit button is clicked the input value is pushed to the table
    console.log('jQuery ready');

    //click listeners
    $('#submitButton').on('click', collectInfo)
    
    //dynamic click listener
    $('#tableBody').on('click', '.deleteBtn', deleteRow)
    
} //end readyNow

function collectInfo(){  //function to add employee info to the table
    console.log('submit button works');
    //let employeeInfo = $('.input').val();

    let firstName = $('#fName').val();
    let lastName = $('#lName').val();
    let idNumber = $('#idNum').val();
    let jobTitle = $('#jTitle').val();
    let annualSalary = $('#aSalary').val();

    // Add input values to the DOM
    $('#tableBody').append(`
        <tr class="tableRow">
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>${annualSalary}</td>
            <td>
                <button class="deleteBtn">Delete</button>
            </td>
    </tr>
    `);

    //clear input
    $('#fName').val('');
    $('#lName').val('');
    $('#idNum').val('');
    $('#jTitle').val('');
    $('#aSalary').val('');


    //if any of the inputs are blank to return 
    // if (firstName === '' || lastName === '' || idNumber === '' || jobTitle === '' || annualSalary === ''){
    //     alert('All the inputs are not filled out');
    //     return false;
    // }

} //end collectInfo function 

function deleteRow(){ //delete the whole row in the table
    console.log('delete button works');

    //delete the whole row
    $(this).closest('.tableRow').empty()
}

