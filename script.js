(function () {
    var abas = Array.prototype.slice.call(document.querySelectorAll('.aba'));
    function abrir(aba) {
        abas.forEach(function (b) {
            var alvo = document.getElementById(b.getAttribute('aria-controls'));
            var ativa = b === aba;
            b.setAttribute('aria-selected', ativa ? 'true' : 'false');
            if (alvo) alvo.hidden = !ativa;
        });
    }
    abas.forEach(function (b) {
        b.addEventListener('click', function () { abrir(b); });
        b.addEventListener('keydown', function (e) {
            var i = abas.indexOf(b);
            if (e.key === 'ArrowRight') { e.preventDefault(); abas[(i + 1) % abas.length].focus(); abrir(abas[(i + 1) % abas.length]); }
            if (e.key === 'ArrowLeft') { e.preventDefault(); abas[(i - 1 + abas.length) % abas.length].focus(); abrir(abas[(i - 1 + abas.length) % abas.length]); }
        });
    });
})();