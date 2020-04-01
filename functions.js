// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)]
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
  	total = total + '<i class="fa fa-square-o"></i> ';
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

function characterTraditions(classTradition,subclassTradition){
  var tradition = '';
  var subtradition = '';

  if((subclassTradition.indexOf("Conjuração:") >= 0) || (subclassTradition.indexOf("Conhecimento arcano:") >= 0)){
    subtradition = 'Arcana';
  } else if(subclassTradition.indexOf("Adorador da natureza:") >= 0){
    subtradition = 'Divina';
  } else if(subclassTradition.indexOf("Magia marcial:") >= 0){
    subtradition = 'Primal';
  }

  if(classTradition != '' && subtradition != ''){
    tradition = classTradition+' e '+subtradition;
  } else if(classTradition != '' && subtradition == ''){
    tradition = classTradition;
  } else if(classTradition == '' && subtradition != ''){
    tradition = subtradition;
  }

  return tradition;
}

function nbsp(j){
  var nbsp = '';
  for(i=0;i<j;i++)
    nbsp = nbsp + '&nbsp;';
  return nbsp;
}