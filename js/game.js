//create a game class
class Game {
    constructor() {

    }
    //read gameState from database
    getState() {
        database.ref('gameState').on("value", (data) {
            gameState = data.val();
        })
    }

    //update state in database
    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }


    //create a start function to start the game
    start() {
        if (gameState === 0) {

            player = new Player();
            player.getCount();
            form = new Form();
            form.display();

        }
        car1 = createSprite(200, 500);
        car1.addImage(car1image);
        car1.scale = 1.4;
        car1.debug= true;

        car2 = createSprite(300, 500);
        car2.addImage(car2image);
        car2.scale = 1.4;

      //  sp1 = createSprite(displayWidth/2,3000,displayWidth,20)
        //car3 = createSprite(400, 200);
        //car4 = createSprite(500, 200);

        cars = [car1, car2 ];
    }

    play() {
        form.hide();
        Player.getPlayerinfo();
        var index = 0;

        if (allPlayers !== undefined) {
            //create varialble index, x , y
            background(groundImage);
        
            image(trackImage,0,-displayHeight*4 ,displayWidth ,displayHeight*5);
            sp1 = createSprite(displayWidth/2,500,displayWidth,20)
            var x = 100;
            var y;
          

            for (var plr in allPlayers) {

                //increment the index here
                index += 1;
                x += 600;
                y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
               
                //check for the active player
                if (index === player.index) {   
                   fill("red");
                    camera.position.x = displayWidth/2;
                    camera.position.y =   cars[index-1].y ;
                }
                else{
                    fill('white')
                }
                textAlign(CENTER);
                textSize(30);
               
               text(allPlayers[plr].name,cars[index-1].x,cars[index-1].y+100)


            }
        
        }
        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance = player.distance + 20;
            player.update();
        }
        
        if(player.distance>500){
            gameState=2;
            game.update(2);

        }


        cars[index-1].collide(sp1);
       
        drawSprites();
    }
    //END function
    end(){
        console.log("Game ended");
    }

}
