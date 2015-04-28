window.addEventListener("load", function (e) {
  var dialog = document.querySelector('#dialog1');

  document.querySelector('#new').addEventListener("click", function (evt) {
    var count = Blockly.mainWorkspace.getAllBlocks().length;
    if (count > 0){
      console.log("showdialog");
      dialog.showModal();
    }
  });

  document.querySelector('#yes').addEventListener("click", function (evt) {
    dialog.close("yes");
  });
  document.querySelector('#no').addEventListener("click", function (evt) {
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
});

