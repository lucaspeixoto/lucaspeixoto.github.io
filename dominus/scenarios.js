/*const scenarioList = [
	"Pré-História", "Era Do Gelo", "Mitologias", "Espada E Feitiçaria", "Contos De Fadas",
	"Piratas", "Velho Oeste", "Horror Gótico", "Horror Cósmico", "Máfia", "Investigação",
	"Guerra", "Comédia Romântica", "Artes Marciais", "Fantasia Urbana", "Super-Heróis",
	"Tokusatsu", "Cartoons", "Zumbis", "Steampunk", "Cyberpunk", "Dieselpunk", "Solarpunk",
	"Hopepunk", "Ficção Científica", "Fantasia Científica", "Exploração Espacial", "Viagem No Tempo"
];*/

// Lista de entradas para cada cenário
const plotEntries = {
	"Pré-História": {
		"Something happened": [
		"Ataque de predador!",
		"Pequenas Pestes",
		"Deu defeito",
		"O chão se abre",
		"Criança Selvagem",
		"Aquilo é um cometa?"
		],
		"You need": [
		"Coletar recurso",
		"Rugir e morder!",
		"Fugir e correr",
		"Achar comida",
		"Investigar o desconhecido",
		"Mudar-se"
      ],
		"Otherwise": [
		"Estará em perigo",
		"Passará fome",
		"Irá se ferir",
		"Enlouquecerá!",
		"Perderá seu abrigo",
		"O mundo acaba!"
      ]
    },
    "Era Do Gelo": {
      "Something happened": [
			"Parte de sua comunidade saiu para uma caçada e não retornou",
			"Um fenômeno natural coloca sua comunidade em perigo",
			"Chegam rumores de um local paradisíaco e sem neve",
			"Outra comunidade surgiu e está drenando os recursos da região",
			"Uma caverna recém descoberta parece cumprir uma profecia",
			"Os animais selvagens começam a se comportar de forma estranha"
				],
				"You need": [
			"Migrar para outra região",
			"Localizar algo/alguém",
			"Obter recursos",
			"Descobrir mais sobre algo",
			"Fazer/interromper um ritual",
			"Proteger sua comunidade"
				],
				"Otherwise": [
			"A comunidade sofrerá",
			"Um conflito desastroso terá início",
			"Os espíritos da natureza enviarão um castigo",
			"Você virará um pária",
			"Alguém importante partirá",
			"Será o fim da sua comunidade"
      ]
    },
	"Mitologias": {
		"Something happened": [
			"Um eclipse permanente obscureceu o sol",
			"Corujas invadiram a cidade, trazendo notícias misteriosas",
			"Aparece uma criatura de fogo, ameaçando consumir a aldeia",
			"Uma chuva de meteoros enigmática caiu do céu",
			"Uma cidade flutuante surgiu nos céus",
			"Uma antiga divindade se livra de sua prisão mágica"
		],
		"You need": [
			"Encontrar um artefato antigo escondido",
			"Desvendar um enigma",
			"Coletar um elemento raro",
			"Forjar um objeto mágico",
			"Derrotar uma criatura mítica",
			"Descobrir um segredo"
		],
		"Otherwise": [
			"O equilíbrio do mundo será perturbado",
			"A terra sofrerá com inundações catastróficas",
			"Perderá uma oportunidade única de conhecimento",
			"A realidade será distorcida para sempre",
			"Um conhecimento vital será perdido para sempre",
			"A sua divindade desaparecerá"
		]
	},
	"Espada E Feitiçaria": {
		"Something happened": [
			"Você teve um sonho ou uma visão",
			"Alguém próximo foi assassinado",
			"Uma maldição recai sobre você",
			"Algo ou alguém está atrás de você",
			"Um oponente ameaça seu objetivo",
			"Uma oferta de trabalho perigosa"
		],
		"You need": [
			"Encontrar algo/alguém",
			"Destruir algo/alguém",
			"Transportar algo/alguém",
			"Fugir / Sobreviver",
			"Realizar um ritual",
			"Infiltrar-se em um local"
		],
		"Otherwise": [
			"Terá sua alma retirada de você",
			"Seu objetivo ficará inalcançável",
			"Perderá seu bem mais precioso",
			"Será condenado à morte",
			"Será corrompido pela magia",
			"Verá alguém estimado sofrer"
		]
	},
	"Contos De Fadas": {
		"Something happened": [
			"A Vovó ficou doente",
			"Te trancaram em uma torre",
			"Você sofreu uma maldição",
			"Você se perdeu na floresta",
			"Uma criatura te prega uma peça",
			"Um Ser Mágico te ofereceu um \"desejo\""
		],
		"You need": [
			"Fugir",
			"Ajudar",
			"Encontrar",
			"Salvar",
			"Esconder",
			"Quebrar"
		],
		"Otherwise": [
			"O mal vencerá!",
			"Alguém querido sairá ferido",
			"Os fatos se voltarão contra você",
			"Nunca mais achará seu lar",
			"Perderá algo valioso pra você",
			"Voltará ao ponto de partida!"
		]
	},
	"Piratas": {
		"Something happened": [
			"Roubaram o seu navio",
			"Descoberta de mapa lendário",
			"Rica frota mercante zarpando",
			"Uma deidade te faz uma proposta tentadora",
			"Ataques de Monstro Marinho",
			"Maldição despertada!"
		],
		"You need": [
			"De uma carta da Coroa Real",
			"De um bom disfarce",
			"De um novo esconderijo",
			"De novas informações",
			"Desvendar o código",
			"Buscar novo(a) tripulante"
		],
		"Otherwise": [
			"Será preso",
			"Será enforcado",
			"Será jogado aos tubarões",
			"Será abandonado em uma ilha deserta com uma bala",
			"Sofrerá um motim",
			"Ficará à deriva"
		]
	},
	"Velho Oeste": {
		"Something happened": [
				"Natureza",
				"Ataque",
				"Conflito social",
				"Pedido de ajuda",
				"Descoberta",
				"Engano"
			],
		"You need": [
			"Achar uma pessoa",
				"Achar um grupo",
				"Achar um animal",
				"Explorar uma comunidade",
				"Explorar um local",
				"Enfrentar um inimigo",
				"Enfrentar um grupo",
				"Impedir um incidente",
				"Impedir uma reunião",
				"Obter uma informação",
				"Obter um segredo",
				"Proteger uma comunidade",
				"Proteger uma pessoa",
				"Salvar um grupo",
				"Salvar um animal",
				"Buscar justiça",
				"Preservar a honra",
				"Restaurar a paz",
				"Superar um trauma",
				"Sobreviver a um ataque",
				"Consertar um recurso",
				"Recuperar um ingrediente",
				"Recuperar um local",
				"Consertar uma estrutura",
				"Entender um segredo",
				"Controlar uma situação",
				"Participar de uma reunião",
				"Evitar um incidente"
		],
		"Otherwise": [
			"Perda",
			"Opressão",
			"Destruição",
			"Mudança",
			"Disputa",
			"Isolamento"
		]
	},
	"Horror Gótico": {
		"Something happened": [
			"Mistério",
			"Ameaça",
			"Ritual",
			"Sonho",
			"Morte",
			"Poder"
		],
		"You need": [
			"Escapar de uma pessoa",
			"Escapar de um grupo",
			"Escapar de uma criatura",
			"Sobreviver a um evento",
			"Sobreviver a um fenômeno",
			"Enfrentar uma ameaça",
			"Enfrentar um rumor",
			"Impedir um segredo",
			"Encontrar uma pessoa",
			"Encontrar um grupo",
			"Explorar uma criatura",
			"Explorar um local",
			"Descobrir um segredo",
			"Descobrir um rumor",
			"Entender um evento",
			"Entender um fenômeno",
			"Resgatar uma pessoa",
			"Resgatar um grupo",
			"Recuperar uma criatura",
			"Recuperar um objeto",
			"Controlar uma condição",
			"Controlar um plano",
			"Superar uma ameaça",
			"Superar um sacrifício"
		],
		"Otherwise": [
			"Perda",
			"Controle",
			"Destruição",
			"Abandono",
			"Maldição",
			"Sacrifício"
		]
	},
	"Horror Cósmico": {
		"Something happened": [
				"Um estranho e antigo anel foi descoberto",
				"Uma estátua ancestral se animou e causou o caos",
				"Um culto sussurra palavras antigas na noite",
				"Um buraco negro surgiu no céu",
				"Uma tempestade de gafanhotos se aproxima",
				"Uma criatura cósmica despertou"
			],
			"You need": [
				"Consertar uma máquina enigmática",
				"Rastrear uma criatura desaparecida",
				"Descobrir a origem de uma profecia",
				"Recuperar um antigo tomo",
				"Desvendar o segredo do culto",
				"Explorar uma ruína distante"
			],
			"Otherwise": [
				"A realidade começará a distorcer",
				"Pesadelos assombrarão seus sonhos",
				"O tempo começará a se desfazer",
				"Monstros surgirão das sombras",
				"O espaço-tempo ficará instável",
				"Portais para outros mundos se abrirão"
			]
	},
	"Máfia": {
		"Something happened": [
			"Um carregamento vai chegar na cidade",
			"Uma nova lei vai ser aprovada",
			"Uma nova família está na cidade",
			"Encontraram provas de uma tentativa de assassinato",
			"Um acordo precisa ser firmado",
			"Um grande evento vai reunir toda a Família"
		],
		"You need": [
			"Proteger os negócios da família",
			"Entregar um pacote",
			"Negociar uma propina",
			"Quebrar alguns ossos",
			"Planejar um roubo",
			"Conquistar uma aliança"
		],
		"Otherwise": [
			"O novo prefeito vai fechar o cerco",
			"Todos serão presos",
			"Comerciantes não pagarão",
			"Dormirá com os peixes",
			"A sua honra será manchada",
			"O seu passado o alcançará"
		]
	},
	"Investigação": {
		"Something happened": [
			"Uma carta misteriosa chegou sem remetente",
			"Um incêndio suspeito destruiu um prédio histórico",
			"Um tiroteio ocorreu em um beco escuro",
			"Uma série de sequestros assombra a cidade",
			"Uma loja de antiguidades foi invadida e saqueada",
			"Documentos importantes foram roubados"
		],
		"You need": [
			"Decifrar o código em um antigo diário",
			"Encontrar a última página do testamento desaparecido",
			"Descobrir o paradeiro de uma pessoa desaparecida",
			"Investigar uma figura misteriosa",
			"Encontrar a entrada secreta para um local",
			"Encontrar a chave escondida em uma velha casa"
		],
		"Otherwise": [
			"O segredo permanecerá enterrado no passado",
			"A herança se perderá nas mãos erradas",
			"Os artefatos valiosos continuarão a desaparecer",
			"As respostas desaparecerão na escuridão noturna",
			"O caos continuará a se espalhar pela cidade",
			"Os criminosos escaparão impunes"
		]
	},
	"Guerra": {
		"Something happened": [
			"Uma tropa inimiga ataca o seu acampamento",
			"Explosões acontecem em pontos estratégicos",
			"Os seus líderes foram capturados",
			"Uma tropa aliada foi emboscada e está cercada",
			"Informações vitais de seu país são vazadas para o inimigo",
			"Você está sozinho com poucos soldados aliados"
		],
		"You need": [
			"Capturar um líder inimigo",
			"Agrupar novos aliados",
			"Derrotar tropas inimigas",
			"Ocupar um local importante",
			"Destruir os equipamentos do inimigo",
			"Obter mais recursos"
		],
		"Otherwise": [
			"O seu país será invadido e dominado",
			"A sua tropa será capturada",
			"O seu líder será assassinado",
			"Muitas pessoas inocentes irão morrer",
			"Recursos importantes serão obtidos pelos inimigos",
			"Vocês perderão um local muito estratégico"
		]
	},
	"Comédia Romântica": {
		"Something happened": [
			"Sua 'amizade' de infância vai se mudar",
			"Novo(a) colega de trabalho",
			"Alguém te pediu pra fingir que estão juntos",
			"Depois de vocês brigarem, aquela pessoa não sai da sua cabeça",
			"Vocês se reencontram depois de muitos anos",
			"Você entrou em um videogame de relacionamentos!"
		],
		"You need": [
			"Abrir mão",
			"Marcar um encontro",
			"Realizar um desejo",
			"Resgatar uma memória",
			"Expor uma fraqueza",
			"Desfazer algo"
		],
		"Otherwise": [
			"Perderá contato",
			"Causará uma grande decepção",
			"Ficará com raiva de você",
			"Passará a te evitar",
			"Você perde seu amor!",
			"Sofrerá de arrependimento"
		]
	},
	"Artes Marciais": {
		"Something happened": [
			"Criminosos ameaçam a redondeza",
			"O torneio está se aproximando",
			"Um rival contesta a sua soberania",
			"Você é falsamente acusado de algo que não fez",
			"A sua academia de treino é fechada",
			"Uma pessoa próxima precisa muito de você"
		],
		"You need": [
			"Embarcar em uma jornada espiritual",
			"Servir e proteger um grupo de pessoas vulneráveis",
			"Vencer o grupo rival de maneira honesta",
			"Viver novas experiências e tirar lições disso",
			"Descobrir os responsáveis e levá-los à justiça",
			"Vencer um oponente muito poderoso"
		],
		"Otherwise": [
			"A sua autoconfiança será extremamente abalada",
			"A sua reputação irá para o ralo",
			"Você perderá tudo o que já conquistou",
			"Uma pessoa importante para você se tornará sua inimiga",
			"Inimigos sairão por cima",
			"Uma desgraça cairá sobre quem você ama"
		]
	},
	"Fantasia Urbana": {
		"Something happened": [
				"Uma poderosa relíquia mágica cai em mãos erradas",
				"Dragões ancestrais entram em disputa por território",
				"Um raro e importante livro mágico desapareceu",
				"Um talentoso engenheiro gnomo foi sequestrado",
				"Há sinais de que uma antiga profecia está se realizando",
				"Gangues de criaturas entram em conflito"
			],
			"You need": [
				"Convencer duas facções rivais a unir forças",
				"Encontrar um objeto mágico",
				"Resolver uma disputa entre seres sobrenaturais",
				"Eliminar uma ameaça",
				"Descobrir os traidores",
				"Proteger um segredo"
			],
			"Otherwise": [
				"Um culto secreto ressuscitará um antigo inimigo",
				"Uma misteriosa ordem de magos tomará o poder",
				"Um mal ancestral será libertado",
				"A destruição da cidade será iminente",
				"Uma conspiração obscura ganhará força",
				"Uma facção de criaturas acabará com todas as outras"
			]
	},
	"Super-Heróis": {
		"Something happened": [
			"Um objeto de grande poder está prestes a cair em mãos erradas",
			"Um grande mal surge repentinamente em seu mundo",
			"Uma organização secreta tem um plano para aniquilar os super-heróis",
			"Uma pessoa importante está em perigo",
			"Um crime em andamento na sua cidade",
			"Um poderoso super-herói perdeu o controle"
		],
		"You need": [
			"Proteger algo/alguém",
			"Recuperar algo/alguém",
			"Destruir algo/alguém",
			"Investigar algo/alguém",
			"Infiltrar-se em um local",
			"Aprender um novo poder"
		],
		"Otherwise": [
			"O mundo como conhece será destruído",
			"Alguém que você ama perecerá",
			"Muitas pessoas sofrerão/morrerão",
			"Um super vilão ou uma organização criminosa reinará",
			"Você perderá sua licença de super-herói",
			"Você perderá seus poderes"
		]
	},
	"Tokusatsu": {
		"Something happened": [
			"Cristais negros surgem pela cidade",
			"Portais dimensionais trazem aberrações sombrias",
			"Robôs tomam consciência e se voltam contra os humanos",
			"Paradoxos temporais distorcem a realidade",
			"Um eclipse raro torna os vilões mega poderosos",
			"Clones malignos dos heróis atormentam a população"
		],
		"You need": [
			"Descobrir quem está por trás dos acontecimentos",
			"Encontrar uma pessoa que tem as respostas",
			"Encontrar um objeto que lhe ajudará",
			"Descobrir a origem do problema",
			"Derrotar o vilão que está envolvido",
			"Impedir que o problema se agrave e se espalhe"
		],
		"Otherwise": [
			"O vilão se tornará mais forte permanentemente",
			"O seu grupo de heróis irá desaparecer",
			"Neo-Tokyo será tomada pelo mal",
			"A sua base de operações será destruída",
			"Pessoas inocentes sofrerão as consequências",
			"Você não poderá mais ser um herói"
		]
	},
	"Cartoons": {
		"Something happened": [
			"Foi capturado pelo antagonista",
			"Dispositivo acionado acidentalmente",
			"Invasão por um grupo",
			"Uma competição tem início",
			"Magia maluca fora de controle",
			"Um antagonista tem um plano perigoso"
		],
		"You need": [
			"Achar uma coisa",
			"Impedir algo/alguém",
			"Aumentar a confusão",
			"Descobrir algo",
			"Salvar o mundo",
			"Convencer alguém"
		],
		"Otherwise": [
			"As cores sumirão",
			"Acabará a felicidade",
			"O mundo explodirá",
			"Você perderá tudo",
			"Seu segredo será revelado",
			"Você será apagado"
		]
	},
	"Zumbis": {
		"Something happened": [
			"Seu abrigo não é mais seguro",
			"Disputa com uma facção",
			"Há notícias de uma possível cura",
			"Alguém que você ama foi infectado",
			"Os suprimentos acabaram",
			"Recebeu um mapa para um lugar seguro"
		],
		"You need": [
			"Escoltar algo/alguém",
			"Achar algo/alguém",
			"Invadir um lugar",
			"Descobrir algo",
			"Proteger um lugar",
			"Capturar alguém"
		],
		"Otherwise": [
			"Tudo estará perdido",
			"Você/alguém morrerá",
			"Um segredo será revelado",
			"Você será escravizado",
			"Alguém será tirado de você",
			"Você virará um zumbi"
		]
	},
	"Steampunk": {
		"Something happened": [
			"O rei está desaparecido e não deixou nenhuma pista ou sinal",
			"Um cientista louco cria uma invenção mirabolante e perigosa",
			"Uma irmandade obscura surge e está te perseguindo",
			"Revolucionários querem derrubar a monarquia",
			"Um reino vizinho inimigo declara guerra",
			"Um grande evento social está prestes a ocorrer"
		],
		"You need": [
			"Derrotar o vilão do mal",
			"Destruir a arma diabólica",
			"Salvar a pessoa em perigo",
			"Encontrar um objeto raro",
			"Prender os criminosos",
			"Proteger a honra"
		],
		"Otherwise": [
			"Um grupo maligno irá controlar todo o comércio",
			"O exército inimigo irá dominar o seu reino",
			"O vilão irá comandar a vida de todos",
			"Pessoas próximas a você irão perder tudo",
			"Você será exilado da sociedade para sempre",
			"O reino estará arruinado e uma nova nação surgirá"
		]
	},
	"Cyberpunk": {
		"Something happened": [
			"Gangues entram em guerra por um território",
			"Um Corporativo quer destruir todo um bairro",
			"Uma Inteligência Artificial sai do controle",
			"A mídia coloca a sua cabeça a prêmio",
			"Um caçador de recompensas pede a sua ajuda",
			"Pessoas começam a desaparecer"
		],
		"You need": [
			"Chantagear uma pessoa",
			"Ameaçar alguém",
			"Encontrar um esconderijo seguro",
			"Roubar algo importante",
			"Investigar um local ou pessoa",
			"Proteger algo ou alguém"
		],
		"Otherwise": [
			"A sua vida terminará em breve",
			"Todos que você conhece cairão em desgraça",
			"Alguém importante para você irá sofrer",
			"Você terá que viver em uma eterna fuga",
			"Tudo o que você possui será tirado de você",
			"Uma grande oportunidade de subir na vida será perdida"
		]
	},
	"Dieselpunk": {
		"Something happened": [
			"As estradas estão mais perigosas",
			"As reservas de combustível foram sabotadas",
			"Um tremor de terra revelou recursos valiosos",
			"A corrida anual vai acontecer",
			"A água acabou nos reservatórios",
			"Uma profecia antiga vai se realizar"
		],
		"You need": [
			"Juntar recursos essenciais para passar a estação",
			"Convencer os sobreviventes a se unirem",
			"Conseguir viajar para um Refúgio",
			"Provar suas habilidades no volante",
			"Recuperar evidências de um na zona proibida",
			"Atravessar o deserto com seu carro"
		],
		"Otherwise": [
			"Será preso pelo chefe de guerra!",
			"Vai ser exilado para o deserto.",
			"Seu carro vai virar sucata!",
			"Será responsabilizado pelas consequências",
			"Morrerá sem combustível",
			"Pessoas próximas irão sofrer"
		]
	},
	"Solarpunk": {
		"Something happened": [
			"Falta de recurso",
			"Surge uma nova doença",
			"Desastre natural",
			"Animais invadem cidades",
			"Levante Supremacista",
			"Crime Ambiental"
		],
		"You need": [
			"Buscar uma nova fonte",
			"Enfrentar desavenças",
			"Pesquisar novo lugar",
			"Apaziguar conflitos",
			"Recriar estrutura",
			"Buscar a verdade"
		],
		"Otherwise": [
			"Maus governantes tomarão o poder.",
			"A comunidade passará fome.",
			"Perderá sua moradia.",
			"Alguém próximo sofrerá.",
			"Perderá uma pessoa querida.",
			"Você correrá risco de vida."
		]
	},
	"Hopepunk": {
		"Something happened": [
			"Policiais batem à sua porta!",
			"Você descobre um infiltrado no grupo",
			"Um membro importante do grupo desapareceu",
			"Você recebe um pedido de socorro",
			"Os equipamentos do grupo foram furtados",
			"Seus planos de revolução foram descobertos"
		],
		"You need": [
			"Roubar informações confidenciais",
			"Entrar em contato com um grupo numa cidade vizinha",
			"Sabotar uma instalação",
			"Descobrir a identidade de um traidor",
			"Invadir um local fortemente protegido",
			"Recuperar uma confiança perdida"
		],
		"Otherwise": [
			"O seu grupo inteiro será desfeito de maneira trágica",
			"Todo o movimento de resistência será desmantelado",
			"Você será preso e isolado de tudo e de todos",
			"Todos os seus amigos serão presos",
			"Não haverá mais nenhum local seguro para se reunirem",
			"Todos os meios de resistência serão tirados de você"
		]
	},
	"Ficção Científica": {
		"Something happened": [
			"O radar da nave acusa a aproximação de vários objetos",
			"Um longínquo sinal de S.O.S. é captado",
			"Os recursos naturais ficam escassos",
			"Um planeta belicoso declara guerra",
			"Vocês sofrem um ataque político de outro planeta",
			"Um fenômeno astrológico nocivo está próximo"
		],
		"You need": [
			"Analisar uma substância",
			"Contatar uma pessoa",
			"Conduzir uma nave",
			"Decifrar uma mensagem",
			"Desenvolver uma tecnologia",
			"Acessar uma instalação"
		],
		"Otherwise": [
			"O seu planeta não será mais habitável",
			"O sol irá explodir, sem chance de escapar",
			"Terá início um novo período de guerra galáctica",
			"Todo um planeta deverá ser evacuado",
			"Viajar pelo espaço não será mais possível",
			"A paz entre os humanos não existirá mais"
		]
	},
	"Fantasia Científica": {
		"Something happened": [
			"O Cristal Estelar está desaparecido",
			"Uma antiga civilização ressurgiu sem explicações",
			"Dois planetas entram em uma guerra mortal",
			"Uma praga alienígena se espalha pelo planeta",
			"O núcleo do seu planeta está prestes a colapsar",
			"Ruínas antigas foram profanadas por salteadores"
		],
		"You need": [
			"Enfrentar a fúria da natureza",
			"Pacificar uma guerra entre grupos rivais",
			"Vencer diversos adversários em um torneio intergaláctico",
			"Forjar alianças inesperadas",
			"Viajar para o planeta proibido",
			"Fugir do planeta em que está"
		],
		"Otherwise": [
			"Criaturas malignas ancestrais serão despertadas",
			"Uma maldição tornará o planeta todo estéril",
			"Uma mortal arma alienígena será ativada",
			"Um regime de opressão tomará todos os planetas",
			"Criaturas sinistras surgirão de portais interdimensionais",
			"Uma tempestade elétrica arrasará todo o planeta"
		]
	},
	"Exploração Espacial": {
		"Something happened": [
			"Uma nave-planeta mortal em construção",
			"Sinais misteriosos captados",
			"Artefatos ancestrais roubados",
			"Assassinato do Imperador estelar",
			"Crise na nova colônia do Império",
			"Ritual catastrófico do culto psiônico"
		],
		"You need": [
			"Investigar a situação",
			"Conseguir aliados",
			"Enfrentar uma ameaça",
			"Meditar um conflito",
			"Encontrar um objeto",
			"Ir a um local inexplorado"
		],
		"Otherwise": [
			"Uma guerra terá início",
			"A opressão aumentará",
			"Será o início do fim",
			"Vidas serão ceifadas",
			"Você será preso",
			"Algo terrível despertará"
		]
	},
	"Viagem No Tempo": {
		"Something happened": [
			"Estranhos símbolos aparecem gravados nas paredes",
			"Fragmentos de um diário antigo foram encontrados",
			"Estranhas figuras aparecem em fotografias antigas",
			"Um relógio antigo começou a girar ao contrário",
			"Fragmentos de conversas do futuro foram ouvidos",
			"Uma névoa temporal começou a se espalhar"
		],
		"You need": [
			"Descobrir a senha do antigo dispositivo temporal",
			"Consertar o mecanismo que regula a passagem do tempo",
			"Recuperar o artefato antes do último pôr do sol",
			"Investigar o mistério do vórtice temporal",
			"Encontrar o amuleto para estabilizar o tempo",
			"Resolver o enigma para desativar o loop temporal"
		],
		"Otherwise": [
			"Eventos cruciais da história serão alterados",
			"A sua existência ficará em risco",
			"O tempo será acelerado até o infinito",
			"Todos ficarão presos em uma realidade alternativa estranha",
			"O fluxo temporal ficará descontrolado",
			"Pessoas próximas ficarão perdidas no tempo"
		]
	}
};

