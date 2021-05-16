console.log('js loaded');


let monthlyCosts = []; 

$(document).ready(readyNow);
// DOM is ready for information to be addded 

function readyNow() {  //when submit button is clicked the input value is pushed to the table
    console.log('jQuery ready');
    //console.log(monthlyCosts);
    
    //arrayLog();

    //click listeners
    $('#submitButton').on('click', collectInfo)
    $('#submitButton').on('click', clearInput)
    $('#submitButton').on('click', monthlySal);
    
    //dynamic click listener
    $('#tableBody').on('click', '.deleteBtn', deleteRow)


} //end readyNow

// function arrayLog(){
//     console.log(monthlyCosts);
// }

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


    //push to monthly costs array
    return monthlyCosts.push(annualSalary);
    //return console.log(monthlyCosts);
    
} //end collectInfo function 

function clearInput(){
    //clear input
    $('#fName').val('');
    $('#lName').val('');
    $('#idNum').val('');
    $('#jTitle').val('');
    $('#aSalary').val('');
}//end clearInput

function deleteRow(){ //delete the whole row in the table
    console.log('delete button works');

    //delete the whole row
    $(this).closest('.tableRow').empty()
}

// calculate monthly cost and append to DOM, if it is over 20k flag red
function monthlySal(){
    console.log('monthly Salary is showing up');

    let totalSalary = 0;
    let monthlySalary = 0;

    for(i=0; i< monthlyCosts.length; i++){
        totalSalary += Number(monthlyCosts[i])
        //console.log(totalSalary);
    }
    
    //calculate the monthly cost by dividing total salary by 12
    monthlySalary = totalSalary /12;
    $('#monthlyCost').text(`${monthlySalary}`);

    //if total monthly cost exceeds 20k, flag red
    if(monthlySalary > 20000){
        $('#monthlyCost').addClass('highlight')
    }//adds red background
    //return console.log(monthlySalary);
}       