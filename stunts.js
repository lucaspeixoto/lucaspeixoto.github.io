function stunts(type) {
  
    switch(type){

        case "elf":
            return ['Visão na penumbra: O elfo enxerga normalmente somente com um pequeno foco de luz.','Atencioso: O elfo possui sentidos aguçados, recebe +2 em rolagens de Investigar para detectar portas e mecanismos secretos.'];
            break;

        case "Alto Elfo":
            return ['Sensibilidade mágica: O alto elfo recebe +1 em uma subperícia de magia à sua escolha, desde que sua classe possa lançar magias.','Alta estirpe: O alto elfo recebe +2 em superar nas rolagens de comunicação (Estiloso) quando está tentando impressionar em um diálogo ou discurso.'];
            break;

        case "Elfo da Floresta":
            return ['Ocultação: O elfo da floresta recebe +2 em furtividade (Sorrateiro) ao criar vantagem para se ocultar em ambientes selvagens.','Afinidade com armas: Ao utilizar uma arma élfica, o elfo da floresta causa uma tensão a mais de dano em um ataque bem sucedido.'];
            break;

        case "Elfo Drow":
            return ['Visão no escuro: O elfo drow enxerga normalmente na mais completa escuridão.','Magia inata: O elfo drow por conjurar a magia “detectar magia” uma vez por cena, gratuitamente.'];
            break;

        case "halfling":
            return ['Visão na penumbra: O halfling enxerga normalmente somente com um pequeno foco de luz.','Sortudo: O halfling pode, uma vez por sessão, re-rolar gratuimente uma jogada de dados.'];
            break;

        case "Halfling Pés Leves":
            return ['Simpático: O halfling pés-leves recebe +2 em Empatia para Criar Vantagem quando está dialogando com humanos, elfos ou anões.','Furtividade natural: O halfling pés-leves recebe +2 em Furtividade para Criar Vantagem quando está em uma multidão.'];
            break;

        case "Halfling Robusto":
            return ['Resiliência dos robustos: O halfling robusto recebe +2 em Vigor para Superar efeitos de venenos.','Bravura: O halfling robusto recebe +2 em Provocar para se Defender de ataques mentais.'];
            break;
            
        case "Halfling dos Vales":
            return ['Recuperação acelerada: O halfling dos vales se recupera muito mais rapidamente de seus ferimentos físicos. Ao tratar uma consequência, pode gastar 1 PD para considerá-la como um nível mais branda. (Severa como Moderada e Moderada como Suave).','Bem relacionado: O halfling dos vales recebe +2 em Percepção em testes de Superar para identificar efeitos mágicos de controle mental, encantamentos ou ilusões de disfarce.'];
            break;

        case "druid":
            return ['Companheiro animal: O druida possui um companheiro animal, que irá obedecê-lo e também combater ao lado dele.','Sempre em alerta: O druida consegue perceber o seu redor com muito mais precisão, recebe +2 em Percepção em testes de Superar para não ser pego de surpresa.','Corpo fechado: O druida se torna imune a venenos e doenças, e não sente mais frio ou calor extremos.','Resoluto: O druida se torna mais resistente a danos mentais, recebe Armadura:1 em conflitos mentais.','Natureza atemporal: O druida não envelhece mais, nem precisa mais dormir ou se alimentar.','Caminho natural: O druida se desloca normalmente em uma floresta fechada, tanto por terra quanto por cima das árvores, ignorando aspectos que impossibilitem movimentos.'];
            break;

        case "Druida da Tempestade":
            return ['Magia elemental: O druida da tempestade é capaz de lançar magia arcana e primal.','Forma elemental: O druida pode se transformar em um elemental de seu tamanho. Ele adquire as características físicas da criatura escolhida, bem como as suas armas, armadura e façanhas, se houver.','Chamar os ventos: O druida faz com que os ventos o carreguem pelo ar, ele pode voar durante uma cena.'];
            break;

        case "Druida Primal":
            return ['Forma selvagem: O druida primal é capaz de se transformar em animais, o tamanho pode variar somente em um na escala. Ele adquire as características físicas da criatura escolhida, bem como as suas armas, armadura e façanhas, se houver.','Forma dracônica: O druida pode se transformar em um dragão de seu tamanho. Ele adquire as características físicas da criatura escolhida, bem como as suas armas, armadura e façanhas, se houver.','Transformação da cura: Ao mudar de forma o druida limpa todas as suas caixas de estresse.'];
            break;

        case "Druida da Folha":
            return ['Magia da natureza: O druida da folha é capaz de lançar magia divina e primal.','Empatia selvagem: O druida pode se comunicar com plantas e animais de maneira muito rudimentar.','Chamado da natureza: O druida convoca animais da redondeza para auxilia-lo durante uma cena. Os animais irão obedecê-lo e também combater ao lado dele.'];
            break;

        case "thief":
            return ['Ataque furtivo: O ladino recebe +2 ao realizar um ataque contra um alvo distraído, que não está ciente de sua presença.','Evasão: Ao se defender de um ataque que atinge toda a zona, a rolagem do ladino é considerada um nível acima. Ex.: uma falha vira um empate, um empate vira sucesso e um sucesso vira sucesso com estilo.','Gíria de ladrão: O ladino é capaz de passar mensagens secretas durante uma conversa comum, desde que a outra pessoa também seja fluente na gíria de ladrão.','Ação ardilosa: O ladino recebe um impulso ao Criar Vantagem durante um conflito.','Talento confiável: O ladino não falha ao realizar uma ação de Superar, trate-a como um empate.','Sentido cego: O ladino é capaz de determinar a posição exata de um criatura se estiver apto a ouvi-la, mesmo que ela esteja escondida ou invisível.'];
            break;

        case "Ladino Assassino":
            return ['Disfarce: O ladino assassino pode ficar durante toda uma cena preparando um disfarce para se infiltrar em algum local ou organização. As pessoas não notarão o disfarce pelo visual, somente pelas atitudes ou até que o ladino se revele.','Golpe letal: Ao obter sucesso com estilo em um Ataque furtivo, você pode escolher marcar uma consequência no alvo, ao invés de caixas de estresse.','Cobra venenosa: O ladino assassino é capaz de manipular todo tipo de veneno.'];
            break;

        case "Ladino Gatuno":
            return ['Reflexos de ladrão: Uma vez por cena, ao ser pego cometendo algum crime, o Ladino Gatuno recebe um impulso que lhe ajude a se safar.','Língua solta: +2 para Criar Vantagem usando Enganar ao contar alguma história para um desconhecido, seja verdadeira ou não.','Andarilho dos telhados: é capaz de se locomover facilmente dentro de uma cidade, pulando sobre casas e telhados.'];
            break;

        case "Ladino Trapaceiro Arcano":
            return ['Conjuração: O ladino trapaceiro arcano é capaz de lançar magia arcana.','Mão mágicas malabaristas: O ladino trapaceiro arcano é capaz de conjurar a magia “mãos mágicas” gratuitamente.','Emboscada mágica: O ladino trapaceiro arcano ganha um impulso ao realizar uma magia contra um alvo que não esteja ciente de sua presença.'];
            break;


    }

};



