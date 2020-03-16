function races(type='') {

	if (type == '') 
        type = random(['halfling','elf','dwarf','human','dragonborn']);
  
    switch(type){
    	case "halfling":
    		return {

			    aspects: ['Halfling Pés Leves','Halfling Robusto','Halfling dos Vales'],
			    stunts: ['<strong>Visão na penumbra:</strong> O halfling enxerga normalmente somente com um pequeno foco de luz.','<strong>Sortudo:</strong> O halfling pode, uma vez por sessão, re-rolar gratuimente uma jogada de dados.'],
			    'Halfling Pés Leves': {
			        skills: ['Furtividade'],
			        approach: ['Sorrateiro'],
			        stunts: ['<strong>Simpático:</strong> O halfling pés-leves recebe +2 em Empatia para Criar Vantagem quando está dialogando com humanos, elfos ou anões.','<strong>Furtividade natural:</strong> O halfling pés-leves recebe +2 em Furtividade para Criar Vantagem quando está em uma multidão.']
			    },
			    'Halfling Robusto': {
			        skills: ['Vigor'],
			        approach: ['Poderoso'],
			        stunts: ['<strong>Resiliência dos robustos:</strong> O halfling robusto recebe +2 em Vigor para Superar efeitos de venenos.','<strong>Bravura:</strong> O halfling robusto recebe +2 em Provocar para se Defender de ataques mentais.']
			    },
			    'Halfling dos Vales': {
			        skills: ['Contatos'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Recuperação acelerada:</strong> O halfling dos vales se recupera muito mais rapidamente de seus ferimentos físicos. Ao tratar uma consequência, pode gastar 1 PD para considerá-la como um nível mais branda. (Severa como Moderada e Moderada como Suave).','<strong>Bem relacionado:</strong> O halfling dos vales recebe +2 em Percepção em testes de Superar para identificar efeitos mágicos de controle mental, encantamentos ou ilusões de disfarce.']
			    }
			}
    		break;

    	case "elf":
    		return {

			    aspects: ['Alto Elfo','Elfo da Floresta','Elfo Drow'],
			    stunts: ['<strong>Visão na penumbra:</strong> O elfo enxerga normalmente somente com um pequeno foco de luz.','<strong>Atencioso:</strong> O elfo possui sentidos aguçados, recebe +2 em rolagens de Investigar para detectar portas e mecanismos secretos.'],
			    'Alto Elfo': {
			        skills: ['Conhecimentos'],
			        approach: ['Esperto'],
			        stunts: ['<strong>Sensibilidade mágica:</strong> O alto elfo recebe +1 em uma subperícia de magia à sua escolha, desde que sua classe possa lançar magias.','<strong>Alta estirpe:</strong> O alto elfo recebe +2 em superar nas rolagens de comunicação (Estiloso) quando está tentando impressionar em um diálogo ou discurso.']
			    },
			    'Elfo da Floresta': {
			        skills: ['Furtividade'],
			        approach: ['Sorrateiro'],
			        stunts: ['<strong>Ocultação:</strong> O elfo da floresta recebe +2 em furtividade (Sorrateiro) ao criar vantagem para se ocultar em ambientes selvagens.','<strong>Afinidade com armas:</strong> Ao utilizar uma arma élfica, o elfo da floresta causa uma tensão a mais de dano em um ataque bem sucedido.']
			    },
			    'Elfo Drow': {
			        skills: ['Magia'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Visão no escuro:</strong> O elfo drow enxerga normalmente na mais completa escuridão.','<strong>Magia inata:</strong> O elfo drow por conjurar a magia “detectar magia” uma vez por cena, gratuitamente.']
			    }
			}
    		break;

    	case "dwarf":
    		return {
    			    
    			aspects: ['Anão da Colina','Anão da Montanha','Anão Duergar'],
			    stunts: ['<strong>Visão no escuro:</strong> O anão enxerga normalmente na mais completa escuridão.','<strong>Resiliência anã:</strong> O anão é mais resistente a venenos, recebe +2 em testes de Vigor para Superar o efeito de um veneno.'],
			    'Anão da Colina': {
			        skills: ['Percepção'],
			        approach: ['Esperto'],
			        stunts: ['<strong>Sentidos aguçados:</strong> O anão da colina recebe +2 em testes de Percepção para Criar Vantagem em uma situação em que os seus sentidos sejam exigidos ao máximo.','<strong>Tenacidade anã:</strong> Para contar as caixas de estresse físico, considere que o anão da colina possui o seu valor de Vigor aumentado em 2.']
			    },
			    'Anão da Montanha': {
			        skills: ['Vigor'],
			        approach: ['Poderoso'],
			        stunts: ['<strong>Especialização em rochas:</strong> O anão da montanha recebe +2 em testes de Conhecimentos relacionados à origem de um trabalho em pedra.','<strong>Treinamentos com armaduras:</strong> O anão da montanha é treinado no uso de armaduras. Ele recebe Armadura:1 caso esteja utilizando uma.']
			    },
			    'Anão Duergar': {
			        skills: ['Furtividade'],
			        approach: ['Sorrateiro'],
			        stunts: ['<strong>Resistência mágica:</strong> O anão duergar é mais resistentes contra efeitos mágicos, recebendo +2 em testes de Superar contra magias que tenham o anão como alvo.','<strong>Piscar:</strong> O anão duergar é capaz de lançar a magia Invisibilidade em si mesmo ao custo de 1 PD, o efeito dura uma cena.']
			    }
			}
    		break;

    	case "human":
    		return {

    			aspects: ['Humano','Meio-Elfo','Meio-Orc'],
			    stunts: ['<strong>Versátil:</strong> Um humano, ou meio-humano, se adapta rapidamente a qualquer situação. Uma vez por sessão ele recebe gratuitamente um impulso de performance.','<strong>Ambição natural:</strong> Um humano, ou meio-humano, recebe +2 em testes de Vontade para Superar alguma barreira mental ou social que esteja impedindo o seu progresso.'],
			    'Humano': {
			        skills: [],
			        approach: [],
			        stunts: ['<strong>Natureza cooperativa:</strong> O humano recebe +2 em Contatos para Criar Vantagem se estiver em uma cidade humana.','<strong>Língua solta:</strong> O humano recebe +2 em Enganar para Criar Vantagem quando está negociando a compra ou a venda de algo.']
			    },
			    'Meio-Elfo': {
			        skills: ['Provocar'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Charme natural:</strong> O meio-elfo recebe +2 em testes de Comunicação para Criar Vantagem em um diálogo ou discurso a uma plateia atenta.','<strong>Curiosidade:</strong> O meio-elfo recebe +2 em Investigar para descobrir aspectos de cenário ao Criar Vantagem.']
			    },
			    'Meio-Orc': {
			        skills: ['Lutar'],
			        approach: ['Poderoso'],
			        stunts: ['<strong>Marginalizado:</strong> O meio-orc recebe +2 em Empatia para Superar alguma situação em que raças humanoides estejam sofrendo algum tipo de preconceito.','<strong>Ferocidade orc:</strong> Uma vez por sessão, ao receber um dano e não ter mais caixas de estresse para serem marcadas, o meio-orc pode gastar 1 PD para ignorar o dano recebido.']
			    },
    		}

    	case "dragonborn":
    		return {

    			aspects: ['Draconato','Meio-Elfo','Meio-Orc'],
			    stunts: ['<strong>Versátil:</strong> Um humano, ou meio-humano, se adapta rapidamente a qualquer situação. Uma vez por sessão ele recebe gratuitamente um impulso de performance.','<strong>Ambição natural:</strong> Um humano, ou meio-humano, recebe +2 em testes de Vontade para Superar alguma barreira mental ou social que esteja impedindo o seu progresso.'],
			    'Draconato ': {
			        skills: [],
			        approach: [],
			        stunts: ['']
			    },
			    'Draconato ': {
			        skills: [],
			        approach: [],
			        stunts: ['']
			    },
			    'Draconato ': {
			        skills: [],
			        approach: [],
			        stunts: ['']
			    },
			    'Draconato ': {
			        skills: [],
			        approach: [],
			        stunts: ['']
			    },
			    'Draconato ': {
			        skills: [],
			        approach: [],
			        stunts: ['']
			    },
			    'Draconato ': {
			        skills: [],
			        approach: [],
			        stunts: ['']
			    },
			    'Draconato ': {
			        skills: [],
			        approach: [],
			        stunts: ['']
			    },
			    'Draconato ': {
			        skills: [],
			        approach: [],
			        stunts: ['']
			    },
			    'Draconato ': {
			        skills: [],
			        approach: [],
			        stunts: ['']
			    },
			    'Draconato ': {
			        skills: [],
			        approach: [],
			        stunts: ['']
			    },
    		
    }

}