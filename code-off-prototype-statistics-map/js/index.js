google.charts.load("current", {
  packages: ["geochart"],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
});
google.charts.setOnLoadCallback(drawMarkersMap);
function drawMarkersMap() {
  var data = {
    diabetes: [
    ["City", "Identified", "Tested"],
    ["Punjab", 10, 25],
    ["Delhi", 20, 40],
    ["Mumbai", 25, 30],
    ["Pune", 15, 20],
    ["Kolkata", 15, 25],
    ["Jammu", 15, 34],
    ["Dispur", 15, 33],
    ["Mizoram", 15, 40],
    ["Surat", 15, 30],
    ["Panipat", 25, 38],
    ["Alwar", 38, 56],
    ["Indore", 32, 84],
    ["Karnataka", 31, 76],
    ["Bangalore", 54, 98],
    ["Hydrabad", 45, 86],
    ["Kanpur", 32, 56],
    ["Kanyakumari", 35, 78],
    ["Cochin", 5, 23],
    ["Bihar", 25, 40],
    ["Srinagar", 40, 50]
  ], 
    glaucoma: [
    ["City", "Identified", "Tested"],
    ["Punjab", 10, 25],
    ["Delhi", 20, 40],
    ["Mumbai", 25, 30],
    ["Mizoram", 15, 40],
    ["Surat", 15, 30],
    ["Panipat", 25, 38],
    ["Alwar", 38, 56],
    ["Karnataka", 31, 76],
    ["Bangalore", 54, 98],
    ["Hydrabad", 45, 86],
    ["Kanyakumari", 35, 78],
    ["Cochin", 5, 23],
    ["Bihar", 25, 40],
    ["Srinagar", 40, 50]
  ]
  };

  var options = {
    sizeAxis: { minValue: 10, maxValue: 50 },
    region: "IN",
    displayMode: "markers",
    colorAxis: { colors: ["yellow", "green"] }
  };

  var chart = new google.visualization.GeoChart(
    document.getElementById("chart_div")
  );
  
  document.getElementById('disease').addEventListener('submit', function(e){
    e.preventDefault();
    var disease = this.sample1.value.toLowerCase();
    if (disease in data) {
      chart.draw(google.visualization.arrayToDataTable(data[disease]), options)
    } 
  });
  chart.draw(google.visualization.arrayToDataTable(data.diabetes), options);
}