console.log('js loaded!');

let employees = []
const Max_MONTHLY = 20000;

$(handleReady);

function handleReady() {
    console.log('jquery loaded');

    //click listeners
    $('#submit').on('click', handleSubmit)
    //exist now, on click exists later
    //$('.deleteBtn').on('click', handleDelete)
    $('#target').on('click', '.deleteBtn', handleDelete)
}

function handleDelete(){
    console.log('clicked delete');
    //$(this) will be where the event took place
    //base mode: $(this).closest('tr').remove();
    //$(this).parent().parent().remove()

    //find employee that we want to delete with their ID 
   let idToDelete = $(this).closest('tr').find('.idNum').text();
   console.log(idToDelete);

   let temp = [];
    //remove them from the employees array
    for(let employee of employees){
        //employees.splice(i, 1)
        //is this the employee who needs to be removed?
        if(idToDelete === employee.idNum){
            //Should not be in array
            //Don't Push
            console.log('removing', employee);
            
        } else {
            //They should be in array
            temp.push(employees)
        }
    }
    
    employees = temp;
    console.log(employees);
    
    renderEmployees();
}

function handleSubmit() {
    console.log('clicked submit');
    //collect data

    //getters
    let employee = {   //object
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNum: $('#idNum').val(),
        title: $('#title').val(),
        salary: Number($('#salary').val()),
    }

    console.log(employee);
    employees.push(employee);

    clearInputs();

    //add employee to table
    renderEmployees();

}

function clearInputs(){
    //instead of getting each by id
    //lets have a class that's on all inputs
    $('.employeeInput').val('');
}

function renderEmployees{
    console.log('Render');

    let runningAnnualTotal = 0; 

    //clear out old potentially busted data
    $('#target').empty()
    //append 
    //append each employee as a row to the table

    for (let employee of employees) {
        
        runningAnnualTotal += employee.salary;
        console.log(runningAnnualTotal);
        
        
        $('#target').append(`<tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNum}</td>
            <td>${employee.title}</td>
            <td>${employee.salary.toLocaleString('en-EN', { style: 'currency', currency: 'USD' })}</td>
            <td>
                <button class="deleteBtn">DELETE</button>
            </td>
        </tr>`
        )
    }

    //running annual total after the loop should have everybody
    console.log(runningAnnualTotal);
    const monthlyTotal = (runningAnnualTotal / 12);

    $('#total').text(monthlyTotal.toLocaleString('en-EN', { style: 'currency', currency: 'USD' }));

    //Red
    if(monthlyTotal > Max_MONTHLY){
        //make the total red
        $('#total').addClass('overbudget');
    } else {
        //remove red
        $('#total').removeClass('overbudget');
    }
    
}

