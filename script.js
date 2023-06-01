let player1Name = prompt("Enter the First Player Name ");
let player2Name = prompt("Enter the Second Player Name ");
let image1 = document.querySelector('.img1');
let image2 = document.querySelector('.img2');
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let random1 = Math.floor(Math.random() * 6 + 1);
let random2 = Math.floor(Math.random() * 6 + 1);
let winners = document.querySelector(".winnners");
let refesh = document.querySelector('.refresh');

refesh.addEventListener('click', () => {
    window.location.reload();
});

let images = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
image1.setAttribute("src", `./images/dice${random1}.png`);
image2.setAttribute("src", images[random2 - 1]);


if (random1 > random2) {
    winners.innerHTML = `🏆${player1Name} Won `
}

else if (random1 < random2) {
    winners.innerHTML = `${player2Name} Won🏆 `
}
else {
    winners.innerHTML = `🏆${player1Name} Drawed with ${player2Name}🏆 `

}



player1.innerHTML = player1Name;
player2.innerHTML = player2Name;


console.log(random1);
console.log(random2);






