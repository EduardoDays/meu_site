// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Sticky menu background
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});

window.addEventListener('scroll', function() {
    var rodape = document.getElementById('rodape');
    var alturaPagina = document.body.scrollHeight;
    var alturaJanela = window.innerHeight;
    var posicaoAtual = window.scrollY;

    // Se o scroll atingir o final da página, mostra o rodapé
    if (alturaPagina - alturaJanela === posicaoAtual) {
        rodape.classList.remove('hidden');
    } else {
        rodape.classList.add('hidden');
    }
});

