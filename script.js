// Lista de clubes do Brasileirão com escudos (GE)
const CLUBES_BRASILEIRAO = [
  { id: 1, nome: "Botafogo", escudo: "./escudos/botafogo.png" },
  { id: 2, nome: "Palmeiras", escudo: "./escudos/palmeiras.png" },
  { id: 3, nome: "Flamengo", escudo: "./escudos/flamengo.png" },
  { id: 4, nome: "Chapecoense", escudo: "./escudos/chapecoense.png" },
  { id: 5, nome: "Internacional", escudo: "./escudos/internacional.png" },
  { id: 6, nome: "São Paulo", escudo: "./escudos/saopaulo.png" },
  { id: 7, nome: "Corinthians", escudo: "./escudos/corinthians.png" },
  { id: 8, nome: "Bahia", escudo: "./escudos/bahia.png" },
  { id: 9, nome: "Cruzeiro", escudo: "./escudos/cruzeiro.png" },
  { id: 10, nome: "Vasco", escudo: "./escudos/vasco.png" },
  { id: 11, nome: "Grêmio", escudo: "./escudos/gremio.png" },
  { id: 12, nome: "Atlético-MG", escudo: "./escudos/atleticomg.png" },
  { id: 13, nome: "Fluminense", escudo: "./escudos/fluminense.png" },
  { id: 14, nome: "Vitória", escudo: "./escudos/vitoria.png" },
  { id: 15, nome: "Athletico-PR", escudo: "./escudos/athleticopr.png" },
  { id: 16, nome: "Santos", escudo: "./escudos/santos.png" },
  { id: 17, nome: "Coritiba", escudo: "./escudos/coritiba.png" },
  { id: 18, nome: "Remo", escudo: "./escudos/remo.png" },
  { id: 19, nome: "Mirassol", escudo: "./escudos/mirassol.png" },
  { id: 20, nome: "RB Bragantino", escudo: "./escudos/bragantino.png" },
];

const CLUBES_EUROPA = [
  { id: 1, nome: "Manchester United", escudo: "./escudos/manunited.png" },
  { id: 2, nome: "Real Madrid", escudo: "./escudos/realmadrid.png" },
  { id: 3, nome: "Barcelona", escudo: "./escudos/barcelona.png" },
  { id: 4, nome: "Bayern Munich", escudo: "./escudos/bayern.png" },
  { id: 5, nome: "Liverpool", escudo: "./escudos/liverpool.png" },
  { id: 6, nome: "Juventus", escudo: "./escudos/juventus.png" },
  { id: 7, nome: "Chelsea", escudo: "./escudos/chelsea.png" },
  { id: 8, nome: "Arsenal", escudo: "./escudos/arsenal.png" },
  { id: 9, nome: "AC Milan", escudo: "./escudos/acmilan.png" },
  { id: 10, nome: "Inter Milan", escudo: "./escudos/intermilan.png" },
  { id: 11, nome: "Manchester City", escudo: "./escudos/mancity.png" },
  { id: 12, nome: "Paris Saint-Germain", escudo: "./escudos/psg.png" },
  { id: 13, nome: "Tottenham Hotspur", escudo: "./escudos/tottenham.png" },
  { id: 14, nome: "Borussia Dortmund", escudo: "./escudos/dortmund.png" },
  { id: 15, nome: "Atletico Madrid", escudo: "./escudos/atleticomadrid.png" },
  { id: 16, nome: "Ajax", escudo: "./escudos/ajax.png" },
  { id: 17, nome: "Sevilla", escudo: "./escudos/sevilla.png" },
  { id: 18, nome: "Napoli", escudo: "./escudos/napoli.png" },
  { id: 19, nome: "Lyon", escudo: "./escudos/lyon.png" },
  { id: 20, nome: "Bayern Leverkusen", escudo: "./escudos/leverkusen.png" },
];

