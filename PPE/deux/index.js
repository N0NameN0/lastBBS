(async () => {
  CLS();
  PRINTLN("BYE BYE " + U_NAME());
  await DELAY(10); // attend 1 seconde
  PRINTLN("Message après une seconde");
})();
