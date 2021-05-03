var database,
  gameState = 0;
var playerCount;
var distance = 0;
var allPlayers;
var game, form, player;
var car1, car2, car3, car4;
var cars;
var groundImage , trackImage;
var car1image , car2image ;
var sp1;

function preload(){

car1image = loadImage("images/car1.png");
car2image = loadImage("images/car2.png");
groundImage = loadImage("images/ground.png");
trackImage = loadImage("images/track.jpg");


}

function setup() {
  database = firebase.database();
  //console.log(database);
  createCanvas(displayWidth + 130, displayHeight - 100);

  game = new Game();
  game.getState();
  game.start();



}

function draw() {
  background("white");
console.log(allPlayers);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    clear();
    game.play();

    
  }
  if(gameState ===2){
    game.end();
  }
  

}

