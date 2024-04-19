///////////////////////////////////////////////////////////////////////////////////////////
// Part 3: Feeling Loop

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

for (let i = 0; i <= csv.length; i++){
    // if (csv[i] === ","){
    //     continue;
    // }
    
    cell1.push(csv[i]);

    if (csv[i] === "\n"){
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

for (let i = place + 1; i <= csv.length; i++){
    cell2.push(csv[i]);
    if (csv[i] === "\n"){
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

for (let i = place + 1; i <= csv.length; i++){
    cell3.push(csv[i]);
    if (csv[i] === "\n"){
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

for (let i = place + 1; i <= csv.length; i++){
    cell4.push(csv[i]);
    if (csv[i] === "\n"){
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

for (let i = place + 1; i <= csv.length; i++){
    cell5.push(csv[i]);
    if (csv[i] === "\n"){
        place = i;
        break;
    }
}
console.log(place);
cell5 = cell5.join("");
cell5 = cell5.split(/[,\n]+/);
console.log(cell5);

// Popping last empty element and Printing out arrays

cell1.pop();
cell2.pop();
cell3.pop();
cell4.pop();

console.log(`${cell1}\n
${cell2}\n
${cell3}\n
${cell4}\n
${cell5}\n`)