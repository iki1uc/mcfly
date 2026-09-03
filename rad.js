function neueSchaltung() {

    // Innen-Lehre
    state.a81 = innenLehre(state.a81);

    // Zahnrad
    zahnradTick();

    // Transwarp
    MassHWTranswarp.set(
        state.a81,
        reinEnergie(),
        TimeHW.delta
    );
    MassHWTranswarp.compute();

    // Telemetrie
    return messen();
}
