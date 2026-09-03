const axis = A81_AXIS.build();

axis.matrix.forEach(row => {
    row.forEach(iqq => {
        MassHWTranswarp.set(iqq, iqq, TimeHW.delta);
        MassHWTranswarp.compute();
    });
});
state.zahnrad = 0;

function zahnradTick() {
  state.zahnrad = (state.zahnrad + 1) % 12; // 12 Zähne
}
zahnradTick();
