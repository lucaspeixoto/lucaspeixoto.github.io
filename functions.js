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
  if(skills.indexOf(raceSkill[0]) === -1) 
    skills.push(raceSkill[0]);

  var i = 0;
  while(i<=5){
    var skill = random(allSkills);
    if(skills.indexOf(skill) === -1){
      skills.push(skill);
      i++;
    }
  }
  return skills;
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
  for(i=0;i<3;i++){
    npcStuntsList.push(stunts(npcSkills[i]));
  }

  if (typeof npcStuntsList !== 'undefined' && npcStuntsList.length > 0){
    console.log(npcStuntsList);
    specificStunt = random(npcStuntsList);
    console.log(specificStunt);
    return '<p>'+random(specificStunt)+'</p>';
  } else {
    return '';
  }
  
}