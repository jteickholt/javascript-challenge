// from data.js
var tableData = data;

// get the dates from date file


var allDates = tableData.map(entry => entry.datetime);
var allCities = tableData.map(entry => entry.city);
var allCountries = tableData.map(entry => entry.country);
var allStates = tableData.map(entry => entry.state);
var allShapes = tableData.map(entry => entry.shape);

const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
const uniqueDates = allDates.filter(unique);
console.log(uniqueDates);

const uniqueCities = allCities.filter(unique);
console.log(uniqueCities);

const uniqueCountries = allCountries.filter(unique);
console.log(uniqueCountries);

const uniqueStates = allStates.filter(unique);
console.log(uniqueStates);

const uniqueShapes = allShapes.filter(unique);
console.log(uniqueShapes);



// Select the button
var button = d3.select("#filter-btn");

// Define actions to take when clicked with the function
button.on("click", function() {

// Clear the table of data from previous selection
  var summary = d3.selectAll("#ufo-table>tbody>tr");
  summary.html("");
 

// Select the element for the date field and then extract the value
    var dateElement = d3.select("#date-dropdown");
    var date="";
    var date = dateElement.property("value");
    console.log(date);

// Filter the data to keep only records for the chosen date 
    var filteredData = tableData.filter(tableData => tableData.datetime === date);

// Select the body of the table, then append rows and fill with filtered data
    var tbody= d3.select("tbody");

    filteredData.forEach(sighting => {
        var row = tbody.append("tr"); 
        Object.entries(sighting).forEach(([key,value])=> {
        var cell = row.append("td");
        cell.text(value);
        })   
    })
   
  });
  






