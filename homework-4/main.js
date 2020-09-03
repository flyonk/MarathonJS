import { player1, player2 } from "./pokemon.js"
import { pokemons } from "./pokemons.js"

import random from "./utilts.js"

import { renderHPLife, renderProgressBar, absorbChance, changeHP, renderHP, generateLog, countBtn } from "./utilts.js"


const logdiv = document.querySelector('.logs');
const kick2 = document.getElementById('kick2');
const btn = document.getElementById('btn-kick');
const hero = document.getElementById('health-player1');
let click = 0;
let kick2_amount = 0;
const btnCountJolt = countBtn(6, kick2);

const $control = document.querySelector('.control');

player1.attacks.forEach(item => {
    console.log(item)
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = item.name;
    const btnCount = countBtn(item.maxCount, $btn);
    $btn.addEventListener('click', () => {
        console.log("Click button ", $btn.innerText);
        btnCount();
    })

    $control.appendChild($btn);
});

// player2.attacks.forEach(item => {
//     console.log(item)
//     const $btn = document.createElement('button');
//     $btn.classList.add('button');
//     $btn.innerText = item.name;
//     $control.appendChild($btn);
// })





btn.addEventListener('click', function () {
    player1.changeHP(random(15, 30));
    player2.changeHP(random(15, 30));
    click += 1;
    
});





//СУПЕР УДАР ПИКАЧУ КОТОРЫЙ МОЖНО ПОЛНОСТЬЮ ПОГЛАТИТЬ И ЕГО НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ БОЛЕЕ ЧЕМ 5 РАЗ
kick2.addEventListener('click', function () {
    btnCountJolt();
    kick2_amount++

    if (absorbChance(20) > 5) {
        player2.changeHP(random(1, 20));
    } else {
        const p = document.createElement('p');
        p.classList.add('absorb')
        p.innerText = player2.name + ' полностью поглатил урон' + this.name;
        logdiv.insertBefore(p, logdiv.children[0]);
    }
});

//И ПО СЮДА))


function init() {
    player1.renderHP();
    player2.renderHP();
};

init();



