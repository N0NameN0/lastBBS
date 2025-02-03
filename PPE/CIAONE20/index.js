(async () => {
  //--------------------------------
  // CONFIGURATION and INFOS
  //--------------------------------
  // FILE1.DAT : Top Logo
  // FILE2.DAT : oneliners data
  //--------------------------------

  var LightBarColor = "@X4F";
  var unLightBarColor = "@X07";
  var MaxOneLine = 14;
  var EnterOneLinerPrompt = "@X0FE@X0Cnt@X04er @X0FO@X0Cn@X04e@X0FL@X0Cin@X04er@X08? @X07";
  var PromptYPos = 9;
  var AbortedTxt = "@X08                          ■@X04■@X0C■  @X0FO@X0Cn@X04e@X0FL@X0Cin@X04er @X0FAb@X0Cor@X04ted  @X0C■@X04■@X08■";
  var SavedTxt = "@X08                           ■@X04■@X0C■  @X0FO@X0Cn@X04e@X0FL@X0Cin@X04er @X0FS@X0Cav@X04ed  @X0C■@X04■@X08■@X07";

  //--------------------------------
  // CODE / Do not change anything below here
  //--------------------------------
  var YNswitch = 0;
  var YNposX = 1;
  var YNposY = 1;

  PRINTLN("@X04 ------------------------------------------------------------------------------");
  await DISPFILE(1);
  PRINTLN("@X04 ------------------------------------------------------------------------------");
  PRINT("@X0F");
  await FOPEN(2);
  var size = FSIZE(2);
  for (let i = size - 15; i < size; i++) {
    const line = FGET(2);
    FGET(2);
    PRINTLN(line);
  }
  FCLOSE(2);
  PRINTLN("@X04 ------------------------------------------------------------------------------");
  PRINT(EnterOneLinerPrompt);
  YNposX = GETX();
  YNposY = GETY();
  PRINT(YNswitch ? LightBarColor + "YES@X0F " + unLightBarColor + "NO" : unLightBarColor + "YES@X0F " + LightBarColor + "NO");
  while (true) {
    ONE = await INKEY();

    if (ONE == "ArrowLeft") {
      YNswitch = !YNswitch;
    } else if (ONE == "ArrowRight") {
      YNswitch = !YNswitch;
    } else if (ONE == "Enter") {
      break;
    }

    if (ONE != "") {
      ANSIPOS(YNposX, YNposY);
      PRINT(YNswitch ? LightBarColor + "YES@X0F " + unLightBarColor + "NO" : unLightBarColor + "YES@X0F " + LightBarColor + "NO");
    }
  }
})();
