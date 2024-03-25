document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("employeeForm");
    const tableBody = document.getElementById("table-body");
    let selectedRow = null;
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const employeeData = fetchEmployeeData();
      if (selectedRow === null) {
        newDataInserted(employeeData);
      } else {
        updateRow(employeeData);
      }
      form.reset();
    });
  
    function fetchEmployeeData() {
      let employeeData = {};
      employeeData.employeeName = document.getElementById("empname").value;
      employeeData.employeeId = document.getElementById("empid").value;
      employeeData.employeeAddress = document.getElementById("address").value;
      employeeData.employeeDesignation = document.getElementById("designation").value;
      employeeData.employeeDepartment = document.getElementById("department").value;
      employeeData.employeeSalary = document.getElementById("salary").value;
      return employeeData;
    }
  
    function newDataInserted(employeeData) {
        let tbody = document.getElementById("table-body");
        let newRow = tbody.insertRow();
        newRow.insertCell(0).textContent = employeeData.employeeName;
        newRow.insertCell(1).textContent = employeeData.employeeId;
        newRow.insertCell(2).textContent = employeeData.employeeDesignation;
        newRow.insertCell(3).textContent = employeeData.employeeDepartment;
        newRow.insertCell(4).textContent = employeeData.employeeSalary;
        newRow.insertCell(5).textContent = employeeData.employeeAddress;
      
        let editDeleteCell = newRow.insertCell(6);
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-btn";
        editButton.onclick = function() {
          editRow(newRow);
        };
        editDeleteCell.appendChild(editButton);
      
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn"; 
        deleteButton.onclick = function() {
          deleteRow(newRow);
        };
        editDeleteCell.appendChild(deleteButton);
      }
      
    function deleteRow(row) {
        if (confirm("Are you sure you want to delete this row?")) {
          row.parentNode.removeChild(row);
        }
      }
      
  
    function editRow(row) {
      selectedRow = row;
      document.getElementById("empname").value = row.cells[0].textContent;
      document.getElementById("empid").value = row.cells[1].textContent;
      document.getElementById("designation").value = row.cells[2].textContent;
      document.getElementById("department").value = row.cells[3].textContent;
      document.getElementById("salary").value = row.cells[4].textContent;
      document.getElementById("address").value = row.cells[5].textContent;
    }
  
    function updateRow(employeeData) {
      selectedRow.cells[0].textContent = employeeData.employeeName;
      selectedRow.cells[1].textContent = employeeData.employeeId;
      selectedRow.cells[2].textContent = employeeData.employeeDesignation;
      selectedRow.cells[3].textContent = employeeData.employeeDepartment;
      selectedRow.cells[4].textContent = employeeData.employeeSalary;
      selectedRow.cells[5].textContent = employeeData.employeeAddress;
      selectedRow = null;
    }
  });
  
  