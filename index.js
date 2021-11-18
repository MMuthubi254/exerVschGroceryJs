var shopper = {
    Name : "Morris",
    Wallet: 350,
    hasMoney: true,
    buy: function() {

        return this.name + "has purchased some items";
    },
    groceryCart: ["Cups", "Spooons", "Plates"]
}

console.log(shopper)