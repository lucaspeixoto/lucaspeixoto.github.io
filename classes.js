/*const template = {

    aspects: [],
    stunts: [],
    tradition: [],
    '': {
        proficiency: [],
        skills: [],
        approach: [],
        stunts: []
    }

}*/

function classes(type='') {

    if (type == '') 
        type = random(['thief','druid']);
  
    switch(type) {

        case "thief":
            return {

                aspects: ['Ladino Assassino','Ladino Gatuno','Ladino Trapaceiro Arcano'],
                stunts: ['<strong>Ataque furtivo:</strong> O ladino recebe +2 ao realizar um ataque contra um alvo distraído, que não está ciente de sua presença.','<strong>Evasão:</strong> Ao se defender de um ataque que atinge toda a zona, a rolagem do ladino recebe um pulso de performance: uma falha vira um empate, um empate vira sucesso e um sucesso vira sucesso com estilo.','<strong>Gíria de ladrão:</strong> O ladino é capaz de passar mensagens secretas durante uma conversa comum, desde que a outra pessoa também seja fluente na gíria de ladrão.','<strong>Ação ardilosa:</strong> O ladino recebe uma invocação livre extra ao Criar Vantagem durante um conflito.','<strong>Talento confiável:</strong> O ladino não falha ao realizar uma ação de Superar, trate-a como um empate.','<strong>Sentido cego:</strong> O ladino é capaz de determinar a posição exata de um criatura se estiver apto a ouvi-la, mesmo que ela esteja escondida ou invisível.'],
                tradition: [''],
                'Ladino Assassino': {
                    proficiency: ['Lutar marcial, atirar marcial, armaduras leves'],
                    skills: ['Atirar','Furtividade','Roubo','Atletismo','Enganar'],
                    approach: ['Ágil'],
                    stunts: ['<strong>Disfarce:</strong> O ladino assassino pode ficar durante toda uma cena preparando um disfarce para se infiltrar em algum local ou organização. As pessoas não notarão o disfarce pelo visual, somente pelas atitudes ou até que o ladino se revele.','<strong>Golpe letal:</strong> Ao obter sucesso com estilo em um Ataque furtivo, você pode escolher marcar uma consequência no alvo, ao invés de caixas de estresse.','<strong>Cobra venenosa:</strong> O ladino assassino é capaz de manipular todo tipo de veneno. Ele pode Criar Vantagem ao aplicar veneno em sua arma, que passa a ser considerada Arma:2 somente no próximo ataque realizado com a mesma.']
                },
                'Ladino Gatuno': {
                    proficiency: ['Lutar simples, atirar marcial, armaduras leves'],
                    skills: ['Furtividade','Roubo','Enganar','Atletismo','Percepção'],
                    approach: ['Sorrateiro'],
                    stunts: ['<strong>Reflexos de ladrão:</strong> Uma vez por cena, ao ser pego cometendo algum crime, o Ladino Gatuno recebe um impulso que lhe ajude a se safar.','<strong>Língua solta:</strong> +2 para Criar Vantagem usando Enganar ao contar alguma história para um desconhecido, seja verdadeira ou não.','<strong>Andarilho dos telhados:</strong> é capaz de se locomover facilmente dentro de uma cidade, pulando sobre casas e telhados.']
                },
                'Ladino Trapaceiro Arcano': {
                    proficiency: ['Lutar simples, atirar simples, armaduras leves'],
                    skills: ['Magia','Furtividade','Percepção','Roubo','Enganar'],
                    approach: ['Esperto'],
                    stunts: ['<strong>Conjuração:</strong> O ladino trapaceiro arcano é capaz de lançar magia arcana.','<strong>Mão mágicas malabaristas:</strong> O ladino trapaceiro arcano é capaz de conjurar a magia “mãos mágicas” gratuitamente.','<strong>Emboscada mágica:</strong> O ladino trapaceiro arcano ganha um impulso ao realizar uma magia contra um alvo que não esteja ciente de sua presença.']
                }
            }
            break;

        case "druid":
            return {

                aspects: ['Druida da Tempestade','Druida Primal','Druida da Folha'],
                stunts: ['<strong>Companheiro animal:</strong> O druida possui um companheiro animal, que irá obedecê-lo e também combater ao lado dele. O companheiro animal tem uma ficha como em FAE e tem ações e turnos próprios.','<strong>Sempre em alerta:</strong> O druida consegue perceber o seu redor com muito mais precisão, recebe +2 em Percepção em testes de Superar para não ser pego de surpresa.','<strong>Corpo fechado:</strong> O druida se torna imune a venenos e doenças, e não sente mais frio ou calor extremos.','<strong>Resoluto:</strong> O druida se torna mais resistente a danos mentais, recebe Armadura:1 em conflitos mentais.','<strong>Natureza atemporal:</strong> O druida não envelhece mais, nem precisa mais dormir ou se alimentar.','<strong>Caminho natural:</strong> O druida se desloca normalmente em uma floresta fechada, tanto por terra quanto por cima das árvores, ignorando aspectos que impossibilitem movimentos.'],
                tradition: ['Primal'],
                'Druida da Tempestade': {
                    proficiency: ['Lutar simples, armaduras leves'],
                    skills: ['Magia','Vontade','Provocar','Ocultismo','Percepção'],
                    approach: ['Estiloso'],
                    stunts: ['<strong>Magia elemental:</strong> O druida da tempestade é capaz de lançar magia arcana e primal.','<strong>Forma elemental:</strong> O druida pode se transformar em um elemental de seu tamanho. Ele adquire as características físicas da criatura escolhida, bem como as suas armas, armadura e façanhas, se houver.','<strong>Chamar os ventos:</strong> O druida faz com que os ventos o carreguem pelo ar, ele pode voar durante uma cena.']
                },
                'Druida Primal': {
                    proficiency: ['Lutar marcial, armaduras médias e escudo'],
                    skills: ['Animais','Lutar','Atletismo','Vigor','Ocultismo'],
                    approach: ['Ágil'],
                    stunts: ['<strong>Forma selvagem:</strong> O druida primal é capaz de se transformar em animais, o tamanho pode variar somente em um na escala. Ele adquire as características físicas da criatura escolhida, bem como as suas armas, armadura e façanhas, se houver.','<strong>Forma dracônica:</strong> O druida pode se transformar em um dragão de seu tamanho. Ele adquire as características físicas da criatura escolhida, bem como as suas armas, armadura e façanhas, se houver.','<strong>Transformação da cura:</strong> Ao mudar de forma o druida limpa todas as suas caixas de estresse.']
                },
                'Druida da Folha': {
                    proficiency: ['Lutar simples, armaduras leves e escudo'],
                    skills: ['Empatia','Comunicação','Animais','Magia','Ocultismo'],
                    approach: ['Cuidadoso'],
                    stunts: ['<strong>Magia da natureza:</strong> O druida da folha é capaz de lançar magia divina e primal.','<strong>Empatia selvagem:</strong> O druida pode se comunicar com plantas e animais de maneira muito rudimentar.','<strong>Convocar animais:</strong> O druida convoca animais da redondeza para auxilia-lo durante uma cena. Os animais irão obedecê-lo e também combater ao lado dele.']
                }

            }
            break;

    }

};