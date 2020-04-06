function races(type='') {

	if (type == '') 
        type = random(['halfling','elf','dwarf','human']);
    	//type = random(['halfling','elf','dwarf','human','dragonborn','gnome','touched']);
  
    switch(type){
    	case "halfling":
    		return {

			    aspects: ['Halfling Pés Leves','Halfling Robusto','Halfling dos Vales'],
			    stunts: ['<strong>Visão no escuro:</strong> O halfling enxerga na mais completa escuridão, mas não pode discernir cores no escuro, apenas tons de cinza.','<strong>Sortudo:</strong> O halfling pode, uma vez por sessão, re-rolar gratuimente uma jogada de dados.'],
			    'Halfling Pés Leves': {
					names: ['Gorbulas Cotton','Wilimar Bolger','Flambard Zaragamba','Willehad Diggle','Wilimar Brown','Leuthard Tunnelly','Isumbras Fallohide','Nordbert Gluttonbelly','Lanfranc Burrows','Audramnus Tinyfoot','Boso Underlake','Otton Boulderhill','Rollo Farfoot','Scudamor Gardner','Ebregisel Elvellon','Rorimac Longbottom','Matta Galpsi','Bertram Gammidge','Milo Noakes','Hartmut Longhole','Moschia Boffin','Cunegundis Bramblethorn','Fredegunde Greenhand','Lanthechilde Gawkroger','Tatiana Grubb','Taryn Goodbody','Gudule Grubb','Duenna Fairbairn','Ermengard Took-Took','Fredegunde Puddlefoot','Theoderada Labingi','Bertrada Burrows','Andrea Gaukrogers','Alpais Dewfoot','Chunsina Headstrong','Hildeburg Gawkroger','Audofleda Clayhanger','Cunegund Bunce','Keena Gluttonbelly','Blesinde Clayhanger'],
			        skills: ['Furtividade'],
			        approach: ['Sorrateiro'],
			        stunts: ['<strong>Simpático:</strong> O halfling pés-leves recebe +2 em Empatia (Estiloso) para Criar Vantagem quando está dialogando com humanos, elfos ou anões.','<strong>Furtividade natural:</strong> O halfling pés-leves recebe +2 em Furtividade (Sorrateiro) para Criar Vantagem quando está em uma multidão.']
			    },
			    'Halfling Robusto': {
			        names: ['Caradas Silverstring','Andwise Hopesinger','Aega Whitbottom','Eberulf Puddlefoot','Dagaric Gardner','Cheldric Longbottom','Birinus Hornwood','Emmeran Dewfoot','Mansuetus Wanderfoot','Chararic Proudbottom','Leuthere Hornwood','Longo Brown','Erenfried Sackville-Baggins','Brutus Burrows','Fridolin Butcher','Cheldric Stoor','Nick Fallohide','Bertelis Hornblower','Deagol Mugwort','Pippin Gawkroger','Aregund Grubb','Bailey Twofoot','Nantechildis Lightfoot','Salvia Brandywood','Baldechildis Hopesinger','Leesha Noakesburrow','Selina Finnagund','Ingelburga Maggot','Kunegund Goldworthy','Alpaida Langham','Kayla Sackville-Baggins','Pandora Longriver','Sarai Greenhand','Adallinda Chubb-Baggins','Adda Burrows','Tasha Bolger-Baggins','Ginelle Brandybuck','Gundradis Hopesinger','Alia Boulderhill','Fastrada Gaukrogers'],
			        skills: ['Vigor'],
			        approach: ['Poderoso'],
			        stunts: ['<strong>Resiliência dos robustos:</strong> O halfling robusto recebe +2 em Vigor (Poderoso) ao se Defender para evitar ser envenenado.','<strong>Bravura:</strong> O halfling robusto recebe +2 em Vontade (Esperto) para se Defender de ataques mentais.']
			    },
			    'Halfling dos Vales': {
			        names: ['Flodoard Burrows','Isengrim Bracegirdle','Athanaric Longbottom','Waldolanus Silentfoot','Wala Noakesburrow','Wulfram Rumble','Brice Sackville','Leuthard Bottomhill','Wandregisel Hayward','Poppo Galpsi','Dodinas Longbottom','Norbert Hopesinger','Cedivar Bracegirdle','Vulmar Puddifoot','Trahand Twofoot','Emmeran Pott','Meriadoc Littlefoot','Chlodwig Proudbody','Adalard Gaukrogers','Habaccuc Lothran','Hildegund Goold','Lauren Boulderhill','Erin Elvellon','Pamphila Proudmead','Rotrude Gardner','Sophie Whitbottom','Nicole Oakbottom','Caitlin Swiftfoot','Hildegund Gamgee','Lauren Hlothran','Alexis Bophin','Mary Underlake','Madelgarda Goodchild','Ruby Undertree','Anna Pott','Suri Gluttonbelly','Kymma Gaukrogers','Rosamund Sandyman','Mechtild Bolger','Leesha Hopesinger'],
			        skills: ['Contatos'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Recuperação acelerada:</strong> O halfling dos vales se recupera muito mais rapidamente de seus ferimentos físicos. Ao tratar uma consequência, pode gastar 1 PD para considerá-la como um nível mais branda. (Severa como Moderada e Moderada como Suave).','<strong>Discernimento Apurado:</strong> O halfling dos vales recebe +2 em Percepção (Esperto) em testes de Superar para identificar efeitos mágicos de controle mental, encantamentos e ilusões de disfarce.']
			    }
			}
    		break;

		case "elf":
    		return {

			    aspects: ['Alto Elfo','Elfo da Floresta','Elfo Drow'],
			    stunts: ['<strong>Visão no escuro:</strong> O elfo enxerga na mais completa escuridão, mas não pode discernir cores no escuro, apenas tons de cinza.','<strong>Atencioso:</strong> O elfo possui sentidos aguçados, recebe +2 em Superar com Percepção (Sorrateiro) para notar tentativas de ocultação não-mágicas.'],
			    'Alto Elfo': {
			    	names: ['Elmenor','Crafir','Yelpeiros','Perhorn','Virmyar','Waeszumin','Ianlamin','Admyar','Wrankas','Cranorin','Sarjor','Zinwraek','Omafir','Kearo','Yellar','Elmyar','Aebalar','Uriro','Vakas','Dorsandoral','Caitris','Quibella','Brykalyn','Uriynore','Xyrkalyn','Faephine','Gilmoira','Eilna','Daewynn','Valdove','Miaphyra','Daegwyn','Brynala','Yllavaris','Phiphyra','Kristris','Qigella','Yeszana','Loraphine','Gilvaris'],
			        skills: ['Acadêmico'],
			        approach: ['Esperto'],
			        stunts: ['<strong>Sensibilidade mágica:</strong> O alto elfo recebe +1 em uma tradição de magia à sua escolha, desde que sua classe possa lançar magias.','<strong>Alta estirpe:</strong> O alto elfo recebe +2 ao Criar Vantagem em testes de Comunicação (Estiloso) quando está tentando impressionar em um diálogo ou discurso.']
			    },
			    'Elfo da Floresta': {
			    	names: ['Dorfaren','Heiquinal','Aekas','Daesandoral','Kelpetor','Beixalim','Gensalor','Keajeon','Elaxidor','Virro','Petxidor','Yelyarus','Gensandoral','Tralamin','Sarlamin','Glynydark','Petmaris','Thekian','Oloquinal','Ianzeiros','Yeszana','Wynroris','Adthyra','Trisralei','Wysanala','Ravaralei','Liara','Olasys','Olahana','Wysarieth','Triswynn','Bikrana','Ulalana','Lorabella','Quistina','Adzana','Maglana','Darora','Chaethana','Nerilana'],
			        skills: ['Furtividade'],
			        approach: ['Sorrateiro'],
			        stunts: ['<strong>Ocultação:</strong> O elfo da floresta recebe +2 ao Criar Vantagem com Furtividade (Sorrateiro) para se ocultar em ambientes selvagens.','<strong>Afinidade com armas:</strong> Ao utilizar uma arma élfica, o elfo da floresta tem Arma: 1, isto é, causa uma tensão a mais de dano em um ataque bem sucedido.']
			    },
			    'Elfo Drow': {
			    	names: ['Quildyn Arablyl','Dinerd Orlyt-tar','Randaer Oussduis','Taragh Godear','Quenkoth Vrammune','Honemkoph Waeglistyn','Narlkoth Beltin','Xunvin Chaulssal','Orgoloth Olonrae','Ornaryn Elpragh','Ryldrin Oussduis','Nalraen Aleanghym','Mournryn Barriduis','Gelolvir Freafin','Tarrak Omrylan','Jhaambal A-Dararyd','Tathphyn Dinorel','Senszar Duskruan','Dresmorlin Gallaer','Quevven Omriwin','Nhilual Despar','Rilafay Noquiryn','Baeayne Do-ana','Umraestin Barriana','Anganel Quavyth','Jhanrina A-Darabar','Charifaere Philuin','Byrya Jhaliwin','Dilynrae Abbylan','Vhondryl Telenna','Hounwae Oussarn','Wuyonvyll Maerret','Felynaste Everhndar','Ardulynda Everhrae','Nitlara Rhomdiiryn','Urlva Xiltyr','Shulvallris Dalala','Ilivaryanna Rhomdiriy','Zelpassa Yril-Lysaen','Ulitree Olonrae'],
			        skills: ['Magia'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Escuridão:</strong> Uma vez por sessão, o elfo drow pode lançar gratuitamente a magia Escuridão. Toda uma zona, à escolha do drow, fica escurecida magicamente. Luz não-mágica não pode iluminar o local mas criaturas que possuem visão no escuro podem enxergar normalmente. O efeito dura uma cena ou até que o elfo drow o dissipe.','*Magia inata:* O elfo drow por conjurar “detectar magia” uma vez por cena, gratuitamente. Ele sente a presença de magia dentro de sua zona, bem como a qual tradição ela pertence.','<strong>Magia inata:</strong> O elfo drow por conjurar “detectar magia” uma vez por cena, gratuitamente. Ele sente a presença de magia dentro de sua zona, bem como a qual tradição ela pertence.']
			    }
			}
    		break;
  	
		case "dwarf":
    		return {
    			    
    			aspects: ['Anão da Colina','Anão da Montanha','Anão Duergar'],
			    stunts: ['<strong>Visão no escuro:</strong> O anão enxerga na mais completa escuridão, mas não pode discernir cores no escuro, apenas tons de cinza.','<strong>Resiliência anã:</strong> O anão é mais resistente a venenos, recebe +2 em testes de Vigor (Poderoso) ao se Defender para evitar ser envenenado.'],
			    'Anão da Colina': {
			    	names: ['Branrigg','Admus','Vonkohm','Murdur','Raniggs','Granrigg','Ebgrim','Bromrik','Dardor','Tharmun','Muirgron','Grankuhm','Gimron','Hjaldek','Adnir','Bromdal','Thulmor','Krammur','Umdal','Thurkohm','Daerwaen','Einlynn','Jennnia','Jyndora','Redleil','Mistres','Ketnan','Belletyn','Rundora','Daerlyl','Mysvia','Sardish','Arlen','Lysslin','Brytleil','Ingvan','Solras','Tyshnyss','Barbera','Brilleres'],
			        skills: ['Percepção'],
			        approach: ['Esperto'],
			        stunts: ['<strong>Sentidos aguçados:</strong> O anão da colina recebe +2 em testes de Percepção (Esperto) para Criar Vantagem em uma situação em que os seus sentidos sejam exigidos ao máximo.','<strong>Tenacidade anã:</strong> Para contar as caixas de estresse físico, considere que o anão da colina possui o seu valor de Vigor aumentado em 2.']
			    },
			    'Anão da Montanha': {
			    	names: ['Thurgron','Rotron','Ragmund','Gralrig','Mordur','Darthrun','Thurnar','Dolthrun','Darkohm','Grygron','Bromkam','Therkyl','Ebnom','Hjolthrum','Dalrik','Grennam','Gergarn','Tynyl','Balnam','Torram','Mystnyl','Nesniss','Gwinnyss','Brillelinn','Brenwynn','Kaitria','Braldielle','Naernas','Solris','Brylsael','Arrin','Germa','Nalva','Bellevian','Gwendryn','Runvan','Baerwynn','Rynmera','Branlyl','Brilma'],
			        skills: ['Vigor'],
			        approach: ['Poderoso'],
			        stunts: ['<strong>Especialização em rochas:</strong> O anão da montanha recebe +2 em testes de Acadêmico (Esperto) relacionados à origem de um trabalho em pedra.','<strong>Treinamento com armaduras:</strong> O anão da montanha é treinado no uso de armaduras. Ele recebe Armadura:1 caso esteja utilizando uma.']
			    },
			    'Anão Duergar': {
			    	names: ['Bankohm','Baerrum','Dulbrek','Emkahm','Hurdek','Dulmus','Baerbek','Tyrim','Amdrus','Urmdrom','Graldor','Ebthran','Gralrik','Balkum','Amrum','Adrim','Melrom','Murthran','Daerdir','Thertharn','Byllethiel','Tyshres','Einvian','Laswaen','Bryllelin','Lessgiel','Brondish','Tyshniss','Sarra','Gemlinn','Gemria','Nesnora','Brytdeth','Belnyl','Bylri','Torma','Maevselle','Lessryn','Jindeth','Tasryl'],
			        skills: ['Furtividade'],
			        approach: ['Sorrateiro'],
			        stunts: ['<strong>Resistência mágica:</strong> O anão duergar é mais resistente contra efeitos mágicos, recebendo +2 em testes de Defender contra magias que tenham exclusivamente o anão como alvo.','<strong>Piscar:</strong> Ao custo de 1 PD, o anão duergar é capaz de ficar invisível, qualquer coisa que ele esteja vestindo ou carregando também fica invisível. O efeito dura uma cena ou até que ele ataque ou conjure uma magia.']
			    }
			}
    		break;

    	case "human":
    		return {

    			aspects: ['Humano','Meio-Elfo','Meio-Orc'],
			    stunts: ['<strong>Versátil:</strong> Um humano, ou meio-humano, se adapta rapidamente a qualquer situação. Uma vez por sessão ele recebe gratuitamente um pulso de performance.','<strong>Ambição natural:</strong> Um humano, ou meio-humano, recebe +2 em testes de Vontade (Cuidadoso) para Superar alguma barreira mental ou social que esteja impedindo o seu progresso.'],
			    'Humano': {
			    	names: ['Nheimeir Hukhi','Narem Khule','Envin Rainbash','Toi Commondew','Brogrol Vez','Nif Divrag','Modvom Sunstone','Brorth Steelstride','Teh-Kirof Buelrohrim','Nuvah Vilild','Drelmirvaj Tatherkyavya','Vlethek Stadantu','Thi Cie','Jim Lue','Tolurnar Cabrebris','Verteas Furasu','Rheihlar Nennu','Ruser Bhehrod','Grursturn Paleblight','Hanvil Plaindrifter','Karvif Shon','Ril Numeg','Gemeth Battleshaper','Erth Orbbloom','Vid-Kijo Faltanskeld','Lim-Zif Hapvuft','Fijelmedj Troruvrovra','Shargek Charnilzi','Thih Duy','Fiow Im','Vimairduz Balbergi','Enrul Orgargel','Hasiteil Cohreil','Efuh Cashel','Riznoldri Deathweaver','Kalee Voidgrove','Chelma Kav','Cha Kukotsk','Kelega Farglory','Ceshi Phoenixshot','Korozrus Rucrenskid','Lofo Jultrehd','Imzulma Amidorkye','Herrel Erkedze','Chia Piam','Tua Wia','Dants Imergos','Viatt Marizer','Nismosmeh Nahil','Imol Khuku','Sheesrerrul Clanbluff','Redri Dawnvigor','Colna Duv','Le Chemotsk','Lethresha Wolfmaw','Astro Sacredblossom','Losafo Jiltizdim','Nosha Mizdub','Shefafra Chanivanye','Alra Mavalba','Nue Zao','Xao Ma','Qomv Povenu','Luinds Rimildas'],
			        skills: [],
			        approach: [],
			        stunts: ['<strong>Natureza cooperativa:</strong> O humano recebe +2 em Contatos (Estiloso) para Criar Vantagem se estiver em uma cidade humana.','<strong>Curiosidade:</strong> O humano recebe +2 em Investigar (Esperto) para descobrir aspectos de cenário ao Criar Vantagem.']
			    },
			    'Meio-Elfo': {
			    	names: ['Sarqarim','Marminar','Kriminar','Jamneiros','Xanavor','Elfaerd','Aroovar','Xavlanann','Zanneiros','Zanyeras','Eirben','Zancoril','Osenas','Ultorin','Horben','Ianword','Normorn','Falreak','Marfyr','Xanzaphir','Faestine','Maretihne','Bynelor','Lorayra','Prigalyn','Vylyra','Theryra','Qiviel','Delcerys','Unaanys','Urigalyn','Yeselor','Jilona','Qienyphe','Thermae','Yesdove','Yesyra','Saelwalyn','Galmythe','Jentheris'],
			        skills: ['Provocar'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Visão no escuro:</strong> O meio-elfo enxerga na mais completa escuridão, mas não pode discernir cores no escuro, apenas tons de cinza.','<strong>Resistência mágica:</strong> O meio-elfo é mais resistente contra efeitos mágicos, recebendo +2 para se Defender de magias que tenham exclusivamente o meio-elfo como alvo.']
			    },
			    'Meio-Orc': {
			    	names: ['Renotir','Throbur','Mokerash','Sorinar','Garugash','Mugarall','Kruudim','Moronar','Camarsh','Zim','Thridim','Trakamash','Aganar','Agamir','Oguorim','Kelad','Arnoruk','Mukudark','Kraudar','Sarunars','Gryanur','Kotagu','Gimi','Noral','Puyagar','Grotir','Senodur','Gryimar','Shomi','Koda','Ootatur','Olugar','Kotaner','Giz','Siti','Kiraner','Rawatur','Temunar','Gajener','Miriz'],
			        skills: ['Lutar'],
			        approach: ['Poderoso'],
			        stunts: ['<strong>Marginalizado:</strong> O meio-orc recebe +2 em testes de Empatia (Estiloso) com bioformas humanóides que geralmente são marginalizadas em sociedades humanas, como goblins, kobolds, orcs e gigantes.','<strong>Ferocidade orc:</strong> Uma vez por sessão, ao receber um dano e não ter mais caixas de estresse para serem marcadas, o meio-orc pode gastar 1 PD para ignorar o dano recebido.']
			    },
    		}
    		break;

    	case "dragonborn":
    		return {

    			aspects: ['Draconato Azul','Draconato Branco','Draconato Bronze','Draconato Cobre','Draconato Latão','Draconato Negro','Draconato Dourado','Draconato Prateado','Draconato Verde','Draconato Vermelho'],
			    stunts: [],
			    'Draconato Azul': {
			    	names: ['Krivmorn Clucinduk','Sawarum Membinak','Frowunax Clistenthurred','Calurash Clinxociajuash','Alivull Croldricmeallish','Qelbor Firjun','Wrabarum Vuacak','Wrazire Kelmenkak','Pabroth Prinxacnad','Vyukris Onxeshkmuuduul','Kelhime Krearnishtash','Ushibith Apen','Naxiris Clempinillek','Kovys Estindin','Kelpatys Celxeashkmuraan','Phirith Ulmuuk','Hingwen Eastelijak','Fenqorel Yathtuk','Yrsira Merjenaarrish','Hinrish Limraal'],
			        skills: ['Provocar'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Sopro elétrico:</strong> Pode soltar um jato elétrico uma vez por sessão. Faça um ataque com Atirar que atinge todos dentro de uma zona. Se a zona conter água o ataque recebe +1.']
			    },
			    'Draconato Branco': {
			    	names: ['Krivmorn Clucinduk','Sawarum Membinak','Frowunax Clistenthurred','Calurash Clinxociajuash','Alivull Croldricmeallish','Qelbor Firjun','Wrabarum Vuacak','Wrazire Kelmenkak','Pabroth Prinxacnad','Vyukris Onxeshkmuuduul','Kelhime Krearnishtash','Ushibith Apen','Naxiris Clempinillek','Kovys Estindin','Kelpatys Celxeashkmuraan','Phirith Ulmuuk','Hingwen Eastelijak','Fenqorel Yathtuk','Yrsira Merjenaarrish','Hinrish Limraal'],
			        skills: ['Conhecimentos'],
			        approach: ['Esperto'],
			        stunts: ['<strong>Sopro congelante:</strong> Pode soltar um cone de frio uma vez por sessão, que diminui a temperatura do local e extingue pequenas chamas. Faça um ataque com Atirar que atinge todos dentro de uma zona.']
			    },
			    'Draconato Bronze': {
			    	names: ['Paxiros Gathtak','Xarcrath Luathtokmik','Uroghull Dimtojerris','Vraklasar Ardankurgir','Troucrath Clanxocmic','Udojhan Femphacmanesh','Iorzire Pramranshteth','Saroth Arnath','Narwarum Myulkaal','Orlakris Coldruac','Drysnorae Nurthusergaak','Solyassa Liranshtac','Faerinn Arded','Jofyire Cliastakmiargir','Wraxora Klumphetash','Lorawophyl Kraankastarash','Tharith Klarjinthirish','Hinsira Linkud','Drysvys Myunketun','Irlylyassa Lorjir'],
			        skills: ['Enganar'],
			        approach: ['Esperto'],
			        stunts: ['<strong>Sopro elétrico:</strong> Pode soltar um jato elétrico uma vez por sessão. Faça um ataque com Atirar que atinge todos dentro de uma zona. Se a zona conter água o ataque recebe +1.']
			    },
			    'Draconato Cobre': {
			    	names: ['Paxiros Gathtak','Xarcrath Luathtokmik','Uroghull Dimtojerris','Vraklasar Ardankurgir','Troucrath Clanxocmic','Udojhan Femphacmanesh','Iorzire Pramranshteth','Saroth Arnath','Narwarum Myulkaal','Orlakris Coldruac','Drysnorae Nurthusergaak','Solyassa Liranshtac','Faerinn Arded','Jofyire Cliastakmiargir','Wraxora Klumphetash','Lorawophyl Kraankastarash','Tharith Klarjinthirish','Hinsira Linkud','Drysvys Myunketun','Irlylyassa Lorjir'],
			        skills: ['Vontade'],
			        approach: ['Cuidadoso'],
			        stunts: ['<strong>Sopro ácido:</strong> Pode soltar um jato ácido uma vez por sessão, que derrete pequenos objetos e danifica objetos maiores. Faça um ataque com Atirar que atinge todos dentro de uma zona.']
			    },
			    'Draconato Latão': {
			    	names: ['Bamorn Arninshterred','Wraqiroth Prirjac','Prifarn Premruuth','Narythas Kiltikac','Ravojurn Shistas','Ghekul Uuxendarger','Pribor Taltetharguul','Ghenaar Cruulxes','Narjhan Nampinshtandith','Lormash Prapojish','Qibirith Draphakendar','Gurgwen Kerrhith','Erlicys Klulric','Orirish Aambenic','Ushinorae Thirdaandruul','Welsipora Krerath','Thagil Clophaciarrel','Urinorae Cruucharaash','Soxora Drimric','Oripora Kruphitoled'],
			        skills: ['Furtividade'],
			        approach: ['Sorrateiro'],
			        stunts: ['<strong>Sopro incendiário:</strong> Pode soltar um jato de fogo uma vez por sessão, que queima pequenos objetos e coloca o aspecto “pegando fogo” em objetos maiores. Faça um ataque com Atirar que atinge todos dentro de uma zona.']
			    },
			    'Draconato Negro': {
			    	names: ['Bamorn Arninshterred','Wraqiroth Prirjac','Prifarn Premruuth','Narythas Kiltikac','Ravojurn Shistas','Ghekul Uuxendarger','Pribor Taltetharguul','Ghenaar Cruulxes','Narjhan Nampinshtandith','Lormash Prapojish','Qibirith Draphakendar','Gurgwen Kerrhith','Erlicys Klulric','Orirish Aambenic','Ushinorae Thirdaandruul','Welsipora Krerath','Thagil Clophaciarrel','Urinorae Cruucharaash','Soxora Drimric','Oripora Kruphitoled'],
			        skills: ['Ocultismo'],
			        approach: ['Cuidadoso'],
			        stunts: ['<strong>Sopro ácido:</strong> Pode soltar um jato ácido uma vez por sessão, que derrete pequenos objetos e danifica objetos maiores. Faça um ataque com Atirar que atinge todos dentro de uma zona.']
			    },
			    'Draconato Dourado': {
			    	names: ['Grejhan Drarthotirduul','Krivhazar Cremtuucneas','Lordorim Malxejal','Calutrin Fuchesarden','Greciar Crimpac','Vrakfarn Ancelean','Zorkris Myuuccad','Babarum Ephikmol','Balzavur Olkalac','Loryax Nyenkul','Belhymm Nyomphejimel','Cagwen Earrhenul','Orilyassa Myarnaacnajith','Kapora Verthenkec','Drysqorel Nyuacceshtid','Yalyassa Kalkinesh','Wrarith Ambik','Sudalynn Vualmaajud','Josira Droxad','Mihime Tirthuash'],
			        skills: ['Empatia'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Sopro incendiário:</strong> Pode soltar um jato de fogo uma vez por sessão, que queima pequenos objetos e coloca o aspecto “pegando fogo” em objetos maiores. Faça um ataque com Atirar que atinge todos dentro de uma zona.']
			    },
			    'Draconato Prateado': {
			    	names: ['Grejhan Drarthotirduul','Krivhazar Cremtuucneas','Lordorim Malxejal','Calutrin Fuchesarden','Greciar Crimpac','Vrakfarn Ancelean','Zorkris Myuuccad','Babarum Ephikmol','Balzavur Olkalac','Loryax Nyenkul','Belhymm Nyomphejimel','Cagwen Earrhenul','Orilyassa Myarnaacnajith','Kapora Verthenkec','Drysqorel Nyuacceshtid','Yalyassa Kalkinesh','Wrarith Ambik','Sudalynn Vualmaajud','Josira Droxad','Mihime Tirthuash'],
			        skills: ['Comunicação'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Sopro congelante:</strong> Pode soltar um cone de frio uma vez por sessão, que diminui a temperatura do local e extingue pequenas chamas. Faça um ataque com Atirar que atinge todos dentro de uma zona.']
			    },
			    'Draconato Verde': {
			    	names: ['Wufarn Thelkundren','Nesxan Folkosh','Wulrash Distin','Worhadur Thaphic','Bhahadur Camritunod','Tazrakas Apendes','Jarcrath Deroshtadoc','Vraknaar Klolthenshtac','Beldhall Preacar','Vyusashi Drialdeajeac','Eshyries Nyulthish','Valkira Cruathtuc','Zenliann Celtos','Erliwyn Ancokmenash','Ophizita Drunkethuurdean','Neskira Myelthel','Irlypora Crerrhodillak','Xyrina Myampatharguus','Nesshann Kimphajellod','Johime Shalxeth'],
			        skills: ['Lutar'],
			        approach: ['Poderoso'],
			        stunts: ['<strong>Sopro venenoso:</strong> Pode soltar um cone de veneno uma vez por sessão, que coloca o aspecto “envenenado” nos alvos. Faça um ataque com Atirar que atinge todos dentro de uma zona.']
			    },
			    'Draconato Vermelho': {
			    	names: ['Wufarn Thelkundren','Nesxan Folkosh','Wulrash Distin','Worhadur Thaphic','Bhahadur Camritunod','Tazrakas Apendes','Jarcrath Deroshtadoc','Vraknaar Klolthenshtac','Beldhall Preacar','Vyusashi Drialdeajeac','Eshyries Nyulthish','Valkira Cruathtuc','Zenliann Celtos','Erliwyn Ancokmenash','Ophizita Drunkethuurdean','Neskira Myelthel','Irlypora Crerrhodillak','Xyrina Myampatharguus','Nesshann Kimphajellod','Johime Shalxeth'],
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
			    	names: ['Yosvyn','Wremin','Mangrim','Felben','Nimin','Sinpos','Gagrim','Wilmorn','Farkur','Rascorin','Mylys','Carwyse','Kloxis','Inaroe','Wrowyn','Nysys','Odana','Galgani','Fenpine','Vomiphi'],
			        skills: ['Magia'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Ilusionista nato:</strong> O gnomo da floresta conhece alguma magia simples de ilusão e pode conjurá-la gratuitamente.','<strong>Falar com animais:</strong> O gnomo da floresta pode se comunicar com animais pequenos de maneira muito rudimentar.']
			    },
			    'Gnomo das Rochas': {
			    	names: ['Orxim','Orben','Panakur','Jorlin','Warner','Mancorin','Valpip','Zanmin','Kaswor','Sinkas','Dofi','Sadysa','Quephina','Arizyre','Heldira','Vennoa','Zinnove','Galna','Spimyra','Elrhana'],
			        skills: ['Conhecimentos'],
			        approach: ['Esperto'],
			        stunts: ['<strong>Conhecimento de artífice:</strong> O gnomo das rochas recebe +2 em Conhecimentos para Criar Vantagem em relação a itens mágicos, objetos alquímicos ou mecanismos tecnológicos.','<strong>Engenhoqueiro:</strong> o gnomo das rochas é capaz de construir mecanismos simples que funcionam durante uma cena, como brinquedos mecânicos, isqueiro mecânico ou caixa de música.']
			    },
			    'Gnomo das Profundezas': {
			    	names: ['Orkur','Quoser','Gabar','Calxif','Dorfiz','Ipajin','Topip','Hortix','Ianpip','Tantor','Orlin','Lorissa','Ylokasys','Kloyaris','Galqaryn','Rezyre','Zinceli','Salys','Faedira','Odaniana'],
			        skills: ['Furtividade'],
			        approach: ['Sorrateiro'],
			        stunts: ['<strong>Mineiro artífice:</strong> O gnomo das profundezas recebe +2 em Ofícios ao Criar Vantagem quando trabalha com rochas e minerais.','<strong>Cauteloso:</strong> O gnomo das profundezas recebe +2 em Furtividade ao Criar Vantagem para evitar qualquer tipo de perigo.']
			    },
    		}
    		break;

		case "touched":
    		return {

    			aspects: ['Tiefling','Aasimar','Genasi do Ar','Genasi da Terra','Genasi do Fogo','Genasi da Água'],
			    stunts: ['<strong>Visão no escuro:</strong> Você enxerga normalmente na mais completa escuridão.'],
			    'Tiefling': {
			    	names: ['Aranrai','Salrias','Garnon','Reus','Moremon','Zarxire','Akrus','Content','Master','Mastery','Mormus','Horrakas','Merut','Zarros','Zornon','Skaron','Ekthus','Uncommon','Confidence','Pure','Natbis','Naphi','Anicria','Iniwure','Nethtish','Pescyra','Velrissa','Piety','Trust','Life','Inyola','Rotish','Kallyvia','Grizes','Quhiri','Frivari','Crelyvia','Open','Interesting','Master'],
			        skills: ['Provocar'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Legado infernal:</strong> Uma vez por sessão, o tiefling pode lançar a magia Repreensão Infernal.','<strong>Resistência infernal:</strong> O tiefling recebe +2 ao se Defender de ataques ou magias de fogo.']
			    },
			    'Aasimar': {
			    	names: ['Tarwil','Pealgom','Yrnail','Cygwer','Nogwar','Urlin','Weltetim','Altalir','Neiwotant','Lovreteint','Tywein','Migeem','Modrail','Zavil','Iklim','Todem','Tuvuman','Vakameen','Havimil','Eidridar','Malla','Rhidan','Vedah','Anlah','Horse','Vorki','Havire','Videama','Dordimi','Mandriemi','Amo','Deojem','Villier','Phersi','Rhosrem','Thamne','Minrori','Dirose','Phindremar','Amena'],
			        skills: ['Empatia'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Cura pelas mãos:</strong> Uma vez por cena, você pode tocar uma criatura e limpar até três caixas de estresse físico que ela possua.','<strong>Portador da luz:</strong> Você pode lançar a magia Luz gratuitamente.']
			    },
			    'Genasi do Ar': {
			    	names: ['Flux','Gust','Gale','Tornado','Spinel','Heave','Blow','Air','Hurricane','Hiss','Wind','Aviate','Cyclone','Nether','Flash','Breeze','Ascend','Flurry','Murmur','Fly','Rivulet','Drench','Ripple','Pebble','Rubble','Celeste','Turbulence','Tempest'],
			        skills: ['Percepção'],
			        approach: ['Esperto'],
			        stunts: ['<strong>Fôlego infinito:</strong> O genasi do ar pode prender a respiração indefinidamente.','<strong>Leve como o vento:</strong> Uma vez por sessão, o genasi do ar pode lançar a magia Levitar em si mesmo, o efeito dura uma cena.']
			    },
			    'Genasi da Terra': {
			    	names: ['Zircon','Quarry','Lazuli','Hiss','Umber','Hill','Shelf','Rough','Cobblestone','Marble','Marble','Tile','Clay','Tumult','Heave','Dew','Cliff','Boulder','Jewel','Shriek','Rough','Rocky','Basalt'],
			        skills: ['Vigor'],
			        approach: ['Poderoso'],
			        stunts: ['<strong>Passo elemental:</strong> O genasi da terra pode se locomover por até duas zonas gratuitamente, desde que possa tocar o chão natural.','<strong>Sem rastros:</strong> Uma vez por sessão, o genasi da terra pode lançar a magia Passos sem Pegadas, o efeito dura uma cena.']
			    },
			    'Genasi do Fogo': {
			    	names: ['Fry','Cinder','Scald','Spring','Gush','Char','Ardour','Lava','Inferno','Soot','Singe','Douse','Furnace','Rivulet','Fever','Boil','Scorch','Flare','Volcano','Hot','Scorch','Flash'],
			        skills: ['Provocar'],
			        approach: ['Estiloso'],
			        stunts: ['<strong>Resistência ígnea:</strong> O genasi do fogo recebe +2 ao se Defender de ataques ou magias de fogo.','<strong>Mãos flamejantes:</strong> Uma vez por sessão, o genasi do fogo pode lançar a magia Mãos Flamejantes.']
			    },
			    'Genasi da Água': {
			    	names: ['Drift','Pool','Glare','Scoria','Beck','Dewdrop','Lagoon','Plunge','River','Teardrop','Droplet','Grime','Bath','Dewdrop','Whisk','Enkindle','Estuary','Well','Rain','Cleanse','Tide','Shelf'],
			        skills: ['Vontade'],
			        approach: ['Esperto'],
			        stunts: ['<strong>Anfíbio:</strong> O genasi da água pode respirar tanto na água quanto no ar.','<strong>Chamar as ondas:</strong> Uma vez por sessão, o genasi da água pode lançar a magia Criar ou Destruir Água.']
			    }
			    
    		}
    		break;
   		
    }

}