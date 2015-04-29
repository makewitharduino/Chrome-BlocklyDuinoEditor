document.addEventListener('DOMContentLoaded', function() {
  var blocks = document.getElementById('tab_blocks');
  // onClick's logic below:
  blocks.addEventListener('click', function() {
    tabClick('blocks');
  });

  var arduino = document.getElementById('tab_arduino');
  // onClick's logic below:
  arduino.addEventListener('click', function() {
    tabClick('arduino');
  });

  var xml = document.getElementById('tab_xml');
  // onClick's logic below:
  xml.addEventListener('click', function() {
    tabClick('xml');
  });

  var languageMenu = document.getElementById('languageMenu');
  languageMenu.addEventListener('change', function(){
    var item = {
      'lang': languageMenu.value
    };
    // localStorageへ保存
    chrome.storage.local.set(item, function(){
      console.log('item saved.');
    });
    chrome.runtime.reload();
  });

  openButton = document.getElementById('button_open');
  openButton.addEventListener("click", handleOpenButton);
  saveButton = document.getElementById('button_save');
  saveButton.addEventListener("click", handleSaveButton);
  newFile();

});
