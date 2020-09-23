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
var button = d3.select("#filter-btn");

var inputDate = d3.select("#datetime");

// // Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var inputValue = inputDate.property("value");
    
    var filteredData = tableData.filter(row => row.datetime === inputValue);
  
    console.log(filteredData);
    displayData(filteredData);

};

// // Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);