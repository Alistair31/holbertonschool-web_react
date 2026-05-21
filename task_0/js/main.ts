interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = tbody.insertRow();
  const cellName: HTMLTableCellElement = row.insertCell(0);
  const cellLocation: HTMLTableCellElement = row.insertCell(1);
  cellName.textContent = student.firstName;
  cellLocation.textContent = student.location;
});

table.appendChild(tbody);
document.body.appendChild(table);
