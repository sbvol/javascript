// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dInput = document.querySelector("#dtime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredinfo to dataSet initially
var filteredAddresses = dataSet;

// renderTable renders the filteredinfo to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredAddresses.length; i++) {
    // Get get the current address object and its fields
    var address = filteredAddresses[i];
    
//    if (typeof Object.keys(address) !== 'undefined') {
    var fields = Object.keys(address);  
//    }
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function handleSearchButtonClick() {
  var filterKeys = []

  if ($dInput.value != "") {
    filterKeys.push($dInput.value);
  }

  if ($cityInput.value != "") {
    filterKeys.push($cityInput.value);
  }

  if ($stateInput.value != "") {
    filterKeys.push($stateInput.value);
  }
  
  if ($countryInput.value != "") {
    filterKeys.push($countryInput.value);
  }

  if ($shapeInput.value != "") {
    filterKeys.push($shapeInput.value);
  }
     
   filteredAddresses = dataSet.filter(function(address) {

    var dInfo = address.datetime;   
    var cityInfo = address.city;
    var stateInfo = address.state;
    var countyInfo = address.country;
    var shapeInfo = address.shape;

    if (filterKeys.length == 1 && $dInput.value != "") {
      var dvalue = filterKeys[0];

      console.log(dvalue)

      return dInfo == dvalue;
    }

    if (filterKeys.length == 1) {
      var statevalue = filterKeys[0];
      var shapevalue = filterKeys[0];

      return stateInfo === statevalue || shapeInfo === shapevalue;
    }

    if (filterKeys.length == 2) {
      var statevalue = filterKeys[0];
      var shapevalue = filterKeys[1];
      return stateInfo === statevalue && shapeInfo === shapevalue;
    }

    if (filterKeys.length == 3) {
      console.log(filterKeys[0], filterKeys[1], filterKeys[2])
      var dvalue = filterKeys[0];
      var statevalue = filterKeys[1];
      var shapevalue = filterKeys[2];
      return stateInfo === statevalue && shapeInfo === shapevalue && dInfo == dvalue;
    }

  });

//  if (typeof Object.keys(address) != 'undefined') {
    renderTable();  
//  }
}
// Set filteredAddresses to an array of all addresses whose "state" matches the filter
//  filteredAddresses = dataSet.filter(function(address) {
//    var addressShape = address.shape.toLowerCase();

// If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
//    return addressShape === filterShape;
//  });

//  renderTable();
//}

// Render the table for the first time on page load
renderTable();
