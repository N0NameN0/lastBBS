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
  PRINTYN();

  while (true) {
    KEY = await INKEY();
    if (KEY == "Enter") {
      break;
    }
    if (KEY == "ArrowRight" || KEY == "ArrowLeft") {
      ynSwitch = !ynSwitch;
      ANSIPOS(ynPos.x, ynPos.y);
      PRINTYN();
    }
  }
  if (ynSwitch) {
    for (let i = 25; i > 10; i--) {
      ANSIPOS(1, i - 1);
      drawLine();
      CLREOL();
      await DELAY(1);
    }

    var menuPos = 7;
    var onelinerLen = 0;
    drawMenu();
    ANSIPOS(1, 9);
    CLREOL();
    while (true) {
      KEY = await INKEY();

      if (KEY == "ArrowLeft" || KEY == "ArrowRight") {
        menuPos = KEY == "ArrowLeft" ? menuPos - 1 : menuPos + 1;
        if (menuPos > 15) menuPos = 1;
        if (menuPos < 1) menuPos = 15;
        SAVEPOS();
        drawMenu();
        RESTOREPOS();
      }
      if (LEN(KEY) == 1) {
        if (onelinerLen < 80) {
          PRINT(KEY);
          onelinerLen++;
        }
      }
    }
  } else {
    DEFCOLOR();
    NEWLINE();
    var creditPos = GETX();
    PRINT("@X08               ■■■ OneLiners v2.0 by Dark Jester [CiA / DRE] ■■■@X07\r");
    await DELAY(1);
    ANSIPOS(creditPos, null);
    PRINT("@X08               ■@X04■■ OneL@X08i@X04ners @X04v2.0 by Dark Jester [CiA / DRE] ■@X04■@X08■@X07");
    await DELAY(1);
    ANSIPOS(creditPos, null);
    PRINT("@X08               ■@X04■@X0C■ On@X04eL@X08i@X04ne@X0Crs @X04v@X0C2@X04.@X0C0 @X04by @X0CDa@X04rk @X0CJ@X0Ces@X04ter [@X0CCiA @X04/ @X0CDRE@X04] @X0C■@X04■@X08■@X07");
    await DELAY(1);
    ANSIPOS(creditPos, null);
    PRINT("@X08               ■@X04■@X0C■ @X0FO@X0Cn@X04eL@X08i@X04ne@X0Cr@X0Fs @X04v@X0C2@X04.@X0C0 @X04by @X0FD@X0Ca@X04rk @X0FJ@X0Ces@X04ter [@X0CCiA @X04/ @X0CDRE@X04] @X0C■@X04■@X08■@X07");
    await DELAY(3);
  }

  function drawTopLogo() {
    PRINTLN("     @X0B▄▀@X3B▓▒▒░@X03▄ @X0B▄▀@X3B▓▒▒░@X03▄ @X0B▄▀@X3B▓▒▒░@X03▄ @X0B▄       ▄@X3B▓▒░@X03▄ @X0B▄▀@X3B▓▒▒░@X03▄ @X0B▄▀@X3B▓▒▒░@X03▄ @X0B▄▀@X3B▓▒▒░@X03▄ @X0B▄▀@X3B▓▒▒░@X03▄");
    PRINTLN("@X04▄▄ ▄▄@X0B█ @X3B▒░░@X03██ @X0B█ @X3B▒░░@X03██ @X0B█ @X3B▒░░@X03██ @X0B█ @X3B▒░░@X03█▄ @X0B▀@X3B▒░ @X03▀ @X0B█ @X3B▒░░@X03██ @X0B█ @X3B▒░░@X03██ @X0B█ @X3B▒░░@X03██ @X0B█ @X3B▒░░ @X03█@X04▄▄█▄▄▄");
    PRINTLN("█@X4C░▒▓ @X3B▓@X04 @X3B░@X03███@X38 @X04 @X3B▓@X04 @X3B░@X03████ @X3B▓@X03 @X3B░@X03███@X38 @X03 @X3B▓@X03 @X3B░@X03████  @X0B▄▄@X03▄  @X3B▓@X03 @X3B░@X03████ @X3B▓@X03 @X3B░@X03████ @X3B▓@X03 @X3B░@X03███@X38░@X08 @X3B▓@X03 ▀▀▀▀@X04██@X4C█▓▒░@X04█");
    PRINTLN("█@X4C▒▓█@X04█@X3B▒@X04 @X03███@X38 ░@X04 @X3B▒@X04 @X03████@X38░@X03 @X3B▒@X03 ███@X38 ░@X03 @X3B▒@X03 ████@X38░@X03 @X0B█@X3B▓▒░@X03█ @X3B▒@X03 ████@X38░@X03 @X3B▒@X03 ████@X38░@X03 @X3B▒@X03 ███@X38░▒@X03  ▀@X3B░@X03██@X38 @X34▀@X04█@X4C▓▒░░@X04█");
    PRINTLN("▀▀█▀▀@X3B░@X04 @X03██@X38 ░▒@X04 @X3B░@X04 @X03███@X38░▒@X03 @X3B░@X03▀▀▀▀▀  @X3B░@X03 ███@X38░▒@X03 @X3B▓▒░@X03██ @X3B░@X03 ███@X38░▒@X03 @X3B░@X03▀▀▀▀▀  @X3B░@X03▀▀▀▀▀  @X3B░@X03 ███@X38░▒@X04▀▀ ▀▀▀");
    PRINTLN("     @X03▀▄█@X38 ░▒@X08▀   @X03██@X38░▒@X08▀ @X03▀███@X38░▒@X08▀ @X03▀▄██@X38░▒@X08▀ @X03▀@X3B░@X03██▀   ██@X38░▒@X08▀ @X03▀███@X38░▒@X08▀ @X03█ ▀@X38░▒@X08▄  @X03▀▄██@X38░▒@X08▀   @X04DJ");
  }
  function drawLine() {
    PRINTLN("@X04 ------------------------------------------------------------------------------");
  }
  function PRINTYN() {
    PRINT(ynSwitch ? LightBarColor + "YES@X0F " + unLightBarColor + "NO" : unLightBarColor + "YES@X0F " + LightBarColor + "NO");
  }
  function drawMenu() {
    ANSIPOS(1, 11);
    if (menuPos == 1) PRINT("@X1FBlu@X07 @X02Green @X03Cyan @X04Red @X05Purple @X06Brown @X07Gray @X08Gray @X09Blu @X0AGreen @X0BCyan @X0CRed @X0DPurple @X0EYellow @X0FWhite");
    else if (menuPos == 2) PRINT("@X01Blu@X07 @X2FGreen@X07 @X03Cyan @X04Red @X05Purple @X06Brown @X07Gray @X08Gray @X09Blu @X0AGreen @X0BCyan @X0CRed @X0DPurple @X0EYellow @X0FWhite");
    else if (menuPos == 3) PRINT("@X01Blu@X07 @X02Green @X3FCyan@X07 @X04Red @X05Purple @X06Brown @X07Gray @X08Gray @X09Blu @X0AGreen @X0BCyan @X0CRed @X0DPurple @X0EYellow @X0FWhite");
    else if (menuPos == 4) PRINT("@X01Blu@X07 @X02Green @X03Cyan @X4FRed@X07 @X05Purple @X06Brown @X07Gray @X08Gray @X09Blu @X0AGreen @X0BCyan @X0CRed @X0DPurple @X0EYellow @X0FWhite");
    else if (menuPos == 5) PRINT("@X01Blu@X07 @X02Green @X03Cyan @X04Red @X5FPurple@X07 @X06Brown @X07Gray @X08Gray @X09Blu @X0AGreen @X0BCyan @X0CRed @X0DPurple @X0EYellow @X0FWhite");
    else if (menuPos == 6) PRINT("@X01Blu@X07 @X02Green @X03Cyan @X04Red @X05Purple @X6FBrown@X07 @X07Gray @X08Gray @X09Blu @X0AGreen @X0BCyan @X0CRed @X0DPurple @X0EYellow @X0FWhite");
    else if (menuPos == 7) PRINT("@X01Blu@X07 @X02Green @X03Cyan @X04Red @X05Purple @X06Brown @X7FGray@X07 @X08Gray @X09Blu @X0AGreen @X0BCyan @X0CRed @X0DPurple @X0EYellow @X0FWhite");
    else if (menuPos == 8) PRINT("@X01Blu@X07 @X02Green @X03Cyan @X04Red @X05Purple @X06Brown @X07Gray @X0FGray @X09Blu @X0AGreen @X0BCyan @X0CRed @X0DPurple @X0EYellow @X0FWhite");
    else if (menuPos == 9) PRINT("@X01Blu@X07 @X02Green @X03Cyan @X04Red @X05Purple @X06Brown @X07Gray @X08Gray @X1FBlu@X07 @X0AGreen @X0BCyan @X0CRed @X0DPurple @X0EYellow @X0FWhite");
    else if (menuPos == 10) PRINT("@X01Blu@X07 @X02Green @X03Cyan @X04Red @X05Purple @X06Brown @X07Gray @X08Gray @X09Blu @X2FGreen@X07 @X0BCyan @X0CRed @X0DPurple @X0EYellow @X0FWhite");
    else if (menuPos == 11) PRINT("@X01Blu@X07 @X02Green @X03Cyan @X04Red @X05Purple @X06Brown @X07Gray @X08Gray @X09Blu @X0AGreen @X3FCyan@X07 @X0CRed @X0DPurple @X0EYellow @X0FWhite");
    else if (menuPos == 12) PRINT("@X01Blu@X07 @X02Green @X03Cyan @X04Red @X05Purple @X06Brown @X07Gray @X08Gray @X09Blu @X0AGreen @X0BCyan @X4FRed@X07 @X0DPurple @X0EYellow @X0FWhite");
    else if (menuPos == 13) PRINT("@X01Blu@X07 @X02Green @X03Cyan @X04Red @X05Purple @X06Brown @X07Gray @X08Gray @X09Blu @X0AGreen @X0BCyan @X0CRed @X5FPurple@X07 @X0EYellow @X0FWhite");
    else if (menuPos == 14) PRINT("@X01Blu@X07 @X02Green @X03Cyan @X04Red @X05Purple @X06Brown @X07Gray @X08Gray @X09Blu @X0AGreen @X0BCyan @X0CRed @X0DPurple @X6FYellow@X07 @X0FWhite");
    else if (menuPos == 15) PRINT("@X01Blu@X07 @X02Green @X03Cyan @X04Red @X05Purple @X06Brown @X07Gray @X08Gray @X09Blu @X0AGreen @X0BCyan @X0CRed @X0DPurple @X0EYellow @X7FWhite@X07");
    COLOR(menuPos);
  }
})();
