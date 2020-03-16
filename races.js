function races(type='') {

	if (type == '') 
        type = random(['halfling','elf','dwarf','human','dragonborn','gnome','touched']);
  
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
			        stunts: ['<strong>Resistência mágica:</strong> O anão duergar é mais resistente contra efeitos mágicos, recebendo +2 em testes de Superar contra magias que tenham o anão como alvo.','<strong>Piscar:</strong> O anão duergar é capaz de lançar a magia Invisibilidade em si mesmo ao custo de 1 PD, o efeito dura uma cena.']
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
			        stunts: ['<strong>Natureza cooperativa:</strong> O humano recebe +2 em Contatos para Criar Vantagem se estiver em uma cidade humana.','<strong>Curiosidade:</strong>O humano recebe +2 em Investigar para descobrir aspectos de cenário ao Criar Vantagem.']
			    },
			    'Meio-Elfo': {
			        skills: ['Provocar'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Visão na penumbra:</strong> O meio-elfo enxerga normalmente somente com um pequeno foco de luz.','<strong>Resistência mágica:</strong> O meio-elfo é mais resistente contra efeitos mágicos, recebendo +2 em testes de Superar contra magias que o tenham como alvo.']
			    },
			    'Meio-Orc': {
			        skills: ['Lutar'],
			        approach: ['Poderoso'],
			        stunts: ['<strong>Marginalizado:</strong> O meio-orc recebe +2 em Empatia para Superar alguma situação em que raças humanoides estejam sofrendo algum tipo de preconceito.','<strong>Ferocidade orc:</strong> Uma vez por sessão, ao receber um dano e não ter mais caixas de estresse para serem marcadas, o meio-orc pode gastar 1 PD para ignorar o dano recebido.']
			    },
    		}
    		break;

    	case "dragonborn":
    		return {

    			aspects: ['Draconato Azul','Draconato Branco','Draconato Bronze','Draconato Cobre','Draconato Latão','Draconato Negro','Draconato Dourado','Draconato Prateado','Draconato Verde','Draconato Vermelho'],
			    stunts: [],
			    'Draconato Azul': {
			        skills: ['Provocar'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Sopro elétrico:</strong> Pode soltar um jato elétrico uma vez por sessão. Faça um ataque com Atirar que atinge todos dentro de uma zona. Se a zona conter água o ataque recebe +1.']
			    },
			    'Draconato Branco': {
			        skills: ['Conhecimentos'],
			        approach: ['Esperto'],
			        stunts: ['<strong>Sopro congelante:</strong> Pode soltar um cone de frio uma vez por sessão, que diminui a temperatura do local e extingue pequenas chamas. Faça um ataque com Atirar que atinge todos dentro de uma zona.']
			    },
			    'Draconato Bronze': {
			        skills: ['Enganar'],
			        approach: ['Esperto'],
			        stunts: ['<strong>Sopro elétrico:</strong> Pode soltar um jato elétrico uma vez por sessão. Faça um ataque com Atirar que atinge todos dentro de uma zona. Se a zona conter água o ataque recebe +1.']
			    },
			    'Draconato Cobre': {
			        skills: ['Vontade'],
			        approach: ['Cuidadoso'],
			        stunts: ['<strong>Sopro ácido:</strong> Pode soltar um jato ácido uma vez por sessão, que derrete pequenos objetos e danifica objetos maiores. Faça um ataque com Atirar que atinge todos dentro de uma zona.']
			    },
			    'Draconato Latão': {
			        skills: ['Furtividade'],
			        approach: ['Sorrateiro'],
			        stunts: ['<strong>Sopro incendiário:</strong> Pode soltar um jato de fogo uma vez por sessão, que queima pequenos objetos e coloca o aspecto “pegando fogo” em objetos maiores. Faça um ataque com Atirar que atinge todos dentro de uma zona.']
			    },
			    'Draconato Negro': {
			        skills: ['Ocultismo'],
			        approach: ['Cuidadoso'],
			        stunts: ['<strong>Sopro ácido:</strong> Pode soltar um jato ácido uma vez por sessão, que derrete pequenos objetos e danifica objetos maiores. Faça um ataque com Atirar que atinge todos dentro de uma zona.']
			    },
			    'Draconato Dourado': {
			        skills: ['Empatia'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Sopro incendiário:</strong> Pode soltar um jato de fogo uma vez por sessão, que queima pequenos objetos e coloca o aspecto “pegando fogo” em objetos maiores. Faça um ataque com Atirar que atinge todos dentro de uma zona.']
			    },
			    'Draconato Prateado': {
			        skills: ['Comunicação'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Sopro congelante:</strong> Pode soltar um cone de frio uma vez por sessão, que diminui a temperatura do local e extingue pequenas chamas. Faça um ataque com Atirar que atinge todos dentro de uma zona.']
			    },
			    'Draconato Verde': {
			        skills: ['Lutar'],
			        approach: ['Poderoso'],
			        stunts: ['<strong>Sopro venenoso:</strong> Pode soltar um cone de veneno uma vez por sessão, que coloca o aspecto “envenenado” nos alvos. Faça um ataque com Atirar que atinge todos dentro de uma zona.']
			    },
			    'Draconato Vermelho': {
			        skills: ['Atletismo'],
			        approach: ['Ágil'],
			        stunts: ['<strong>Sopro incendiário:</strong> Pode soltar um jato de fogo uma vez por sessão, que queima pequenos objetos e coloca o aspecto “pegando fogo” em objetos maiores. Faça um ataque com Atirar que atinge todos dentro de uma zona.']
			    }
			}
			break;
 
    	case "gnome":
    		return {

    			aspects: ['Gnomo da Floresta','Gnomo das Rochas','Gnomo das Profundezas'],
			    stunts: ['<strong>Visão no escuro:</strong> O gnomo enxerga normalmente na mais completa escuridão.','<strong>Esperteza gnômica:</strong> O gnomo é mais resistente contra efeitos mágicos, recebendo +2 em testes de Superar contra magias que tenham o gnomo como alvo.'],
			    'Gnomo da Floresta': {
			        skills: ['Magia'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Ilusionista nato:</strong> O gnomo da floresta conhece alguma magia simples de ilusão e pode conjurá-la gratuitamente.','<strong>Falar com animais:</strong> O gnomo da floresta pode se comunicar com animais pequenos de maneira muito rudimentar.']
			    },
			    'Gnomo das Rochas': {
			        skills: ['Conhecimentos'],
			        approach: ['Esperto'],
			        stunts: ['<strong>Conhecimento de artífice:</strong> O gnomo das rochas recebe +2 em Conhecimentos para Criar Vantagem em relação a itens mágicos, objetos alquímicos ou mecanismos tecnológicos.','<strong>Engenhoqueiro:</strong> o gnomo das rochas é capaz de construir mecanismos simples que funcionam durante uma cena, como brinquedos mecânicos, isqueiro mecânico ou caixa de música.']
			    },
			    'Gnomo das Profundezas': {
			        skills: ['Furtividade'],
			        approach: ['Sorrateiro'],
			        stunts: ['<strong>Mineiro artífice:</strong> O gnomo das profundezas recebe +2 em Ofícios ao Criar Vantagem quando trabalha com rochas e minerais.','<strong>Cauteloso:</strong> O gnomo das profundezas recebe +2 em Furtividade ao Criar Vantagem para evitar qualquer tipo de perigo.']
			    },
    		}
    		break;

		case "touched":
    		return {

    			aspects: ['Tiefling','Aasimar','Genasi do Ar','Genasi da Terra','Genasi do Fogo','Genasi da Água'],
			    stunts: ['<strong>Visão no escuro:</strong> O tiefling enxerga normalmente na mais completa escuridão.'],
			    'Tiefling': {
			        skills: ['Provocar'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Legado infernal:</strong> Uma vez por sessão, o tiefling pode lançar a magia Repreensão Infernal.','<strong>Resistência infernal:</strong> O tiefling recebe +2 ao se Defender de ataques ou magias de fogo.']
			    },
			    'Aasimar': {
			        skills: ['Empatia'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Cura pelas mãos:</strong> Uma vez por cena, você pode tocar uma criatura e limpar até três caixas de estresse físico que ela possua.','<strong>Portador da luz:</strong> Você pode lançar a magia Luz gratuitamente.']
			    },
			    'Genasi do Ar': {
			        skills: ['Percepção'],
			        approach: ['Esperto'],
			        stunts: ['<strong>Fôlego infinito:</strong> O genasi do ar pode prender a respiração indefinidamente.','<strong>Leve como o vento:</strong> Uma vez por sessão, o genasi do ar pode lançar a magia Levitar em si mesmo, o efeito dura uma cena.']
			    },
			    'Genasi da Terra': {
			        skills: ['Vigor'],
			        approach: ['Poderoso'],
			        stunts: ['<strong>Passo elemental:</strong> O genasi da terra pode se locomover por até duas zonas gratuitamente, desde que possa tocar o chão natural.','<strong>Sem rastros:</strong> Uma vez por sessão, o genasi da terra pode lançar a magia Passos sem Pegadas, o efeito dura uma cena.']
			    },
			    'Genasi do Fogo': {
			        skills: ['Provocar'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Resistência ígnea:</strong> O genasi do fogo recebe +2 ao se Defender de ataques ou magias de fogo.','<strong>Mãos flamejantes:</strong> Uma vez por sessão, o genasi do fogo pode lançar a magia Mãos Flamejantes.']
			    },
			    'Genasi da Água': {
			        skills: ['Vontade'],
			        approach: ['Esperto'],
			        stunts: ['<strong>Anfíbio:</strong> O genasi da água pode respirar tanto na água quanto no ar.','<strong>Chamar as ondas:</strong> Uma vez por sessão, o genasi da água pode lançar a magia Criar ou Destruir Água.']
			    },
			    
    		}
    		break;
   		
    }

}