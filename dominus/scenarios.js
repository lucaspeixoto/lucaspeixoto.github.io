// Lista de entradas para cada cenário
const plotEntries = {
    "Pré-História": {
      "Something happened": [
        "pre A great meteor fell from the sky.",
        "pre A herd of mammoths appeared in the distance.",
        "pre A volcano erupted, shaking the earth."
      ],
      "You need": [
        "pre Find a new source of water.",
        "pre Defend the tribe from a rival clan.",
        "pre Explore the unknown territory beyond the mountain."
      ],
      "Otherwise": [
        "pre You will starve to death.",
        "pre The tribe will turn against you.",
        "pre The volcanic ash will block the sun."
      ]
    },
    "Era Do Gelo": {
      "Something happened": [
        "ice A massive blizzard covered the land.",
        "ice Ice giants have awoken.",
        "ice A herd of saber-toothed tigers is approaching."
      ],
      "You need": [
        "ice Find shelter before the storm hits.",
        "ice Hunt for food in the frozen wilderness.",
        "ice Find a way to cross the glacier."
      ],
      "Otherwise": [
        "ice You will be lost in the storm.",
        "ice You will freeze to death.",
        "ice The tigers will catch you."
      ]
    },
  };

  const archetypesEntries = {
	"Fantasia Urbana": {
		"Origem": ["Órfão criado por magos", "Filho de demônio"],
		"Função": ["Caçador de criaturas", "Guardião de portais"],
		"Estilo": ["Usa sobretudos escuros", "Cheira a enxofre"]
	},
	"Steampunk": {
		"Classe": ["Engenheiro de Aeronaves", "Detetive a Vapor"],
		"Aparência": ["Monóculo de latão", "Braço mecânico"],
		"Traço Psicológico": ["Obcecado por engrenagens", "Paranoico com autômatos"]
	},
	// etc.
};


  const sceneEntries = {
	"Pré-História": {
		"Place": ["Uma caverna escondida", "Planície repleta de fósseis", "Vulcão ativo"],
		"Character": ["Xamã da tribo", "Caçador solitário", "Membro da tribo rival"],
		"Event": ["Descoberta de fogo", "Ritual tribal", "Caçada a um mamute"]
	},
	// ... outros cenários com as três tabelas
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
