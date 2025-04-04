//PWA
let installPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("Evento beforeinstallprompt disparado!");
  
  // Guarda o evento para uso posterior
  installPrompt = event;

  // Exibe o prompt automaticamente
  installPrompt.prompt();
  
  installPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === "accepted") {
      console.log("Usuário instalou o PWA");
    } else {
      console.log("Usuário recusou a instalação");
      mostrarBotaoInstalacao();
    }
    installPrompt = null;
  });
});

// Exibe o botão caso o usuário não instale automaticamente
function mostrarBotaoInstalacao() {
  const installButton = document.getElementById("install-button");
  installButton.style.display = "block";

  installButton.addEventListener("click", () => {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("Usuário instalou o PWA");
        } else {
          console.log("Usuário recusou a instalação");
        }
        installPrompt = null;
      });
    }
  });
}

// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function activateStressBox(){
  $('.fa-square-o').on('click',function(){
    if($(this).hasClass('fa-square'))
      $(this).removeClass('fa-square');
    else
      $(this).addClass('fa-square');
  });
  $('.fa-circle-o').on('click',function(){
    if($(this).hasClass('fa-circle'))
      $(this).removeClass('fa-circle');
    else
      $(this).addClass('fa-circle');
  });
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)]
};

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}; 

function exclusiveRandom(array,quantity) {
  var pos, result = [], element;
  for (i=0;i<quantity;i++){
    pos = Math.floor(Math.random() * array.length);
    element = array.splice(pos,1)
    result.push(element[0]);
  }
  return result;
};

function stress(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var number = Math.floor(Math.random() * (max - min + 1)) + min;
  var total = '';
  for (i=0;i<number;i++)
  	total = total + '<i class="fa fa-square-o"></i>';
  return total;
};

function characterSkills(classSkills,raceSkill,allSkills) {
  var skills = exclusiveRandom(classSkills,5);
  if(skills.indexOf(raceSkill[0]) === -1 && typeof raceSkill !== 'undefined' && raceSkill.length > 0) 
    skills.push(raceSkill[0]);

  while(skills.length<10){
    var skill = random(allSkills);
    if(skills.indexOf(skill) === -1)
      skills.push(skill);
  }
  return skills;
}

function creatureApproaches(allApproaches) {
  var approaches = [];

  while(approaches.length<4){
    var approach = random(allApproaches);
    if(approaches.indexOf(approach) === -1)
      approaches.push(approach);
  }

  var approachesValues = [];

  approachesValues[approaches[0]] = 'Ótimo (+4)';
  approachesValues[approaches[1]] = 'Bom (+3)';
  approachesValues[approaches[2]] = 'Razoável (+2)';
  approachesValues[approaches[3]] = 'Regular (+1)';

  return approachesValues;
}
                  
function characterApproaches(classApproach,raceApproach,allApproaches) {
  var approaches = [];
  approaches.push(classApproach[0]);

  if(approaches.indexOf(raceApproach[0]) === -1 && typeof raceApproach !== 'undefined' && raceApproach.length > 0)
    approaches.push(raceApproach[0]);

  while(approaches.length<6){
    var approach = random(allApproaches);
    if(approaches.indexOf(approach) === -1)
      approaches.push(approach);
  }

  var approachesValues = [];

  approachesValues[approaches[0]] = '+3';
  approachesValues[approaches[1]] = '+2';
  approachesValues[approaches[2]] = '+2';
  approachesValues[approaches[3]] = '+1';
  approachesValues[approaches[4]] = '+1';
  approachesValues[approaches[5]] = '0';

  return approachesValues;
}

function characterStress(type,skills) {
  var stress = '<i class="fa fa-square-o"></i><i class="fa fa-square-o"></i><i class="fa fa-square-o"></i>';
  if(skills.indexOf(type) >= 0)
    stress = stress + ' <i class="fa fa-square-o"></i>';
  if(skills.indexOf(type) <= 2 && skills.indexOf(type) >= 0)
    stress = stress + '<i class="fa fa-square-o"></i><i class="fa fa-square-o"></i>';
  return stress;
}

