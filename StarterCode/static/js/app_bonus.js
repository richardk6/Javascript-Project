// from data.js
var tableData = data;

// Select table
var tbody = d3.select("tbody");

// function to display UFO sightings

function displayData(ufoSightings) {
    tbody.html("");
    ufoSightings.forEach((individualRow) => {
        var row = tbody.append("tr");

        Object.entries(individualRow).forEach(([key, value]) => {
            var cell = row.append("td");
                cell.html(value);
        });
    });
};

// initial display of all UFO sightings
console.log(tableData);
displayData(tableData);

// Select the button
var button = d3.selectAll(".filter");

filterObject = {}

// // Complete the event handler function for the form
function runEnter() {
    let newData = tableData;
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    var inputDate = d3.select(this).select("input");
    // Get the value property of the input element
    var inputValue = inputDate.property("value");
    var inputID = inputDate.attr("id");
    console.log(inputValue);
    console.log(inputID);
    filterObject[inputID]=inputValue;
    console.log(filterObject);

    Object.entries(filterObject).forEach(([key, value]) => {
        newData = newData.filter(row => row[key] === value);
    });
  
//     console.log(filteredData);
    displayData(newData);

};

// // // Create event handlers for clicking the button or pressing the enter key
button.on("change", runEnter);