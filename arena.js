/* ============================================================
   DADOS (fictícios, simulando uma API)
============================================================ */
const dadosTimes = {
    futebol: [
        { nome: "Palmeiras", j: 14, v: 10, pts: 32, cor: "#0f5f2d" },
        { nome: "Flamengo", j: 14, v: 9, pts: 30, cor: "#a02020" },
        { nome: "Botafogo", j: 14, v: 8, pts: 28, cor: "#161616" },
        { nome: "São Paulo", j: 14, v: 7, pts: 26, cor: "#c00000" },
        { nome: "Corinthians", j: 14, v: 6, pts: 23, cor: "#1c1c1c" },
        { nome: "Grêmio", j: 14, v: 6, pts: 22, cor: "#0033a0" }
    ],
    basquete: [
        { nome: "Flamengo", j: 20, v: 17, pts: 34, cor: "#a02020" },
        { nome: "Franca", j: 20, v: 15, pts: 30, cor: "#003a70" },
        { nome: "Minas", j: 20, v: 13, pts: 27, cor: "#0059b3" },
        { nome: "Pinheiros", j: 20, v: 12, pts: 25, cor: "#146b3a" },
        { nome: "São Paulo FC", j: 20, v: 10, pts: 21, cor: "#c00000" },
        { nome: "Bauru", j: 20, v: 9, pts: 19, cor: "#e0a400" }
    ],
    volei: [
        { nome: "Sesi Bauru", j: 12, v: 11, pts: 32, cor: "#e0a400" },
        { nome: "Itambé Minas", j: 12, v: 10, pts: 29, cor: "#0059b3" },
        { nome: "Praia Clube", j: 12, v: 9, pts: 27, cor: "#146b3a" },
        { nome: "Sesc RJ", j: 12, v: 8, pts: 24, cor: "#c00000" },
        { nome: "Fluminense", j: 12, v: 6, pts: 19, cor: "#5b2d8e" },
        { nome: "Osasco", j: 12, v: 5, pts: 16, cor: "#1c1c1c" }
    ],
    esports: [
        { nome: "LOUD", j: 16, v: 13, pts: 28, cor: "#0d8a4f" },
        { nome: "paiN Gaming", j: 16, v: 12, pts: 26, cor: "#161616" },
        { nome: "FURIA", j: 16, v: 11, pts: 24, cor: "#1c1c1c" },
        { nome: "RED Canids", j: 16, v: 10, pts: 22, cor: "#c00000" },
        { nome: "Vivo Keyd", j: 16, v: 8, pts: 18, cor: "#5b2d8e" },
        { nome: "Fluxo", j: 16, v: 7, pts: 16, cor: "#e0a400" }
    ]
};

const dadosJogos = {
    futebol: [
        { casa: "Palmeiras", fora: "Flamengo", data: "06/07", hora: "16:00", local: "Allianz Parque" },
        { casa: "Corinthians", fora: "São Paulo", data: "07/07", hora: "18:30", local: "Neo Química Arena" },
        { casa: "Grêmio", fora: "Botafogo", data: "09/07", hora: "20:00", local: "Arena do Grêmio" }
    ],
    basquete: [
        { casa: "Franca", fora: "Flamengo", data: "05/07", hora: "19:00", local: "Pedrocão" },
        { casa: "Minas", fora: "Pinheiros", data: "08/07", hora: "20:30", local: "Arena BH" }
    ],
    volei: [
        { casa: "Sesi Bauru", fora: "Praia Clube", data: "06/07", hora: "17:00", local: "Ginásio Panela" },
        { casa: "Itambé Minas", fora: "Sesc RJ", data: "10/07", hora: "19:30", local: "Minas Tênis Clube" }
    ],
    esports: [
        { casa: "LOUD", fora: "paiN Gaming", data: "05/07", hora: "21:00", local: "CBLOL Studio" },
        { casa: "FURIA", fora: "RED Canids", data: "07/07", hora: "20:00", local: "CBLOL Studio" }
    ]
};

