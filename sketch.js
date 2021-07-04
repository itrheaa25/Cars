var database;
var gameState = 0;
var playerCount;
var form, player, game;
var allPlayers;



function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new Game()
  game.start()
  game.getState()
  
}

function draw(){
  background("white");
    if(playerCount===4){
      game.update(1)
    }
   if(gameState===1){
     game.play()
   }
    drawSprites();
  
}


