// from data.js
var tableData = data;

// Select the form
var form = d3.select("#form");

// get a variable for table body
var tbody = d3.select("tbody");

// create cells and display each cell with ufo data
function displayData (ufoSights) {
    tbody.html("");
    ufoSights.forEach((ufoRecord) => {
        var row = tbody.append("tr");
        Object.entries(ufoRecord).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.html(value);
        });
    });
};

// initial display of all UFO sightings
console.log(tableData);
displayData(tableData);

// tableData.forEach(function(ufoData) {
//     console.log(ufoData);
//     var row = tbody.append("tr");

//     Object.entries(ufoData).forEach(function([key, value]) {
//         console.log(key, value);

//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

// Select the button
var button = d3.select("#filter-btn");

var inputDate = d3.select("#datetime");

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var inputValue = inputDate.property("value");
    
    var filteredData = tableData.filter(row => row.datetime === inputValue);
  
    console.log(filteredData);
    displayData(filteredData);

};

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
// displayData(filteredData);


//   // Then, select the unordered list element by class name
//     var date = d3.select(tbody);

//     date.append.text(filteredData);
// };