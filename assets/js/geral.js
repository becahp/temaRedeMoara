function myFunctionEntrar() {
    //window.location.href = "https://acesso.gov.br/";
    window.open('https://acesso.gov.br/', '_blank');
}

function myFunctionBusca() {
    var termo = document.getElementById("main-searchbox").value;
    //console.log(termo)
    window.location.href = "/rede_moara/?s=" + termo;
}

jQuery(document).ready(function ($) {
    (function () {
        var Contrast = {
            storage: 'contrastState',
            cssClass: 'contrast',
            currentState: null,
            contador: 0,
            check: checkContrast,
            getState: getContrastState,
            setState: setContrastState,
            toogle: toogleContrast,
            updateView: updateViewContrast
        };

        window.toggleContrast = function () { Contrast.toogle(); };

        Contrast.check();

        function checkContrast() {
            this.updateView();
        }

        function getContrastState() {
            return localStorage.getItem(this.storage) === 'true';
        }

        function setContrastState(state) {
            localStorage.setItem(this.storage, '' + state);
            this.currentState = state;
            this.contador += 1;
            this.updateView();
        }

        function updateViewContrast() {
            var body = document.body;
            if (this.currentState === null) {
                this.currentState = this.getState();
                //body.classList.add(this.cssClass);
            }
            if (this.currentState || this.contador == 1) {
                body.classList.add(this.cssClass);
            } else if (this.currentState != null && this.contador > 0) {
                body.classList.remove(this.cssClass);
            }
        }

        function toogleContrast() {
            this.setState(!this.currentState);
        }
    })();
});


/**
 * Função para mostrar o card com o texto de mouse over
 */
function mouseOver(objeto) {
    var card = document.getElementsByClassName('texto-hover');
    var titulo = objeto.getElementsByTagName('a')[0];
    var span = objeto.getElementsByTagName('span')[0];
    for (var i = 0; i < card.length; i++) {
        card[i].innerHTML = '<div class="titulo-hover">' + titulo.innerText + '</div>' + span.innerText;
        card[i].style.visibility = "visible";
    }
}

/**
 * Função para esconder o card
 */
function mouseOut() {
    var card = document.getElementsByClassName('texto-hover');
    for (var i = 0; i < card.length; i++) {
        card[i].style.visibility = "hidden";
    }
}