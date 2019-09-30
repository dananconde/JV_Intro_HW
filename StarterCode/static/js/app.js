// from data.js
var tableData = data;

// Creating initial variables for table
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var loadTable = (dataInput) => {

  dataInput.forEach(sightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(sightings[column])
    )
  });
}

// Populate table
loadTable(tableData);


// Variables for button and input field
var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

// Filter data with date that the user inputs
function clickSelect(){
    //print the value that was input
    console.log(inputField.property("value"));
    //create a new table showing only the filterd data
    var new_table = tableData.filter(sightings => sightings.datetime===inputField.property("value"))
    console.log(new_table);
    tbody.text("");
    //display the new table
    loadTable(new_table);
}

// Event listener to handle change and click
inputField.on("change", clickSelect)