const archetypesEntries = { 
  "Pré-História": {
		"Arquétipo": [
			"Da Paz. Não gosta de violência, é excelente em coletar alimentos e recursos, esconder-se e fugir.",
			"Xereta Cientista. Tem curiosidade impulsiva, é hábil em investigar, rastrear e criar engenhocas.",
			"Força Selvagem. É forte e brutal, lançando-se aos predadores e adversários sem cuidado.",
			"Modernista Rupestre. Bom em plantio, estocagem e abrigo. Ruim com as imensas criaturas.",
			"Amante da Aventura. Se vira em qualquer bioma. Só leva o que cabe nos bolsos.",
			"Filhote das Feras. Se sente seguro perto das feras e só sabe interagir com elas."
		]
	},
  "Era Do Gelo": {
		"Arquétipo": [
			"Artesão. Especialista em transformar recursos brutos em ferramentas.",
			"Caçador. Especialista em rastrear e abater feras para servirem de alimento.",
			"Contador de histórias. Especialista em entreter e espalhar notícias entre comunidades.",
			"Guerreiro. Especialista em combate contra outros hominídeos.",
			"Explorador. Especialista em desbravar territórios desconhecidos e achar locais de interesse.",
			"Xamã. Especialista em conhecimentos místicos, ervas e rituais."
		]
	},
  "Mitologias": {
		"Arquétipo": [
			"Herói Ancestral. Descendente direto de uma antiga linhagem de heróis ou deuses.",
			"Mago Perdido. Erudito das artes arcanas, em busca de segredos mágicos e feitiços poderosos.",
			"Caçador de Relíquias. Aventureiro dedicado a encontrar artefatos mágicos e antigas relíquias.",
			"Sacerdote Divino. Servo devoto de uma divindade, capaz de invocar bênçãos e realizar milagres.",
			"Xamã Elemental. Uno com a natureza, é capaz de invocar e controlar elementos e espíritos.",
			"Alquimista Curioso. Mestre na criação de poções e experimentação com substâncias mágicas."
		]
	},
  "Espada E Feitiçaria": {
		"Ocupação": [
			"Mercenário(a) / Soldado(a)",
			"Ladrão(a) / Pirata",
			"Caçador(a) / Mercador(a)",
			"Feiticeiro(a) / Sacerdote(isa)",
			"Alquimista / Herbalista",
			"Curandeiro(a) / Menestrel"
		],
		"Objetivo/Ambição": [
			"Vingança / Posição política",
			"Conquista / Referência religiosa",
			"Magia / Conhecimento secreto",
			"Restauração / Associação criminosa",
			"Poder / Pacto sombrio",
			"Reputação / Solo sagrado"
		],
		"Traço": [
			"Arrogante",
			"Desconfiado(a)",
			"Ganancioso(a)",
			"Egoísta",
			"Impaciente",
			"Mentiroso(a)"
		]
	},
  "Contos De Fadas": {
		"Arquétipo": [
			"Inconsequência. Não teme os perigos e age sem pensar. (role em desvantagem quando agir com cautela)",
			"Ingenuidade. Crença cega na bondade dos outros. (role com desvantagem quando agir com desconfiança ou sem acreditar em alguém)",
			"Alienação. Não tem atenção para o que acontece ao redor. (role com desvantagem quando tentar perceber algo, seja algum cheiro, som, pessoa, ser, o que for)",
			"Teimosia. Não deixa que suas convicções sejam abaladas. (role com desvantagem quando decidir mudar de atitude ou for agir por sugestão de outros)",
			"Passividade. Teme confrontos e discussões, sempre se curvando à vontade de outros. (role com desvantagem quando enfrentar alguém, seja física ou verbalmente)",
			"Agressividade. Tenta resolver as coisas de qualquer jeito, gritando e esperneando. (role com desvantagem quando tiver que resolver algo no diálogo)"
		]
	},
  "Piratas": {
		"Arquétipo": [
			"Pilantra. Seu estilo é o do malandro, você não só é bom em enganar como adora fazer isso.",
			"Heroico. Seu sonho é entrar para a história com um feito épico!",
			"Almofadinha. Ser nobre era um saco e você fugiu para uma vida de aventuras.",
			"Tenebroso. Você sente prazer em subjugar e torturar. Seu convés é lavado com sangue.",
			"Justiceiro. Você é contra o sistema e sempre lutará pelo povo oprimido.",
			"Bon Vivant. Com olhar romântico e espírito livre, vive pela emoção e para pagar seus custos."
		]
	},
  "Velho Oeste": {
		"Nativo - Especialidade": [
			"Ervas / Natureza",
			"Combate / Defesa",
			"Liderança / Orientação",
			"Caça / Pesca",
			"Rituais / Religião",
			"Ferramentas / Artesanato"
		],
		"Não Nativo - Profissão": [
			"Fora da lei / Mercenário",
			"Caçador de recompensas / Rastreador",
			"Caçador / Domador",
			"Mercador / Artista",
			"Rancheiro / Mineiro",
			"Médico / Charlatão"
		]
	},
  "Horror Gótico": {
		"Criatura": [
			"Assombração (ex: fantasma, espectro)",
			"Infernal (ex: demônio, caído, cão do inferno)",
			"Encantado (ex: bruxo, fada, duende)",
			"Licantropo (escolha o animal em que se transforma)",
			"Morto-vivo (ex: vampiro, múmia, zumbi)",
			"Reanimado (ex: monstro do Dr. Frankenstein, golem)"
		],
		"Profissão": [
			"Acadêmico(a) / Médico(a)",
			"Artista / Criminoso(a)",
			"Caçador(a) / Religioso(a)",
			"Detetive / Policial",
			"Jornalista / Escritor(a)",
			"Místico(a) / Ocultista"
		]
},
  "Horror Cósmico": {
		"Arquétipo": [
			"Detetive Cético. Um investigador que procura explicação lógica para os eventos estranhos.",
			"Ocultista Acólito. Um estudante das artes ocultas e do sobrenatural.",
			"Artista Atormentado. Um artista cujas obras são influenciadas por visões cósmicas.",
			"Acadêmico Perspicaz. Um estudioso que se dedica a desvendar segredos antigos.",
			"Jornalista Investigativo. Um repórter que segue eventos misteriosos e teorias da conspiração.",
			"Arqueólogo. Um aventureiro corajoso que busca artefatos antigos e conhecimento perdido."
		]
	},
  "Máfia": {
		"Arquétipo": [
			"Grandão. Você sempre foi o músculo da operação.",
			"Baby-face. Seu rosto amigável traz tanto soluções quanto problemas.",
			"Contador. Quebrando a cabeça com números, enquanto outros quebram os joelhos.",
			"Herdeiro. Seu pai é muito respeitado. Você quer o respeito.",
			"Recém Chegado. O primo que acabou de chegar. Quer achar seu lugar.",
			"Desertor. Você quer sair da família. Isso não é tão simples."
		]
	},
  "Investigação": {
		"Arquétipo": [
			"Detetive Cínico. Investigador particular endurecido pela vida, sempre desconfiado e observador.",
			"Repórter Intrépido. Jornalista destemido que busca a verdade, disposto a arriscar tudo.",
			"Policial Aposentado. Ex-policial que usa sua experiência para resolver crimes por conta própria.",
			"Femme Fatale. Misteriosa e sedutora, com uma capacidade surpreendente de manipulação.",
			"Artista Boêmio. Navega pelo submundo da cidade em busca de inspiração.",
			"Espião Carismático. Agente secreto que opera nas sombras da cidade coletando informações."
		]
	},
  "Guerra": {
		"Arquétipo": [
			"Infantaria. Soldado raso, possui vantagem ao rolar contra outras infantarias.",
			"Infantaria pesada. Equipado com armamento explosivo, possui vantagem contra veículos.",
			"Médico. Primeiros socorros, possui vantagem ao rolar para curar uma pessoa.",
			"Condutor. Piloto da equipe, possui vantagem ao rolar para conduzir qualquer veículo.",
			"Sargento. Líder de batalhão, possui vantagem ao rolar para liderar um grupo de soldados.",
			"Franco-atirador. Sniper, possui vantagem ao rolar para se camuflar no ambiente."
		]
	},
  "Comédia Romântica": {
		"Arquétipo": [
			"Amante de Animais. Gótico. Atrapalhado.",
			"Estudante Modelo. Cinéfila. Coleção de Bugigangas.",
			"Gamer. Pavio Curto. Zen.",
			"Tagarela. Nerd do Sci-Fi. Devora-Livros.",
			"Bicho do Mato. Fã de Banda. Pura Meigura.",
			"Atleta. Antisocial. Piadista.",
			"Amante de Animais. Gótico. Piadista.",
			"Estudante Modelo. Cinéfila. Atrapalhado.",
			"Gamer. Pavio Curto. Devora-Livros.",
			"Tagarela. Nerd do Sci-Fi. Fã de Banda.",
			"Bicho do Mato. Pura Meigura. Zen.",
			"Atleta. Antisocial. Coleção de Bugigangas.",
			"Amante de Animais. Gótico. Zen.",
			"Estudante Modelo. Cinéfila. Piadista.",
			"Gamer. Pavio Curto. Fã de Banda.",
			"Tagarela. Nerd do Sci-Fi. Pura Meigura.",
			"Bicho do Mato. Fã de Banda. Devora-Livros.",
			"Atleta. Antisocial. Atrapalhado."
		]
	},
  "Artes Marciais": {
		"Arquétipo": [
			"Competidor. Você se especializou em treinos e torneios, tendo conquistado diversas medalhas.",
			"Combatente do Crime. Você usa os seus talentos para enfrentar bandidos e ladrões.",
			"Instrutor. Você possui uma academia e a confiança de muitos alunos.",
			"Dublê de Cinema. Você se arrisca em cenas perigosas de filmes de ação e aventura.",
			"Aprendiz. Você faz parte de uma academia e um mestre lhe ajuda sempre que pode.",
			"Autodidata. Você aprendeu sozinho tudo o que sabe sobre artes marciais."
		]
	},
  "Fantasia Urbana": {
		"Profissão": [
			"Detetive. Investigador astuto com um passado misterioso.",
			"Jornalista. Sempre em busca de notícias sobrenaturais.",
			"Colecionador. Possui diversos artefatos mágicos.",
			"Diplomata. Tem boas relações com todas as criaturas.",
			"Caçador. Quer livrar o mundo das aberrações.",
			"Estudioso. Tem acesso a grandes conhecimentos ocultos."
		],
		"Poder": [
			"Arcano",
			"Licantropia",
			"Clarividência",
			"Imortalidade",
			"Angelical",
			"Demoníaco"
		]
	},
  "Super-Heróis": {
		"Poderes": [
			"Vigilante. Habilidades de espionagem avançada, camuflagem e estratégias furtivas.",
			"Metamorfo(a). Capacidade de mudar de forma e imitar qualquer ser ou objeto.",
			"Bruto(a). Superforça, resistência extrema e habilidades de combate corpo a corpo.",
			"Psíquico(a). Poderes mentais, como telepatia, telecinese e controle mental.",
			"Velocista. Habilidade de correr a velocidades extraordinárias, além de reflexos rápidos.",
			"Super soldado(a). Força sobre-humana, resistência aprimorada e habilidades de combate militares."
		],
		"Tipo": [
			"Super espião(ã). Habilidades de infiltração, inteligência estratégica e uso de gadgets.",
			"Mimético(a). Capacidade de imitar habilidades ou poderes de outros heróis ou vilões.",
			"Armadurado(a). Capacidade de vestir armaduras tecnologicamente avançadas que oferecem alta defesa.",
			"Mago(a). Conhecimento de artes arcanas e habilidade para lançar feitiços e manipular energia mágica.",
			"Disparador(a) de rajadas. Capacidade de lançar rajadas de energia ou de força.",
			"Acrobata. Habilidades de movimento ágil, flexibilidade e equilíbrio excepcionais."
		],
		"Equipamento": [
			"Inventor(a). Ferramentas de alta tecnologia, gadgets e dispositivos mecânicos criados para combate e espionagem.",
			"Controlador(a) de elementos. Dispositivos ou habilidades para manipular fogo, água, terra e ar.",
			"Cósmico(a). Equipamento alienígena ou relacionado com o espaço que amplifica poderes ou oferece habilidades especiais.",
			"Manipulador(a) de substâncias. Equipamentos ou poderes que permitem alterar a estrutura e composição de materiais.",
			"Manipulador(a) corporal. Equipamentos que aumentam força física ou permitem controlar partes do corpo com precisão.",
			"Mestre em artes marciais. Habilidades de combate sem armas, ou com uso de armas especializadas."
		]
	},
  "Tokusatsu": {
		"Arquétipo": [
			"Destemido Líder. Corajoso e carismático, inspira todos com sua determinação e paixão.",
			"Gênio da Tecnologia. Inteligente e inventivo, fornece equipamentos e soluções inovadoras.",
			"Solitário Enigmático. Misterioso e introspectivo, possui conhecimento esotérico e oculto.",
			"Atleta Impulsivo. Energético e cheio de entusiasmo, age com emoção e rapidez.",
			"Estrategista Tático. Calculista e astuto, analisa cada situação e cria planos detalhados.",
			"Guardião Leal. Protetor e devotado, coloca a segurança dos outros acima de tudo."
		]
	},
  "Cartoons": {
		"Espécie": [
			"Animal", 
			"Inseto", 
			"Planta falante", 
			"Alienígena", 
			"Máquina consciente", 
			"Monstro", 
			"Ser mágico", 
			"Humano", 
			"Humanóide", 
			"Objeto animado"
		],
		"Profissão": [
			"Policial", 
			"Detetive", 
			"Bombeiro", 
			"Cientista", 
			"Astronauta", 
			"Agente secreto", 
			"Vendedor", 
			"Cozinheiro", 
			"Mordomo", 
			"Esportista", 
			"Ator", 
			"Cantor", 
			"Pirata", 
			"Marinheiro", 
			"Piloto", 
			"Agricultor", 
			"Caçador", 
			"Pescador"
		],
		"Traço": [
			"Egoísta", 
			"Ambicioso", 
			"Solidário", 
			"Trapaceiro", 
			"Mal-humorado", 
			"Ingênuo"
		]
	},
  "Zumbis": {
		"Arquétipo": [
			"Durão(ona). Vantagem em lutas corporais e em resistir a ferimentos.",
			"Caçador(a). Vantagem em lutas a distância e em rastreamento.",
			"Socorrista. Vantagem para tratar ferimentos e doenças.",
			"Faz-tudo. Vantagem para transformar materiais/peças em objetos úteis.",
			"Sabichão(ona). Vantagem para solucionar problemas e perceber riscos no ambiente.",
			"Bom(a) de papo. Vantagem para convencer pessoas."
		]
	},
  "Steampunk": {
		"Arquétipo": [
			"Engenheira(o) do vapor. Cria as mais maravilhosas geringonças à vapor e ama o metal.",
			"Detetive particular. Investiga as mais minuciosas pistas para descobrir a verdade.",
			"Cientista inventor. Máquinas imensas que fazem de tudo são sua especialidade.",
			"Dama / Cavalheiro. Uma pessoa nobre e honrada que frequenta a alta sociedade.",
			"Aventureiro(a) explorador(a). Intrépido e impetuoso em busca de tesouros e emoções.",
			"Jornalista amador. Nenhum segredo ou ameaça passa despercebido ao seu faro apurado."
		]
	},
  "Cyberpunk": {
		"Arquétipo": [
			"Hacker. Você sabe tudo sobre computadores e a internet.",
			"Solo. Mais metal do que homem, o seu aspecto amedronta as pessoas e você gosta disso!",
			"Infiltrador. Nenhum lugar é seguro o suficiente para que não possa ser invadido.",
			"Atravessador. Você sabe onde conseguir qualquer coisa, em qualquer hora do dia.",
			"Bon-vivant. Todos te conhecem e você sabe usar as pessoas para sua própria vantagem.",
			"Fixxxer. As máquinas são a sua segunda paixão, a primeira são as suas ferramentas!"
		]
	},
  "Dieselpunk": {
		"Arquétipo": [
			"Músculo. Você é grande, pesado. Machucar e fazer façanhas físicas é com você.",
			"Cabeça. Pensamento ágil, consegue operar sistemas e máquinas antigas.",
			"Volante. Atrás de um volante, não há igual. Você é uma fera das estradas.",
			"Vigia. Olhos atentos e sempre no horizonte. Consegue atirar muito bem.",
			"Boca. Sempre sabe o que dizer. Carisma em pessoa. Mesmo que isso traga problemas.",
			"Novato. Nunca conheceu um mundo que não esse. Quer provar seu valor para os seus."
		]
	},
  "Solarpunk": {
		"Arquétipo": [
			"Guarda Ambiental. Acesso a áreas de alta-preservação e uso de armas de contenção.",
			"Agente de Saúde. Conhecimento de medicamentos e realização de procedimentos médicos.",
			"Agricultor(a). Conhecimento sobre plantio, solo e clima.",
			"Engenheiro(a). Habilidade para criação de reparo de estruturas e mecanismos.",
			"Servidor(a) Público(a). Acesso ao sistema de governo, documentos e contatos.",
			"Comerciante. Habilidade para comércio e manipulação de produtos."
		]
	},
  "Hopepunk": {
		"Arquétipo": [
			"Professor(a). Possui grande conhecimento dentro de uma área específica.",
			"Enfermeiro(a). Sabe prestar primeiros socorros e tem acesso a material proibido.",
			"Engenheiro(a). Constrói e conserta de um tudo.",
			"Advogado(a). Entende de tudo das leis e pode aliviar a barra quando necessário.",
			"Atleta. Super forte e ágil, supera qualquer obstáculo físico.",
			"Vendedor(a). Consegue levar qualquer pessoa na lábia."
		]
	},
  "Ficção Científica": {
		"Arquétipo": [
			"Engenheiro aeroespacial. Recebe vantagem ao realizar reparos mecânicos e eletrônicos.",
			"Fuzileiro e piloto de caças. Recebe vantagem ao pilotar naves e intimidar pessoas.",
			"Biomédico pesquisador. Recebe vantagem ao tratar de ferimentos.",
			"Cientista inventor. Recebe vantagem ao pesquisar e desenvolver novas tecnologias.",
			"Caçador de recompensas. Recebe vantagem no trato social e no escambo.",
			"Hacker infiltrador. Recebe vantagem ao lidar com computadores."
		]
	},
  "Fantasia Científica": {
		"Arquétipo": [
			"Piloto Espacial. Recebe vantagem ao pilotar veículos e combater com armas lasers.",
			"Xamã Intergaláctico. Recebe vantagem ao interagir com espíritos e energias místicas.",
			"Cientista Exobiológico. Recebe vantagem ao estudar e compreender formas de vida alienígenas.",
			"Caçador de Relíquias. Recebe vantagem ao explorar ruínas e combater criaturas estranhas.",
			"Engenheiro Alien. Recebe vantagem ao criar e consertar qualquer tipo de tralha, humana ou não.",
			"Guerreiro Cósmico. Recebe vantagem em artes marciais e domina as forças do universo."
		]
	},
  "Exploração Espacial": {
		"Descrição": [
			"Pirata intergaláctico",
			"Caçador psiônico",
			"Androide carismático",
			"Diplomata do Império",
			"Mercenário rebelde",
			"Cientista explorador"
		],
		"Aparência": [
			"Humanoide",
			"Insectóide",
			"Fungoide",
			"Monstruosa",
			"Vegetal",
			"Mineral"
		],
		"Característica": [
			"Chifres",
			"Penas",
			"Escamas",
			"Pelos",
			"Múltiplos membros",
			"Carapaça"
		]

	},
  "Viagem No Tempo": {
		"Arquétipo": [
			"Cientista Temporal. Focado na pesquisa e na compreensão dos paradoxos temporais.",
			"Historiador Curioso. Tem conhecimento abrangente de diferentes períodos e suas culturas.",
			"Investigador de Anomalias. Especializado em identificar e resolver anomalias temporais.",
			"Engenheiro Temporal. Especialista em construção e reparo de dispositivos de viagem no tempo.",
			"Viajante Cronológico. Já experimentou várias eras e sabe se adaptar a diferentes períodos.",
			"Jornalista Investigativo. Especialista em descobrir informações secretas ao longo das viagens."
		]
	}
};

