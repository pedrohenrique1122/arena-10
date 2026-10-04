let times = [
{
    nome: "Flamengo",
    pais: "Brasil",
    descricao: "Clube de maior torcida do Brasil.",
    escudo: "img/futebol/escudo-flamengo.png",
    fundacao: 1895,
    estadio: "Maracanã",
    tecnico: "Leonardo Jardim",
    torcida: "45M",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    capacidade: "78.838",
    cores: "Vermelho e Preto",
    titulos: "Libertadores, Brasileirão, Copa do Brasil",

   elenco: [
    // GOLEIROS
    { numero: 1, nome: "Agustín Rossi", posicao: "GOL" },
    { numero: 42, nome: "Andrew", posicao: "GOL" },
    { numero: 49, nome: "Dyogo Alves", posicao: "GOL" },
    { numero: 12, nome: "Leonardo Nannetti", posicao: "GOL" },

    // DEFENSORES
    { numero: 3, nome: "Léo Ortiz", posicao: "ZAG" },
    { numero: 4, nome: "Léo Pereira", posicao: "ZAG" },
    { numero: 5, nome: "Vitão", posicao: "ZAG" },
    { numero: 13, nome: "Danilo", posicao: "ZAG" },
    { numero: 26, nome: "Alex Sandro", posicao: "LE" },
    { numero: 33, nome: "Emerson Royal", posicao: "LD" },
    { numero: 2, nome: "Guillermo Varela", posicao: "LD" },
    { numero: 6, nome: "Ayrton Lucas", posicao: "LE" },
    { numero: 34, nome: "João Victor", posicao: "ZAG" },
    { numero: 37, nome: "Daniel Sales", posicao: "LD" },

    // MEIO-CAMPO
    { numero: 5, nome: "Erick Pulgar", posicao: "VOL" },
    { numero: 8, nome: "Gerson", posicao: "VOL" },
    { numero: 20, nome: "Allan", posicao: "VOL" },
    { numero: 10, nome: "Arrascaeta", posicao: "MEI" },
    { numero: 7, nome: "Lucas Paquetá", posicao: "MEI" },
    { numero: 17, nome: "Luiz Araújo", posicao: "MEI" },
    { numero: 18, nome: "Jorge Carrascal", posicao: "MEI" },
    { numero: 11, nome: "Saúl Ñíguez", posicao: "VOL" },
    { numero: 15, nome: "Samuel Lino", posicao: "ATA" },
    { numero: 16, nome: "Gonzalo Plata", posicao: "ATA" },
    { numero: 19, nome: "Douglas Costa Telles", posicao: "ATA" },
    { numero: 21, nome: "Lorran", posicao: "MEI" },
    { numero: 22, nome: "Evertton Araújo", posicao: "VOL" },
    { numero: 23, nome: "Pablo Lucio", posicao: "MEI" },
    { numero: 24, nome: "Caio Joshua", posicao: "MEI" },
    { numero: 25, nome: "Luiz Felipe", posicao: "MEI" },
    { numero: 27, nome: "Caio Garcia", posicao: "MEI" },

    // ATAQUE
    { numero: 9, nome: "Pedro", posicao: "ATA" },
    { numero: 11, nome: "Bruno Henrique", posicao: "ATA" },
    { numero: 7, nome: "Everton Cebolinha", posicao: "ATA" },
    { numero: 14, nome: "Wallace Yan", posicao: "ATA" },
    { numero: 19, nome: "João Camargo", posicao: "ATA" },
    { numero: 20, nome: "Alan Santos", posicao: "ATA" }
],
    ultimosJogos: [
        ["V", "Flamengo x River Plate", "2x2"],
        ["V", "Flamengo x Coritiba", "3x0"],
["V", "Flamengo x Cusco", "3x0"],
["D", "Flamengo x Palmeiras", "0x3"],
["V", "Flamengo x Estudiantes", "1x0"]
    ],

    proximosJogos: [
        ["Lausanne", "Amistoso" ] ,
        ["Benfica", "Amistoso"],
        ["Chapecoense", "Brasileirao"]
    ],

    conquistas: ["Libertadores", "Brasileirão", "Copa do Brasil"],

    noticias: [
        "Flamengo vence clássico no Maracanã",
        "Novo reforço chega ao clube"
    ]
},

{
    nome: "Palmeiras",
    pais: "Brasil",
    descricao: "Atual campeão continental em destaque.",
    escudo: "img/futebol/escudo-palmeiras-1.png",
    fundacao: 1914,
    estadio: "Allianz Parque",
    tecnico: "Abel Ferreira",
    torcida: "30M",
    cidade: "São Paulo",
    estado: "SP",
    capacidade: "43.713",
    cores: "Verde e Branco",
    titulos: "Libertadores, Brasileirão",

   elenco: [
    // GOLEIROS
    { numero: 1, nome: "Carlos Miguel", posicao: "GOL" },
    { numero: 14, nome: "Marcelo Lomba", posicao: "GOL" },

    // DEFENSORES
    { numero: 3, nome: "Bruno Fuchs", posicao: "ZAG" },
    { numero: 4, nome: "Agustín Giay", posicao: "LD" },
    { numero: 6, nome: "Jefté", posicao: "LE" },
    { numero: 15, nome: "Gustavo Gómez", posicao: "ZAG" },
    { numero: 22, nome: "Joaquín Piquerez", posicao: "LE" },
    { numero: 26, nome: "Murilo", posicao: "ZAG" },
    { numero: 43, nome: "Benedetti", posicao: "ZAG" },

    // MEIO-CAMPO
    { numero: 8, nome: "Andreas Pereira", posicao: "MEI" },
    { numero: 17, nome: "Marlon Freitas", posicao: "VOL" },
    { numero: 18, nome: "Maurício", posicao: "MEI" },
    { numero: 30, nome: "Lucas Evangelista", posicao: "VOL" },
    { numero: 32, nome: "Emiliano Martínez", posicao: "VOL" },
    { numero: 40, nome: "Allan", posicao: "VOL" },

    // ATACANTES
    { numero: 7, nome: "Felipe Anderson", posicao: "ATA" },
    { numero: 9, nome: "Vitor Roque", posicao: "ATA" },
    { numero: 10, nome: "Paulinho", posicao: "ATA" },
    { numero: 11, nome: "Jhon Arias", posicao: "ATA" },
    { numero: 19, nome: "Ramón Sosa", posicao: "ATA" },
    { numero: 31, nome: "Luighi", posicao: "ATA" },
    { numero: 42, nome: "Flaco López", posicao: "ATA" }
],

    ultimosJogos: [
        ["V", "Palmeiras x Chapecoense", "1x0"],
        ["V", "Palmeiras x Junior Barranquilla", "4x1"],
        ["V", "Palmeiras x Flamengo", "3x0"],
        ["D", "Palmeiras x Cerro Porteno", "0x1"],
        ["E", "Palmeiras x Cruzeiro", "1x1"]
    ],

    proximosJogos: [
        ["Coritiba", "Brasileirão"],
        ["Atletico Mineiro", "Brasileirão"]
         ["Vitoria", "Brasileirão"]
    ],

    conquistas: ["Libertadores", "Brasileirão"],

    noticias: [
        "Palmeiras mantém liderança",
        "Abel elogia elenco"
    ]
},

{
    nome: "Corinthians",
    pais: "Brasil",
    descricao: "Um dos clubes mais populares do país.",
    escudo: "img/futebol/corinthians.webp",
    fundacao: 1910,
    estadio: "Neo Química Arena",
    tecnico: "Fernando Diniz",
    torcida: "35M",
    cidade: "São Paulo",
    estado: "SP",
    capacidade: "49.205",
    cores: "Preto e Branco",
    titulos: "Mundial, Brasileirão",

    elenco: [
    // GOLEIROS
    { numero: 1, nome: "Hugo Souza", posicao: "GOL" },
    { numero: 32, nome: "Matheus Donelli", posicao: "GOL" },
    { numero: 40, nome: "Felipe Longo", posicao: "GOL" },
    { numero: 51, nome: "Kauê", posicao: "GOL" },

    // DEFENSORES
    { numero: 2, nome: "Matheuzinho", posicao: "LD" },
    { numero: 21, nome: "Matheus Bidu", posicao: "LE" },
    { numero: 13, nome: "Gustavo Henrique", posicao: "ZAG" },
    { numero: 3, nome: "Gabriel Paulista", posicao: "ZAG" },
    { numero: 5, nome: "André Ramalho", posicao: "ZAG" },
    { numero: 26, nome: "Fabrizio Angileri", posicao: "LE" },
    { numero: 4, nome: "João Pedro Tchoca", posicao: "ZAG" },
    { numero: 46, nome: "Hugo", posicao: "LE" },
    { numero: 20, nome: "Pedro Milans", posicao: "LD" },
    { numero: 41, nome: "Renato Santos", posicao: "ZAG" },

    // MEIO-CAMPISTAS
    { numero: 8, nome: "Rodrigo Garro", posicao: "MEI" },
    { numero: 19, nome: "André Carrillo", posicao: "VOL" },
    { numero: 7, nome: "Breno Bidon", posicao: "VOL" },
    { numero: 14, nome: "Raniele", posicao: "VOL" },
    { numero: 29, nome: "Allan", posicao: "VOL" },
    { numero: 23, nome: "Matheus Pereira", posicao: "VOL" },
    { numero: 49, nome: "André Luiz", posicao: "MEI" },
    { numero: 35, nome: "Charles", posicao: "VOL" },
    { numero: 52, nome: "Zakaria Labyad", posicao: "MEI" },
    { numero: 31, nome: "Kayke Ferrari", posicao: "ATA" },
    { numero: 61, nome: "Dieguinho", posicao: "ATA" },
    { numero: 80, nome: "Alex Santana", posicao: "VOL" },
    { numero: 54, nome: "Luiz Gustavo Bahia", posicao: "MEI" },

    // ATACANTES
    { numero: 10, nome: "Memphis Depay", posicao: "ATA" },
    { numero: 9, nome: "Yuri Alberto", posicao: "ATA" },
    { numero: 77, nome: "Jesse Lingard", posicao: "ATA" },
    { numero: 18, nome: "Pedro Raul", posicao: "ATA" },
    { numero: 56, nome: "Gui Negão", posicao: "ATA" },
    { numero: 37, nome: "Kaio César", posicao: "ATA" },
    { numero: 11, nome: "Vitinho", posicao: "ATA" },
    { numero: 0, nome: "Luizinho", posicao: "ATA" }
],
    ultimosJogos: [
        ["E", "Corinthians x São Paulo", "1x1"]
    ],

    proximosJogos: [
        ["Flamengo", "Brasileirão"]
    ],

    conquistas: ["Mundial", "Brasileirão"],

    noticias: [
        "Corinthians empata clássico"
    ]
},

{
    nome: "São Paulo",
    pais: "Brasil",
    descricao: "Tricolor paulista com tradição internacional.",
    escudo: "img/futebol/saopaulo.png",
    fundacao: 1930,
    estadio: "Morumbi",
    tecnico: "Dorival Júnior",
    torcida: "20M",
    cidade: "São Paulo",
    estado: "SP",
    capacidade: "66.795",
    cores: "Vermelho, Preto e Branco",
    titulos: "Libertadores, Mundial",

    elenco: [
    // GOLEIROS
    { numero: 23, nome: "Rafael", posicao: "GOL" },
    { numero: 50, nome: "Young", posicao: "GOL" },
    { numero: 31, nome: "Carlos Coronel", posicao: "GOL" },
    { numero: 52, nome: "Felipe Gabriel Preis", posicao: "GOL" },

    // DEFENSORES
    { numero: 5, nome: "Robert Arboleda", posicao: "ZAG" },
    { numero: 18, nome: "Wendell", posicao: "LE" },
    { numero: 28, nome: "Alan Javier Franco", posicao: "ZAG" },
    { numero: 13, nome: "Enzo Díaz", posicao: "LE" },
    { numero: 2, nome: "Rafael Tolói", posicao: "ZAG" },
    { numero: 35, nome: "Sabino", posicao: "ZAG" },
    { numero: 42, nome: "Maik", posicao: "LD" },
    { numero: 15, nome: "Moreira", posicao: "LD" },
    { numero: 19, nome: "Lucas Ramon", posicao: "LD" },
    { numero: 44, nome: "Matheus Belém", posicao: "ZAG" },
    { numero: 56, nome: "Nicolas Bosshardt", posicao: "LE" },

    // MEIO-CAMPISTAS
    { numero: 11, nome: "Ferreirinha", posicao: "ATA" },
    { numero: 16, nome: "Damián Bobadilla", posicao: "VOL" },
    { numero: 37, nome: "Artur", posicao: "ATA" },
    { numero: 8, nome: "Marcos Antônio", posicao: "VOL" },
    { numero: 8, nome: "Cauly", posicao: "MEI" },
    { numero: 29, nome: "Pablo Maia", posicao: "VOL" },
    { numero: 33, nome: "Luan Santos", posicao: "VOL" },
    { numero: 21, nome: "Cédric Soares", posicao: "LD" },
    { numero: 45, nome: "Lucca", posicao: "MEI" },
    { numero: 94, nome: "Danielzinho", posicao: "VOL" },
    { numero: 30, nome: "Felipe Negrucci", posicao: "MEI" },
    { numero: 46, nome: "Pedro Ferreira", posicao: "ATA" },
    { numero: 34, nome: "Tetê", posicao: "ATA" },
    { numero: 0, nome: "Victor Sá", posicao: "ATA" },
    { numero: 48, nome: "Djhordney Ferreira", posicao: "MEI" },
    { numero: 38, nome: "Hugo Leonardo", posicao: "MEI" },

    // ATACANTES
    { numero: 7, nome: "Lucas Moura", posicao: "ATA" },
    { numero: 9, nome: "Jonathan Calleri", posicao: "ATA" },
    { numero: 10, nome: "Luciano", posicao: "ATA" },
    { numero: 14, nome: "Gonzalo Tapia", posicao: "ATA" },
    { numero: 49, nome: "Ryan Francisco", posicao: "ATA" },
    { numero: 17, nome: "André Silva", posicao: "ATA" },
    { numero: 39, nome: "Paulo Sérgio", posicao: "ATA" }
],

    ultimosJogos: [
        ["V", "São Paulo x Santos", "2x0"]
    ],

    proximosJogos: [
        ["Palmeiras", "Brasileirão"]
    ],

    conquistas: ["Mundial", "Libertadores"],

    noticias: [
        "São Paulo vence clássico"
    ]
},

{
    nome: "Santos",
    pais: "Brasil",
    descricao: "Clube histórico",
    escudo: "img/futebol/Santos_Logo.png",
    fundacao: 1912,
    estadio: "Vila Belmiro",
    tecnico: "Cuca",
    torcida: "10M",
    cidade: "Santos",
    estado: "SP",
    capacidade: "16.080",
    cores: "Branco e Preto",
    titulos: "Libertadores, Brasileirão",

   elenco: [
    // GOLEIROS
    { numero: 77, nome: "Gabriel Brazão", posicao: "GOL" },
    { numero: 1, nome: "João Paulo", posicao: "GOL" },
    { numero: 1, nome: "Diogenes", posicao: "GOL" },
    { numero: 67, nome: "Rodrigo Falcão", posicao: "GOL" },

    // DEFENSORES
    { numero: 12, nome: "Mayke", posicao: "LD" },
    { numero: 18, nome: "Igor Vinícius", posicao: "LD" },
    { numero: 4, nome: "Lucas Veríssimo", posicao: "ZAG" },
    { numero: 2, nome: "Zé Ivaldo", posicao: "ZAG" },
    { numero: 31, nome: "Gonzalo Escobar", posicao: "LE" },
    { numero: 14, nome: "Luan Peres", posicao: "ZAG" },
    { numero: 3, nome: "Vinicius Rodrigues Lira", posicao: "LE" },
    { numero: 98, nome: "Adonis Frías", posicao: "ZAG" },
    { numero: 4, nome: "Alexis Duarte", posicao: "ZAG" },
    { numero: 2, nome: "Alex Nascimento", posicao: "ZAG" },
    { numero: 23, nome: "João Paulo Ananias", posicao: "ZAG" },
    { numero: 42, nome: "João Alencar", posicao: "ZAG" },

    // MEIO-CAMPISTAS
    { numero: 30, nome: "Miguelito", posicao: "ATA" },
    { numero: 32, nome: "Benjamín Rollheiser", posicao: "MEI" },
    { numero: 22, nome: "Álvaro Barreal", posicao: "ATA" },
    { numero: 25, nome: "Gabriel Menino", posicao: "VOL" },
    { numero: 8, nome: "Tomás Rincón", posicao: "VOL" },
    { numero: 6, nome: "Zé Rafael", posicao: "VOL" },
    { numero: 49, nome: "Gabriel Bontempo", posicao: "MEI" },
    { numero: 15, nome: "Willian Arão", posicao: "VOL" },
    { numero: 16, nome: "Thaciano", posicao: "ATA" },
    { numero: 17, nome: "Gustavo Caballero", posicao: "ATA" },
    { numero: 5, nome: "João Schmidt", posicao: "VOL" },
    { numero: 47, nome: "Mateus Xavier", posicao: "MEI" },
    { numero: 28, nome: "Christian Oliva", posicao: "VOL" },
    { numero: 48, nome: "Gustavo Henrique Pereira", posicao: "VOL" },
    { numero: 47, nome: "Enzo Duscov Boer", posicao: "ATA" },

    // ATACANTES
    { numero: 10, nome: "Neymar", posicao: "ATA" },
    { numero: 9, nome: "Gabriel Barbosa", posicao: "ATA" },
    { numero: 7, nome: "Robinho Júnior", posicao: "ATA" },
    { numero: 11, nome: "Rony", posicao: "ATA" },
    { numero: 21, nome: "Billal Brahimi", posicao: "ATA" },
    { numero: 19, nome: "Lautaro Díaz", posicao: "ATA" },
    { numero: 21, nome: "Moisés", posicao: "ATA" }
],
    ultimosJogos: [
        ["D", "Santos x Palmeiras", "1x3"]
    ],

    proximosJogos: [
        ["Corinthians", "Brasileirão"]
    ],

    conquistas: ["Libertadores", "Brasileirão"],

    noticias: [
        "Santos busca recuperação"
    ]
},

{
    nome: "Fluminense",
    pais: "Brasil",
    descricao: "Tricolor carioca tradicional.",
    escudo: "img/futebol/Fluminense.webp",
    fundacao: 1902,
    estadio: "Maracanã",
    tecnico: "Luis Zubeldia",
    torcida: "7M",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    capacidade: "78.838",
    cores: "Verde, Branco e Grená",
    titulos: ["Libertadores", "Brasileirão"],

   elenco: [
    // GOLEIROS
    { numero: 1, nome: "Fábio", posicao: "GOL" },
    { numero: 27, nome: "Marcelo Pitaluga", posicao: "GOL" },
    { numero: 98, nome: "Vitor Eudes", posicao: "GOL" },

    // DEFENSORES
    { numero: 0, nome: "Thiago Silva", posicao: "ZAG" },
    { numero: 13, nome: "Guilherme Arana", posicao: "LE" },
    { numero: 4, nome: "Ignácio", posicao: "ZAG" },
    { numero: 2, nome: "Samuel Xavier", posicao: "LD" },
    { numero: 6, nome: "Renê", posicao: "LE" },
    { numero: 22, nome: "Juan Pablo Freytes", posicao: "ZAG" },
    { numero: 23, nome: "Guga", posicao: "LD" },
    { numero: 29, nome: "Julián Millán", posicao: "ZAG" },
    { numero: 21, nome: "Igor Rabello", posicao: "ZAG" },
    { numero: 3, nome: "Jemmes", posicao: "ZAG" },
    { numero: 46, nome: "Júlio Fidelis", posicao: "LD" },
    { numero: 40, nome: "Davi Duarte", posicao: "ZAG" },

    // MEIO-CAMPISTAS
    { numero: 7, nome: "Yeferson Soteldo", posicao: "ATA" },
    { numero: 11, nome: "Jefferson Savarino", posicao: "ATA" },
    { numero: 17, nome: "Agustín Canobbio", posicao: "ATA" },
    { numero: 8, nome: "Martinelli", posicao: "VOL" },
    { numero: 32, nome: "Luciano Acosta", posicao: "MEI" },
    { numero: 90, nome: "Kevin Serna", posicao: "ATA" },
    { numero: 10, nome: "Ganso", posicao: "MEI" },
    { numero: 35, nome: "Hércules", posicao: "VOL" },
    { numero: 25, nome: "Alisson", posicao: "VOL" },
    { numero: 5, nome: "Facundo Bernal", posicao: "VOL" },
    { numero: 16, nome: "Nonato", posicao: "VOL" },
    { numero: 28, nome: "Riquelme Felipe", posicao: "ATA" },
    { numero: 94, nome: "Otávio", posicao: "VOL" },
    { numero: 80, nome: "David Terans", posicao: "MEI" },

    // ATACANTES
    { numero: 7, nome: "Hulk", posicao: "ATA" },
    { numero: 14, nome: "Germán Cano", posicao: "ATA" },
    { numero: 9, nome: "John Kennedy", posicao: "ATA" },
    { numero: 19, nome: "Rodrigo Castillo", posicao: "ATA" },
    { numero: 15, nome: "Matheus Reis", posicao: "ATA" }
],

    ultimosJogos: [
        ["V", "Fluminense x Vasco", "2x1"]
    ],

    proximosJogos: [
        ["Flamengo", "Brasileirão"]
    ],

    conquistas: ["Libertadores"],

    noticias: [
        "Fluminense vence clássico"
    ]
},

{
    nome: "Vasco",
    pais: "Brasil",
    descricao: "Clube histórico e tradicional.",
    escudo: "img/futebol/vasco.webp",
    fundacao: 1898,
    estadio: "São Januário",
    tecnico: "Sem Tecnico",
    torcida: "15M",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    capacidade: "21.880",
    cores: "Preto e Branco",

    titulos: ["Libertadores", "Brasileirão"],

   elenco: [
    // GOLEIROS
    { numero: 1, nome: "Léo Jardim", posicao: "GOL" },
    { numero: 13, nome: "Daniel Fuzato", posicao: "GOL" },
    { numero: 37, nome: "Pablo", posicao: "GOL" },

    // DEFENSORES
    { numero: 96, nome: "Paulo Henrique", posicao: "LD" },
    { numero: 46, nome: "Carlos Cuesta", posicao: "ZAG" },
    { numero: 6, nome: "Lucas Piton", posicao: "LE" },
    { numero: 66, nome: "Cuiabano", posicao: "LE" },
    { numero: 30, nome: "Robert Renan", posicao: "ZAG" },
    { numero: 2, nome: "Puma Rodríguez", posicao: "LD" },
    { numero: 43, nome: "Lucas Freitas", posicao: "ZAG" },
    { numero: 4, nome: "Alan Saldivia", posicao: "ZAG" },
    { numero: 12, nome: "Riquelme", posicao: "LE" },
    { numero: 64, nome: "Walace", posicao: "ZAG" },

    // MEIO-CAMPISTAS
    { numero: 11, nome: "Andrés Gómez", posicao: "ATA" },
    { numero: 18, nome: "Marino Hinestroza", posicao: "ATA" },
    { numero: 17, nome: "Nuno Moreira", posicao: "ATA" },
    { numero: 88, nome: "Cauan Barros", posicao: "VOL" },
    { numero: 3, nome: "Tchê Tchê", posicao: "VOL" },
    { numero: 10, nome: "Johan Rojas", posicao: "MEI" },
    { numero: 23, nome: "Thiago Mendes", posicao: "VOL" },
    { numero: 25, nome: "Hugo Moura", posicao: "VOL" },
    { numero: 8, nome: "Jair", posicao: "VOL" },
    { numero: 98, nome: "JP", posicao: "MEI" },
    { numero: 85, nome: "Mateus Carvalho", posicao: "VOL" },
    { numero: 86, nome: "Lukas Zuccarello", posicao: "ATA" },
    { numero: 45, nome: "Loide Augusto", posicao: "ATA" },
    { numero: 60, nome: "João Vitor Silva", posicao: "MEI" },

    // ATACANTES
    { numero: 77, nome: "Claudio Spinelli", posicao: "ATA" },
    { numero: 20, nome: "Brenner", posicao: "ATA" },
    { numero: 28, nome: "Adson", posicao: "ATA" },
    { numero: 7, nome: "David", posicao: "ATA" }
],
    ultimosJogos: [
        ["D", "Vasco x Flamengo", "0x2"]
    ],

    proximosJogos: [
        ["Fluminense", "Brasileirão"]
    ],

    conquistas: ["Libertadores"],

    noticias: [
        "Vasco sofre derrota no clássico"
    ]
},

{
    nome: "Botafogo",
    pais: "Brasil",
    descricao: "Clube carioca em ascensão.",
    escudo: "img/futebol/botafogo.png",
    fundacao: 1904,
    estadio: "Nilton Santos",
    tecnico: "Franclim Carvalho",
    torcida: "8M",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    capacidade: "46.831",
    cores: "Preto e Branco",

    titulos: ["Brasileirão"],

    elenco: [
    // GOLEIROS
    { numero: 22, nome: "Neto", posicao: "GOL" },
    { numero: 24, nome: "Léo Linck", posicao: "GOL" },
    { numero: 40, nome: "Cristhian Loor", posicao: "GOL" },
    { numero: 1, nome: "Raul", posicao: "GOL" },

    // DEFENSORES
    { numero: 13, nome: "Alex Telles", posicao: "LE" },
    { numero: 2, nome: "Vitinho", posicao: "LD" },
    { numero: 5, nome: "Nahuel Ferraresi", posicao: "ZAG" },
    { numero: 15, nome: "Bastos", posicao: "ZAG" },
    { numero: 20, nome: "Alexander Barboza", posicao: "ZAG" },
    { numero: 4, nome: "Mateo Ponte", posicao: "LD" },
    { numero: 21, nome: "Marçal", posicao: "LE" },
    { numero: 31, nome: "Kaio Pantaleão", posicao: "ZAG" },
    { numero: 67, nome: "Jhoan Hernandez", posicao: "LE" },
    { numero: 42, nome: "Kadu Santos", posicao: "LD" },
    { numero: 27, nome: "Caio Roque", posicao: "LE" },
    { numero: 3, nome: "Ythallo", posicao: "ZAG" },
    { numero: 34, nome: "Gabriel Justino", posicao: "ZAG" },
    { numero: 53, nome: "Kauã Branco", posicao: "ZAG" },
    { numero: 26, nome: "Anthony", posicao: "ZAG" },

    // MEIO-CAMPISTAS
    { numero: 8, nome: "Danilo Santos", posicao: "VOL" },
    { numero: 10, nome: "Álvaro Montoro", posicao: "ATA" },
    { numero: 25, nome: "Allan", posicao: "VOL" },
    { numero: 14, nome: "Jordan Barrera", posicao: "MEI" },
    { numero: 6, nome: "Cristian Medina", posicao: "MEI" },
    { numero: 23, nome: "Santiago Rodríguez", posicao: "MEI" },
    { numero: 88, nome: "Edenilson", posicao: "MEI" },
    { numero: 12, nome: "Patrick de Paula", posicao: "VOL" },
    { numero: 28, nome: "Newton", posicao: "VOL" },
    { numero: 33, nome: "Diego Hernández", posicao: "ATA" },
    { numero: 77, nome: "Lucas Villalba", posicao: "ATA" },
    { numero: 55, nome: "Wallace Davi", posicao: "MEI" },
    { numero: 59, nome: "Kauan Toledo", posicao: "MEI" },
    { numero: 75, nome: "Huguinho", posicao: "MEI" },
    { numero: 45, nome: "Caio Valle", posicao: "MEI" },
    { numero: 80, nome: "Bernardo Valim", posicao: "MEI" },

    // ATACANTES
    { numero: 30, nome: "Joaquín Correa", posicao: "ATA" },
    { numero: 19, nome: "Arthur Cabral", posicao: "ATA" },
    { numero: 7, nome: "Júnior Santos", posicao: "ATA" },
    { numero: 37, nome: "Kadir Barría", posicao: "ATA" },
    { numero: 11, nome: "Matheus Martins", posicao: "ATA" },
    { numero: 9, nome: "Chris Ramos", posicao: "ATA" },
    { numero: 9, nome: "Matheus Nascimento", posicao: "ATA" },
    { numero: 16, nome: "Nathan Fernandes", posicao: "ATA" },
    { numero: 7, nome: "Elias Manoel", posicao: "ATA" },
    { numero: 99, nome: "Kayke", posicao: "ATA" },
    { numero: 39, nome: "Arthur Izaque", posicao: "ATA" }
],

    ultimosJogos: [
        ["V", "Botafogo x Flamengo", "2x1"]
    ],

    proximosJogos: [
        ["Palmeiras", "Brasileirão"]
    ],

    conquistas: ["Brasileirão"],

    noticias: [
        "Botafogo vence clássico"
    ]
},

{
    nome: "Cruzeiro",
    pais: "Brasil",
    descricao: "Clube tradicional de Minas Gerais.",
    escudo: "img/futebol/cruzeiro.png",
    fundacao: 1921,
    estadio: "Mineirão",
    tecnico: "Arthur Jorge",
    torcida: "12M",
    cidade: "Belo Horizonte",
    estado: "MG",
    capacidade: "61.927",
    cores: "Azul e Branco",

    titulos: ["Libertadores", "Brasileirão"],

    elenco: [
    // GOLEIROS
    { numero: 31, nome: "Matheus Cunha", posicao: "GOL" },
    { numero: 1, nome: "Cássio", posicao: "GOL" },
    { numero: 81, nome: "Otávio Costa", posicao: "GOL" },
    { numero: 51, nome: "Vitor Lamounier", posicao: "GOL" },
    { numero: 24, nome: "Marcelo Eraclito de Souza Filho", posicao: "GOL" },

    // DEFENSORES
    { numero: 15, nome: "Fabrício Bruno", posicao: "ZAG" },
    { numero: 23, nome: "Fagner", posicao: "LD" },
    { numero: 12, nome: "William Furtado", posicao: "LD" },
    { numero: 36, nome: "Kauã Prates", posicao: "LE" },
    { numero: 25, nome: "Lucas Villalba", posicao: "ZAG" },
    { numero: 43, nome: "João Marcelo", posicao: "ZAG" },
    { numero: 34, nome: "Jonathan Jesus", posicao: "ZAG" },
    { numero: 27, nome: "Gabriel Rojas", posicao: "LE" },
    { numero: 2, nome: "Kauã Moraes", posicao: "LD" },
    { numero: 35, nome: "Pedrão", posicao: "ZAG" },
    { numero: 16, nome: "Gustavo Carvalho", posicao: "LE" },
    { numero: 0, nome: "Kelvin Barbosa", posicao: "ZAG" },

    // MEIO-CAMPISTAS
    { numero: 11, nome: "Gerson", posicao: "VOL" },
    { numero: 10, nome: "Matheus Pereira", posicao: "MEI" },
    { numero: 99, nome: "Keny Arroyo", posicao: "ATA" },
    { numero: 7, nome: "Marquinhos", posicao: "ATA" },
    { numero: 29, nome: "Lucas Romero", posicao: "VOL" },
    { numero: 8, nome: "Matheus Henrique", posicao: "VOL" },
    { numero: 16, nome: "Lucas Silva", posicao: "VOL" },
    { numero: 88, nome: "Christian", posicao: "ATA" },
    { numero: 94, nome: "Wanderson", posicao: "ATA" },
    { numero: 70, nome: "Kaique Kenji", posicao: "ATA" },
    { numero: 77, nome: "Japa", posicao: "MEI" },
    { numero: 35, nome: "Murilo Rhikman", posicao: "MEI" },
    { numero: 22, nome: "Vitinho", posicao: "LE" },
    { numero: 33, nome: "Fabrizio Peralta", posicao: "MEI" },
    { numero: 20, nome: "Felipe Morais", posicao: "MEI" },
    { numero: 57, nome: "Rayan Lelis", posicao: "ATA" },
    { numero: 5, nome: "Eduardo Pape", posicao: "MEI" },

    // ATACANTES
    { numero: 19, nome: "Kaio Jorge", posicao: "ATA" },
    { numero: 17, nome: "Luis Sinisterra", posicao: "ATA" },
    { numero: 22, nome: "Néiser Villarreal", posicao: "ATA" },
    { numero: 9, nome: "Bruno Rodrigues", posicao: "ATA" },
    { numero: 91, nome: "Chico da Costa", posicao: "ATA" },
    { numero: 39, nome: "Ruan Índio", posicao: "ATA" }
],

    ultimosJogos: [
        ["V", "Cruzeiro x Atlético-MG", "2x0"]
    ],

    proximosJogos: [
        ["Flamengo", "Brasileirão"]
    ],

    conquistas: ["Libertadores"],

    noticias: [
        "Cruzeiro vence clássico mineiro"
    ]
},

{
    nome: "Atlético Mineiro",
    pais: "Brasil",
    descricao: "Galo forte e vingador.",
    escudo: "img/futebol/galo.png",
    fundacao: 1908,
    estadio: "Arena MRV",
    tecnico: "Eduardo Dominguez",
    torcida: "10M",
    cidade: "Belo Horizonte",
    estado: "MG",
    capacidade: "44.892",
    cores: "Preto e Branco",

    titulos: ["Libertadores", "Brasileirão"],

    elenco: [
    // GOLEIROS
    { numero: 22, nome: "Everson", posicao: "GOL" },
    { numero: 1, nome: "Gabriel Delfim", posicao: "GOL" },
    { numero: 31, nome: "Robert Alves", posicao: "GOL" },
    { numero: 1, nome: "Pedro Cobra Rodrigues", posicao: "GOL" },

    // DEFENSORES
    { numero: 16, nome: "Renan Lodi", posicao: "LE" },
    { numero: 13, nome: "Lyanco", posicao: "ZAG" },
    { numero: 3, nome: "Iván Román", posicao: "ZAG" },
    { numero: 6, nome: "Junior Alonso", posicao: "ZAG" },
    { numero: 4, nome: "Ruan", posicao: "ZAG" },
    { numero: 2, nome: "Natanael", posicao: "LD" },
    { numero: 14, nome: "Vitor Hugo", posicao: "ZAG" },
    { numero: 5, nome: "Léo Duarte", posicao: "ZAG" },
    { numero: 47, nome: "Rômulo", posicao: "ZAG" },
    { numero: 40, nome: "Vitor Fernandes Chaves Teixeira", posicao: "ZAG" },
    { numero: 36, nome: "Kauã Pascini", posicao: "LE" },

    // MEIO-CAMPISTAS
    { numero: 19, nome: "Reinier", posicao: "MEI" },
    { numero: 10, nome: "Gustavo Scarpa", posicao: "MEI" },
    { numero: 30, nome: "Victor Hugo", posicao: "VOL" },
    { numero: 21, nome: "Alan Franco", posicao: "VOL" },
    { numero: 8, nome: "Maycon", posicao: "VOL" },
    { numero: 23, nome: "Ángelo Preciado", posicao: "LD" },
    { numero: 11, nome: "Bernard", posicao: "ATA" },
    { numero: 28, nome: "Tomás Cuello", posicao: "ATA" },
    { numero: 5, nome: "Alexsander", posicao: "VOL" },
    { numero: 25, nome: "Tomás Pérez", posicao: "VOL" },
    { numero: 17, nome: "Igor Gomes", posicao: "VOL" },
    { numero: 39, nome: "Mamady Cissé", posicao: "MEI" },
    { numero: 20, nome: "Patrick", posicao: "VOL" },
    { numero: 38, nome: "Índio", posicao: "VOL" },

    // ATACANTES
    { numero: 92, nome: "Dudu", posicao: "ATA" },
    { numero: 27, nome: "Alan Minda", posicao: "ATA" },
    { numero: 9, nome: "Mateo Cassierra", posicao: "ATA" },
    { numero: 29, nome: "Cauã Campos Soares", posicao: "ATA" }
],
    ultimosJogos: [
        ["D", "Atlético-MG x Cruzeiro", "0x2"]
    ],

    proximosJogos: [
        ["Palmeiras", "Brasileirão"]
    ],

    conquistas: ["Libertadores"],

    noticias: [
        "Atlético perde clássico"
    ]
},
{
    nome: "Bahia",
    pais: "Brasil",
    descricao: "Tricolor de Aço.",
    escudo: "img/futebol/bahia.webp",
    fundacao: 1931,
    estadio: "Arena Fonte Nova",
    tecnico: "Rogerio Ceni",
    torcida: "4M",
    cidade: "Salvador",
    estado: "BA",
    capacidade: "48.902",
    cores: "Azul, Vermelho e Branco",

    titulos: ["Brasileirão", "Copa do Nordeste"],

    elenco: [
    // GOLEIROS
    { numero: 1, nome: "Ronaldo", posicao: "GOL" },
    { numero: 22, nome: "Léo Vieira", posicao: "GOL" },
    { numero: 61, nome: "Victor Nascimento", posicao: "GOL" },

    // DEFENSORES
    { numero: 46, nome: "Luciano Juba", posicao: "LE" },
    { numero: 21, nome: "Santiago Ramos Mingo", posicao: "ZAG" },
    { numero: 4, nome: "Kanu", posicao: "ZAG" },
    { numero: 43, nome: "Luiz Gustavo", posicao: "ZAG" },
    { numero: 25, nome: "Iago Borduchi", posicao: "LE" },
    { numero: 33, nome: "David Duarte", posicao: "ZAG" },
    { numero: 44, nome: "Marcos Victor", posicao: "ZAG" },
    { numero: 31, nome: "Román Gómez", posicao: "LD" },
    { numero: 66, nome: "José Guilherme", posicao: "LE" },
    { numero: 83, nome: "Fredi Gomes", posicao: "ZAG" },
    { numero: 21, nome: "Marco Moreno", posicao: "ZAG" },

    // MEIO-CAMPISTAS
    { numero: 10, nome: "Everton Ribeiro", posicao: "MEI" },
    { numero: 6, nome: "Jean Lucas", posicao: "VOL" },
    { numero: 11, nome: "Rodrigo Nestor", posicao: "VOL" },
    { numero: 8, nome: "Caio Alexandre", posicao: "VOL" },
    { numero: 52, nome: "Ruan Pablo", posicao: "ATA" },
    { numero: 15, nome: "Michel Araújo", posicao: "ATA" },
    { numero: 5, nome: "Nicolás Acevedo", posicao: "VOL" },
    { numero: 14, nome: "Erick", posicao: "VOL" },
    { numero: 23, nome: "Mateo Sanabria", posicao: "ATA" },

    // ATACANTES
    { numero: 16, nome: "Erick Pulga", posicao: "ATA" },
    { numero: 9, nome: "Alejo Véliz", posicao: "ATA" },
    { numero: 12, nome: "Willian José", posicao: "ATA" },
    { numero: 89, nome: "Dell", posicao: "ATA" },
    { numero: 27, nome: "Everaldo", posicao: "ATA" },
    { numero: 99, nome: "Cristian Olivera", posicao: "ATA" },
    { numero: 7, nome: "Ademir", posicao: "ATA" },
    { numero: 80, nome: "Roger Gabriel", posicao: "ATA" }
],

    ultimosJogos: [
        ["V", "Bahia x Vitória", "2x1"]
    ],

    proximosJogos: [
        ["Flamengo", "Brasileirão"]
    ],

    conquistas: ["Copa do Nordeste"],

    noticias: [
        "Bahia vence clássico e sobe na tabela"
    ]
},

{
    nome: "Red Bull Bragantino",
    pais: "Brasil",
    descricao: "Massa Bruta em ascensão.",
    escudo: "img/futebol/bragantino.png",
    fundacao: 1928,
    estadio: "Estádio Nabi Abi Chedid",
    tecnico: "Vagner Mancini",
    torcida: "2M",
    cidade: "Bragança Paulista",
    estado: "SP",
    capacidade: "15.010",
    cores: "Vermelho e Branco",

    titulos: ["Copa Sul-Americana (vice)"],

   elenco: [
    // Atacantes
    { numero: 9, nome: "Isidro Pitta", posicao: "ATA" },
    { numero: 8, nome: "Eduardo Sasha", posicao: "ATA" },
    { numero: 18, nome: "Thiago Borbas", posicao: "ATA" },
    { numero: 11, nome: "Fernando", posicao: "ATA" },
    { numero: 32, nome: "José Herrera", posicao: "ATA" },
    { numero: 17, nome: "Vinicinho", posicao: "ATA" },
    { numero: 17, nome: "Bruno Goncalves", posicao: "ATA" },
    { numero: 91, nome: "Gabriel Novaes", posicao: "ATA" },
    { numero: 39, nome: "Kawê", posicao: "ATA" },

    // Meio-campistas
    { numero: 20, nome: "Rodriguinho", posicao: "MEI" },
    { numero: 5, nome: "Fabinho", posicao: "VOL" },
    { numero: 21, nome: "Lucas Barbosa", posicao: "ATA" },
    { numero: 30, nome: "Henry Mosquera", posicao: "ATA" },
    { numero: 35, nome: "Matheus Fernandes", posicao: "VOL" },
    { numero: 6, nome: "Gabriel Girotto", posicao: "VOL" },
    { numero: 33, nome: "Ignacio Laquintana", posicao: "ATA" },
    { numero: 15, nome: "Ignacio Sosa", posicao: "VOL" },
    { numero: 25, nome: "Bruno Praxedes", posicao: "MEI" },
    { numero: 7, nome: "Eric Ramires", posicao: "VOL" },
    { numero: 22, nome: "Gustavo Neves", posicao: "MEI" },
    { numero: 27, nome: "Davi Gomes", posicao: "ATA" },
    { numero: 80, nome: "João Neto", posicao: "ATA" },
    { numero: 57, nome: "Marcelinho Braz", posicao: "ATA" },

    // Zagueiros
    { numero: 12, nome: "Vanderlan", posicao: "LAT" },
    { numero: 29, nome: "Juninho Capixaba", posicao: "LAT" },
    { numero: 34, nome: "José Andrés Hurtado", posicao: "LAT" },
    { numero: 2, nome: "Guzmán Rodríguez", posicao: "ZAG" },
    { numero: 14, nome: "Pedro Henrique", posicao: "ZAG" },
    { numero: 16, nome: "Gustavo Marques", posicao: "ZAG" },
    { numero: 4, nome: "Alix Vinicius", posicao: "ZAG" },
    { numero: 23, nome: "Agustin Sant Anna", posicao: "LAT" },
    { numero: 3, nome: "Eduardo Santos", posicao: "ZAG" },
    { numero: 52, nome: "Ryan Augusto", posicao: "LAT" },
    { numero: 51, nome: "Cauê Nascimento Santos", posicao: "LAT" },

    // Goleiros
    { numero: 18, nome: "Tiago Volpi", posicao: "GOL" },
    { numero: 1, nome: "Cleiton", posicao: "GOL" },
    { numero: 56, nome: "Gustavo Reis", posicao: "GOL" },
    { numero: 37, nome: "Fabrício", posicao: "GOL" },
    { numero: 24, nome: "Fernando Costa", posicao: "GOL" }
],

    ultimosJogos: [
        ["E", "Bragantino x Palmeiras", "1x1"]
    ],

    proximosJogos: [
        ["São Paulo", "Brasileirão"]
    ],

    conquistas: [],

    noticias: [
        "Bragantino mantém boa fase no campeonato"
    ]
},

{
    nome: "Athletico",
    pais: "Brasil",
    descricao: "Furacão do Sul.",
    escudo: "img/futebol/athletico.png ",
    fundacao: 1924,
    estadio: "Ligga Arena",
    tecnico: "Odair Hellmann",
    torcida: "5M",
    cidade: "Curitiba",
    estado: "PR",
    capacidade: "43.000",
    cores: "Vermelho e Preto",

    titulos: ["Brasileirão", "Sul-Americana"],

   elenco: [
    // Atacantes
    { numero: 9, nome: "Kevin Viveros", posicao: "ATA" },
    { numero: 21, nome: "Leozinho", posicao: "ATA" },
    { numero: 9, nome: "Jorge Rivaldo", posicao: "ATA" },
    { numero: 50, nome: "Renan Viana", posicao: "ATA" },
    { numero: 70, nome: "Renan Peixoto Nepomuceno", posicao: "ATA" },
    { numero: 0, nome: "Daniel Aguilar", posicao: "ATA" },

    // Meio-campistas
    { numero: 14, nome: "Luiz Gustavo", posicao: "VOL" },
    { numero: 27, nome: "Juan Portilla", posicao: "VOL" },
    { numero: 10, nome: "Bruno Zapelli", posicao: "MEI" },
    { numero: 7, nome: "Stiven Mendoza", posicao: "ATA" },
    { numero: 8, nome: "João Cruz", posicao: "MEI" },
    { numero: 53, nome: "Dudu", posicao: "MEI" },
    { numero: 48, nome: "Bruno Braga Ramos", posicao: "ATA" },
    { numero: 16, nome: "Jádson", posicao: "VOL" },
    { numero: 11, nome: "Isaac", posicao: "ATA" },
    { numero: 5, nome: "Felipinho", posicao: "VOL" },
    { numero: 47, nome: "Chiqueti", posicao: "ATA" },
    { numero: 20, nome: "Alejandro García", posicao: "MEI" },
    { numero: 16, nome: "Romeo Benítez", posicao: "ATA" },

    // Zagueiros
    { numero: 2, nome: "Gilberto", posicao: "ZAG" },
    { numero: 2, nome: "Gilberto Junior", posicao: "ZAG" },
    { numero: 37, nome: "Lucas Esquivel", posicao: "LAT" },
    { numero: 3, nome: "Léo", posicao: "ZAG" },
    { numero: 4, nome: "Arthur Dias", posicao: "ZAG" },
    { numero: 33, nome: "Juan Felipe Aguirre", posicao: "ZAG" },
    { numero: 22, nome: "Carlos Terán", posicao: "ZAG" },
    { numero: 29, nome: "Gastón Benavídez", posicao: "LAT" },
    { numero: 30, nome: "Hayen Palacios", posicao: "LAT" },
    { numero: 98, nome: "Dudu", posicao: "LAT" },

    // Goleiros
    { numero: 23, nome: "Santos", posicao: "GOL" },
    { numero: 1, nome: "Mycael", posicao: "GOL" },
    { numero: 42, nome: "Matheus Soares", posicao: "GOL" }
],

    ultimosJogos: [
        ["D", "Athletico x Internacional", "0x1"]
    ],

    proximosJogos: [
        ["Grêmio", "Brasileirão"]
    ],

    conquistas: ["Sul-Americana"],

    noticias: [
        "Athletico busca recuperação no campeonato"
    ]
},

{
    nome: "Coritiba",
    pais: "Brasil",
    descricao: "Coxa Branca.",
    escudo: "img/futebol/coritiba.png",
    fundacao: 1909,
    estadio: "Couto Pereira",
    tecnico: "Fernando Seabra",
    torcida: "3M",
    cidade: "Curitiba",
    estado: "PR",
    capacidade: "40.502",
    cores: "Verde e Branco",

    titulos: ["Brasileirão"],

    elenco: [
    // Goleiros
    { numero: 1, nome: "Pedro Morisco", posicao: "GOL" },
    { numero: 13, nome: "Keiller", posicao: "GOL" },
    { numero: 22, nome: "Pedro Rangel", posicao: "GOL" },
    { numero: 67, nome: "Benassi", posicao: "GOL" },

    // Zagueiros
    { numero: 44, nome: "João Pedro Chermont", posicao: "LAT" },
    { numero: 21, nome: "Thiago Santos", posicao: "ZAG" },
    { numero: 3, nome: "Maicon", posicao: "ZAG" },
    { numero: 6, nome: "Felipe Jonatan", posicao: "LAT" },
    { numero: 2, nome: "Tinga", posicao: "LAT" },
    { numero: 55, nome: "Jacy Maranhão", posicao: "ZAG" },
    { numero: 4, nome: "Rodrigo Moledo", posicao: "ZAG" },
    { numero: 23, nome: "Tiago Cóser", posicao: "ZAG" },
    { numero: 26, nome: "Bruno Melo", posicao: "ZAG" },
    { numero: 16, nome: "João Almeida", posicao: "LAT" },

    // Meio-campistas
    { numero: 10, nome: "Josué", posicao: "MEI" },
    { numero: 77, nome: "Breno Lopes", posicao: "ATA" },
    { numero: 11, nome: "Lucas Ronier", posicao: "ATA" },
    { numero: 7, nome: "Joaquín Lavega", posicao: "ATA" },
    { numero: 88, nome: "Fernando Sobral", posicao: "VOL" },
    { numero: 19, nome: "Sebastian Gomez", posicao: "MEI" },
    { numero: 29, nome: "Willian Oliveira", posicao: "VOL" },
    { numero: 39, nome: "Gustavo", posicao: "ATA" },
    { numero: 8, nome: "Wallisson Luiz", posicao: "VOL" },
    { numero: 36, nome: "Vini Paulista", posicao: "VOL" },
    { numero: 38, nome: "Geovane Santana Meurer", posicao: "MEI" },

    // Atacantes
    { numero: 99, nome: "Rodrigo Rodrigues", posicao: "ATA" },
    { numero: 20, nome: "Keno", posicao: "ATA" },
    { numero: 32, nome: "Pedro Rocha", posicao: "ATA" },
    { numero: 78, nome: "Renato Marques", posicao: "ATA" },
    { numero: 28, nome: "Fabinho", posicao: "ATA" },
    { numero: 77, nome: "Eberth Araujo Nogueira", posicao: "ATA" }
],

    ultimosJogos: [
        ["D", "Coritiba x Flamengo", "0x3"]
    ],

    proximosJogos: [
        ["Vasco", "Brasileirão"]
    ],

    conquistas: ["Brasileirão"],

    noticias: [
        "Coritiba tenta reação na temporada"
    ]
},

{
    nome: "Vitoria",
    pais: "Brasil",
    descricao: "Leão da Barra.",
    escudo: "img/futebol/vitoria.png",
    fundacao: 1899,
    estadio: "Barradão",
    tecnico: "Jair Ventura",
    torcida: "4M",
    cidade: "Salvador",
    estado: "BA",
    capacidade: "34.535",
    cores: "Vermelho e Preto",

    titulos: ["Copa do Nordeste"],

    elenco: [
    // Goleiros
    { numero: 1, nome: "Lucas Arcanjo", posicao: "GOL" },
    { numero: 22, nome: "Gabriel", posicao: "GOL" },
    { numero: 35, nome: "Alexandre Fintelman", posicao: "GOL" },
    { numero: 71, nome: "Yuri Sena", posicao: "GOL" },

    // Zagueiros
    { numero: 25, nome: "Cacá", posicao: "ZAG" },
    { numero: 13, nome: "Ramon", posicao: "LAT" },
    { numero: 36, nome: "Luan Cândido", posicao: "ZAG" },
    { numero: 4, nome: "Camutanga", posicao: "ZAG" },
    { numero: 2, nome: "Claudinho", posicao: "LAT" },
    { numero: 83, nome: "Jamerson", posicao: "LAT" },
    { numero: 45, nome: "Nathan Mendes", posicao: "LAT" },
    { numero: 77, nome: "Neris", posicao: "ZAG" },
    { numero: 98, nome: "Mateusinho", posicao: "LAT" },
    { numero: 43, nome: "Edu", posicao: "ZAG" },
    { numero: 5, nome: "Riccieli", posicao: "ZAG" },
    { numero: 0, nome: "Wanderson Estrela Oliveira", posicao: "ZAG" },

    // Meio-campistas
    { numero: 33, nome: "Erick", posicao: "ATA" },
    { numero: 10, nome: "Matheuzinho", posicao: "MEI" },
    { numero: 5, nome: "Walace", posicao: "VOL" },
    { numero: 44, nome: "Gabriel Baralhas", posicao: "VOL" },
    { numero: 17, nome: "Aitor Cantalapiedra", posicao: "ATA" },
    { numero: 6, nome: "Emmanuel Martínez", posicao: "MEI" },
    { numero: 11, nome: "Osvaldo", posicao: "ATA" },
    { numero: 21, nome: "Dudu", posicao: "MEI" },
    { numero: 12, nome: "Diego Tarzia", posicao: "ATA" },
    { numero: 19, nome: "Kike Saverio", posicao: "ATA" },
    { numero: 22, nome: "Lucas Braga", posicao: "ATA" },
    { numero: 95, nome: "Caique Gonçalves", posicao: "MEI" },
    { numero: 88, nome: "Zé Vitor", posicao: "MEI" },
    { numero: 16, nome: "Rúben Ramos Ismael", posicao: "MEI" },
    { numero: 20, nome: "Lucas Silva", posicao: "ATA" },
    { numero: 62, nome: "Pablo Santos", posicao: "MEI" },
    { numero: 55, nome: "José Breno", posicao: "MEI" },
    { numero: 28, nome: "Anderson Bispo dos Santos", posicao: "MEI" },
    { numero: 70, nome: "Cauan", posicao: "MEI" },

    // Atacantes
    { numero: 7, nome: "Marinho", posicao: "ATA" },
    { numero: 79, nome: "Renato Kayzer", posicao: "ATA" },
    { numero: 9, nome: "Pedro Henrique", posicao: "ATA" },
    { numero: 23, nome: "Fabrício Santos", posicao: "ATA" },
    { numero: 31, nome: "Renzo López", posicao: "ATA" },
    { numero: 28, nome: "Anderson Pato", posicao: "ATA" },
    { numero: 0, nome: "Ruan Gabriel", posicao: "ATA" }
],

    ultimosJogos: [
        ["V", "Vitória x Bahia", "2x1"]
    ],

    proximosJogos: [
        ["Atlético-MG", "Brasileirão"]
    ],

    conquistas: ["Copa do Nordeste"],

    noticias: [
        "Vitória vence clássico baiano"
    ]
},

{
    nome: "Internacional",
    pais: "Brasil",
    descricao: "Colorado gigante.",
    escudo: "img/futebol/internacional.webp",
    fundacao: 1909,
    estadio: "Beira-Rio",
    tecnico: "Paulo Pezzolano",
    torcida: "6M",
    cidade: "Porto Alegre",
    estado: "RS",
    capacidade: "50.842",
    cores: "Vermelho",

    titulos: ["Brasileirão", "Libertadores"],

  elenco: [
    // Goleiros
    { numero: 1, nome: "Sergio Rochet", posicao: "GOL" },
    { numero: 12, nome: "Anthoni", posicao: "GOL" },
    { numero: 12, nome: "Henrique Menke", posicao: "GOL" },
    { numero: 22, nome: "Kauan", posicao: "GOL" },
    { numero: 32, nome: "Diego Esser", posicao: "GOL" },

    // Zagueiros
    { numero: 4, nome: "Félix Torres", posicao: "ZAG" },
    { numero: 26, nome: "Alexandro Bernabei", posicao: "LAT" },
    { numero: 25, nome: "Gabriel Mercado", posicao: "ZAG" },
    { numero: 15, nome: "Bruno Gomes", posicao: "LAT" },
    { numero: 41, nome: "Victor Gabriel", posicao: "ZAG" },
    { numero: 35, nome: "Braian Aguirre", posicao: "LAT" },
    { numero: 6, nome: "Matheus Bahia", posicao: "LAT" },
    { numero: 18, nome: "Jose Juninho", posicao: "ZAG" },
    { numero: 20, nome: "Clayton Sampaio", posicao: "ZAG" },

    // Meio-campistas
    { numero: 10, nome: "Alan Patrick", posicao: "MEI" },
    { numero: 11, nome: "Kayky", posicao: "ATA" },
    { numero: 27, nome: "Paulinho Paula", posicao: "MEI" },
    { numero: 29, nome: "Thiago Maia", posicao: "VOL" },
    { numero: 28, nome: "Vitinho", posicao: "ATA" },
    { numero: 8, nome: "Bruno Henrique", posicao: "VOL" },
    { numero: 5, nome: "Rodrigo Villagra", posicao: "VOL" },
    { numero: 16, nome: "Ronaldo", posicao: "VOL" },
    { numero: 14, nome: "Alan Rodríguez", posicao: "VOL" },
    { numero: 36, nome: "Richard", posicao: "VOL" },
    { numero: 37, nome: "Yago Noal", posicao: "MEI" },
    { numero: 33, nome: "Benjamin Arhin", posicao: "MEI" },
    { numero: 30, nome: "Alisson Rodrigues de Melo", posicao: "LAT" },

    // Atacantes
    { numero: 7, nome: "Johan Carbonero", posicao: "ATA" },
    { numero: 9, nome: "Alerrandro", posicao: "ATA" },
    { numero: 17, nome: "Bruno Tabata", posicao: "ATA" },
    { numero: 48, nome: "Raykkonen Pereira Soares", posicao: "ATA" },
    { numero: 31, nome: "Allex", posicao: "ATA" }
],

    ultimosJogos: [
        ["V", "Inter x Grêmio", "2x0"]
    ],

    proximosJogos: [
        ["Flamengo", "Brasileirão"]
    ],

    conquistas: ["Libertadores"],

    noticias: [
        "Internacional vence clássico Gre-Nal"
    ]
},

{
    nome: "Gremio",
    pais: "Brasil",
    descricao: "Imortal Tricolor.",
    escudo: "img/futebol/gremio.png",
    fundacao: 1903,
    estadio: "Arena do Grêmio",
    tecnico: "Luís Castro",
    torcida: "8M",
    cidade: "Porto Alegre",
    estado: "RS",
    capacidade: "60.540",
    cores: "Azul, Preto e Branco",

    titulos: ["Libertadores", "Brasileirão"],

    elenco: [
    // Goleiros
    { numero: 1, nome: "Weverton", posicao: "GOL" },
    { numero: 12, nome: "Gabriel Grando", posicao: "GOL" },
    { numero: 31, nome: "Adriel", posicao: "GOL" },
    { numero: 24, nome: "Thiago Beltrame", posicao: "GOL" },
    { numero: 31, nome: "Gabriel Menegon", posicao: "GOL" },

    // Defensores
    { numero: 14, nome: "Marcos Rocha", posicao: "LAT" },
    { numero: 4, nome: "Walter Kannemann", posicao: "ZAG" },
    { numero: 23, nome: "Marlon", posicao: "LAT" },
    { numero: 2, nome: "Fabián Balbuena", posicao: "ZAG" },
    { numero: 38, nome: "Caio Paulista", posicao: "LAT" },
    { numero: 3, nome: "Wagner Leonardo", posicao: "ZAG" },
    { numero: 6, nome: "Gustavo Martins", posicao: "ZAG" },
    { numero: 18, nome: "João Pedro", posicao: "LAT" },
    { numero: 43, nome: "Luis Guedes", posicao: "ZAG" },
    { numero: 54, nome: "Pedro Gabriel", posicao: "LAT" },
    { numero: 82, nome: "Wallace", posicao: "ZAG" },

    // Meio-campistas
    { numero: 10, nome: "Willian", posicao: "MEI" },
    { numero: 19, nome: "Erick Noriega", posicao: "VOL" },
    { numero: 37, nome: "Gabriel Mec", posicao: "MEI" },
    { numero: 20, nome: "Mathias Villasanti", posicao: "VOL" },
    { numero: 99, nome: "José Enamorado", posicao: "ATA" },
    { numero: 7, nome: "Cristian Pavón", posicao: "ATA" },
    { numero: 11, nome: "Miguel Monsalve", posicao: "MEI" },
    { numero: 9, nome: "Francis Amuzu", posicao: "ATA" },
    { numero: 39, nome: "Tiaguinho", posicao: "MEI" },
    { numero: 5, nome: "Juan Nardoni", posicao: "VOL" },
    { numero: 17, nome: "Dodi", posicao: "VOL" },
    { numero: 65, nome: "Riquelme Freitas", posicao: "MEI" },
    { numero: 33, nome: "Leonel Pérez", posicao: "VOL" },
    { numero: 47, nome: "Roger", posicao: "ATA" },
    { numero: 0, nome: "Bernardo Zortea", posicao: "MEI" },

    // Atacantes
    { numero: 95, nome: "Carlos Vinícius", posicao: "ATA" },
    { numero: 22, nome: "Martin Braithwaite", posicao: "ATA" },
    { numero: 21, nome: "Tetê", posicao: "ATA" }
],

    ultimosJogos: [
        ["D", "Grêmio x Inter", "0x2"]
    ],

    proximosJogos: [
        ["Palmeiras", "Brasileirão"]
    ],

    conquistas: ["Libertadores"],

    noticias: [
        "Grêmio busca recuperação após clássico"
    ]
},

{
    nome: "Remo",
    pais: "Brasil",
    descricao: "Leão Azul da Amazônia.",
    escudo: "img/futebol/remo.webp",
    fundacao: 1905,
    estadio: "Estádio Banpará Baenao",
    tecnico: "Léo Condé",
    torcida: "2M",
    cidade: "Belém",
    estado: "PA",
    capacidade: "13.792",
    cores: "Azul e Branco",

    titulos: ["Série C"],

   elenco: [
    // GOLEIROS
    { numero: 97, nome: "Ivan", posicao: "GOL" },
    { numero: 88, nome: "Marcelo Rangel", posicao: "GOL" },
    { numero: 94, nome: "Ygor Vinhas", posicao: "GOL" },

    // DEFENSORES
    { numero: 2, nome: "João Lucas", posicao: "LD" },
    { numero: 13, nome: "Marllon", posicao: "ZAG" },
    { numero: 98, nome: "Mayk", posicao: "LE" },
    { numero: 2, nome: "Matheus Alexandre", posicao: "LD" },
    { numero: 42, nome: "Kadu Santos", posicao: "LD" },
    { numero: 18, nome: "Duplexe Tchamba", posicao: "ZAG" },
    { numero: 27, nome: "Kayky Almeida", posicao: "ZAG" },
    { numero: 79, nome: "Marcelinho", posicao: "LD" },
    { numero: 24, nome: "Braian Cufré", posicao: "LE" },
    { numero: 3, nome: "Thalisson Gabriel", posicao: "ZAG" },
    { numero: 5, nome: "Léo", posicao: "ZAG" },
    { numero: 17, nome: "Cristian Gonzalez", posicao: "ZAG" },
    { numero: 17, nome: "Kerlon", posicao: "ZAG" },
    { numero: 46, nome: "Edson Kauã", posicao: "ZAG" },

    // MEIO-CAMPISTAS
    { numero: 22, nome: "Yago Pikachu", posicao: "ATA" },
    { numero: 8, nome: "Patrick", posicao: "VOL" },
    { numero: 15, nome: "Vitor Bueno", posicao: "MEI" },
    { numero: 28, nome: "Zé Welison", posicao: "VOL" },
    { numero: 14, nome: "Leonel Picco", posicao: "VOL" },
    { numero: 10, nome: "Jáderson", posicao: "MEI" },
    { numero: 37, nome: "Jajá", posicao: "ATA" },
    { numero: 55, nome: "Zé Ricardo", posicao: "VOL" },
    { numero: 26, nome: "David Braga", posicao: "MEI" },
    { numero: 7, nome: "Giovanni Pavani", posicao: "VOL" },
    { numero: 23, nome: "Franco Catarozzi", posicao: "VOL" },
    { numero: 35, nome: "Freitas", posicao: "MEI" },
    { numero: 35, nome: "Edson Fernando", posicao: "VOL" },

    // ATACANTES
    { numero: 9, nome: "Carlinhos", posicao: "ATA" },
    { numero: 11, nome: "Alef Manga", posicao: "ATA" },
    { numero: 19, nome: "Gabriel Taliari", posicao: "ATA" },
    { numero: 99, nome: "Gabriel Poveda", posicao: "ATA" },
    { numero: 71, nome: "Rafael Monti", posicao: "ATA" },
    { numero: 39, nome: "Eduardo Melo", posicao: "ATA" }
],

    ultimosJogos: [
        ["V", "Remo x Paysandu", "1x0"]
    ],

    proximosJogos: [
        ["Santos", "Copa do Brasil"]
    ],

    conquistas: ["Série C"],

    noticias: [
        "Remo vence clássico Re-Pa"
    ]
},

{
    nome: "Mirassol",
    pais: "Brasil",
    descricao: "Leão Caipira em ascensão.",
    escudo: "../img/futebol/mirassol.png",
    fundacao: 1925,
    estadio: "Estádio Municipal José Maria de Campos Maia",
    tecnico: "Rafael Guanaes",
    torcida: "1M",
    cidade: "Mirassol",
    estado: "SP",
    capacidade: "15.000",
    cores: "Amarelo e Verde",

    titulos: [],

   elenco: [
    // GOLEIROS
    { numero: 22, nome: "Walter", posicao: "GOL" },
    { numero: 23, nome: "Alex Muralha", posicao: "GOL" },
    { numero: 90, nome: "Thomazella", posicao: "GOL" },
    { numero: 1, nome: "Georgemy", posicao: "GOL" },

    // DEFENSORES
    { numero: 6, nome: "Reinaldo", posicao: "LE" },
    { numero: 12, nome: "Victor Luis", posicao: "LE" },
    { numero: 2, nome: "Lucas Oliveira", posicao: "ZAG" },
    { numero: 3, nome: "Willian Machado", posicao: "ZAG" },
    { numero: 32, nome: "Igor Formiga", posicao: "LD" },
    { numero: 34, nome: "João Victor", posicao: "ZAG" },
    { numero: 20, nome: "Daniel Borges", posicao: "LD" },
    { numero: 97, nome: "Rodrigues", posicao: "ZAG" },

    // MEIO-CAMPISTAS
    { numero: 33, nome: "Eduardo", posicao: "MEI" },
    { numero: 27, nome: "Antonio Galeano", posicao: "ATA" },
    { numero: 10, nome: "Chico", posicao: "MEI" },
    { numero: 18, nome: "Gabriel Pires", posicao: "VOL" },
    { numero: 7, nome: "Shaylon", posicao: "MEI" },
    { numero: 8, nome: "Denilson", posicao: "VOL" },
    { numero: 25, nome: "Neto Moura", posicao: "VOL" },
    { numero: 21, nome: "José Aldo", posicao: "VOL" },
    { numero: 13, nome: "Luiz Filipe", posicao: "ATA" },

    // ATACANTES
    { numero: 29, nome: "Tiquinho Soares", posicao: "ATA" },
    { numero: 99, nome: "André Luis", posicao: "ATA" },
    { numero: 11, nome: "Negueba", posicao: "ATA" },
    { numero: 77, nome: "Alesson", posicao: "ATA" },
    { numero: 96, nome: "Carlos Eduardo", posicao: "ATA" },
    { numero: 17, nome: "Everton Galdino", posicao: "ATA" },
    { numero: 9, nome: "Nathan Fogaça", posicao: "ATA" },
    { numero: 95, nome: "Edson Carioca", posicao: "ATA" }
],

    ultimosJogos: [
        ["E", "Mirassol x Ceará", "1x1"]
    ],

    proximosJogos: [
        ["Corinthians", "Brasileirão"]
    ],

    conquistas: [],

    noticias: [
        "Mirassol surpreende no campeonato"
    ]
},

{
    nome: "Chapecoense",
    pais: "Brasil",
    descricao: "Verdão do Oeste.",
    escudo: "/img/futebol/chapecoense.png",
    fundacao: 1973,
    estadio: "Arena Condá",
    tecnico: "Rafael Lacerda",
    torcida: "2M",
    cidade: "Chapecó",
    estado: "SC",
    capacidade: "21.000",
    cores: "Verde e Branco",

    titulos: ["Série B","Copa Sul-Americana"],

   elenco: [
    // GOLEIROS
    { numero: 98, nome: "Anderson", posicao: "GOL" },
    { numero: 1, nome: "Rafael Santos", posicao: "GOL" },
    { numero: 30, nome: "Matheus", posicao: "GOL" },

    // DEFENSORES
    { numero: 91, nome: "Bruno Pacheco", posicao: "LE" },
    { numero: 15, nome: "Rafael Thyere", posicao: "ZAG" },
    { numero: 23, nome: "Gustavo Talles", posicao: "LD" },
    { numero: 3, nome: "Eduardo Doma", posicao: "ZAG" },
    { numero: 2, nome: "Marcos Vinícius", posicao: "LD" },
    { numero: 4, nome: "João Paulo", posicao: "ZAG" },
    { numero: 33, nome: "Bruno Leonardo", posicao: "ZAG" },
    { numero: 25, nome: "Victor Caetano", posicao: "ZAG" },
    { numero: 6, nome: "Mancha", posicao: "LE" },
    { numero: 21, nome: "Kauan", posicao: "ZAG" },
    { numero: 35, nome: "Vinícius Eduardo de Almeida", posicao: "ZAG" },
    { numero: 14, nome: "Fernando Carlos da Silva Filho", posicao: "LE" },
    { numero: 15, nome: "Ígor Rampazzo", posicao: "ZAG" },
    { numero: 17, nome: "Luciano Bertolo Ludwig", posicao: "ZAG" },

    // MEIO-CAMPISTAS
    { numero: 27, nome: "Camilo", posicao: "VOL" },
    { numero: 8, nome: "Robert Santos", posicao: "MEI" },
    { numero: 31, nome: "Maurício Garcez", posicao: "ATA" },
    { numero: 97, nome: "Ênio", posicao: "ATA" },
    { numero: 8, nome: "Max", posicao: "MEI" },
    { numero: 7, nome: "Kevin Ramírez", posicao: "ATA" },
    { numero: 22, nome: "Higor Meritão", posicao: "VOL" },
    { numero: 99, nome: "Rafael Carvalheira", posicao: "VOL" },
    { numero: 17, nome: "Vinicius Balieiro", posicao: "VOL" },
    { numero: 5, nome: "João Vitor", posicao: "VOL" },
    { numero: 70, nome: "Rubens Tadeu", posicao: "MEI" },
    { numero: 16, nome: "Bruno Matias", posicao: "VOL" },
    { numero: 26, nome: "Everton", posicao: "LD" },
    { numero: 19, nome: "David Antunes", posicao: "MEI" },
    { numero: 10, nome: "Juan Ferreira Leite", posicao: "MEI" },

    // ATACANTES
    { numero: 11, nome: "Yannick Bolasie", posicao: "ATA" },
    { numero: 10, nome: "Giovanni Augusto", posicao: "ATA" },
    { numero: 18, nome: "Neto Pessoa", posicao: "ATA" },
    { numero: 7, nome: "Marcinho", posicao: "ATA" },
    { numero: 77, nome: "Italo", posicao: "ATA" },
    { numero: 40, nome: "João Henrique Araújo Bom", posicao: "ATA" },
    { numero: 38, nome: "Wermeson", posicao: "ATA" },
    { numero: 7, nome: "Bernardo Nicodem Grezel", posicao: "ATA" }
],

    ultimosJogos: [
        ["D", "Chapecoense x Avaí", "0x1"]
    ],

    proximosJogos: [
        ["Grêmio", "Copa do Brasil"]
    ],

    conquistas: ["Série B"],

    noticias: [
        "Chapecoense tenta voltar à elite"
    ]
}
];

