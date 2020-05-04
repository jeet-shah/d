var gameState = 0,playerCount,form,player,game,database,allPlayers;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();  
}

function draw(){
    background("white");
    if(playerCount === 4){
        game.update(1);        
    }
    if (gameState === 1){
        clear();
        game.play();
    }
}
   
