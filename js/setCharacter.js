function setCharacter() {
  $('#category_initializes').attr('name',Blockly.Msg.CATEGORY_INITIALIZES);
  $('#category_inout').attr('name',Blockly.Msg.CATEGORY_INOUT);
  $('#category_digital').attr('name',Blockly.Msg.CATEGORY_DIGITAL);
  $('#category_analog').attr('name',Blockly.Msg.CATEGORY_ANALOG);
  $('#category_others').attr('name',Blockly.Msg.CATEGORY_OTHERS);
  $('#category_ethernet').attr('name',Blockly.Msg.CATEGORY_ETHERNET);
  $('#category_ethernet_init').attr('name',Blockly.Msg.CATEGORY_ETHERNET_INIT);
  $('#category_ethernet_client').attr('name',Blockly.Msg.CATEGORY_ETHERNET_CLIENT);
  $('#category_cloud_service').attr('name',Blockly.Msg.CATEGORY_CLOUD_SERVICE);
  $('#category_ifttt').attr('name',Blockly.Msg.CATEGORY_IFTTT);
  $('#category_m2x').attr('name',Blockly.Msg.CATEGORY_M2X);
  $('#category_blynk').attr('name',Blockly.Msg.CATEGORY_BYLNK);
  $('#category_serial').attr('name',Blockly.Msg.CATEGORY_SERIAL);
  $('#category_servo').attr('name',Blockly.Msg.CATEGORY_SERVO);
  $('#category_logic').attr('name',Blockly.Msg.CATEGORY_LOGIC);
  $('#category_ultrasonic').attr('name',Blockly.Msg.CATEGORY_ULTRA_SONIC);
  $('#category_lcd').attr('name',Blockly.Msg.CATEGORY_LCD);
  $('#category_lcd_rgb').attr('name',Blockly.Msg.CATEGORY_GROVE_LCD_RGB);
  $('#category_grove_input').attr('name',Blockly.Msg.CATEGORY_GROVE_INPUT);
  $('#category_grove_output').attr('name',Blockly.Msg.CATEGORY_GROVE_OUTPUT);
  $('#category_grove_sensor').attr('name',Blockly.Msg.CATEGORY_GROVE_SENSOR);
  $('#category_adafruit').attr('name',Blockly.Msg.CATEGORY_ADAFRUIT);
  $('#category_rgbled').attr('name',Blockly.Msg.CATEGORY_RGBLED);
  $('#category_i2c_matrix').attr('name',Blockly.Msg.CATEGORY_I2C_MATRIX);
  $('#category_i2c_sevenseg').attr('name',Blockly.Msg.CATEGORY_I2C_SEVENSEG);
  $('#category_other_sensor').attr('name',Blockly.Msg.CATEGORY_OTHER_SENSOR);
  $('#category_loops').attr('name',Blockly.Msg.CATEGORY_LOOPS);
  $('#category_time').attr('name',Blockly.Msg.CATEGORY_TIME);
  $('#category_array').attr('name',Blockly.Msg.CATEGORY_ARRAY);
  $('#category_math').attr('name',Blockly.Msg.CATEGORY_MATH);
  $('#category_text').attr('name',Blockly.Msg.CATEGORY_TEXT);
  $('#category_variables').attr('name',Blockly.Msg.CATEGORY_VARIABLES);
  $('#category_functions').attr('name',Blockly.Msg.CATEGORY_FUNCTIONS);
  //  $('#category_involt').attr('name',Blockly.Msg.CATEGORY_INVOLT);

  $("#tab_blocks").text(Blockly.Msg.BLOCKS);
  $("#tab_arduino").text(Blockly.Msg.ARDUINO);

  $("#go-to-web").attr("data-tooltip",Blockly.Msg.GO_TO_WEB);
  $("#go-to-sample").attr("data-tooltip",Blockly.Msg.GO_TO_SAMPLE);
  $("#open-setting").attr("data-tooltip",Blockly.Msg.SETTING);
  $("#dialog-lang-title").text(Blockly.Msg.DIALOG_LANG_TITLE);

  $("#auto-save-title").text(Blockly.Msg.AUTO_SAVE_TITLE);
  $("#range-title").html(Blockly.Msg.RANGE_TITLE + '<input type="range" id="save-time" min="1" max="10" />');

  $("#button_new").attr("data-tooltip",Blockly.Msg.BUTTON_NEW);
  $("#button_save").attr("data-tooltip",Blockly.Msg.BUTTON_SAVE);
  $("#button_open").attr("data-tooltip",Blockly.Msg.BUTTON_OPEN);
  $("#button_discard").text(Blockly.Msg.DROPDOWN_DISCARD);
  $("#button_save_as").text(Blockly.Msg.DROPDOWN_SAVE_AS);
  $("#dialog1_title").text(Blockly.Msg.DIALOG1_TITLE);
  $("#dialog1_yes").text(Blockly.Msg.DIALOG1_YES);
  $("#dialog1_no").text(Blockly.Msg.DIALOG1_NO);
  $("#dialog4_title").text(Blockly.Msg.DIALOG4_TITLE);
  $("#dialog4_yes").text(Blockly.Msg.DIALOG1_YES);
  $("#dialog4_no").text(Blockly.Msg.DIALOG1_NO);
  $("#info_filename").html(Blockly.Msg.INFO_FILENAME);
  $("#info_title").html(Blockly.Msg.INFO_TITLE);
  $("#dialog2_title").text(Blockly.Msg.DIALOG2_TITLE);
}