const dadosNoticias = [
    { esporte: "futebol", tag: "#LALIGA", titulo: "Real Madrid vence e assume a liderança", resumo: "Gol nos acréscimos garante a virada e a ponta da tabela.", tempo: "HÁ 2H", cor: "#0f5f2d" },
    { esporte: "basquete", tag: "#NBA", titulo: "Lakers garantem vitória emocionante", resumo: "Cesta no último segundo decide o confronto direto.", tempo: "HÁ 4H", cor: "#a84300" },
    { esporte: "volei", tag: "#VÔLEI", titulo: "Brasil anuncia convocados para a Superliga", resumo: "Lista traz retornos importantes e jovens promessas.", tempo: "HÁ 6H", cor: "#004aad" },
    { esporte: "esports", tag: "#CBLOL", titulo: "LOUD vence paiN e assume a ponta do CBLOL", resumo: "Vitória por 2-0 recoloca a LOUD na liderança isolada.", tempo: "HÁ 3H", cor: "#4b0082" },
    { esporte: "futebol", tag: "#BRASILEIRÃO", titulo: "Palmeiras bate recorde de público no Allianz", resumo: "Mais de 40 mil torcedores acompanharam a vitória por 2 a 1.", tempo: "HÁ 8H", cor: "#0f5f2d" },
    { esporte: "basquete", tag: "#NBB", titulo: "Franca vence Flamengo em jogo disputado", resumo: "Time paulista defende a casa e encosta na liderança.", tempo: "HÁ 10H", cor: "#a84300" },
    { esporte: "volei", tag: "#SUPERLIGA", titulo: "Sesi Bauru mantém 100% de aproveitamento", resumo: "Equipe soma a 11ª vitória seguida na competição.", tempo: "HÁ 12H", cor: "#004aad" },
    { esporte: "esports", tag: "#VALORANT", titulo: "FURIA se classifica para playoffs internacionais", resumo: "Time brasileiro garante vaga após campanha invicta.", tempo: "HÁ 1 DIA", cor: "#4b0082" },
    { esporte: "futebol", tag: "#COPA", titulo: "Botafogo avança às quartas de final", resumo: "Gol solitário no segundo tempo garante a classificação.", tempo: "HÁ 1 DIA", cor: "#0f5f2d" },
    { esporte: "basquete", tag: "#NBA", titulo: "Celtics anunciam contratação de reforço", resumo: "Time busca fortalecer o banco para a reta final da temporada.", tempo: "HÁ 1 DIA", cor: "#a84300" },
    { esporte: "volei", tag: "#SELEÇÃO", titulo: "Seleção feminina inicia preparação para o Mundial", resumo: "Comissão técnica define local de treinos e amistosos.", tempo: "HÁ 2 DIAS", cor: "#004aad" },
    { esporte: "esports", tag: "#CS", titulo: "RED Canids estreia com vitória no Major", resumo: "Time brasileiro vence favorito europeu de virada.", tempo: "HÁ 2 DIAS", cor: "#4b0082" }
];

const iconesPorEsporte = {
    futebol: '<circle cx="12" cy="12" r="10" stroke="#F2F0E6" stroke-width="1.5"/><path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15" stroke="#F2F0E6" stroke-width="1"/>',
    basquete: '<circle cx="12" cy="12" r="9" stroke="#F2F0E6" stroke-width="1.5"/><path d="M12 3v18M4 8c4 2 12 2 16 0M4 16c4-2 12-2 16 0" stroke="#F2F0E6" stroke-width="1.3"/>',
    volei: '<rect x="3" y="3" width="18" height="18" rx="2" stroke="#F2F0E6" stroke-width="1.5"/><path d="M3 12h18M12 3v18" stroke="#F2F0E6" stroke-width="1"/>',
    esports: '<rect x="2" y="8" width="20" height="10" rx="5" stroke="#F2F0E6" stroke-width="1.5"/><circle cx="7" cy="13" r="1.4" fill="#F2F0E6"/><circle cx="17" cy="13" r="1.4" fill="#F2F0E6"/>'
};

const nomesEsporte = { futebol: "Futebol", basquete: "Basquete", volei: "Vôlei", esports: "E-Sports" };
const ligaEsporte = { futebol: "BRASILEIRÃO", basquete: "NBB", volei: "SUPERLIGA", esports: "CBLOL" };

