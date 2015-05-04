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

  document.querySelector('#setting').addEventListener("click", function (evt) {
    var val = $('[class="with-gap"]:checked').map(function(){
      //$(this)でjQueryオブジェクトが取得できる。val()で値をvalue値を取得。
      return $(this).val();
    }).get();
    // localStorageから読込
    if(current_lang != val[0]){
      var new_item = {
        'lang': val[0]
      };
      // localStorageへ保存
      chrome.storage.local.set(new_item, function(){
        console.log('item saved.');
      });
      chrome.runtime.reload();
    }
  });

  document.querySelector('#button_new').addEventListener("click", function (evt) {
    var count = Blockly.mainWorkspace.getAllBlocks().length;
    if (count > 0){
      $('#modal1').openModal();
    }
  });

  document.querySelector('#dialog1_yes').addEventListener("click", function (evt) {
    Blockly.mainWorkspace.clear();
    renderContent();
    newFile();
  });

  document.querySelector('#dialog2_ok').addEventListener("click", function (evt) {
    var filename = document.querySelector('#dialog2_filename').value;
    console.log(filename);
    saveFiles(filename);
  });

  document.querySelector('#dialog2_cancel').addEventListener("click", function (evt) {
    setFile(null, false);
  });

  openButton = document.getElementById('button_open');
  openButton.addEventListener("click", handleOpenButton);
  saveButton = document.getElementById('button_save');
  saveButton.addEventListener("click", handleSaveButton);
  newFile();

});
