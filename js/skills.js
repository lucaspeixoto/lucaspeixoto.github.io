function skills(type) {
  
    switch(type){

    	case "skilled":
    	    return ['Atletismo','Atirar','Comunicação','Condução','Conhecimentos','Contatos','Empatia','Enganar','Furtividade','Investigar','Lutar','Ofícios','Percepção','Provocar','Recursos','Roubo','Vigor','Vontade','Acadêmico','Animais','Magia','Duelos','Punhos','Intimidação','Liderança','Sobrevivência','Prontidão','Arte','Resistência','Jogos de Azar','Armas brancas','Armas de fogo','Poder','Mistérios','Discrição','Engenharia','Mecânica','Relacionamento','Brigar','Burocracia','Tecnologia','Demolições','Artilharia','Ciência','Tática','Medicina','Alquimia','Charme','Convicção','Disciplina','Motivação','Presença','Atitude','Ocultismo','Psíquico','Comércio','Submundo','Reputação','Computadores','Educação','Máquinas','Persuasão','Pesquisa','Segurança','Reparos','Espíritos','Disfarces','Programação','Eletrônica'];
    		break;

    	case "core":
    	    return ['Acadêmico','Animais','Atletismo','Atirar','Comunicação','Condução','Contatos','Empatia','Enganar','Furtividade','Investigar','Lutar','Magia','Ocultismo','Ofícios','Percepção','Provocar','Recursos','Roubo','Vigor','Vontade'];
    		break;

    	case "fae":
    		return ['Ágil','Cuidadoso','Esperto','Estiloso','Poderoso','Sorrateiro'];
    		break;

        case "uranium":
            return ['Amargo','Frio','Salgado','Picante','Doce','Ácido'];
            break;

        case "creature":
            return ['Horrível','Violento','Ágil','Instintivo'];
            break;

        case "ihunt":
            return ['Acadêmico','Assassino','Atleta','Lutador','Trambiqueiro','Guerrilheiro','Hacker','Influencer','Investigador','Criador','Médico','Ocultista','Organizador','Profissional','Socialite','Assistente Social','Espião','Sobrevivente'];
            break;

    }

};