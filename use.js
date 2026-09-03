Pipeline9.useA81 = function(axis){
    this.data = axis.pipe9;
    return this.data;
};
function kuckKuck() {
  return state.step % 2 === 0 ? "KUCK" : "KUCK-KUCK";
}
function nanoAtom() {
  return state.a81 / 9; // feinste Energieeinheit
}
function reinEnergie() {
  return Math.sqrt(state.a81); // Wurzelenergie
}
