const CACHE_NOME = "eletroeletronica-ifal-v2";
const ARQUIVOS_BASE = [
  "./",
  "index.html",
  "inicio.html",
  "sobre.html",
  "videoaulas.html",
  "exercicios.html",
  "simuladores.html",
  "projetos.html",
  "jogos.html",
  "fontes.html",
  "style.css",
  "script.js",
  "manifest.json",
  "icones/icon-192.png",
  "icones/icon-512.png",
  "imagens/pcb-solda.jpg"
];

self.addEventListener("install", (evento) => {
  evento.waitUntil(
    caches.open(CACHE_NOME).then((cache) =>
      // guarda um por um: se algum arquivo faltar, os outros continuam sendo guardados
      Promise.all(
        ARQUIVOS_BASE.map((arquivo) => cache.add(arquivo).catch(() => null))
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    caches.keys().then((nomes) =>
      Promise.all(nomes.filter((n) => n !== CACHE_NOME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

// tenta a internet primeiro (sempre pega a versão nova); se estiver offline, usa o guardado
self.addEventListener("fetch", (evento) => {
  if (evento.request.method !== "GET") return;
  evento.respondWith(
    fetch(evento.request)
      .then((resposta) => {
        const copia = resposta.clone();
        caches.open(CACHE_NOME).then((cache) => cache.put(evento.request, copia)).catch(() => null);
        return resposta;
      })
      .catch(() => caches.match(evento.request))
  );
});
