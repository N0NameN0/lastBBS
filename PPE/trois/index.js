(async () => {
  CLS();
  // Afficher quelques textes avec différentes couleurs
  PRINTLN("Test de SCRTEXφÇ");
  PRINTLN("@X1DTest de @X2BSCRTEXφÇ");
  await DELAY(20); // Attendre 2 secondes

  // Tester SCRTEXT sans codes couleur
  ANSIPOS(1, 10);
  PRINTLN("@X0FContenu ligne 1 sans codes: " + SCRTEXT(1, 1, 16, false));
  PRINTLN("@X0FContenu ligne 2 avec codes: " + SCRTEXT(1, 2, 16, true));

  await WAIT();
})();
