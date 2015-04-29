window.addEventListener("load", function (e) {
  var dialog = document.querySelector('#dialog1');
  var dialog2 = document.querySelector('#dialog2');

  document.querySelector('#button_new').addEventListener("click", function (evt) {
    var count = Blockly.mainWorkspace.getAllBlocks().length;
    if (count > 0){
      dialog.showModal();
    }
  });

  document.querySelector('#dialog1_yes').addEventListener("click", function (evt) {
    dialog.close("yes");
  });

  document.querySelector('#dialog1_no').addEventListener("click", function (evt) {
    dialog.close("no");
  });

  dialog.addEventListener("close", function (evt) {
    if(dialog.returnValue == "yes"){
      Blockly.mainWorkspace.clear();
      renderContent();
      newFile();
    }
    //document.querySelector('#result').textContent = "You closed the dialog with: " + dialog.returnValue;
  });

  // called when the user Cancels the dialog, for example by hitting the ESC key
  dialog.addEventListener("cancel", function (evt) {
    dialog.close("canceled");
  });

  document.querySelector('#dialog2_ok').addEventListener("click", function (evt) {
    dialog2.close("ok");
  });

  document.querySelector('#dialog2_cancel').addEventListener("click", function (evt) {
    dialog2.close("cancel");
  });

  dialog2.addEventListener("close", function (evt) {
    if(dialog2.returnValue == "ok"){
      var filename = document.querySelector('#dialog2_filename').value;
      console.log(filename);
      saveFiles(filename);
    }else{
      setFile(null, false);
    }
  });

  // called when the user Cancels the dialog, for example by hitting the ESC key
  dialog2.addEventListener("cancel", function (evt) {
    dialog2.close("canceled");
  });

});