/* ============================================================
   ESTADO
============================================================ */
let abaAtiva = "futebol";
let filtroNoticiasAtual = "todos";
let buscaTexto = "";
let noticiasVisiveis = 6;
const PASSO_NOTICIAS = 6;

/* ============================================================
   TOASTS (substitui alert())
============================================================ */
function toast(mensagem, tipo = "sucesso") {
    const container = document.getElementById("toastContainer");
    const el = document.createElement("div");
    el.className = "toast" + (tipo === "erro" ? " erro" : "");
    el.textContent = mensagem;
    container.appendChild(el);

    setTimeout(() => {
        el.style.opacity = "0";
        el.style.transition = "opacity 0.3s";
        setTimeout(() => el.remove(), 300);
    }, 3800);
}

/* ============================================================
   MODAIS DE LOGIN / CADASTRO
============================================================ */
const btnLogin = document.getElementById("btnLogin");
const login = document.getElementById("login");
const cadastro = document.getElementById("cadastro");
const fundo = document.getElementById("fundo");
const abrirCadastro = document.getElementById("abrirCadastro");
const voltarLogin = document.getElementById("voltarLogin");
const btnMenu = document.getElementById("btnMenu");
const menuPrincipal = document.getElementById("menuPrincipal");

btnLogin.addEventListener("click", () => {
    login.style.display = "block";
    fundo.style.display = "block";
});

fundo.addEventListener("click", () => {
    login.style.display = "none";
    cadastro.style.display = "none";
    fundo.style.display = "none";
});

function fecharLogin() {
    login.style.display = "none";
    fundo.style.display = "none";
}

function fecharCadastro() {
    cadastro.style.display = "none";
    fundo.style.display = "none";
}

abrirCadastro.addEventListener("click", () => {
    login.style.display = "none";
    cadastro.style.display = "block";
});

voltarLogin.addEventListener("click", () => {
    cadastro.style.display = "none";
    login.style.display = "block";
});

btnMenu.addEventListener("click", () => {
    menuPrincipal.classList.toggle("aberto");
});

/* ============================================================
   USUÁRIOS E SESSÃO (localStorage)
============================================================ */
function getUsuarios() {
    const dados = localStorage.getItem("usuarios_arena10");
    return dados ? JSON.parse(dados) : [];
}

function salvarUsuarios(usuarios) {
    localStorage.setItem("usuarios_arena10", JSON.stringify(usuarios));
}

function getSessao() {
    const dados = localStorage.getItem("sessao_arena10");
    return dados ? JSON.parse(dados) : null;
}

function salvarSessao(sessao) {
    localStorage.setItem("sessao_arena10", JSON.stringify(sessao));
}

function encerrarSessao() {
    localStorage.removeItem("sessao_arena10");
}

function entrar() {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (!email || !senha) {
        mensagem.style.color = "#D64541";
        mensagem.innerHTML = "Preencha e-mail e senha.";
        return;
    }

    const isAdmin = email === "admin@gmail.com" && senha === "123456";
    const usuarios = getUsuarios();
    const usuarioValido = usuarios.find((u) => u.email === email && u.senha === senha);

    if (isAdmin || usuarioValido) {
        const nome = isAdmin ? "Admin" : usuarioValido.nome;

        mensagem.style.color = "#3EA669";
        mensagem.innerHTML = "Login realizado com sucesso!";

        salvarSessao({ nome, email });
        atualizarNavConta();
        renderFavoritosChips();
        renderTabela(abaAtiva);

        setTimeout(() => {
            login.style.display = "none";
            fundo.style.display = "none";
            mensagem.innerHTML = "";
            document.getElementById("email").value = "";
            document.getElementById("senha").value = "";
        }, 900);

        toast(`Bem-vindo(a) de volta, ${nome}!`);
    } else {
        mensagem.style.color = "#D64541";
        mensagem.innerHTML = "E-mail ou senha incorretos!";
    }
}

function recuperarSenha() {
    const email = prompt("Digite seu e-mail:");
    if (email) {
        toast("Um link de recuperação foi enviado para: " + email);
    }
}

