let toggleButtons = document.querySelectorAll('.toggleButton');
let respostas = document.querySelectorAll('.hidden');
let opcao = document.querySelectorAll('opcao')

function toggleResposta(indice) {
    const resposta = respostas[indice];
    resposta.classList.toggle('hidden');
    if (!resposta.classList.contains('hidden')) {
        resposta.style.maxHeight = resposta.scrollHeight + 'px';
        // Adicionamos um listener para o evento 'transitionend' para garantir que a altura máxima seja removida após a transição
        resposta.addEventListener('transitionend', () => {
            resposta.style.maxHeight = null;
        }, { once: true });
    } else {
        resposta.style.maxHeight = resposta.scrollHeight + 'px';
        // Esperamos um pequeno intervalo antes de ocultar a div para garantir que a transição seja iniciada
        setTimeout(() => {
            resposta.style.maxHeight = 0;
        }, 50);
    }
}

function verificarToggle() {
    toggleButtons.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
            toggleResposta(indice);
        });
    });
}



verificarToggle();

document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.querySelector('.cookie-banner');
    const cookieButton = document.querySelector('.cookie-button');

    // Função para fechar o banner de cookies
    function fecharBanner() {
        cookieBanner.style.display = 'none';
    }

    // Adiciona um event listener para o botão de cookies
    cookieButton.addEventListener('click', function() {
        fecharBanner();
    });

    const menuOptions = document.querySelectorAll('.opcao');
    menuOptions.forEach(option => {
        option.addEventListener('click', function() {
            if (window.innerWidth < 768) { // Verifica se está em tela pequena
                const menu = document.getElementById('mainMenu');
                if (!menu.classList.contains('hidden')) { // Verifica se o menu está visível
                    toggleMenu(); // Fecha o menu apenas se estiver visível
                }
            }
        });
    });
});

function toggleMenu() {
    var menu = document.getElementById('mainMenu');
    if (menu.classList.contains('hidden')) {
        menu.hidden = false;  // Remove o atributo hidden
        menu.classList.remove('hidden');  // Remove a classe hidden
    } else {
        menu.hidden = true;  // Adiciona o atributo hidden
        menu.classList.add('hidden');  // Adiciona a classe hidden
    }
}
var entrar = document.getElementById('entrar');
function handleResize() {
    var menu = document.getElementById('mainMenu');
    if (window.innerWidth >= 768) {
        menu.hidden = false;  // Garante que o menu seja exibido em telas grandes
        menu.classList.remove('hidden');  // Remove a classe hidden
        entrar.classList.add('bg-primary-700');
        entrar.classList.add('text-white');
        entrar.classList.add('hover:bg-primary-800');
    } else {
            menu.classList.add('hidden');
            entrar.classList.add('hover:bg-gray-100');
            entrar.classList.remove('bg-primary-700');
            entrar.classList.remove('hover:bg-primary-800');
            entrar.classList.remove('text-white');
    }
}

document.getElementById('toggleButton').addEventListener('click', function() {
    var menu = document.getElementById('mainMenu');
    toggleMenu();
    // Marcar explicitamente como escondido em telas pequenas
    if (window.innerWidth < 768) {
        if (menu.hidden) {
            menu.classList.add('explicitly-hidden');
        } else {
            menu.classList.remove('explicitly-hidden');
        }
    }
});


// Adiciona o evento resize para garantir que o menu seja exibido em telas grandes
window.addEventListener('resize', handleResize);

// Verifica o estado inicial ao carregar a página
handleResize();
