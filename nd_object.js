
/*write an literal object who name player1,
has has the fields below and a function that is called shoot()*/

let player1 ={
    firstName : "Christiano",
    lastName : "Ronaldo",
    age : 38,
    hasKids : true,

    shoot : function () {
        console.log (this.firstName + ' ' + this.lastName + ' ' + "shot the ball !! ");
    }
};

console.log (player1.firstName)

player1.shoot();