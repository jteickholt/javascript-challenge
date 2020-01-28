// from data.js
var tableData = data;

// get each of the fields from the date file

var allDates = tableData.map(entry => entry.datetime);
var allCities = tableData.map(entry => entry.city);
var allCountries = tableData.map(entry => entry.country);
var allStates = tableData.map(entry => entry.state);
var allShapes = tableData.map(entry => entry.shape);

// function to get the unique value of each of the field so they can be loaded into dropdowns 

const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
const uniqueDates = allDates.filter(unique);
const uniqueCities = allCities.filter(unique);
const uniqueCountries = allCountries.filter(unique);
const uniqueStates = allStates.filter(unique);
const uniqueShapes = allShapes.filter(unique);

// sort the arrays that will go into the dropdowns.  Did not sort the dates as they were already in order and when 
// attempting to sort them, got unexpected results.

uniqueCities.sort();
uniqueCountries.sort();
uniqueStates.sort();
uniqueShapes.sort();

// Below I will load the unique values into the dropdowns.  Note that I added an initial option "All"
// into the dropdowns in the index.html file when I built the dropdowns.  I could have also done that in
// the code here, but didn't think one way was better than the other.

// load dates into the date dropdown form

var dateDrop= d3.select("#date-dropdown");

uniqueDates.forEach(date => {
    var cell = dateDrop.append("option").text(date);
})

// load cities into the date dropdown form

var cityDrop= d3.select("#city-dropdown");

uniqueCities.forEach(city => {
    var cell = cityDrop.append("option").text(city);
})

// load states into the state dropdown form

var stateDrop= d3.select("#state-dropdown");

uniqueStates.forEach(state => {
    var cell = stateDrop.append("option").text(state);
})

// load countries into the country dropdown form

var countryDrop= d3.select("#country-dropdown");

uniqueCountries.forEach(country => {
    var cell = countryDrop.append("option").text(country);
})

// load shapes into the shape dropdown form

var shapeDrop= d3.select("#shape-dropdown");

uniqueShapes.forEach(shape => {
    var cell = shapeDrop.append("option").text(shape);
})


// Use selectAll so that if any button is clicked, the function will be run

d3.selectAll("button").on("click", function() {

// Clear the table of data from previous selection
  var summary = d3.selectAll("#ufo-table>tbody>tr");
  summary.html("");
 

// Select the element for the date field and then extract the value
  var dateElement = d3.select("#date-dropdown");
  var date="";
  var date = dateElement.property("value");

// Below I go through succesive filters for each of the fields. I use the conditional to check to see if
// the field value is 'All', which means no filtering is needed.  Given that I need to use the conditional
// I couldn't think of a way to combine all of these filters.    

// Filter the data to keep only records for the chosen date 
  if (date === 'All') {
    var filteredData = tableData;
  }
  else {
    var filteredData = tableData.filter(tableData => tableData.datetime === date);
  }
    
// Select the element for the city field and extract the value
  var cityElement = d3.select("#city-dropdown");
  var city="";
  var city = cityElement.property("value");

// Now I will filter the data by city that has already been filtered by date 

  if (city === "All") {
    var filteredData = filteredData;
  }
  else {
    var filteredData = filteredData.filter(filteredData => filteredData.city === city);
  }
    
// Select the element for the state field and extract the value
  var stateElement = d3.select("#state-dropdown");
  var state="";
  var state = stateElement.property("value");

// Now I will filter the data by state that has already been filtered by date, city 

  if (state === "All") {
    var filteredData = filteredData;
  }
  else {
    var filteredData = filteredData.filter(filteredData => filteredData.state === state);
  }

// Select the element for the country field and extract the value
  var countryElement = d3.select("#country-dropdown");
  var country="";
  var country = countryElement.property("value");

// Now I will filter the data by country that has already been filtered by date, city, state 

  if (country === "All") {
    var filteredData = filteredData;
  }
  else {
    var filteredData = filteredData.filter(filteredData => filteredData.country === country);
  }
 
// Select the element for the country field and extract the value
  var shapeElement = d3.select("#shape-dropdown");
  var shape = "";
  var shape = shapeElement.property("value");

// Now I will filter the data by country that has already been filtered by date, city, state 

  if (shape === "All") {
    var filteredData = filteredData;
  }
  else {
    var filteredData = filteredData.filter(filteredData => filteredData.shape === shape);
  }

// After this last filter, the data will be filtered for all fields based on "And" criteria

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
  






