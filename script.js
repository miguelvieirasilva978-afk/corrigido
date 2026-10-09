// registro do service worker (permite instalar o site como app)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch((erro) => console.log("Erro ao registrar service worker:", erro));
  });
}

// menu mobile
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => menu.classList.toggle('aberto'));
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('aberto'));
  });
}

// busca simples: leva para a página cujo nome bate com o termo digitado
const paginas = {
  'sobre': 'sobre.html',
  'curso': 'sobre.html',
  'videoaula': 'videoaulas.html',
  'video': 'videoaulas.html',
  'aula': 'videoaulas.html',
  'exercicio': 'exercicios.html',
  'exercício': 'exercicios.html',
  'simulador': 'simuladores.html',
  'tinkercad': 'simuladores.html',
  'kicad': 'simuladores.html',
  'falstad': 'simuladores.html',
  'proteus': 'simuladores.html',
  'easyeda': 'simuladores.html',
  'autocad': 'simuladores.html',
  'projeto': 'projetos.html',
  'jogo': 'jogos.html',
  'quiz': 'jogos.html',
  'fonte': 'fontes.html',
  'referencia': 'fontes.html',
  'referência': 'fontes.html'
};

const buscaForm = document.getElementById('buscaForm');
if (buscaForm) {
  buscaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const termo = document.getElementById('buscaInput').value.trim().toLowerCase();
    const chaveEncontrada = Object.keys(paginas).find(chave => termo.includes(chave));
    if (chaveEncontrada) {
      window.location.href = paginas[chaveEncontrada];
    } else {
      alert('Não encontrei nada com esse termo. Tente: sobre, videoaula, exercício, simulador, projeto, jogo ou fonte.');
    }
  });
}


// botão "Instalar app"
let eventoInstalacao = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  eventoInstalacao = e;
});

const btnInstalar = document.getElementById('btnInstalar');
if (btnInstalar) {
  btnInstalar.addEventListener('click', async () => {
    if (eventoInstalacao) {
      eventoInstalacao.prompt();
      await eventoInstalacao.userChoice;
      eventoInstalacao = null;
    } else {
      alert('Para instalar: toque nos três pontinhos do navegador e escolha "Instalar app" ou "Adicionar à tela inicial". No iPhone: botão de compartilhar > "Adicionar à Tela de Início".');
    }
  });
}

window.addEventListener('appinstalled', () => {
  if (btnInstalar) btnInstalar.style.display = 'none';
});