function cadastrar() {
    const nome = document.getElementById("novoNome").value.trim();
    const email = document.getElementById("novoEmail").value.trim();
    const senha = document.getElementById("novaSenha").value;
    const mensagemCadastro = document.getElementById("mensagemCadastro");

    if (!nome || !email || !senha) {
        mensagemCadastro.style.color = "#D64541";
        mensagemCadastro.innerHTML = "Preencha todos os campos.";
        return;
    }

    const usuarios = getUsuarios();

    if (usuarios.some((u) => u.email === email)) {
        mensagemCadastro.style.color = "#D64541";
        mensagemCadastro.innerHTML = "Este e-mail já está cadastrado.";
        return;
    }

    usuarios.push({ nome, email, senha });
    salvarUsuarios(usuarios);

    mensagemCadastro.style.color = "#3EA669";
    mensagemCadastro.innerHTML = "Cadastro realizado com sucesso!";

    document.getElementById("novoNome").value = "";
    document.getElementById("novoEmail").value = "";
    document.getElementById("novaSenha").value = "";

    setTimeout(() => {
        cadastro.style.display = "none";
        login.style.display = "block";
        mensagemCadastro.innerHTML = "";
    }, 1400);

    toast("Conta criada! Agora é só fazer login.");
}

/* ============================================================
   CONTA NA NAV (chip + dropdown)
============================================================ */
const contaUsuario = document.getElementById("contaUsuario");
const chipUsuario = document.getElementById("chipUsuario");
const dropdownConta = document.getElementById("dropdownConta");
const avatarInicial = document.getElementById("avatarInicial");
const nomeUsuarioNav = document.getElementById("nomeUsuarioNav");

function atualizarNavConta() {
    const sessao = getSessao();

    if (sessao) {
        btnLogin.style.display = "none";
        contaUsuario.style.display = "block";
        nomeUsuarioNav.textContent = sessao.nome.split(" ")[0];
        avatarInicial.textContent = sessao.nome.charAt(0).toUpperCase();
    } else {
        btnLogin.style.display = "inline-block";
        contaUsuario.style.display = "none";
        dropdownConta.classList.remove("aberto");
    }
}

chipUsuario.addEventListener("click", () => {
    dropdownConta.classList.toggle("aberto");
});

document.addEventListener("click", (e) => {
    if (!contaUsuario.contains(e.target)) {
        dropdownConta.classList.remove("aberto");
    }
});

document.getElementById("btnSair").addEventListener("click", () => {
    encerrarSessao();
    atualizarNavConta();
    renderFavoritosChips();
    renderTabela(abaAtiva);
    toast("Você saiu da sua conta.");
});

document.getElementById("btnMeusFavoritos").addEventListener("click", () => {
    dropdownConta.classList.remove("aberto");
    document.getElementById("central").scrollIntoView({ behavior: "smooth" });
});

/* ============================================================
   FAVORITOS DE TIME
============================================================ */
function getChaveFavoritos() {
    const sessao = getSessao();
    return "favoritos_arena10_" + (sessao ? sessao.email : "convidado");
}

function getFavoritos() {
    const dados = localStorage.getItem(getChaveFavoritos());
    return dados ? JSON.parse(dados) : [];
}

function salvarFavoritos(lista) {
    localStorage.setItem(getChaveFavoritos(), JSON.stringify(lista));
}

function toggleFavorito(nomeTime) {
    let favoritos = getFavoritos();

    if (favoritos.includes(nomeTime)) {
        favoritos = favoritos.filter((n) => n !== nomeTime);
        toast(nomeTime + " removido dos favoritos.");
    } else {
        favoritos.push(nomeTime);
        toast(nomeTime + " adicionado aos favoritos!");
    }

    salvarFavoritos(favoritos);
    renderTabela(abaAtiva);
    renderFavoritosChips();
}

