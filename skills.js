function skills(type) {
  
    switch(type){

    	case "skilled":
    	    return ['Atletismo','Atirar','Comunicação','Condução','Conhecimentos','Contatos','Empatia','Enganar','Furtividade','Investigar','Lutar','Ofícios','Percepção','Provocar','Recursos','Roubo','Vigor','Vontade','Academia','Animais','Magia','Duelos','Punhos','Intimidação','Liderança','Sobrevivência','Prontidão','Arte','Resistência','Jogos de Azar','Armas brancas','Armas de fogo','Poder','Mistérios','Discrição','Engenharia','Mecânica','Relacionamento','Brigar','Burocracia','Tecnologia','Demolições','Artilharia','Ciência','Tática','Medicina','Alquimia','Charme','Convicção','Disciplina','Motivação','Presença','Atitude','Ocultismo','Psíquico','Comércio','Submundo','Reputação','Computadores','Educação','Máquinas','Persuasão','Pesquisa','Segurança','Reparos','Espíritos','Disfarces','Programação','Eletrônica'];
    		break;

    	case "core":
    	    return ['Animais','Atletismo','Atirar','Comunicação','Condução','Conhecimentos','Contatos','Empatia','Enganar','Furtividade','Investigar','Lutar','Magia','Ocultismo','Ofícios','Percepção','Provocar','Recursos','Roubo','Vigor','Vontade'];
    		break;

    	case "Alto Elfo":
    	    return ['Conhecimentos'];
    		break;

    	case "halfling":
    	    return [];
    		break;

    	case "druid":
    	    return [];
    		break;

    	case "thief":
    	    return [];
    		break;


    }

};