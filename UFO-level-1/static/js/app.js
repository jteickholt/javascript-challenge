// from data.js
var tableData = data;





// Select the button
var button = d3.select("#filter-btn");

// Define actions to take when clicked with the function
button.on("click", function() {

// Clear the table of data from previous selection
  var summary = d3.selectAll("#ufo-table>tbody>tr");
  summary.html("");
 

// Select the element for the date field and then extract the value
    var dateElement = d3.select("#datetime");
    var date = dateElement.property("value");

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
  