const sceneEntries = {
	"Pré-História": {
		"Place": ["No olho d'água", "Entre rochedos", "Na toca", "Mar", "Em casa", "Pomares"],
		"Character": ["Família das Cavernas", "Criança perdida", "Nômade(s)", "Pessoa muito estranha", "Caçador(a) solitário(a)", "Deuses"],
		"Event": ["Manada de herbívoros", "Natureza Selvagem (Tabela Extra)", "Ovos eclodem", "Rastros estranhos", "Tempestade", "Astronautas!", "Grande pedra preta e lisa"]
	},
	"Era Do Gelo": {
		"Place": ["Acampamento", "Túnel natural", "Floresta congelada", "Caverna", "Montanha", "Geleira", "Rio congelado", "Cânion", "Campo de gêiseres", "Monumento misterioso"],
		"Character": ["Líder de comunidade", "Xamã enigmático", "Pária ermitão", "Criança perdida", "Alguém criado por lobos", "Uma colecionadora de ossos"],
		"Event": ["Encontro com feras!", "Um fenômeno natural", "Disputa por recursos", "Forasteiros pedem ajuda", "Uma coisa presa no gelo", "Passagem secreta?"]
	},
	"Mitologias": {
		"Place": ["Mercado de Bazar", "Vila Costeira", "Ruínas Antigas", "Templo Celestial", "Cemitério Sombrio", "Floresta Amaldiçoada"],
		"Character": ["Oráculo enigmático", "Divindade caprichosa", "Navegador intrépido", "Caçador de monstros", "Músico ambulante", "Mercador viajante"],
		"Event": ["Armadilha oculta", "Ataque surpresa", "Ressurreição inesperada", "Revelação de segredo", "Aparição sobrenatural", "Aliado traiçoeiro"]
	},
	"Espada E Feitiçaria": {
		"Place": ["Vilarejo", "Cidade", "Cidade-Estado", "Caverna", "Cume", "Deserto", "Floresta", "Templo", "Ruína", "Forte", "Torre", "Palácio", "Tumba", "Monumento", "Ponte", "Portal", "Passagem", "Círculo", "Pântano", "Vulcão", "Vale estéril"],
		"Character": ["Um oponente (ver tabelas)", "Religioso(a)", "Nobre", "Conjurador(a)", "Sábio(a)", "Bárbaro(a)", "Pirata", "Líder de guilda", "Mercador(a)", "Fugitivo(a)", "Criminoso(a)"],
		"Event": ["Fenômeno natural", "Emboscada", "Luta repentina", "Fenômeno mágico", "Um pedido de ajuda", "Um enigma para continuar"]
	},
	"Contos De Fadas": {
		"Place": ["Bosques", "Ruínas", "Gruta", "Ruas da Vila", "Estrada", "Castelo"],
		"Character": ["Ser Mágico", "Pessoa Idosa", "Criança", "Pessoa de fora", "Ser sombrio", "Animal falante"],
		"Event": ["Desmoronamento ou Chuva forte", "Perda da direção", "Um Enigma se apresenta e precisa ser resolvido", "Peças de um Quebra-Cabeças", "Vozes no Nevoeiro Misterioso", "Uma Reviravolta"]
	},
	"Piratas": {
		"Place": ["Alto Mar", "Ilha Solitária", "Docas", "Naquela Taverna Suja", "Convés", "Caverna da Caveira"],
		"Character": ["Corsário", "Comparsa", "Oficial da Marinha Real", "Aquele sujeito estranho...", "Pirata \"como você\"", "Contrabandista"],
		"Event": ["Duelo", "Um dobrão, uma informação", "Ameaça na ponta da faca", "Boatos sobre você", "\"Homem Ao Mar!!!\"", "Você ouve o canto de sereias"]
	},
	"Velho Oeste": {
		"Place": ["Comércio / Vegetação / Frio", "Agricultura / Areia / Vento", "Diversão / Rocha / Animal", "Transporte / Altitude / Segredo", "Ouro / Calor / Madeira", "Serviço / Lei / Força"],
		"Character": ["Extroversão / Lei / Comida", "Prudência / Negócio / Arma", "Arrogância / Necessidade / Animal", "Sabedoria / Oportunidade / Ouro", "Curiosidade / Desafio / Planta", "Educação / Promessa / Papel"],
		"Event": ["Sobrevivência", "Confronto", "Exploração", "Negociação", "Jornada", "Descoberta"]
	},
	"Horror Gótico": {
		"Place": ["Mansão / Casa abandonada", "Catedral / Hospital / Laboratório", "Cemitério / Tumba / Subterrâneo", "Asilo / Sonho / Plano astral", "Ermos / Estação / Porto", "Fábrica / Armazém / Beco"],
		"Character": ["Palidez / Corrupção / Experimento", "Olheira / Desespero / Pacto", "Ferimento / Fragilidade / Dívida", "Rouquidão / Susto / Crime", "Confusão / Desejo / Servidão", "Malícia / Orgulho / Facção"],
		"Event": ["Confronto", "Sobrenatural", "Sobrevivência", "Manipulação", "Disrupção", "Revelação"]
	},
	"Horror Cósmico": {
		"Place": ["Universidade", "Mansão abandonada", "Sanatório psiquiátrico", "Ruínas do templo antigo", "Biblioteca proibida", "Museu de história natural"],
		"Character": ["Professor obscuro", "Mulher enigmática", "Cultista desesperado", "Vidente atormentado", "Criança inocente", "Médico estranho"],
		"Event": ["Vulto sinistro", "Desaparecimento misterioso", "Ilusões enganosas", "Ataque de criaturas aberrantes", "Culto ritualístico", "Surto de loucura"]
	},
	"Máfia": {
		"Place": ["Armazém cheio de caixas", "Lojas comerciais no centro da cidade", "Estrada de terra na saída da cidade", "Festa da alta sociedade", "Casa de campo da família", "Distrito da polícia"],
		"Character": ["Comerciante com medo", "Membro do sindicato", "Membro da máfia rival", "Político está preocupado com alguma coisa", "Detetive da polícia precisa falar com você", "Contrabandista e seu carregamento"],
		"Event": ["Greve do sindicato", "Tiroteio entre os presentes", "Proposta irrecusável para um mafioso", "Uma mensagem chega até você", "Apagão na cidade gera caos nas ruas", "Uma armadilha afeta a família"]
	},
	"Investigação": {
		"Place": ["Prefeitura ou Biblioteca", "Estação de trem ou Docas", "Beco ou Coreto", "Cabaré ou Bar", "Necrotério ou Penitenciária", "Antiquário ou Museu"],
		"Character": ["Dama misteriosa da alta sociedade", "Informante de rua", "Advogado corrupto", "Gângster endividado", "Médico forense", "Policial à paisana"],
		"Event": ["Uma janela se quebra com um estrondo", "Um carro preto acelera pela rua e some na escuridão", "Uma testemunha que passa desconfiança", "O local é invadido por policiais", "Você é chantageado", "Alguém é assassinado"]
	},
	"Guerra": {
		"Place": ["Ponte sobre um rio", "Meio da mata", "Em um bunker", "Em um desfiladeiro", "Uma praia", "Cidade em ruínas"],
		"Character": ["Soldado aliado ferido", "Um sargento inimigo", "Um civil escondido", "Soldado inimigo desarmado", "Um desertor", "Veículo inimigo com tropa"],
		"Event": ["Tropas inimigas avistadas", "Explosão no seu quartel", "Veículos se aproximando", "Uma chuva torrencial", "Você cai numa emboscada!", "Um pedido de ajuda pelo rádio"]
	},
	"Comédia Romântica": {
		"Place": ["Praça", "Trabalho", "Escola", "Casa", "Centro", "Metrô"],
		"Character": ["Interesse Amoroso", "Irmão(ã)", "Colega", "Gerente", "Amigo(a)", "Rival"],
		"Event": ["Caiu nos braços", "Trancados", "Chuva!", "Te tirou pra dançar", "Te chamou pra sair", "Dormiu no ombro"]
	},
	"Artes Marciais": {
		"Place": ["Academia de treino", "Ruas do centro", "Prédio público", "Arranha-céu", "Auto-estrada", "Santuário distante"],
		"Character": ["Político corrupto", "Guerreiro vilão", "Capanga", "Discípulo", "Mestre", "Corporativo e seus guardas"],
		"Event": ["Desabamento", "Emboscada", "Traição", "Chantagem", "Grito de socorro", "É hora de lutar!"]
	},
	"Fantasia Urbana": {
		"Place": ["Nas ruas da cidade", "Em um beco obscuro", "Em um edifício público", "Em uma residência", "Na estação de trem ou metrô", "Indústria ou comércio"],
		"Character": ["Artista atormentado", "Empresário inescrupuloso", "Investigador policial", "Coveiro sombrio", "Psiquiatra estranho", "Açougueiro mórbido"],
		"Event": ["Confronto mental", "Traição esperada", "Incêndio suspeito", "Testemunha ocular", "Tentativa de assassinato", "Sabotagem"]
	},
	"Super-Heróis": {
		"Place": ["Armazém", "Porto", "Selva", "Pântano", "Castelo", "Mansão", "Deserto", "Vulcão", "Rua movimentada", "Estação de metrô", "Cachoeira", "Cânion", "Prédio abandonado", "Cemitério", "Ilha", "Caverna", "Hospital", "Igreja", "Mar", "Cratera", "Banco", "Arranha-céu", "Lago", "Espaço"],
		"Character": ["Supervilão", "Criatura mágica", "Entidade cósmica", "Alienígena", "Andróide", "Ser sobrenatural", "Espião", "Terrorista", "Líder de gangue", "Cientista", "Jornalista", "Religioso", "Policial", "Político", "Diplomata", "Super-herói", "Divindade", "Supercomputador"],
		"Event": ["Uma reviravolta acontece", "Um desastre", "Um desafio tecnológico", "Capangas aparecem", "Uma organização age", "Uma viagem", "Você encontra algo"]
	},
	"Tokusatsu": {
		"Place": ["Distrito Central", "Reserva natural", "Túneis Subterrâneos", "Colégio", "Parque de Diversões", "Região do Porto"],
		"Character": ["Cientista excêntrico", "Detetive astuta", "Ex-herói aposentado", "Artista marcial solitário", "Sábia misteriosa", "Adolescente corajoso"],
		"Event": ["Uma gangue de capangas!", "O vilão surge!", "O morfador pifa", "Uma armadilha do vilão", "O vilão faz um refém", "A energia da cidade toda cai"]
	},
	"Cartoons": {
		"Place": ["Espaço", "Planeta", "Lua", "Ilha", "Hotel", "Zoológico", "Montanha", "Trem", "Bar", "Mar", "Fábrica", "Museu", "Loja", "Deserto", "Mina", "Hospital", "Laboratório", "Metrô", "Escola"],
		"Character": ["Artista", "Cientista", "Esportista", "Advogado", "Inventor", "Mágico", "Criança", "Astronauta", "Espião", "Pirata", "Cowboy", "Cozinheiro", "Político", "Criminoso", "Caçador", "Carteiro", "Bombeiro", "Policial"],
		"Event": ["Desafiado por um antagonista / grupo", "Acha uma coisa, mas precisa (Ação + Qualidade) para pegar", "Um pedido de ajuda", "Uma loucura acontece", "Um obstáculo mágico", "Vai parar no meio de uma"]
	},
	"Zumbis": {
		"Place": ["Colégio", "Clube", "Parque", "Zoológico", "Hospital", "Cemitério", "Supermercado", "Shopping", "Presídio", "Prédio público", "Fazenda", "Estação"],
		"Character": ["Professor(a)", "Antigo(a) inimigo(a)", "Ex-policial", "Líder de facção", "Criança", "Velho(a) amigo(a)", "Cientista", "Um(a) traidor(a)", "Médico(a)", "Casal em fuga", "Engenheiro(a)", "Recém-infectado(a)"],
		"Event": ["Zumbi(s)!", "Encontro com facção", "Um obstáculo no caminho", "Um lugar inexplorado", "Você achou uma coisa"]
	},
	"Steampunk": {
		"Place": ["Baile de máscaras", "Castelo Luxuoso", "Jantar social", "Café popular", "Praça movimentada", "Laboratório Científico", "Covil do vilão", "Mansão de um nobre", "Forte de guerra", "Trem em movimento", "Bosque citadino", "Zepelim nas nuvens"],
		"Character": ["Mestre mecânico", "Engenheiro do vapor", "Um oficial da lei", "Agente secreto", "Espião", "Membro da realeza", "Ladrão vigarista", "Trapaceiro", "Gênio louco", "Inventor"],
		"Event": ["O vilão é visto nas redondezas há poucos segundos", "Você é desafiado para um duelo em nome da honra", "Capangas do vilão tentam impedir o seu progresso", "Você cai em uma armadilha preparada pelo vilão", "Você é confundido com o vilão", "Um experimento científico falha e causa uma catástrofe"]
	},
	"Cyberpunk": {
		"Place": ["Um galpão industrial", "Prédio governamental", "Clínica clandestina", "Clube noturno", "Bairro suburbano", "Hotel de beira de estrada"],
		"Character": ["Membro de uma gangue", "Magnata corporativo", "Agente da mídia", "Morador de rua", "Mercenário", "Agente do governo"],
		"Event": ["Há um traidor no seu grupo", "Motivações disfarçadas", "A informação era falsa", "Um assalto de gangue", "O vilão na verdade é outro", "Explosão EMP"]
	},
	"Dieselpunk": {
		"Place": ["Arena de Lutas", "Fila da ração", "Mercado de pulgas", "Mansão de um senhor de armas", "Torre de Vigia", "Oficina de carros"],
		"Character": ["Chefão regional", "Oráculo eremita", "Bandidos", "Sobrevivente solitário", "Grupo de famintos", "Sábio recluso"],
		"Event": ["Um tiroteio começa inesperadamente!", "Acidente na estrada impede o avanço", "Uma conversa sincera ao volante", "Uma sombra do passado volta a te atormentar", "Emboscada de saqueadores ferais!", "Convite para uma corrida de carros"]
	},
	"Solarpunk": {
		"Place": ["Grande Praça", "Eco Fazendas", "Centro Comunitário", "Aero-Estradas", "Cata-Ventos", "Centro de Tecnologias"],
		"Character": ["Amizade antiga", "Guarda Ecoambiental", "Figura de Liderança", "Alguém de Fora", "Alguém próximo", "O(A) Infrator(a)"],
		"Event": ["As luzes falham", "Odor forte toma o ambiente", "Caminho bloqueado", "Uma invasão", "Um barulho repentino", "Recebe uma e-Chamada"]
	},
	"Hopepunk": {
		"Place": ["Universidade", "Hospital", "Delegacia", "Fábrica", "Praça", "Hotel"],
		"Character": ["Um grupo de policiais", "Alguém muito próximo a você", "Uma pessoa que já te traiu", "Alguém do alto escalão", "Outro membro da resistência", "Uma pessoa desconfiada"],
		"Event": ["Uma emboscada!", "Um incêndio num lugar muito próximo", "Uma batida policial", "Queda de energia e corte de água", "Um confronto físico inesperado", "Um sistema de segurança é ativado"]
	},
	"Ficção Científica": {
		"Place": ["Sede da Comunidade", "Espaçoporto", "Estação orbital", "Oficina estelar", "Colônia lunar", "Centro de pesquisa"],
		"Character": ["Comandante", "Aristocrata", "Pirata espacial", "Piloto rebelde", "Ativista", "Diplomata"],
		"Event": ["Os sistemas de comunicação falham", "Há uma queda geral de energia", "Os propulsores da sua nave param de funcionar", "Radiação está vazando de um equipamento", "Você chegou aqui tarde demais", "Surge um intruso inesperado"]
	},
	"Fantasia Científica": {
		"Place": ["Cidade flutuante", "Ruínas antigas tecnológicas", "Abismo estelar", "Floresta bioluminescente", "Estação espacial", "Mar profundo"],
		"Character": ["Mestre dos Portais", "Arqueóloga", "Contrabandista Espacial", "Diplomata Galáctico", "Feiticeiro Cósmico", "Robô Guardião"],
		"Event": ["Uma criatura exótica amigável", "Caçadora", "Desaparecimento misterioso", "Armadilha alienígena mortal", "Avaria nos veículos", "Pequeno salto temporal"]
	},
	"Exploração Espacial": {
		"Place": ["Bar intergaláctico", "Ruínas de uma estação espacial", "Planeta-jardim exótico", "Nave-Estado imperial", "Portal estelar ancestral", "Asteroide-mina"],
		"Character": ["Um dos arquétipos", "Robô / Super computador", "Caçador de recompensas", "Guarda ou Nobre Imperial", "Mestre sábio / Líder insurgente", "Cultista / Guardião cósmico"],
		"Event": ["Uma nave desconhecida", "Mensagem misteriosa", "Fenômeno cósmico", "Explosão iminente", "Uma negociação perigosa", "Uma emboscada"]
	},
	"Viagem No Tempo": {
		"Place": ["Biblioteca de Alexandria", "Cidade submersa", "Estação espacial", "Laboratório científico", "Floresta proibida", "Templo desconhecido"],
		"Character": ["Leonardo da Vinci", "Marco Polo", "Cleópatra", "Nikola Tesla", "Joana d'Arc", "Carmen Miranda"],
		"Event": ["Distúrbio temporal súbito", "Encontro com outra versão de si mesmo", "Vigilância por observadores temporais", "Conflito com uma consequência histórica", "Roubo de um artefato temporal", "Intervenção de uma força temporal antagônica"]
	}
};

