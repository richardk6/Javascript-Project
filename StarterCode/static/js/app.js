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



// Create a function to look at value entered and display filtered data
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select where data is inputed
    var inputDate = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputDate.property("value");
    
    // Filter the data based on the value inputed
    var filteredData = tableData.filter(row => row.datetime === inputValue);
  
    console.log(filteredData);
    displayData(filteredData);

};

// Create event handlers for pressing the enter key
button.on("change", runEnter);