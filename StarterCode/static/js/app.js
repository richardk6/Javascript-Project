// from data.js
var tableData = data;

// get a variable for table body
var tbody = d3.select("tbody");

// create cells and update each cell with ufo data
tableData.forEach(function(ufoData) {
    console.log(ufoData);
    var row = tbody.append("tr");

    Object.entries(ufoData).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    if (inputElement) {
        var filteredData = tableData.filter(ufodate => tableData.datetime === inputValue);
  
        displayData(filteredData);
    }
};