const ideaBankEntries = {
	"Pré-História": {
		"Subject": ["Um ancestral misterioso", "A primeira tribo", "Um animal lendário"],
		"Action": ["descobriu", "escondeu", "caçou", "protegeu"],
		"Thing": ["um artefato sagrado", "um segredo ancestral", "um fogo eterno"],
		"Quality": ["com consequências desastrosas", "em segredo", "sem saber o motivo"]
	},
	// ... outros cenários
};

const extrasEntries = {
	"Pré-História": {
		"Animal Sagrado": ["Mamute", "Tigre Dentes de Sabre"],
		"Ritual": ["Dança da Chuva", "Sacrifício do Fogo"]
	},
	"Cyberpunk": {
		"Corporação": ["NeoTek", "BioCore"],
		"Implante": ["Visão Noturna", "Chip Neural"],
		"Zona de Perigo": ["Distrito 9", "Subnível Delta"]
	},
	// ... outros cenários
};


    
  // Função para sortear as entradas de "Trama"
  function getRandomPlot(cenariosSelecionados) {
    let allEntries = {
      "Something happened": [],
      "You need": [],
      "Otherwise": []
    };
  
    // Combine as entradas dos cenários selecionados
    cenariosSelecionados.forEach(cenario => {
      if (plotEntries[cenario]) {
        allEntries["Something happened"].push(...plotEntries[cenario]["Something happened"]);
        allEntries["You need"].push(...plotEntries[cenario]["You need"]);
        allEntries["Otherwise"].push(...plotEntries[cenario]["Otherwise"]);
      }
    });
  
    // Sortear uma entrada para cada um dos 3 elementos da trama
    const somethingHappened = allEntries["Something happened"][Math.floor(Math.random() * allEntries["Something happened"].length)];
    const youNeed = allEntries["You need"][Math.floor(Math.random() * allEntries["You need"].length)];
    const otherwise = allEntries["Otherwise"][Math.floor(Math.random() * allEntries["Otherwise"].length)];
  
    return {
      "Something happened": somethingHappened,
      "You need": youNeed,
      "Otherwise": otherwise
    };
  }
  
  function getRandomScene(cenariosSelecionados) {
	let allEntries = {
		"Place": [],
		"Character": [],
		"Event": []
	};

	cenariosSelecionados.forEach(cenario => {
		if (sceneEntries[cenario]) {
			allEntries["Place"].push(...sceneEntries[cenario]["Place"]);
			allEntries["Character"].push(...sceneEntries[cenario]["Character"]);
			allEntries["Event"].push(...sceneEntries[cenario]["Event"]);
		}
	});

	const place = allEntries["Place"][Math.floor(Math.random() * allEntries["Place"].length)];
	const character = allEntries["Character"][Math.floor(Math.random() * allEntries["Character"].length)];
	const event = allEntries["Event"][Math.floor(Math.random() * allEntries["Event"].length)];

	return {
		"Place": place,
		"Character": character,
		"Event": event
	};
}

