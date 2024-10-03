// Store employee data in memory (in place of a database)
let employees = [];

document
  .getElementById("employeeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let role = document.getElementById("role").value;

    employees.push({ name, email, role });

    updateEmployeeTable();

    this.reset();
  });

function updateEmployeeTable() {
  let table = document.getElementById("employeeTable");
  table.innerHTML = "";

  employees.forEach((employee, index) => {
    table.innerHTML += `
          <tr>
              <td>${employee.name}</td>
              <td>${employee.email}</td>
              <td>${employee.role}</td>
              <td>
                  <button class="btn btn-warning btn-sm" onclick="editEmployee(${index})">Edit</button>
                  <button class="btn btn-danger btn-sm" onclick="deleteEmployee(${index})">Delete</button>
              </td>
          </tr>
      `;
  });
}

function editEmployee(index) {
  let employee = employees[index];

  document.getElementById("name").value = employee.name;
  document.getElementById("email").value = employee.email;
  document.getElementById("role").value = employee.role;

  employees.splice(index, 1);
}

function deleteEmployee(index) {
  employees.splice(index, 1);
  updateEmployeeTable();
}
