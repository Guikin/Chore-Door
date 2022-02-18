let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg"
let beachDoorPath= "https://content.codecademy.com/projects/chore-door/images/beach.svg"
let spaceDoorPath= "https://content.codecademy.com/projects/chore-door/images/space.svg"
let closedDoorPath="https://content.codecademy.com/projects/chore-door/images/closed_door.svg"
let openDoor1 = "";
let openDoor2 = "";
let openDoor3 = "";

let currentPlaying = true;

doorImage1.onclick = () => {
  if(!isClicked(doorImage1) && currentPlaying===true){
  doorImage1.src = openDoor1;
  playDoor(doorImage1)}
}

doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && currentPlaying===true){
  doorImage2.src = openDoor2;
  playDoor(doorImage2)}
}

doorImage3.onclick = () => {
  if(!isClicked(doorImage3) && currentPlaying===true){
  doorImage3.src = openDoor3;
  playDoor(doorImage3)}
};

startButton.onclick=()=>{
  if(currentPlaying===false){startRound()};
}

let startRound= () => {
    numClosedDoors = 3;
    doorImage1.src=closedDoorPath;
    doorImage2.src=closedDoorPath;
    doorImage3.src=closedDoorPath;
   startButton.innerHTML="Good luck!"
   currentPlaying = true;
  randomChoreDoorGenerator();
};

let gameOver =status=> {
  currentPlaying = false;
  if (status === "win"){
    startButton.innerHTML="You win! Play again?";
  }else{
    startButton.innerHTML="Game Over! Play again?";
  }
}



let numClosedDoors = 3;
let randomChoreDoorGenerator = ()=>{
  const choreDoor= Math.floor(Math.random() * numClosedDoors); 
  if(choreDoor===0){
    openDoor1=botDoorPath;
    openDoor2=beachDoorPath;
    openDoor3=spaceDoorPath;
  }else if (choreDoor===1){
    openDoor1=beachDoorPath;
    openDoor2=botDoorPath;
    openDoor3=spaceDoorPath;
  }else {
    openDoor1=beachDoorPath;
    openDoor2=spaceDoorPath;
    openDoor3=botDoorPath;
  }
};

let isBot= door =>{
    if(door.src===botDoorPath){
    return true
  }else{
    return false
  }
}

let isClicked= door =>{
  if(door.src===closedDoorPath){
    return false
  }else{
    return true
  }
}

let playDoor = door =>{
  numClosedDoors --;
  if(numClosedDoors===0){
    gameOver("win");
  } else if(isBot(door)){
    gameOver("lose");
  }
}

startRound();