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
        type = random(['thief','druid','monk']);
  
    switch(type) {

        case "thief":
            return {

                aspects: ['Ladino Assassino','Ladino Gatuno','Ladino Trapaceiro Arcano'],
                stunts: ['<strong>Ataque furtivo:</strong> O ladino recebe +2 ao realizar um ataque contra um alvo distraído, que não está ciente de sua presença.','<strong>Evasão:</strong> Ao se defender de um ataque que atinge toda a zona, a rolagem do ladino recebe um pulso de performance: uma falha vira um empate, um empate vira sucesso e um sucesso vira sucesso com estilo.','<strong>Gíria de ladrão:</strong> O ladino é capaz de passar mensagens secretas durante uma conversa comum, desde que a outra pessoa também seja fluente na gíria de ladrão.','<strong>Ação ardilosa:</strong> O ladino recebe uma invocação livre extra ao Criar Vantagem durante um conflito.','<strong>Talento confiável:</strong> Uma vez por cena o ladino recebe um pulso de performance em um rolamento de Superar em Furtividade.','<strong>Sentido cego:</strong> O ladino é capaz de determinar a posição exata de um criatura se estiver apto a ouvi-la, mesmo que ela esteja escondida ou invisível.'],
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
                    stunts: ['<strong>Reflexos de ladrão:</strong> Uma vez por cena, ao ser pego cometendo algum crime, o ladino gatuno recebe um impulso que lhe ajude a se safar.','<strong>Língua solta:</strong> O ladino gatuno recebe +2 para Criar Vantagem usando Enganar (Cuidadoso) ao contar alguma história para um desconhecido, seja verdadeira ou não.','<strong>Andarilho dos telhados:</strong> O ladino gatuno é capaz de se locomover facilmente dentro de uma cidade, pulando sobre casas e telhados.']
                },
                'Ladino Trapaceiro Arcano': {
                    proficiency: ['Lutar simples, atirar simples, armaduras leves'],
                    skills: ['Magia','Furtividade','Percepção','Roubo','Enganar'],
                    approach: ['Esperto'],
                    stunts: ['<strong>Conjuração:</strong> O ladino trapaceiro arcano é capaz de lançar magias da tradição arcana e recebe +1 nela.','<strong>Mão mágicas malabaristas:</strong> O ladino trapaceiro arcano é capaz de conjurar a magia “mãos mágicas” gratuitamente. A mão espectral pode manipular um objeto, abrir uma porta ou recipiente destrancado e deve permanecer na mesma zona do ladino. A mão não pode atacar, ativar itens mágicos ou carregar mais que 5 quilos.','<strong>Emboscada mágica:</strong> O ladino trapaceiro arcano ganha um impulso ao realizar uma magia contra um alvo que não esteja ciente de sua presença. ']
                }
            }
            break;

        case "druid":
            return {

                aspects: ['Druida da Tempestade','Druida Primal','Druida da Folha'],
                stunts: ['<strong>Companheiro animal:</strong> O druida possui um companheiro animal, que irá obedecê-lo e também combater ao lado dele. O companheiro animal tem uma ficha como em FAE e tem ações e turnos próprios.','<strong>Sempre em alerta:</strong> O druida consegue perceber o seu redor com muito mais precisão, recebe +2 em Percepção (Sorrateiro) em testes de Defender para não ser pego de surpresa.','<strong>Corpo fechado:</strong> O druida se torna imune a venenos e doenças, e não sente mais frio ou calor extremos.','<strong>Resoluto:</strong> O druida se torna mais resistente a danos mentais, recebe Armadura:1 em conflitos mentais.','<strong>Natureza atemporal:</strong> O druida não envelhece mais, nem precisa mais dormir ou se alimentar.','<strong>Caminho natural:</strong> O druida se desloca normalmente em uma floresta fechada, tanto por terra quanto por cima das árvores, ignorando aspectos naturais que impossibilitem movimentos.'],
                tradition: ['Primal'],
                'Druida da Tempestade': {
                    proficiency: ['Lutar simples, armaduras leves'],
                    skills: ['Magia','Vontade','Provocar','Ocultismo','Percepção'],
                    approach: ['Estiloso'],
                    stunts: ['<strong>Conhecimento arcano:</strong> O druida da tempestade é capaz de lançar magias da tradição arcana e recebe +1 nela.','<strong>Forma elemental:</strong> O druida da tempestade pode se transformar em um elemental de seu tamanho. Ele adquire as características físicas da criatura escolhida, passando a ter uma ficha como em FAE, bem como as suas armas, armadura e façanhas, se houver. O efeito dura uma cena e requer 1 PD para ser ativado.','<strong>Convocar os ventos:</strong> O druida faz com que os ventos o carreguem pelo ar, ele pode voar durante uma cena.']
                },
                'Druida Primal': {
                    proficiency: ['Lutar marcial, armaduras médias e escudo'],
                    skills: ['Animais','Lutar','Atletismo','Vigor','Magia'],
                    approach: ['Ágil'],
                    stunts: ['<strong>Forma selvagem:</strong> O druida primal é capaz de se transformar em animais, o tamanho pode variar até dois na escala, ou três ao custo de 1 PD extra (como em Secret of the Cats). Ele adquire as características físicas da criatura escolhida, com uma ficha de capangas como em FAE, bem como as suas armas, armadura e façanhas, se houver. O efeito dura uma cena e requer 1 PD para ser ativado.','<strong>Traços selvagens:</strong> O druida recebe algum traço específico de animais, como guelras, garras, sentidos aguçados ou pequenos aspectos semelhantes. No caso de garras ou presas, seus ataques são considerados como Arma: 1. O efeito dura uma cena e requer 1 PD para ser ativado.','<strong>Transformação da cura:</strong> Ao mudar de forma o druida limpa todas as suas caixas de estresse.']
                },
                'Druida da Folha': {
                    proficiency: ['Lutar simples, armaduras leves e escudo'],
                    skills: ['Empatia','Comunicação','Animais','Magia','Ocultismo'],
                    approach: ['Cuidadoso'],
                    stunts: ['<strong>Adorador da natureza:</strong> O druida da folha é capaz de lançar magias da tradição divina e recebe +1 nela.','<strong>Empatia selvagem:</strong> O druida pode se comunicar com plantas e animais de maneira muito rudimentar.','<strong>Convocação da natureza:</strong> O druida convoca animais da redondeza para auxiliá-lo durante uma cena. Os animais irão obedecê-lo e também combater ao lado dele, tem uma ficha como em FAE e ações e turnos próprios.']
                }

            }
            break;

        case "monk":
            return {

                aspects: ['Monge do Caminho da Mão Aberta','Monge do Caminho da Sombra','Monge do Caminho do Punho Bêbado','Monge do Caminho dos Quatro Elementos'],
                stunts: ['<strong>Chi:</strong> O monge ganha uma nova barra de estresse chamada Chi, ela possui 3 caixas de valor 1 e pode ser utilizada somente para Esforços Extras em testes que envolvam Atletismo, Lutar, Vigor ou Vontade ou para utilizar suas façanhas que exigem Chi.','<strong>Defesa sem armadura:</strong> Enquanto não estiver portando nenhuma armadura ou nenhum escudo, o monge tem Armadura: 1.','<strong>Defletir Projéteis:</strong> Quando o monge tiver um Sucesso com Estilo ao Defender com Atletismo (Ágil) um Ataque feito com Atirar, ele pode redirecionar as tensões de dano para um adversário na mesma zona. O adversário ainda pode se defender.','<strong>Mens sana in corpore sano:</strong> O monge tem +2 para se Defender contra Criar Vantagem que imponha Aspectos que afetem sua mente ou seu corpo (Ex.: amedrontado, confuso, doente, envenenado, etc).','<strong>Movimentação de combate:</strong> Se não houver impeditivos para movimentação, o monge pode se mover até duas zonas de distância num único turno. Se houver algum obstáculo a ser superado, ele pode mover até uma zona e testar Superar com Atletismo (Ágil), se tiver sucesso, ele ainda pode fazer uma ação.','<strong>Saraivada de golpes:</strong> O monge pode com uma única ação de Ataque de Lutar (Ágil) atingir dois adversários diferentes na mesma zona. Cada um se defende separadamente.'],
                tradition: [''],
                'Monge do Caminho da Mão Aberta': {
                    proficiency: ['Lutar marcial, atirar marcial, armaduras leves'],
                    skills: ['Atletismo','Lutar','Vigor','Percepção','Vontade'],
                    approach: ['Ágil'],
                    stunts: ['<strong>Integridade Corporal:</strong> Uma vez por sessão, o monge da mão aberta pode instantaneamente limpar 3 das suas caixas de estresse físico','<strong>Palma vibrante (exige Chi):</strong> Quando causar dano com um Ataque desarmado, o monge da mão aberta pode marcar uma caixa de estresse de Chi para que o adversário absorva as tensões de dano diretamente nas consequências.','<strong>Técnica da mão aberta:</strong> Ao efetuar um Ataque com Sucesso com Estilo o monge da mão aberta pode impor o aspecto “Derrubado” em um dos alvos e recebe uma invocação gratuita. É preciso passar um teste de Superar com Atletismo (Ágil) com dificuldade Boa (+3) para tirar o aspecto.']
                },
                'Monge do Caminho da Sombra': {
                    proficiency: ['Lutar simples, atirar marcial, armaduras leves'],
                    skills: ['Enganar','Furtividade','Ocultismo','Atletismo','Lutar'],
                    approach: ['Sorrateiro'],
                    stunts: ['<strong>Artes sombrias:</strong> O monge da sombra pode tecer sobre si gratuitamente um manto de escuridão e silêncio que impõe um aspecto sobre ele relacionado a ocultação, não fazer ruídos e percepção no escuro.','<strong>Golpe oportunista (exige Chi):</strong> Quando um adversário na mesma zona do monge das sombras é atingido por um Ataque, o monge pode riscar uma caixa de estresse de Chi e efetuar um Ataque simples contra ele (não pode ser usado com Saraivada de Golpes), mesmo que já tenha agido esse turno.','<strong>Passo das sombras:</strong> O monge da sombra pode transitar entre áreas em penumbra ou em sombra que estejam em zonas diferentes como se elas estivessem adjacentes uma à outra. Ao realizar um Ataque desarmado contra um adversário que não o tenha visto após essa movimentação, ele recebe +2 no Ataque com Lutar (Sorrateiro).']
                },
                'Monge do Caminho do Punho Bêbado': {
                    proficiency: ['Lutar simples, atirar simples, armaduras leves'],
                    skills: ['Lutar','Provocar','Vigor','Vontade','Atletismo'],
                    approach: ['Estiloso'],
                    stunts: ['<strong>Deus protege os ébrios:</strong> O monge do punho bêbado recebe +2 para Defender com Lutar (Poderoso) quando estiver com o aspecto ‘Ébrio’.','<strong>Redirecionar ataques:</strong> Quando o monge do punho bêbado tiver um Sucesso com Estilo ao Defender com Lutar estando ‘Ébrio’, ele pode redirecionar o ataque para um outro adversário na mesma zona. O adversário alvo pode se defender.','<strong>Risada Bêbada:</strong> O monge do punho bêbado sempre ganha uma invocação livre extra ao Criar Vantagem com Provocar.']
                },
                'Monge do Caminho dos Quatro Elementos': {
                    proficiency: ['Lutar simples, atirar simples, armaduras leves'],
                    skills: ['Magia','Acadêmico','Vontade','Lutar','Vigor'],
                    approach: ['Esperto'],
                    stunts: ['<strong>Comunhão com espírito elemental:</strong> O monge dos quatro elementos pode entrar em comunhão com um espírito elemental de um elemento que ele domina. A comunhão dura uma cena, o monge ganha duas caixas de estresse físico ou mental extras e fica invulnerável a danos baseados nesse elemento.','<strong>Domínio elemental:</strong> O monge dos quatro elementos recebe +2 para lançar Magias relacionadas a um determinado elemento à sua escolha. Ao escolher um elemento, ele não poderá lançar magias do elemento oposto (fogo x água; terra x ar). É possível adquirir essa façanha uma segunda vez.','<strong>Magia marcial:</strong> O monge dos quatro elementos é capaz de lançar magias da tradição primal e recebe +1 nela.']
                }
            }
            break;

    }

};