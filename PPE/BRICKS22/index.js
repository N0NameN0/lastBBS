(async () => {
  var LINES = [];
  var ONE;
  var X;
  var K;
  var Z;
  var S;
  var C;
  var ynor;
  var xnor;
  var WRITER = [];
  var WHO;
  var addkeys;
  var posi;
  var OPT = [];
  var HL;
  var HLCOL;
  var NOCOL;
  var HLTXT;
  var PREPOSX;
  var PREPOSY;
  var ADDED = false;

  HLCOL = "@X40";
  NOCOL = "@X40";
  HLTXT = "@X4F";

  OPT[1] = "UP";
  OPT[2] = "DOWN";
  OPT[3] = "PgUp";
  OPT[4] = "PgDn";
  OPT[5] = "HOME";
  OPT[6] = "END";
  OPT[7] = "AUTHOR";
  OPT[8] = "TEXT";
  OPT[9] = "ADD";
  OPT[10] = "HELP";
  OPT[11] = HLTXT + "END";

  HL = 11;
  WHO = 0;
  async function HOME() {
    ONE = "";
    C = 0;
    await FOPEN(1);
    K = FSIZE(1) / 2;
    for (Z = 1; Z <= K; Z++) {
      LINES[Z] = FGET(1);
      WRITER[Z] = FGET(1);
    }
    FCLOSE(1);
    S = K - 13;
    CLS();
    PRINTLN(NOCOL + "┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴ " + HLTXT + "BRICKS" + NOCOL + " ┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴@X08cL@X07");
    for (Z = K - 13; Z <= K; Z++) {
      C = C + 1;
      ANSIPOS(1, C + 1);
      CLREOL();
      PRINTLN("@X0F" + LINES[Z] + "@X07");
    }
    ANSIPOS(1, 16);
    PRINTLN(NOCOL + "┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬v2.2┴┬@X07");

    ANSIPOS(1, 18);
    PRINT("@X08 ■ @X0F" + OPT[1] + "@X08 ■@X0F " + OPT[2] + "@X08 ■@X0F " + OPT[3] + "@X08 ■ @X0F" + OPT[4] + "@X08 ■@X0F " + OPT[5] + "@X08 ■@X0F " + OPT[6] + "@X08 ■@X0F " + OPT[7] + "@X08 ■@X0F " + OPT[8] + "@X08 ■@X0F " + OPT[9] + "@X08 ■@X0F " + OPT[10] + "@X08 ■ @X0F" + OPT[11] + "@X08 ■@X0F " + "@X07");

    while (true) {
      ONE = await INKEY();

      if ((ONE == "ArrowUp") | ((ONE == "Enter") & (HL == 1))) {
        S = S - 1;
        REDRAW();
      } else if ((ONE == "ArrowDown") | ((ONE == "Enter") & (HL == 2))) {
        S = S + 1;
        REDRAW();
      } else if ((ONE == "End") | ((ONE == "Enter") & (HL == 6))) {
        S = K - 13;
        REDRAW();
      } else if ((ONE == "Home") | ((ONE == "Enter") & (HL == 5))) {
        S = 1;
        REDRAW();
      } else if ((ONE == "PageUp") | ((ONE == "Enter") & (HL == 3))) {
        S = S - 12;
        REDRAW();
      } else if ((ONE == "PageDown") | ((ONE == "Enter") & (HL == 4))) {
        S = S + 12;
        REDRAW();
      } else if ((UPPER(ONE) == "H") | ((ONE == "Enter") & (HL == 10))) {
        await HLPSCR();
      } else if ((ONE == "Escape") | ((ONE == "Enter") & (HL == 11))) {
        await END();
        break;
      } else if ((UPPER(ONE) == "E") | ((ONE == "Enter") & (HL == 9))) {
        OPT[HL] = RIGHT(OPT[HL], LEN(OPT[HL]) - 4);
        HL = 9;
        OPT[HL] = HLTXT + OPT[HL];
        DRAWMENU();
        await INPU();
        if (ADDED) {
          break;
        }
      }

      if (ONE == "Enter") {
        if (HL == 7) {
          WHO = 1;
          REDRAW();
        } else if (HL == 8) {
          WHO = 0;
          REDRAW();
        }
      }

      if (ONE == "ArrowRight") {
        OPT[HL] = RIGHT(OPT[HL], LEN(OPT[HL]) - 4);
        HL++;
        if (HL > 11) HL = 1;
        OPT[HL] = HLTXT + OPT[HL];
        DRAWMENU();
      }

      if (ONE == "ArrowLeft") {
        OPT[HL] = RIGHT(OPT[HL], LEN(OPT[HL]) - 4);
        HL--;
        if (HL < 1) HL = 11;
        OPT[HL] = HLTXT + OPT[HL];
        DRAWMENU();
      }
    }
  }

  function REDRAW() {
    xnor = GETX();
    ynor = GETY();

    if (S > K - 13) S = K - 13;
    if (S < 1) S = 1;
    C = 0;
    for (Z = S; Z <= S + 13; Z++) {
      C = C + 1;
      ANSIPOS(1, 1 + C);
      CLREOL();
      if ((K >= Z) & (WHO == 0)) PRINT("@X0F" + LINES[Z] + "@X07");
      if ((K >= Z) & (WHO == 1)) {
        PRINT("@X0F" + LEFT(LINES[Z], 48));
        ANSIPOS(50);
        PRINT("@X09<─ @X0Cby@X05 : @X0F" + WRITER[Z] + "@X07");
      }
    }
    ANSIPOS(xnor, ynor);
  }

  async function HLPSCR() {
    CLS();
    PRINTLN("                            @X0CBricks v2.2  -  HELP@X09");
    NEWLINE();
    NEWLINE();
    PRINTLN("                                 @XCFVIEW MODE@X0F");
    PRINTLN("ESC              exit Bricks");
    PRINTLN("cursor DOWN      scroll to next ONELINER");
    PRINTLN("cursor UP        scroll to previous ONELINER");
    PRINTLN("HOME             jump to 1. ONELINER");
    PRINTLN("END              jump to latest ONELINER");
    PRINTLN("H                view this screen");
    PRINTLN("E                enter a ONELINER");
    PRINTLN("LEFT/RIGHT       move HIGHLIGHT");
    PRINTLN("RETURN           select the highlighted option");
    NEWLINE();
    PRINTLN("                                @XCFEDITING MODE@X07");
    PRINTLN("@X0Fthe same stuff with scrolling and stuff as in view-mode");
    PRINTLN("JUST THE SAME, BUT USE  CTRL+LEFT/RIGHT  2 move HIGHliGHT@X07");
    NEWLINE();
    await WAIT();
    CLS();
    PRINTLN(NOCOL + "┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴ " + HLTXT + "BRICKS" + NOCOL + " ┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴@X08cL@X07");
    REDRAW();
    ANSIPOS(1, 16);
    PRINTLN(NOCOL + "┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬v2.2┴┬@X07");
    DRAWMENU();
  }

  function DRAWMENU() {
    ANSIPOS(1, 18);
    PRINT("@X08 ■ @X0F" + OPT[1] + "@X08 ■@X0F " + OPT[2] + "@X08 ■@X0F " + OPT[3] + "@X08 ■ @X0F" + OPT[4] + "@X08 ■@X0F " + OPT[5] + "@X08 ■@X0F " + OPT[6] + "@X08 ■@X0F " + OPT[7] + "@X08 ■@X0F " + OPT[8] + "@X08 ■@X0F " + OPT[9] + "@X08 ■@X0F " + OPT[10] + "@X08 ■ @X0F" + OPT[11] + "@X08 ■@X0F " + "@X07");
  }

  async function INPU() {
    var strlength = 0;
    ANSIPOS(16, 20);
    PRINT("@X08WRITE UR ONELINER!!! U CAN USE @");
    PRINTLN("X?? color codes!@X0F");
    NEWLINE();
    ONE = "";
    ANSIPOS(1, 22);
    CLREOL();

    while (ONE != "Escape") {
      ONE = await INKEY();

      if (LEN(ONE) == 1) {
        PRINT(ONE);
        strlength++;
        if (GETX() > 80) ANSIPOS(80, GETY());
      }

      if (ONE == "ArrowUp") {
        PREPOSX = GETX();
        PREPOSY = GETY();
        S = S - 1;
        REDRAW();
        ANSIPOS(PREPOSX, PREPOSY);
      }

      if (ONE == "ArrowDown") {
        PREPOSX = GETX();
        PREPOSY = GETY();
        S = S + 1;
        REDRAW();
        ANSIPOS(PREPOSX, PREPOSY);
      }

      if (ONE == "End") {
        PREPOSX = GETX();
        PREPOSY = GETY();
        S = K - 13;
        REDRAW();
        ANSIPOS(PREPOSX, PREPOSY);
      }

      if (ONE == "Home") {
        PREPOSX = GETX();
        PREPOSY = GETY();
        S = 1;
        REDRAW();
        ANSIPOS(PREPOSX, PREPOSY);
      }

      if (ONE == "PageUp") {
        PREPOSX = GETX();
        PREPOSY = GETY();
        S = S - 12;
        REDRAW();
        ANSIPOS(PREPOSX, PREPOSY);
      }

      if (ONE == "PageDown") {
        PREPOSX = GETX();
        PREPOSY = GETY();
        S = S + 12;
        REDRAW();
        ANSIPOS(PREPOSX, PREPOSY);
      }

      if (ONE == "Backspace") {
        posi = GETX();
        if (posi > 1) {
          PRINT(" ");
          ANSIPOS(posi, 22);
          ANSIPOS(GETX() - 1, 22);
          PRINT(" ");
          ANSIPOS(GETX() - 1, 22);
          strlength--;
        }
      }

      if (ONE == "Enter") {
        ANSIPOS(GETX(), 22);
        PRINT(" ");
        if (strlength == 0) {
          break;
        } else {
          await FOPEN(1);
          await FPUTLN(1, SCRTEXT(1, 22, strlength, true));
          await FPUTLN(1, U_NAME());
          FCLOSE(1);

          LINES[K + 1] = SCRTEXT(1, 22, strlength, true);
          WRITER[K + 1] = U_NAME();
          K++;
          S = K - 13;
          REDRAW();
          ANSIPOS(1, 22);
          CLREOL();
          ANSIPOS(25, 22);
          PRINTLN("@X0Cok, ur crap has been added to bricks!");
          ADDED = true;
          await DELAY(20);
          break;
        }
      }

      posi = GETX();

      if (blinker) PRINT("_");
      else PRINT(" ");

      ANSIPOS(posi, 22);
    }
    ANSIPOS(1, 22);
    CLREOL();
  }
  async function END() {
    NEWLINE();
    PRINTLN("@X08bricks written by @X0CcL!@X08 [the CouNCil]@X07");
    ANSIPOS(2, 22);
    await DELAY(10);
  }

  await HOME();

  await loadAndRun("PPE/deux/index.js");
})();
