class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.distance = 0;

    }
    getCount() {
        database.ref('playerCount').on('value', (data)=> {
            playerCount = data.val();
        })
    }
    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        })
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({

            distance: this.distance,
            name: this.name


        })
    }

    static getPlayerinfo() {
          database.ref('players').on('value', (data)=>{
            allPlayers = data.val();
        })


    }

}