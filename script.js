///////////////////////////////////////////////////////////////////////////////////////////
// Part 3: Feeling Loop (Refactored)

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// let csvSplit = csv.split(/[,\n]+/); // Use '/ /' RegExp operator to apply multiple seperators, in this case , and \n
// console.log(csvSplit);

let cell1 = [];
let cell2 = [];
let cell3 = [];
let cell4 = [];
let cell5 = [];

let place = 0;

///////////////////////////////////////////////////////////////////////////////////////////
// Cell 1

for (let i = 0; i <= csv.length; i++) {
    // if (csv[i] === ","){
    //     continue;
    // }

    cell1.push(csv[i]);

    if (csv[i] === "\n") {
        place = i;
        break;
    }

}
console.log(place);
cell1 = cell1.join("");
cell1 = cell1.split(/[,\n]+/);
console.log(cell1);

///////////////////////////////////////////////////////////////////////////////////////////
// Cell 2

for (let i = place + 1; i <= csv.length; i++) {
    cell2.push(csv[i]);
    if (csv[i] === "\n") {
        place = i;
        break;
    }
}
console.log(place);
cell2 = cell2.join("");
cell2 = cell2.split(/[,\n]+/);
console.log(cell2);

///////////////////////////////////////////////////////////////////////////////////////////
// Cell 3

for (let i = place + 1; i <= csv.length; i++) {
    cell3.push(csv[i]);
    if (csv[i] === "\n") {
        place = i;
        break;
    }
}
console.log(place);
cell3 = cell3.join("");
cell3 = cell3.split(/[,\n]+/);
console.log(cell3);

///////////////////////////////////////////////////////////////////////////////////////////
// Cell 4

for (let i = place + 1; i <= csv.length; i++) {
    cell4.push(csv[i]);
    if (csv[i] === "\n") {
        place = i;
        break;
    }
}
console.log(place);
cell4 = cell4.join("");
cell4 = cell4.split(/[,\n]+/);
console.log(cell4);

///////////////////////////////////////////////////////////////////////////////////////////
// Cell 5

for (let i = place + 1; i <= csv.length; i++) {
    cell5.push(csv[i]);
    if (csv[i] === "\n") {
        place = i;
        break;
    }
}
console.log(place);
cell5 = cell5.join("");
cell5 = cell5.split(/[,\n]+/);
console.log(cell5);

///////////////////////////////////////////////////////////////////////////////////////////
// Popping last empty element and Printing out arrays

cell1.pop(); // Gets rid of last empty element for cells 1 - 4
cell2.pop();
cell3.pop();
cell4.pop();

console.log(`Original output with 5 different cells: \n${cell1}\n
${cell2}\n
${cell3}\n
${cell4}\n
${cell5}\n`)

console.log(`//////////////////////////////////////////////`)

///////////////////////////////////////////////////////////////////////////////////////////
// Part 2: Expanding Functionality 

let col = 0; // Variable to hold the number of columns in each row

let csv2 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let row = 1;
let row1 = [];
let row2 = [];
let row3 = [];
let row4 = [];
let row5 = [];

for (let i = 0; i < csv2.length; i++) {
    let data = ""; // String for each row's data

    if (csv2[i] === "\n") { // If car is '\n' iterate row and continue
        row++;
        continue;
    }

    data += csv2[i]; // Updating data with per char in csv2

    switch (row) { // Populate data into each row
        case 1:
            row1 += data;
            break;
        case 2:
            row2 += data;
            break;
        case 3:
            row3 += data;
            break;
        case 4:
            row4 += data;
            break;
        case 5:
            row5 += data;
            break;
    }
}

row1 = row1.split(/[,\n]+/); // Split all rows into arrays 
row2 = row2.split(/[,\n]+/);
row3 = row3.split(/[,\n]+/);
row4 = row4.split(/[,\n]+/);
row5 = row5.split(/[,\n]+/);

console.log(row1)
console.log(row2)
console.log(row3)
console.log(row4)
console.log(row5)

let row2D = [row1, row2, row3, row4, row5];

console.log(row2D); // 2D array holding each row of data as separate objects

///////////////////////////////////////////////////////////////////////////////////////////
// Part 3: Transforming Data

obj1 = { // Object for row2
    id: "42",
    name: "Bruce",
    occupation: "Knight",
    age: "41"
};

obj2 = { // Object for row3
    id: "57",
    name: "Bob",
    occupation: "Fry Cook",
    age: "19"
};

obj3 = { // Object for row4
    id: "63",
    name: "Blaine",
    occupation: "Quiz Master",
    age: "58"
};

obj4 = { // Object for row5
    id: "98",
    name: "Bill",
    occupation: "Doctor's Assistant",
    age: "26"
};

row2D = [obj1, obj2, obj3, obj4]; // Update row2D to hold objects
console.log(row2D);

