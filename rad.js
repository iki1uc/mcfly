MassHWTranswarp.set(
    qi,        // Masse
    iqq,       // Geschwindigkeit
    TimeHW.delta
);
function messen() {
  const aufstieg = state.a81 > 9 ? "HOCH" : "NIEDRIG";
  const antrieb = state.tmp === "Pump" ? "AKTIV" : "RUHIG";
  const energie = state.a81;

  return { aufstieg, antrieb, energie };
}
