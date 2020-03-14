function races(type='') {

	if (type == '') 
        type = random(['halfling','elf']);
  
    switch(type){
    	case "halfling":
    		return {

			    aspects: ['Halfling Pés Leves','Halfling Robusto','Halfling dos Vales'],
			    stunts: ['Visão na penumbra: O halfling enxerga normalmente somente com um pequeno foco de luz.','Sortudo: O halfling pode, uma vez por sessão, re-rolar gratuimente uma jogada de dados.'],
			    'Halfling Pés Leves': {
			        skills: ['Furtividade'],
			        approach: ['Sorrateiro'],
			        stunts: ['Simpático: O halfling pés-leves recebe +2 em Empatia para Criar Vantagem quando está dialogando com humanos, elfos ou anões.','Furtividade natural: O halfling pés-leves recebe +2 em Furtividade para Criar Vantagem quando está em uma multidão.']
			    },
			    'Halfling Robusto': {
			        skills: ['Vigor'],
			        approach: ['Poderoso'],
			        stunts: ['Resiliência dos robustos: O halfling robusto recebe +2 em Vigor para Superar efeitos de venenos.','Bravura: O halfling robusto recebe +2 em Provocar para se Defender de ataques mentais.']
			    },
			    'Halfling dos Vales': {
			        skills: ['Contatos'],
			        approach: ['Estiloso'],
			        stunts: ['Recuperação acelerada: O halfling dos vales se recupera muito mais rapidamente de seus ferimentos físicos. Ao tratar uma consequência, pode gastar 1 PD para considerá-la como um nível mais branda. (Severa como Moderada e Moderada como Suave).','Bem relacionado: O halfling dos vales recebe +2 em Percepção em testes de Superar para identificar efeitos mágicos de controle mental, encantamentos ou ilusões de disfarce.']
			    }
			}
    		break;

    	case "elf":
    		return {

			    aspects: ['Alto Elfo','Elfo da Floresta','Elfo Drow'],
			    stunts: ['Visão na penumbra: O elfo enxerga normalmente somente com um pequeno foco de luz.','Atencioso: O elfo possui sentidos aguçados, recebe +2 em rolagens de Investigar para detectar portas e mecanismos secretos.'],
			    'Alto Elfo': {
			        skills: ['Conhecimentos'],
			        approach: ['Esperto'],
			        stunts: ['Sensibilidade mágica: O alto elfo recebe +1 em uma subperícia de magia à sua escolha, desde que sua classe possa lançar magias.','Alta estirpe: O alto elfo recebe +2 em superar nas rolagens de comunicação (Estiloso) quando está tentando impressionar em um diálogo ou discurso.']
			    },
			    'Elfo da Floresta': {
			        skills: ['Furtividade'],
			        approach: ['Sorrateiro'],
			        stunts: ['Ocultação: O elfo da floresta recebe +2 em furtividade (Sorrateiro) ao criar vantagem para se ocultar em ambientes selvagens.','Afinidade com armas: Ao utilizar uma arma élfica, o elfo da floresta causa uma tensão a mais de dano em um ataque bem sucedido.']
			    },
			    'Elfo Drow': {
			        skills: ['Magia'],
			        approach: ['Estiloso'],
			        stunts: ['Visão no escuro: O elfo drow enxerga normalmente na mais completa escuridão.','Magia inata: O elfo drow por conjurar a magia “detectar magia” uma vez por cena, gratuitamente.']
			    }
			}
    		break;
    }

}