// ===== SISTEMA =====

let indice = 0;

function carregarTime() {
    const t = times[indice];

    document.getElementById("nomeTime").innerText = t.nome;
    document.getElementById("descricao").innerText = t.descricao;
    document.getElementById("escudo").src = t.escudo;

    document.getElementById("fundacao").innerText = t.fundacao;
    document.getElementById("estadio").innerText = t.estadio;
    document.getElementById("tecnico").innerText = t.tecnico;
    document.getElementById("titulos").innerText = t.titulos;
    document.getElementById("torcida").innerText = t.torcida;

    document.getElementById("cidade").innerText = t.cidade;
    document.getElementById("estado").innerText = t.estado;
    document.getElementById("capacidade").innerText = t.capacidade;
    document.getElementById("cores").innerText = t.cores;

    // elenco
    const elenco = document.getElementById("elenco");
    elenco.innerHTML = "";
    t.elenco.forEach(j => {
        elenco.innerHTML += `
        <div class="jogador-card">
            <div class="jogador-numero">${j.numero}</div>
            <div class="jogador-info">
                <div class="nome">${j.nome}</div>
                <div class="posicao">${j.posicao}</div>
            </div>
        </div>`;
    });

    // outros blocos simples (placeholder)
    document.getElementById("ultimosJogos").innerHTML =
        t.ultimosJogos.map(j => `<p>${j[0]} - ${j[1]} (${j[2]})</p>`).join("");

    document.getElementById("proximosJogos").innerHTML =
        t.proximosJogos.map(j => `<p>${j[0]} - ${j[1]}</p>`).join("");

    document.getElementById("conquistas").innerHTML =
        t.conquistas.map(c => `<p>🏆 ${c}</p>`).join("");

    document.getElementById("noticias").innerHTML =
        t.noticias.map(n => `<p>📰 ${n}</p>`).join("");
}

function proximoTime() {
    indice++;
    if (indice >= times.length) indice = 0;
    carregarTime();
}

function pesquisarTime() {
    const valor = document.getElementById("pesquisa").value.toLowerCase();

    const encontrado = times.findIndex(t =>
        t.nome.toLowerCase().includes(valor)
    );

    if (encontrado !== -1) {
        indice = encontrado;
        carregarTime();
    } else {
        document.getElementById("naoEncontrado").classList.add("visivel");
        setTimeout(() => {
            document.getElementById("naoEncontrado").classList.remove("visivel");
        }, 2000);
    }
}

function favoritar() {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = "⭐ Time adicionado aos favoritos!";
    document.getElementById("toastContainer").appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
}

// iniciar
carregarTime();