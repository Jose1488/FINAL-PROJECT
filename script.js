// Function to add a new employee to the table
document.getElementById('addEmployeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nationalId = document.getElementById('nationalId').value;
    let employeeName = document.getElementById('employeeName').value;
    let department = document.getElementById('department').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let address = document.getElementById('address').value;
    let dateOfAppointment = document.getElementById('dateOfAppointment').value;
    
    let table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();
    
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    
    cell1.textContent = nationalId;
    cell2.textContent = employeeName;
    cell3.textContent = department;
    cell4.textContent = phoneNumber;
    cell5.textContent = address;
    cell6.textContent = dateOfAppointment;
    
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('btn', 'edit-btn');
    editButton.onclick = function() {
        // Implement edit functionality here
    };
    cell7.appendChild(editButton);
    
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'delete-btn');
    deleteButton.onclick = function() {
        // Implement delete functionality here
    };
    cell7.appendChild(deleteButton);
    
    // Clear form fields after adding employee
    document.getElementById('addEmployeeForm').reset();
});

// Function to handle printing of employee list
function printEmployeeList() {
    window.print();
}

// Function to handle modifying the entire employee list
function modifyEmployeeList() {
    // Implement modify functionality here
}