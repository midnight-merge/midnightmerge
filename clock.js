// Local time, counting up to the hour the name refers to.
(function () {
  var el = document.querySelector('[data-clock]');
  if (!el) return;
  var out = el.querySelector('.time');
  var note = el.querySelector('.note');

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function tick() {
    var d = new Date();
    out.textContent = pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
    var witching = d.getHours() === 0;
    el.classList.toggle('witching', witching);
    note.textContent = witching ? 'merge window' : 'your local time';
  }

  tick();
  setInterval(tick, 1000);
})();