function characterStressHunt(type,skills) {
  var stress = '<i class="fa fa-square-o"></i><i class="fa fa-square-o"></i><i class="fa fa-square-o"></i><i class="fa fa-square-o"></i><i class="fa fa-square-o"></i>';
  return stress;
}

function npcStunts(npcSkills){
  var npcStuntsList = [];
  var pericias = skills('core');
  for(i=0;i<3;i++){
    if (pericias.indexOf(npcSkills[i]) >= 0)
      npcStuntsList.push(stunts(npcSkills[i]));
  }

  if (typeof npcStuntsList !== 'undefined' && npcStuntsList.length > 0)
    return '<p>'+random(random(npcStuntsList))+'</p>';
  else
    return '';
    
}

function characterTraditions(classTradition,subclassTradition,skills,system){
  var tradition = '';
  var subtradition = '';
  var tradValue = 0;

  if((subclassTradition.indexOf("Arcanista:") >= 0) ||
    (subclassTradition.indexOf("Conjuração:") >= 0) || 
    (subclassTradition.indexOf("Conhecimento arcano:") >= 0)){
    subtradition = 'Arcana';
  } else if(subclassTradition.indexOf("Adorador da natureza:") >= 0){
    subtradition = 'Divina';
  } else if((subclassTradition.indexOf("Magia marcial:") >= 0) ||
    (subclassTradition.indexOf("Primal:") >= 0) ||
    (subclassTradition.indexOf("Conhecimentos selvagens:") >= 0) ||
    (subclassTradition.indexOf("Conhecimento primordial:") >= 0)){
    subtradition = 'Primal';
  } else if((subclassTradition.indexOf("Conhecimentos obscuros:") >= 0) ||
    (subclassTradition.indexOf("Viajante dos planos:") >= 0)){
    subtradition = 'Ocultista';
  }

  if(classTradition != '' && subtradition != ''){
    tradition = classTradition+' e '+subtradition;
  } else if(classTradition != '' && subtradition == ''){
    tradition = classTradition;
  } else if(classTradition == '' && subtradition != ''){
    tradition = subtradition;
  }

  if(system == 'fcon'){
    
    if(skills.indexOf('Magia') == 0)
      tradValue = 4;
    else if((skills.indexOf('Magia') == 1) || (skills.indexOf('Magia') == 2))
      tradValue = 3;
    else if((skills.indexOf('Magia') >= 3) && (skills.indexOf('Magia') <= 5))
      tradValue = 2;
    else if((skills.indexOf('Magia') >= 6) && (skills.indexOf('Magia') <= 9))
      tradValue = 1;

    if(subtradition != '')
      tradValue = tradValue+1;

    if(classTradition != '' && subtradition != ''){

      var number = Math.floor(Math.random() * (tradValue-1)) + 1;
      tradition = classTradition+' (+'+number+') e '+subtradition+' (+'+(tradValue-number)+')';

    } else if(classTradition != '' && subtradition == ''){
      tradition = classTradition+' (+'+tradValue+')';
    } else if(classTradition == '' && subtradition != ''){
      tradition = subtradition+' (+'+tradValue+')';
    }

  }

  return tradition;

}

function nbsp(j){
  var nbsp = '';
  for(i=0;i<j;i++)
    nbsp = nbsp + '&nbsp;';
  return nbsp;
}

function randomApproaches (allApproaches) {
  var approaches = [];

  while(approaches.length<6){
    var approach = random(allApproaches);
    if(approaches.indexOf(approach) === -1)
      approaches.push(approach);
  }

  var approachesValues = [];

  approachesValues.push(approaches[0]);
  approachesValues.push(approaches[1]);
  approachesValues.push(approaches[2]);
  approachesValues[approaches[0]] = '+3';
  approachesValues[approaches[1]] = '+2';
  approachesValues[approaches[2]] = '+2';
  approachesValues[approaches[3]] = '+1';
  approachesValues[approaches[4]] = '+1';
  approachesValues[approaches[5]] = '+0';

  return approachesValues;
}