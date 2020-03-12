function skills(type) {
  
    switch(type){

    	case "skilled":
    	    return random(['Morder e arranhar','Bater e correr','Atacar freneticamente','Atacar em bando','Atacar sorrateiramente','Lutar sozinho','Emboscar','Provocar e assustar','Fugir do combate','Convocar aliados']);
    		break;

    	case "bad":
    	    return random(['Defender-se','Lutar sozinho','Furtividade','Enganar','Pensar rápido','Raciocinar','Atirar','Continuar lutando','Se locomover']);
    		break;

    }

};