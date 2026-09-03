// Innen-Lehre: 81 → 3 → 9 → 81
function innenLehre(x) {
    if (x === 81) return 3;   // Wissen → Ursprung
    if (x === 3)  return 9;   // Ursprung → Arbeit
    if (x === 9)  return 81;  // Arbeit → Wissen
    return 3;                 // Rückkehrpunkt
}

// Feinenergie
function nanoAtom() {
    return state.a81 / 9;
}

// Reinenergie
function reinEnergie() {
    return Math.sqrt(state.a81);
}

// Impulsfenster
function kuckKuck() {
    return state.step % 2 === 0 ? "KUCK" : "KUCK-KUCK";
}

// Pipeline9 verbessert
Pipeline9.useA81 = function(axis){

    // 1. Innen-Lehre anwenden
    state.a81 = innenLehre(state.a81);

    // 2. Nano-Atom Energie
    const nano = nanoAtom();

    // 3. Rein-Energie
    const rein = reinEnergie();

    // 4. Zahnrad-Impuls
    state.zahnrad = (state.zahnrad + 1) % 12;

    // 5. Transwarp koppeln
    MassHWTranswarp.set(
        nano,        // Masse
        rein,        // Geschwindigkeit
        TimeHW.delta // Zeitfluss
    );
    MassHWTranswarp.compute();

    // 6. Pipeline-Daten setzen
    this.data = {
        pipe9: axis.pipe9,
        a81: state.a81,
        nano,
        rein,
        impuls: kuckKuck(),
        zahnrad: state.zahnrad
    };

    return this.data;
};
