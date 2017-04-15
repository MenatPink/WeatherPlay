$(document).ready(function(){
    document.getElementById('date').innerHTML = Date();

                  // Weather Map Personal API Key
  var weatherMapAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var apiKey = '04dfc325b1b6e3ee542ed155f1d974b9';
                // Callback function based on return data
              // London
  $('#londonTemp').click(function(){

    var locationOptions = {
      id: 2643741,
      units: 'metric',
      appid: apiKey
    };

    function showWeather(weatherReport){
                  // Round data up to whole integer
      var roundedTemp = Math.round(weatherReport.main.temp);
      $('#londonTemp h1').text(roundedTemp);
      };

    $.getJSON(weatherMapAPI, locationOptions, showWeather);
// Units Icon appear
    $('#londonTemp h1').addClass('isShowing');
  });

                  // New York
  $('#newYorkTemp').click(function(){

    var locationOptions = {
      id: 5128581,
      units: 'metric',
      appid: apiKey
    };

    function showWeather(weatherReport){
                  // Round data up to whole integer
      var roundedTemp = Math.round(weatherReport.main.temp);
      $('#newYorkTemp h1').text(roundedTemp);
      };

    $.getJSON(weatherMapAPI, locationOptions, showWeather);
// Units Icon appear
    $('#newYorkTemp h1').addClass('isShowing');
  });

                  // Kingston
  $('#KingstonTemp').click(function(){
    var locationOptions = {
      id: 3489854,
      units: 'metric',
      appid: apiKey
    };

    function showWeather(weatherReport){
                  // Round data up to whole integer
      var roundedTemp = Math.round(weatherReport.main.temp);
      $('#KingstonTemp h1').text(roundedTemp);
      };

    $.getJSON(weatherMapAPI, locationOptions, showWeather);
// Units Icon appear
    $('#KingstonTemp h1').addClass('isShowing');
  });

}); //Document Ready tag
