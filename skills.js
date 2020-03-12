function skills(type) {
  
    switch(type){

    	case "skilled":
    	    return random(['Atletismo','Atirar','Comunicação','Condução','Conhecimentos','Contatos','Empatia','Enganar','Furtividade','Investigar','Lutar','Ofícios','Percepção','Provocar','Recursos','Roubo','Vigor','Vontade','Academia']);
    		break;

    	case "bad":
    	    return random(['Atletismo','Atirar','Comunicação','Condução','Conhecimentos','Contatos','Empatia','Enganar','Furtividade','Investigar','Lutar','Ofícios','Percepção','Provocar','Recursos','Roubo','Vigor','Vontade','Academia']);
    		break;

    }

};