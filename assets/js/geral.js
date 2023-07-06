function myFunctionEntrar() {
    //window.location.href = "https://acesso.gov.br/";
    window.open('https://acesso.gov.br/', '_blank');
}

function myFunctionBusca() {
    var termo = document.getElementById("main-searchbox").value;
    //console.log(termo)
    window.location.href = "/?s=" + termo;
}

jQuery(document).ready(function ($) {
    (function () {

        // Adiciona plugin de consentimento sobre cookies
        window.cookieconsent.initialise({
            "palette": {
                "popup": {
                  "background": "#252e39"
                },
                "button": {
                  "background": "#14a7d0"
                }
            },
            "content": {
              "message": "O Repositório de Códigos e Sistemas para CT&amp;I (Rede Moara) utiliza cookies, considerados arquivos que registram e gravam temporariamente no computador do usuário, para fins estatísticos e de aprimoramento de nossos serviços. Ao utilizar a Rede Moara você concorda com a política de monitoramento de cookies, conforme as preferências e navegações realizadas nas páginas deste Repositório.",
              "allow": "Aceitar cookies",
              "dismiss": "Aceitar cookies",
              "deny": "Rejeitar cookies",
              "link": "Saiba mais",
              "href": "https://redemoara.ibict.br/politica-de-uso/"
            },
            "type": "opt-out"
        });

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