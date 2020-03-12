function aspects(type) {
  
    switch(type){

    	case "good":
    	    return random(['Bom de briga','Ligeiro quando precisa','Olfato aguçado','Excelente caçador','Sabe se esconder','Bastante atlético','Pensamento rápido','Atento aos detalhes','Agilidade felina']);
    		break;

    	case "bad":
    	    return random(['Tem medo de fogo','Sempre com fome','Um pouco distraído','Bastante desmotivado','Covarde sozinho','Bem barulhento','Não pode com magia']);
    		break;

    }

};