const SELECOES = [
  { id: 1, nome: "Brasil", escudo: "./escudos/selecoes/brasil.png" },
  { id: 2, nome: "Argentina", escudo: "./escudos/selecoes/argentina.png" },
  { id: 3, nome: "Alemanha", escudo: "./escudos/selecoes/alemanha.png" },
  { id: 4, nome: "França", escudo: "./escudos/selecoes/franca.png" },
  { id: 5, nome: "Itália", escudo: "./escudos/selecoes/italia.png" },
  { id: 6, nome: "Espanha", escudo: "./escudos/selecoes/espanha.png" },
  { id: 7, nome: "Inglaterra", escudo: "./escudos/selecoes/inglaterra.png" },
  { id: 8, nome: "Uruguai", escudo: "./escudos/selecoes/uruguai.png" },
  { id: 9, nome: "Portugal", escudo: "./escudos/selecoes/portugal.png" },
  { id: 10, nome: "Holanda", escudo: "./escudos/selecoes/holanda.png" },

  { id: 11, nome: "Bélgica", escudo: "./escudos/selecoes/belgica.png" },
  { id: 12, nome: "Croácia", escudo: "./escudos/selecoes/croacia.png" },
  { id: 13, nome: "México", escudo: "./escudos/selecoes/mexico.png" },
  { id: 14, nome: "Estados Unidos", escudo: "./escudos/selecoes/eua.png" },
  { id: 15, nome: "Japão", escudo: "./escudos/selecoes/japao.png" },
  {
    id: 16,
    nome: "Coreia do Sul",
    escudo: "./escudos/selecoes/coreiadosul.png",
  },
  { id: 17, nome: "Marrocos", escudo: "./escudos/selecoes/marrocos.png" },
  { id: 18, nome: "Senegal", escudo: "./escudos/selecoes/senegal.png" },
  { id: 19, nome: "Camarões", escudo: "./escudos/selecoes/camaroes.png" },
  { id: 20, nome: "Nigéria", escudo: "./escudos/selecoes/nigeria.png" },

  { id: 21, nome: "Gana", escudo: "./escudos/selecoes/gana.png" },
  { id: 22, nome: "Egito", escudo: "./escudos/selecoes/egito.png" },
  {
    id: 25,
    nome: "Costa do Marfim",
    escudo: "./escudos/selecoes/costadomarfim.png",
  },

  { id: 26, nome: "Chile", escudo: "./escudos/selecoes/chile.png" },
  { id: 27, nome: "Colômbia", escudo: "./escudos/selecoes/colombia.png" },
  { id: 28, nome: "Peru", escudo: "./escudos/selecoes/peru.png" },
  { id: 29, nome: "Equador", escudo: "./escudos/selecoes/equador.png" },
  { id: 30, nome: "Paraguai", escudo: "./escudos/selecoes/paraguai.png" },

  { id: 31, nome: "Dinamarca", escudo: "./escudos/selecoes/dinamarca.png" },
  { id: 32, nome: "Suécia", escudo: "./escudos/selecoes/suecia.png" },
  { id: 33, nome: "Suíça", escudo: "./escudos/selecoes/suica.png" },
  { id: 34, nome: "Polônia", escudo: "./escudos/selecoes/polonia.png" },
  { id: 35, nome: "Noruega", escudo: "./escudos/selecoes/noruega.png" },
  {
    id: 36,
    nome: "República Tcheca",
    escudo: "./escudos/selecoes/republicatcheca.png",
  },
  { id: 38, nome: "Hungria", escudo: "./escudos/selecoes/hungria.png" },
  { id: 39, nome: "Escócia", escudo: "./escudos/selecoes/escocia.png" },
  { id: 40, nome: "País de Gales", escudo: "./escudos/selecoes/gales.png" },

  { id: 41, nome: "Irã", escudo: "./escudos/selecoes/ira.png" },
  {
    id: 42,
    nome: "Arábia Saudita",
    escudo: "./escudos/selecoes/arabiasaudita.png",
  },
  { id: 43, nome: "Austrália", escudo: "./escudos/selecoes/australia.png" },

  { id: 45, nome: "Canadá", escudo: "./escudos/selecoes/canada.png" },
  { id: 47, nome: "Turquia", escudo: "./escudos/selecoes/turquia.png" },
  { id: 48, nome: "Rússia", escudo: "./escudos/selecoes/russia.png" },
  { id: 49, nome: "Ucrânia", escudo: "./escudos/selecoes/ucrania.png" },
  { id: 50, nome: "China", escudo: "./escudos/selecoes/china.png" },
];

// Dados do campeonato armazenados no localStorage

