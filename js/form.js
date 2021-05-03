class Form {
    constructor() {
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.input = createInput('name');
        this.reset = createButton('reset');
    }







    display() {
        var title = createElement("h1");
        title.html("Car Racing Game");
        title.position(700, 0);

        this.input.position(750, 160)
        this.reset.position(displayWidth-100,30);

        this.button.position(900, 300);

        this.button.mousePressed(() => {

            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();

            player.updateCount(playerCount);


            this.greeting.html("Welcome !" + player.name);
            this.greeting.position(700, 160);
        })

        this.reset.mousePressed(()=>{

            player.updateCount(0);
            game.update(0);
            database.ref('/').update({
                players : null
            })

        })



    }

    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}