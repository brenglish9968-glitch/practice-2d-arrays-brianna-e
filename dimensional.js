const allScores = [
  [85, 90, 78], // Student 1 test scores
  [92, 88, 95], // Student 2 test scores
  [79, 84, 88]  // Student 3 test scores
];

// A 2D array modeling 3 rows with 4 seats per row
const theaterSeating = [
  ["A1", "A2", "A3", "A4"], // Row 1
  ["B1", "B2", "B3", "B4"], // Row 2
  ["C1", "C2", "C3", "C4"]  // Row 3
];

// 1. Define the outer array contactsList
let contactsList = [];

// 2. Insert two inner arrays, each with three strings representing contact details
contactsList.push(["Alice Smith", "alice@email.com", "555-0101"]);
contactsList.push(["Bob Jones", "bob@email.com", "555-0102"]);

// Verify the result
console.log(contactsList);
