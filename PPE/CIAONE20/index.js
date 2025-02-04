(async () => {
  //--------------------------------
  // CONFIGURATION and INFOS
  //--------------------------------
  // FILE1.DAT : oneliners data
  //--------------------------------

  var LightBarColor = "@X4F";
  var unLightBarColor = "@X07";
  var EnterOneLinerPrompt = "@X0FE@X0Cnt@X04er @X0FO@X0Cn@X04e@X0FL@X0Cin@X04er@X08? @X07";
  var PromptYPos = 9;
  var AbortedTxt = "@X08                          ■@X04■@X0C■  @X0FO@X0Cn@X04e@X0FL@X0Cin@X04er @X0FAb@X0Cor@X04ted  @X0C■@X04■@X08■";
  var SavedTxt = "@X08                           ■@X04■@X0C■  @X0FO@X0Cn@X04e@X0FL@X0Cin@X04er @X0FS@X0Cav@X04ed  @X0C■@X04■@X08■@X07";

  //--------------------------------
  // CODE / Do not change anything below here
  //--------------------------------
  var KEY = "";

  CLS();
  drawLine();
  drawTopLogo();
  drawLine();
  await FOPEN(1);
  var size = FSIZE(1);
  for (let i = size - 15; i < size; i++) {
    const line = FGET(1);
    FGET(1);
    ANSIPOS((80 - LEN(NOCOLOR(line))) / 2, null);
    PRINTLN(line);
  }
  FCLOSE(1);
  drawLine();
  PRINT(EnterOneLinerPrompt);
  var ynPos = { x: GETX(), y: GETY() };
  var ynSwitch = false;
  printYN();

  while (true) {
    KEY = await INKEY();
    if (KEY == "Enter") {
      break;
    }
    if (KEY == "ArrowRight" || KEY == "ArrowLeft") {
      ynSwitch = !ynSwitch;
      ANSIPOS(ynPos.x, ynPos.y);
      printYN();
    }
  }
  if (ynSwitch) {
    PRINTLN("YES");
  } else {
    DEFCOLOR();
    NEWLINE();
  }

  function drawTopLogo() {
    PRINTLN("     @X0B▄▀@X3B▓▒▒░@X03▄ @X0B▄▀@X3B▓▒▒░@X03▄ @X0B▄▀@X3B▓▒▒░@X03▄ @X0B▄       ▄@X3B▓▒░@X03▄ @X0B▄▀@X3B▓▒▒░@X03▄ @X0B▄▀@X3B▓▒▒░@X03▄ @X0B▄▀@X3B▓▒▒░@X03▄ @X0B▄▀@X3B▓▒▒░@X03▄");
    PRINTLN("@X04▄▄ ▄▄@X0B█ @X3B▒░░@X03██ @X0B█ @X3B▒░░@X03██ @X0B█ @X3B▒░░@X03██ @X0B█ @X3B▒░░@X03█▄ @X0B▀@X3B▒░ @X03▀ @X0B█ @X3B▒░░@X03██ @X0B█ @X3B▒░░@X03██ @X0B█ @X3B▒░░@X03██ @X0B█ @X3B▒░░ @X03█@X04▄▄█▄▄▄");
    PRINTLN("█@X4C░▒▓ @X3B▓@X04 @X3B░@X03███@X38 @X04 @X3B▓@X04 @X3B░@X03████ @X3B▓@X03 @X3B░@X03███@X38 @X03 @X3B▓@X03 @X3B░@X03████  @X0B▄▄@X03▄  @X3B▓@X03 @X3B░@X03████ @X3B▓@X03 @X3B░@X03████ @X3B▓@X03 @X3B░@X03███@X38░@X08 @X3B▓@X03 ▀▀▀▀@X04██@X4C█▓▒░@X04█");
    PRINTLN("█@X4C▒▓█@X04█@X3B▒@X04 @X03███@X38 ░@X04 @X3B▒@X04 @X03████@X38░@X03 @X3B▒@X03 ███@X38 ░@X03 @X3B▒@X03 ████@X38░@X03 @X0B█@X3B▓▒░@X03█ @X3B▒@X03 ████@X38░@X03 @X3B▒@X03 ████@X38░@X03 @X3B▒@X03 ███@X38░▒@X03  ▀@X3B░@X03██@X38 @X34▀@X04█@X4C▓▒░░@X04█");
    PRINTLN("▀▀█▀▀@X3B░@X04 @X03██@X38 ░▒@X04 @X3B░@X04 @X03███@X38░▒@X03 @X3B░@X03▀▀▀▀▀  @X3B░@X03 ███@X38░▒@X03 @X3B▓▒░@X03██ @X3B░@X03 ███@X38░▒@X03 @X3B░@X03▀▀▀▀▀  @X3B░@X03▀▀▀▀▀  @X3B░@X03 ███@X38░▒@X04▀▀ ▀▀▀");
    PRINTLN("     @X03▀▄█@X38 ░▒@X08▀   @X03██@X38░▒@X08▀ @X03▀███@X38░▒@X08▀ @X03▀▄██@X38░▒@X08▀ @X03▀@X3B░@X03██▀   ██@X38░▒@X08▀ @X03▀███@X38░▒@X08▀ @X03█ ▀@X38░▒@X08▄  @X03▀▄██@X38░▒@X08▀   @X04DJ");
  }
  function drawLine(line) {
    PRINTLN("@X04 ------------------------------------------------------------------------------");
  }
  function printYN() {
    PRINT(ynSwitch ? LightBarColor + "YES@X0F " + unLightBarColor + "NO" : unLightBarColor + "YES@X0F " + LightBarColor + "NO");
  }
})();