function renderFavoritosChips() {
    const favoritos = getFavoritos();
    const container = document.getElementById("favoritosChips");

    if (favoritos.length === 0) {
        container.classList.add("vazio");
        container.innerHTML = "";
        return;
    }

    container.classList.remove("vazio");
    container.innerHTML = favoritos
        .map(
            (nome) => `
        <div class="chip-favorito">
            <span>★ ${nome}</span>
            <button onclick="toggleFavorito('${nome.replace(/'/g, "\\'")}')" aria-label="Remover favorito">✕</button>
        </div>`
        )
        .join("");
}

/* ============================================================
   TABS — TABELA E JOGOS POR MODALIDADE
============================================================ */
function renderTabela(esporte) {
    const favoritos = getFavoritos();
    const corpo = document.getElementById("corpoTabela");

    document.getElementById("tituloTabela").textContent = "TABELA — " + ligaEsporte[esporte];

    corpo.innerHTML = dadosTimes[esporte]
        .map((time, i) => {
            const ativo = favoritos.includes(time.nome);
            return `
            <tr>
                <td class="num">${i + 1}</td>
                <td><span class="bolinha-time" style="background:${time.cor}"></span></td>
                <td>
                    <div class="linha-time">${time.nome}</div>
                </td>
                <td class="num">${time.j}</td>
                <td class="num">${time.v}</td>
                <td class="num"><b>${time.pts}</b></td>
                <td class="num">
                    <button class="btn-favorito ${ativo ? "ativo" : ""}" onclick="toggleFavorito('${time.nome.replace(/'/g, "\\'")}')" aria-label="Favoritar ${time.nome}">★</button>
                </td>
            </tr>`;
        })
        .join("");
}

function renderJogos(esporte) {
    document.getElementById("tituloJogos").textContent = "PRÓXIMOS JOGOS — " + nomesEsporte[esporte].toUpperCase();

    document.getElementById("listaJogos").innerHTML = dadosJogos[esporte]
        .map(
            (jogo) => `
        <div class="jogo-item">
            <span class="jogo-times">${jogo.casa} <span style="color:var(--cinza);font-weight:400">vs</span> ${jogo.fora}</span>
            <span class="jogo-info">${jogo.data} · ${jogo.hora}<br>${jogo.local}</span>
        </div>`
        )
        .join("");
}

function trocarAba(esporte) {
    abaAtiva = esporte;

    document.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.classList.toggle("ativa", btn.dataset.esporte === esporte);
    });

    renderTabela(esporte);
    renderJogos(esporte);
}

document.getElementById("tabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    trocarAba(btn.dataset.esporte);
});


document.querySelectorAll(".card .ver-mais").forEach((btn) => {
    btn.addEventListener("click", () => {
        trocarAba(btn.dataset.esporte);
        document.getElementById("central").scrollIntoView({ behavior: "smooth" });
    });
});


function noticiasFiltradas() {
    return dadosNoticias.filter((n) => {
        const passaFiltro = filtroNoticiasAtual === "todos" || n.esporte === filtroNoticiasAtual;
        const textoBusca = (n.titulo + " " + n.resumo + " " + n.tag).toLowerCase();
        const passaBusca = buscaTexto === "" || textoBusca.includes(buscaTexto.toLowerCase());
        return passaFiltro && passaBusca;
    });
}

function renderNoticias() {
    const filtradas = noticiasFiltradas();
    const visiveis = filtradas.slice(0, noticiasVisiveis);
    const grade = document.getElementById("gradeNoticias");
    const semResultados = document.getElementById("semResultados");
    const btnCarregarMais = document.getElementById("btnCarregarMais");

    if (filtradas.length === 0) {
        grade.innerHTML = "";
        semResultados.classList.add("visivel");
        btnCarregarMais.style.display = "none";
        return;
    }

    semResultados.classList.remove("visivel");

    grade.innerHTML = visiveis
        .map(
            (n) => `
        <article class="ingresso">
            <div class="ingresso-foto" style="background:linear-gradient(135deg,${n.cor},#0B1210)">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${iconesPorEsporte[n.esporte]}</svg>
            </div>
            <div class="linha-perfurada"></div>
            <div class="ingresso-corpo">
                <span class="tag">${nomesEsporte[n.esporte]}</span>
                <h3>${n.titulo}</h3>
                <p>${n.resumo}</p>
                <div class="ingresso-rodape">
                    <span>${n.tempo}</span>
                    <span>${n.tag}</span>
                </div>
            </div>
        </article>`
        )
        .join("");

    btnCarregarMais.style.display = noticiasVisiveis < filtradas.length ? "block" : "none";
}

