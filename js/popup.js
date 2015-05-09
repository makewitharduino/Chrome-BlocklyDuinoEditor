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

  document.querySelector('#open-setting').addEventListener("click",function(evt){
    var keys = [ 'autosave','interval' ];
    // localStorageから読込
    chrome.storage.local.get(keys, function(item){
      if(!item.autosave){
        $("#checkbox-auto-save").prop('checked',false);
      }else{
        if(item.autosave == 'on') $("#checkbox-auto-save").prop('checked',true);
        else $("#checkbox-auto-save").prop('checked',false);
      }
      if(!item.interval){
        $("#save-time").val("1");
      }else{
        $("#save-time").val(item.interval);
      }
    });
    $('#modal3').openModal();
  });

  document.querySelector('#setting').addEventListener("click", function (evt) {
    var val = $('[class="with-gap"]:checked').map(function(){
      //$(this)でjQueryオブジェクトが取得できる。val()で値をvalue値を取得。
      return $(this).val();
    }).get();
    var autosave = 'off';
    var interval = $("#save-time").val();
    if($("#checkbox-auto-save:checked").val() == 'on'){
      autosave = 'on';
      chrome.alarms.create("myAlarm", {periodInMinutes: Number(interval)} );
    }else{
      chrome.alarms.clear("myAlarm");
    }
    // localStorageから読込
    var new_item = {
      'lang': val[0],
      'autosave': autosave,
      'interval': interval
    };
    // localStorageへ保存
    chrome.storage.local.set(new_item, function(){
      console.log('item saved.');
    });
    if(current_lang != val[0]){
      chrome.runtime.reload();
    }
  });

  document.querySelector('#button_new').addEventListener("click", function (evt) {
    var count = Blockly.mainWorkspace.getAllBlocks().length;
    if (count > 0 || Entryflg != 0){
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
    if(filename.length > 0){
      saveFiles(filename);
    }else{
      setFile(null,false);
      Materialize.toast(Blockly.Msg.ERROR_FILENAME, 4000) // 4000 is the duration of the toast
    }
  });

  document.querySelector('#dialog2_cancel').addEventListener("click", function (evt) {
    console.log("dialog2_cansel");
    setFile(null,false);
  });

  openButton = document.getElementById('button_open');
  openButton.addEventListener("click", handleOpenButton);
  saveButton = document.getElementById('button_save');
  saveButton.addEventListener("click", handleSaveButton);
  newFile();
});