function getRandomIdeaBank(cenariosSelecionados) {
	let allEntries = {
		"Subject": [],
		"Action": [],
		"Thing": [],
		"Quality": []
	};

	cenariosSelecionados.forEach(cenario => {
		if (ideaBankEntries[cenario]) {
			allEntries["Subject"].push(...ideaBankEntries[cenario]["Subject"]);
			allEntries["Action"].push(...ideaBankEntries[cenario]["Action"]);
			allEntries["Thing"].push(...ideaBankEntries[cenario]["Thing"]);
			allEntries["Quality"].push(...ideaBankEntries[cenario]["Quality"]);
		}
	});

	const subject = allEntries["Subject"][Math.floor(Math.random() * allEntries["Subject"].length)];
	const action = allEntries["Action"][Math.floor(Math.random() * allEntries["Action"].length)];
	const thing = allEntries["Thing"][Math.floor(Math.random() * allEntries["Thing"].length)];
	const quality = allEntries["Quality"][Math.floor(Math.random() * allEntries["Quality"].length)];

	return {
		"Subject": subject,
		"Action": action,
		"Thing": thing,
		"Quality": quality
	};
}

function getRandomExtras(cenariosSelecionados) {
	let mergedEntries = {}; // chave = nome da coluna, valor = array mesclado

	cenariosSelecionados.forEach(cenario => {
		if (extrasEntries[cenario]) {
			const entradas = extrasEntries[cenario];
			for (const [coluna, valores] of Object.entries(entradas)) {
				if (!mergedEntries[coluna]) {
					mergedEntries[coluna] = [];
				}
				mergedEntries[coluna].push(...valores);
			}
		}
	});

	// Sorteio
	let resultado = {};
	for (const [coluna, valores] of Object.entries(mergedEntries)) {
		const sorteado = valores[Math.floor(Math.random() * valores.length)];
		resultado[coluna] = sorteado;
	}

	return resultado;
}

function getRandomArchetypeFromSingleScenario(cenariosSelecionados) {
	// Filtrar cenários que realmente têm arquétipos definidos
	const cenariosComDados = cenariosSelecionados.filter(c => archetypesEntries[c]);

	if (cenariosComDados.length === 0) return null;

	// Sorteia um cenário dentre os que têm arquétipos
	const cenario = cenariosComDados[Math.floor(Math.random() * cenariosComDados.length)];
	const colunas = archetypesEntries[cenario];

	let resultado = {};
	for (const [coluna, valores] of Object.entries(colunas)) {
		resultado[coluna] = valores[Math.floor(Math.random() * valores.length)];
	}

	return { cenario, resultado };
}