document.getElementById("filtrosNoticias").addEventListener("click", (e) => {
    const btn = e.target.closest(".filtro-btn");
    if (!btn) return;

    document.querySelectorAll(".filtro-btn").forEach((b) => b.classList.remove("ativo"));
    btn.classList.add("ativo");

    filtroNoticiasAtual = btn.dataset.filtro;
    noticiasVisiveis = PASSO_NOTICIAS;
    renderNoticias();
});

document.getElementById("btnCarregarMais").addEventListener("click", () => {
    noticiasVisiveis += PASSO_NOTICIAS;
    renderNoticias();
});


const inputPesquisa = document.getElementById("Pesquisa");

inputPesquisa.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    buscaTexto = inputPesquisa.value.trim();
    noticiasVisiveis = PASSO_NOTICIAS;

    // busca sempre parte de "todas" pra não esconder resultados de outro esporte
    filtroNoticiasAtual = "todos";
    document.querySelectorAll(".filtro-btn").forEach((b) => b.classList.remove("ativo"));
    document.querySelector('.filtro-btn[data-filtro="todos"]').classList.add("ativo");

    renderNoticias();
    document.getElementById("noticias").scrollIntoView({ behavior: "smooth" });

    if (noticiasFiltradas().length === 0) {
        toast('Nenhum resultado para "' + buscaTexto + '".', "erro");
    }
});


document.getElementById("formNewsletter").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("emailNewsletter");
    const email = input.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        toast("Digite um e-mail válido para continuar.", "erro");
        return;
    }

    toast("Inscrição confirmada! Resumo diário a caminho de " + email);
    input.value = "";
});


document.getElementById("formContato").addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("contatoNome");
    const email = document.getElementById("contatoEmail");
    const mensagem = document.getElementById("contatoMensagem");

    const erroNome = document.getElementById("erroContatoNome");
    const erroEmail = document.getElementById("erroContatoEmail");
    const erroMensagem = document.getElementById("erroContatoMensagem");

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valido = true;

    if (nome.value.trim().length < 2) {
        erroNome.classList.add("visivel");
        valido = false;
    } else {
        erroNome.classList.remove("visivel");
    }

    if (!regexEmail.test(email.value.trim())) {
        erroEmail.classList.add("visivel");
        valido = false;
    } else {
        erroEmail.classList.remove("visivel");
    }

    if (mensagem.value.trim().length < 5) {
        erroMensagem.classList.add("visivel");
        valido = false;
    } else {
        erroMensagem.classList.remove("visivel");
    }

    if (!valido) {
        toast("Confira os campos destacados.", "erro");
        return;
    }

    toast("Mensagem enviada! A redação vai te responder em breve.");
    nome.value = "";
    email.value = "";
    mensagem.value = "";
});


function animarPlacar() {
    const golsA = document.getElementById("golsA");
    const golsB = document.getElementById("golsB");
    const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduzMovimento) {
        golsA.textContent = "2";
        golsB.textContent = "1";
        return;
    }

    const metaA = 2;
    const metaB = 1;
    let atualA = 0;
    let atualB = 0;

    const intervalo = setInterval(() => {
        if (atualA < metaA) atualA++;
        if (atualB < metaB) atualB++;

        golsA.textContent = atualA;
        golsB.textContent = atualB;

        if (atualA >= metaA && atualB >= metaB) {
            clearInterval(intervalo);
        }
    }, 550);
}


const topoBtn = document.getElementById("topoBtn");

window.addEventListener("scroll", () => {
    topoBtn.classList.toggle("visivel", window.scrollY > 600);
});

topoBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


window.addEventListener("DOMContentLoaded", () => {
    animarPlacar();
    atualizarNavConta();
    renderFavoritosChips();
    renderTabela(abaAtiva);
    renderJogos(abaAtiva);
    renderNoticias();
});