let dados = JSON.parse(localStorage.getItem("csc_fc_v2")) || {
  jogadores: [], // Formato: {nome, clube, escudo}
  rodadas: [],
  placares: {},
  ativo: false,
  config: { idaEVolta: false },
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// --- FUNÇÕES DE SETUP ---
function popularSelect() {
  const select = document.getElementById("clubSelect");
  const tipo = document.getElementById("tipoCampeonato").value;
  if (!select) return;

  select.innerHTML = '<option value="">SELECIONE UMA EQUIPE</option>';

  let listaBase = [];
  // Define qual lista usar com base na seleção
  if (tipo === "BRASILEIRAO") {
    listaBase = CLUBES_BRASILEIRAO;
  } else if (tipo === "CHAMPIONS") {
    listaBase = CLUBES_EUROPA;
  } else if (tipo === "SELECOES") {
    listaBase = SELECOES;
  }

  if (!listaBase || listaBase.length === 0) return;

  // Ordena por nome (A-Z)
  const clubesOrdenados = [...listaBase].sort((a, b) =>
    a.nome.localeCompare(b.nome)
  );

  clubesOrdenados.forEach((c) => {
    select.innerHTML += `<option value="${c.nome}|${c.escudo}">${c.nome}</option>`;
  });
}

function addJogador() {
  const inputNome = document.getElementById("playerInput");
  const selectClube = document.getElementById("clubSelect");
  const selectTipo = document.getElementById("tipoCampeonato"); // Captura o seletor de tipo

  if (!inputNome.value || !selectClube.value)
    return alert("Preencha nome e clube!");

  // TRAVA: Bloqueia a troca de campeonato após adicionar o primeiro jogador
  if (dados.jogadores.length >= 0) {
    selectTipo.disabled = true;
    selectTipo.style.opacity = "0.5";
    selectTipo.style.cursor = "not-allowed";
  }

  const [clube, escudo] = selectClube.value.split("|");

  // Validação: Proibir o mesmo clube duas vezes
  const clubeJaEscolhido = dados.jogadores.some((j) => j.clube === clube);
  if (clubeJaEscolhido) {
    return alert(`O clube ${clube} já foi selecionado por outro jogador!`);
  }

  dados.jogadores.push({
    nome: inputNome.value.trim().toUpperCase(),
    clube: clube,
    escudo: escudo,
  });

  inputNome.value = "";
  selectClube.value = "";
  salvar();

  inputNome.focus();
}

function irParaTabela() {
  const tabela = document.getElementById("tabelaParaImagem");
  if (tabela) {
    tabela.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function gerarCampeonato() {
  if (dados.jogadores.length < 2)
    return alert("Adicione pelo menos 2 jogadores.");

  const idaEVolta = document.getElementById("idaEVolta").checked;
  dados.config.idaEVolta = idaEVolta;

  // --- MELHORIA 1: Embaralhar a lista de participantes antes de começar ---
  // Isso evita que o primeiro jogador cadastrado seja sempre o "pivô" fixo
  let participantes = shuffleArray([...dados.jogadores]);

  if (participantes.length % 2 !== 0) {
    participantes.push({ nome: "FOLGA", clube: "FOLGA", escudo: "" });
  }

  const n = participantes.length;
  dados.rodadas = [];
  dados.placares = {};

  // Algoritmo Round Robin
  for (let r = 0; r < n - 1; r++) {
    let jogos = [];
    for (let i = 0; i < n / 2; i++) {
      const casa = participantes[i];
      const fora = participantes[n - 1 - i];

      // --- MELHORIA 2: Alternar mando de campo aleatoriamente ---
      if (Math.random() > 0.5) {
        jogos.push({ casa, fora });
      } else {
        jogos.push({ casa: fora, fora: casa });
      }
    }

    // --- MELHORIA 3: Embaralhar a ordem dos jogos dentro da rodada ---
    // Isso evita que o "Time X" seja sempre o primeiro jogo da lista
    dados.rodadas.push(shuffleArray(jogos));

    participantes.splice(1, 0, participantes.pop());
  }

  // --- MELHORIA 4: Embaralhar a ordem das rodadas ---
  // Assim a "Rodada 1" não é previsível
  dados.rodadas = shuffleArray(dados.rodadas);

  if (idaEVolta) {
    const returno = dados.rodadas.map((rodada) =>
      rodada.map((jogo) => ({ casa: jogo.fora, fora: jogo.casa }))
    );
    // Opcional: Você pode embaralhar a ordem das rodadas do returno também
    dados.rodadas = [...dados.rodadas, ...shuffleArray(returno)];
  }

  dados.ativo = true;
  salvar();
}

// --- LÓGICA DE JOGO ---
function registrarPlacar(id, valor) {
  dados.placares[id] = valor;
  salvar();
}

function salvar() {
  localStorage.setItem("csc_fc_v2", JSON.stringify(dados));
  render();
}

function render() {
  const scrollPos = window.scrollY;
  const searchTerm =
    document.getElementById("searchClub")?.value.toLowerCase() || "";

  // --- RENDERIZAÇÃO DE INSCRITOS ---
  const containerInscritos = document.getElementById("listaJogadores");
  if (containerInscritos) {
    containerInscritos.innerHTML = "";
    containerInscritos.style.display = "flex";
    containerInscritos.style.flexWrap = "wrap";
    containerInscritos.style.gap = "10px";
    containerInscritos.style.marginBottom = "20px";

    dados.jogadores.forEach((j, index) => {
      containerInscritos.innerHTML += `
        <div class="card-inscrito" style="background: var(--bg-body); border: 1px solid var(--border); border-radius: 8px; padding: 10px; display: flex; align-items: center; gap: 12px; min-width: 220px; position: relative;">
          <img src="${j.escudo}" width="35" height="35" style="object-fit: contain;">
          <div>
            <div style="font-weight: bold; font-size: 0.9rem; color: var(--text-main);">${j.nome}</div>
            <div style="font-size: 0.75rem; color: var(--primary);">${j.clube}</div>
          </div>
          <button onclick="removerJogador(${index})" style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); background: none; color: var(--negative); border: none; font-size: 1.2rem; cursor: pointer; padding: 0 5px;">&times;</button>
        </div>
      `;
    });
  }

  if (!dados.ativo) {
    document.getElementById("setupArea").style.display = "block";
    document.getElementById("campeonatoArea").style.display = "none";
    popularSelect();
    return;
  }

  document.getElementById("setupArea").style.display = "none";
  document.getElementById("campeonatoArea").style.display = "block";

  // --- RENDERIZAÇÃO DE RODADAS COM FILTRO ---
  let html = "";
  dados.rodadas.forEach((rodada, ri) => {
    let jogosHtml = "";
    let espectador = "";
    let temJogoVisivel = false;

    rodada.forEach((jogo, ji) => {
      const nomeCasa = jogo.casa.nome.toLowerCase();
      const clubeCasa = jogo.casa.clube.toLowerCase();
      const nomeFora = jogo.fora.nome.toLowerCase();
      const clubeFora = jogo.fora.clube.toLowerCase();

      // Lógica de Filtro
      const matchSearch =
        nomeCasa.includes(searchTerm) ||
        clubeCasa.includes(searchTerm) ||
        nomeFora.includes(searchTerm) ||
        clubeFora.includes(searchTerm);

      if (!matchSearch && searchTerm !== "") return;

      if (jogo.casa.nome === "FOLGA" || jogo.fora.nome === "FOLGA") {
        espectador =
          jogo.casa.nome === "FOLGA" ? jogo.fora.nome : jogo.casa.nome;
        temJogoVisivel = true;
      } else {
        temJogoVisivel = true;
        const keyA = `r${ri}j${ji}a`;
        const keyB = `r${ri}j${ji}b`;
        const valA = dados.placares[keyA] || "";
        const valB = dados.placares[keyB] || "";

        let clA = "",
          clB = "";
        if (valA !== "" && valB !== "") {
          const gA = parseInt(valA);
          const gB = parseInt(valB);
          if (gA > gB) {
            clA = "vitoria";
            clB = "derrota";
          } else if (gB > gA) {
            clB = "vitoria";
            clA = "derrota";
          } else {
            clA = "empate";
            clB = "empate";
          }
        }

        const jogoId = `jogo-${ri}-${ji}`;
        jogosHtml += `
          <div class="jogo-linha" id="${jogoId}">
            <div class="time-container ${clA}" id="${jogoId}-casa" style="text-align:right">
              <img src="${jogo.casa.escudo}" class="escudo">
              <span class="time-label">${jogo.casa.clube}</span>
              <span class="nome-jogador">${jogo.casa.nome}</span>
            </div>
            <div class="placar-input-group">
              <input type="number" value="${valA}" oninput="atualizarPlacarDinamicamente('${ri}', '${ji}', 'a', this.value)">
              <span style="color: var(--border)">x</span>
              <input type="number" value="${valB}" oninput="atualizarPlacarDinamicamente('${ri}', '${ji}', 'b', this.value)">
            </div>
            <div class="time-container ${clB}" id="${jogoId}-fora" style="text-align:left">
              <img src="${jogo.fora.escudo}" class="escudo">
              <span class="time-label">${jogo.fora.clube}</span>
              <span class="nome-jogador">${jogo.fora.nome}</span>
            </div>
          </div>`;
      }
    });

    if (temJogoVisivel) {
      // Localize onde o cabeçalho da rodada é gerado e substitua por este:
      html += `
  <div class="card" id="card-rodada-${ri}">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px">
      <h4 style="color:var(--text-dim); margin:0">RODADA ${ri + 1}</h4>
      <button class="btn-print-rodada" onclick="printRodada(${ri})">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
        </svg>
        Compartilhar
      </button>
    </div>
    ${
      espectador
        ? `<div class="espectador-box"><strong>Espectador:</strong> ${espectador}</div>`
        : ""
    }
    ${jogosHtml}
  </div>`;
    }
  });

  document.getElementById("rodadasHtml").innerHTML =
    html ||
    "<p style='text-align:center; color:var(--text-dim)'>Nenhum jogo encontrado para esta busca.</p>";
  calcularTabela();
  window.scrollTo(0, scrollPos);
}

// Função para remover jogador da lista de inscritos
function removerJogador(index) {
  dados.jogadores.splice(index, 1);
  salvar();
}

// --- CÁLCULO E CLASSIFICAÇÃO ---
function calcularTabela() {
  const s = {};
  dados.jogadores.forEach((j) => {
    s[j.nome] = {
      nome: j.nome,
      clube: j.clube,
      escudo: j.escudo,
      pts: 0,
      j: 0,
      v: 0,
      e: 0,
      d: 0,
      gp: 0,
      gc: 0,
      ultimos: [],
    };
  });

  dados.rodadas.forEach((rodada, ri) => {
    rodada.forEach((jogo, ji) => {
      if (jogo.casa.nome === "FOLGA" || jogo.fora.nome === "FOLGA") return;

      const ga = parseInt(dados.placares[`r${ri}j${ji}a`]);
      const gb = parseInt(dados.placares[`r${ri}j${ji}b`]);

      if (isNaN(ga) || isNaN(gb)) return;

      const pA = s[jogo.casa.nome];
      const pB = s[jogo.fora.nome];

      pA.j++;
      pB.j++;
      pA.gp += ga;
      pA.gc += gb;
      pB.gp += gb;
      pB.gc += ga;

      if (ga > gb) {
        pA.pts += 3;
        pA.v++;
        pA.ultimos.push("v");
        pB.d++;
        pB.ultimos.push("d");
      } else if (gb > ga) {
        pB.pts += 3;
        pB.v++;
        pB.ultimos.push("v");
        pA.d++;
        pA.ultimos.push("d");
      } else {
        pA.pts += 1;
        pA.e++;
        pA.ultimos.push("e");
        pB.pts += 1;
        pB.e++;
        pB.ultimos.push("e");
      }
    });
  });

  const ranking = Object.values(s).sort(
    (a, b) => b.pts - a.pts || b.gp - b.gc - (a.gp - a.gc) || b.gp - a.gp
  );

  // Verifica se o campeonato acabou para mostrar campeão
  const totalJogosEsperados =
    (dados.jogadores.length % 2 === 0
      ? dados.jogadores.length - 1
      : dados.jogadores.length) * (dados.config.idaEVolta ? 2 : 1);
  const campeonatoFinalizado = ranking.every(
    (p) => p.j === totalJogosEsperados
  );

  if (campeonatoFinalizado && ranking.length > 0) {
    exibirCampeao(ranking[0]);
  }

  document.getElementById("corpoTabela").innerHTML = ranking
    .map((t, i) => {
      const sg = t.gp - t.gc;
      const ultimos5 = t.ultimos
        .slice(-5)
        .map((res) => `<span class="forma-ponto ${res}-cor"></span>`)
        .join("");

      let destaque = "";
      if (i === 0) destaque = "👑";
      if (i === ranking.length - 1 && ranking.length > 1) destaque = "👻";

      return `
      <tr>
          <td>${destaque} ${i + 1}º</td>
          <td style="text-align:left">
            <div style="display:flex; align-items:center; gap:8px">
                <img src="${t.escudo}" width="20">
                <div>
                    <div style="font-weight:bold; font-size:0.85rem">${
                      t.clube
                    }</div>
                    <div style="font-size:0.65rem; color:var(--text-dim)">${
                      t.nome
                    }</div>
                </div>
            </div>
          </td>
          <td><strong>${t.pts}</strong></td>
          <td>${t.j}</td>
          <td>${t.v}</td>
          <td>${t.e}</td>
          <td>${t.d}</td>
          <td>${t.gp}</td> <td>${t.gc}</td> <td>${sg}</td>
          <td><div style="display:flex; justify-content:center">${ultimos5}</div></td>
      </tr>`;
    })
    .join("");
}

function exibirCampeao(campeao) {
  const area = document.getElementById("alertaCampeao");
  if (!area) return;
  area.innerHTML = `
        <div class="card" style="border: 2px solid var(--warning); text-align:center; background: rgba(245, 158, 11, 0.1)">
            <h2 style="color: var(--warning)">🏆 CAMPEÃO DEFINIDO 🏆</h2>
            <img src="${campeao.escudo}" width="80" style="margin:10px">
            <h1 style="margin:0">${campeao.clube}</h1>
            <p style="color: var(--text-dim)">Controlado por: ${campeao.nome}</p>
        </div>
    `;
}

// --- UTILITÁRIOS ---
function resetarTudo() {
  if (confirm("⚠️ Resetar campeonato? esta ação é irreversível.")) {
    localStorage.removeItem("csc_fc_v2");
    location.reload();
  }
}

// Função para capturar a tabela como imagem (necessita da lib html2canvas no HTML)
function compartilharTabela() {
  const elemento = document.getElementById("tabelaParaImagem");
  const currentBg = getComputedStyle(document.documentElement).getPropertyValue('--bg-card').trim();
  html2canvas(elemento, { backgroundColor: currentBg, scale: 2 }).then(
    (canvas) => {
      const link = document.createElement("a");
      link.download = "tabela-campeonato.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  );
}

// Função para Exportar os dados do campeonato (Backup)
function exportarJSON() {
  if (dados.jogadores.length === 0) return alert("Não há dados para exportar.");

  const blob = new Blob([JSON.stringify(dados, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `backup_campeonato_${new Date()
    .toLocaleDateString()
    .replace(/\//g, "-")}.json`;
  link.click();

  URL.revokeObjectURL(url);
}

// Função para Importar os dados do campeonato (Restaurar Backup)
function importarJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const conteudo = JSON.parse(e.target.result);

      // Validação básica para garantir que o arquivo é compatível
      if (conteudo.jogadores && conteudo.rodadas) {
        dados = conteudo;
        salvar();
        alert("Campeonato importado com sucesso!");
        location.reload(); // Recarrega para garantir que a interface atualize tudo
      } else {
        alert("Arquivo JSON inválido para este sistema.");
      }
    } catch (err) {
      alert("Erro ao ler o arquivo JSON.");
    }
  };
  reader.readAsText(file);
}

function atualizarPlacarDinamicamente(ri, ji, lado, valor) {
  const key = `r${ri}j${ji}${lado}`;
  dados.placares[key] = valor;

  // Salva no localStorage sem renderizar tudo
  localStorage.setItem("csc_fc_v2", JSON.stringify(dados));

  const valA = dados.placares[`r${ri}j${ji}a`] || "";
  const valB = dados.placares[`r${ri}j${ji}b`] || "";

  const elCasa = document.getElementById(`jogo-${ri}-${ji}-casa`);
  const elFora = document.getElementById(`jogo-${ri}-${ji}-fora`);

  if (elCasa && elFora) {
    // Limpa classes anteriores
    elCasa.classList.remove("vitoria", "derrota", "empate");
    elFora.classList.remove("vitoria", "derrota", "empate");

    if (valA !== "" && valB !== "") {
      const gA = parseInt(valA);
      const gB = parseInt(valB);

      if (gA > gB) {
        elCasa.classList.add("vitoria");
        elFora.classList.add("derrota");
      } else if (gB > gA) {
        elFora.classList.add("vitoria");
        elCasa.classList.add("derrota");
      } else {
        elCasa.classList.add("empate");
        elFora.classList.add("empate");
      }
    }
  }

  // Atualiza apenas a tabela de classificação
  calcularTabela();
}

function printRodada(index) {
  const elemento = document.getElementById(`card-rodada-${index}`);
  const btn = elemento.querySelector(".btn-print-rodada");
  const isLightMode = document.documentElement.classList.contains("light-mode");

  // 1. Preparar para o print
  btn.style.opacity = "0";
  
  // Só aplicamos a correção visual forçada se NÃO estivermos no modo claro
  if (!isLightMode) {
    elemento.classList.add("card-print-fix");
  }

  // Definimos a cor de fundo do canvas baseada no tema atual
  const bgColor = isLightMode ? "#f1f5f9" : "#1e293b";

  html2canvas(elemento, {
    backgroundColor: bgColor,
    scale: 3,
    useCORS: true,
  }).then((canvas) => {
    compartilharImagem(canvas, `Rodada_${index + 1}.png`);
    
    // 2. Restaurar estado original
    btn.style.opacity = "1";
    elemento.classList.remove("card-print-fix");
  });
}

// --- FUNÇÃO VOLTAR AO TOPO ---
window.onscroll = function () {
  mostrarBotaoTopo();
};

function mostrarBotaoTopo() {
  const btn = document.getElementById("btnTopo");
  // Se rolar mais de 300px para baixo, o botão aparece
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Função genérica para compartilhar imagem
async function compartilharImagem(canvas, fileName) {
  try {
    const dataUrl = canvas.toDataURL("image/png");
    const response = await fetch(dataUrl);
    const blob = await response.blob();

    // 1. Lógica para MOBILE (Compartilhamento Nativo)
    if (
      navigator.share &&
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    ) {
      const file = new File([blob], fileName, { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Tabela FC",
          text: "Confira os resultados!",
        });
        return; // Finaliza aqui se for mobile
      }
    }

    // 2. Lógica para PC (Copiar para a Área de Transferência)
    if (navigator.clipboard && window.ClipboardItem) {
      const item = new ClipboardItem({ "image/png": blob });
      await navigator.clipboard.write([item]);

      // Feedback visual para o usuário
      alert(
        "✅ Imagem copiada para a área de transferência! Agora é só dar Ctrl+V no WhatsApp."
      );
    } else {
      // Fallback: Se tudo falhar, baixa a imagem
      const link = document.createElement("a");
      link.download = fileName;
      link.href = dataUrl;
      link.click();
    }
  } catch (err) {
    console.error("Erro ao processar imagem:", err);
    alert("Não foi possível copiar/compartilhar a imagem automaticamente.");
  }
}

// Atualize a sua função compartilharTabela
function compartilharTabela() {
  const elemento = document.getElementById("tabelaParaImagem");
  
  // Captura as cores reais definidas no CSS (seja light ou dark mode)
  const estiloComputado = getComputedStyle(document.documentElement);
  const bgColor = estiloComputado.getPropertyValue('--bg-card').trim();

  html2canvas(elemento, { 
    backgroundColor: bgColor, 
    scale: 2,
    useCORS: true 
  }).then((canvas) => {
    compartilharImagem(canvas, "classificacao_geral.png");
  });
}

// Atualize a sua função printRodada
function printRodada(index) {
  const elemento = document.getElementById(`card-rodada-${index}`);
  const btn = elemento.querySelector(".btn-print-rodada");

  btn.style.opacity = "0";
  elemento.classList.add("card-print-fix");

  html2canvas(elemento, {
    backgroundColor: "#1e293b",
    scale: 3,
    useCORS: true,
  }).then((canvas) => {
    compartilharImagem(canvas, `Rodada_${index + 1}.png`);
    btn.style.opacity = "1";
    elemento.classList.remove("card-print-fix");
  });
}

// Adicionar ao final do script.js
const toggleSwitch = document.querySelector("#checkbox");

// Função que troca o tema
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
  }
}

// Ouvinte de clique
toggleSwitch.addEventListener("change", switchTheme, false);

// Checar preferência salva
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
  document.documentElement.classList.add("light-mode");
  toggleSwitch.checked = true;
}

document.addEventListener("DOMContentLoaded", render);
