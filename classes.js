const template = {

    aspects: [],
    stunts: [],
    '': {
        proficiency: [],
        skills: [],
        approach: [],
        stunts: []
    }

}

function classes(type) {

    if (type == '') 
        type = random(['thief','druid']);
  
    switch(type) {

        case "thief":
            return thief = {

                aspects: ['Ladino Assassino','Ladino Gatuno','Ladino Trapaceiro Arcano'],
                stunts: ['Ataque furtivo: O ladino recebe +2 ao realizar um ataque contra um alvo distraído, que não está ciente de sua presença.','Evasão: Ao se defender de um ataque que atinge toda a zona, a rolagem do ladino é considerada um nível acima. Ex.: uma falha vira um empate, um empate vira sucesso e um sucesso vira sucesso com estilo.','Gíria de ladrão: O ladino é capaz de passar mensagens secretas durante uma conversa comum, desde que a outra pessoa também seja fluente na gíria de ladrão.','Ação ardilosa: O ladino recebe um impulso ao Criar Vantagem durante um conflito.','Talento confiável: O ladino não falha ao realizar uma ação de Superar, trate-a como um empate.','Sentido cego: O ladino é capaz de determinar a posição exata de um criatura se estiver apto a ouvi-la, mesmo que ela esteja escondida ou invisível.'],
                'Ladino Assassino': {
                    proficiency: ['Lutar marcial, atirar marcial, armaduras leves'],
                    skills: ['Atirar','Furtividade','Atletismo'],
                    approach: ['Ágil'],
                    stunts: ['Disfarce: O ladino assassino pode ficar durante toda uma cena preparando um disfarce para se infiltrar em algum local ou organização. As pessoas não notarão o disfarce pelo visual, somente pelas atitudes ou até que o ladino se revele.','Golpe letal: Ao obter sucesso com estilo em um Ataque furtivo, você pode escolher marcar uma consequência no alvo, ao invés de caixas de estresse.','Cobra venenosa: O ladino assassino é capaz de manipular todo tipo de veneno.']
                },
                'Ladino Gatuno': {
                    proficiency: ['Lutar simples, atirar marcial, armaduras leves'],
                    skills: ['Furtividade','Roubo','Enganar'],
                    approach: ['Sorrateiro'],
                    stunts: ['Reflexos de ladrão: Uma vez por cena, ao ser pego cometendo algum crime, o Ladino Gatuno recebe um impulso que lhe ajude a se safar.','Língua solta: +2 para Criar Vantagem usando Enganar ao contar alguma história para um desconhecido, seja verdadeira ou não.','Andarilho dos telhados: é capaz de se locomover facilmente dentro de uma cidade, pulando sobre casas e telhados.']
                },
                'Ladino Trapaceiro Arcano': {
                    proficiency: ['Lutar simples, atirar simples, armaduras leves'],
                    skills: ['Magia','Furtividade','Percepção'],
                    approach: ['Esperto'],
                    stunts: ['Conjuração: O ladino trapaceiro arcano é capaz de lançar magia arcana.','Mão mágicas malabaristas: O ladino trapaceiro arcano é capaz de conjurar a magia “mãos mágicas” gratuitamente.','Emboscada mágica: O ladino trapaceiro arcano ganha um impulso ao realizar uma magia contra um alvo que não esteja ciente de sua presença.']
                };
            }
            break;

        case "druid":
            return druid = {

                aspects: ['Druida da Tempestade','Druida Primal','Druida da Folha'],
                stunts: ['Companheiro animal: O druida possui um companheiro animal, que irá obedecê-lo e também combater ao lado dele.','Sempre em alerta: O druida consegue perceber o seu redor com muito mais precisão, recebe +2 em Percepção em testes de Superar para não ser pego de surpresa.','Corpo fechado: O druida se torna imune a venenos e doenças, e não sente mais frio ou calor extremos.','Resoluto: O druida se torna mais resistente a danos mentais, recebe Armadura:1 em conflitos mentais.','Natureza atemporal: O druida não envelhece mais, nem precisa mais dormir ou se alimentar.','Caminho natural: O druida se desloca normalmente em uma floresta fechada, tanto por terra quanto por cima das árvores, ignorando aspectos que impossibilitem movimentos.'],
                'Druida da Tempestade': {
                    proficiency: ['Lutar simples, armaduras leves'],
                    skills: ['Magia','Vontade','Provocar'],
                    approach: ['Estiloso'],
                    stunts: ['Magia elemental: O druida da tempestade é capaz de lançar magia arcana e primal.','Forma elemental: O druida pode se transformar em um elemental de seu tamanho. Ele adquire as características físicas da criatura escolhida, bem como as suas armas, armadura e façanhas, se houver.','Chamar os ventos: O druida faz com que os ventos o carreguem pelo ar, ele pode voar durante uma cena.']
                },
                'Druida Primal': {
                    proficiency: ['Lutar marcial, armaduras médias e escudo'],
                    skills: ['Animais','Lutar','Atletismo'],
                    approach: ['Ágil'],
                    stunts: ['Forma selvagem: O druida primal é capaz de se transformar em animais, o tamanho pode variar somente em um na escala. Ele adquire as características físicas da criatura escolhida, bem como as suas armas, armadura e façanhas, se houver.','Forma dracônica: O druida pode se transformar em um dragão de seu tamanho. Ele adquire as características físicas da criatura escolhida, bem como as suas armas, armadura e façanhas, se houver.','Transformação da cura: Ao mudar de forma o druida limpa todas as suas caixas de estresse.']
                },
                'Druida da Folha': {
                    proficiency: ['Lutar simples, armaduras leves e escudo'],
                    skills: ['Empatia','Comunicação','Animais'],
                    approach: ['Cuidadoso'],
                    stunts: ['Magia da natureza: O druida da folha é capaz de lançar magia divina e primal.','Empatia selvagem: O druida pode se comunicar com plantas e animais de maneira muito rudimentar.','Chamado da natureza: O druida convoca animais da redondeza para auxilia-lo durante uma cena. Os animais irão obedecê-lo e também combater ao lado dele.']
                }

            }
            break;

    }

};