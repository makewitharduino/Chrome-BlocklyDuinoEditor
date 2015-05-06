//App screen dimensions:
var screenWidth  = 1000;
var screenHeight = 700;

//Create app window on launch
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
    'bounds':{
      width: screenWidth,
      height: screenHeight,
      //state: "fullscreen" // to run as fullscreen
    }
  });
});

chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (request.data){
      var url = request.data['url'];
      chrome.runtime.sendMessage({method: "url",url:url}, function(response) {
        console.log(response.farewell);
      });
    }
    var data = request.data;
});

chrome.alarms.onAlarm.addListener(function(alarm) {
  chrome.runtime.sendMessage({method: "autosave"}, function(response) {
    console.log(response.farewell);
  });
});
