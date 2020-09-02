import { picachu, charmander } from "./pokemon.js"

import random from "./utilts.js"

import { renderHPLife, renderProgressBar, absorbChance, changeHP, renderHP, generateLog, countBtn } from "./utilts.js"

console.log(picachu, charmander);
console.log(renderHPLife);

const logdiv = document.querySelector('.logs');
const kick2 = document.getElementById('kick2');
const btn = document.getElementById('btn-kick');
const hero = document.getElementById('health-character');
let click = 0;
let kick2_amount = 0;
const btnCountJolt = countBtn(6, kick2);

// const character = {
//     name: 'Picachu',
//     hp : {
//         default: 200,
//         current: 200
//     },
//     elHP: document.getElementById('health-character'),
//     elProgressbar: document.getElementById('progressbar-character'),
//     renderHPLife: renderHPLife,
//     renderProgressBar: renderProgressBar,
//     renderHP: renderHP,
//     changeHP: changeHP
// }


// const enemy = {
//     name: 'Charmander',
//     hp: {
//         default: 200,
//         current: 200
//     },
//     elHP: document.getElementById('health-enemy'),
//     elProgressbar: document.getElementById('progressbar-enemy'),
//     renderHPLife: renderHPLife,
//     renderProgressBar: renderProgressBar,
//     renderHP: renderHP,
//     changeHP: changeHP
// }






btn.addEventListener('click', function () {
    // console.log(btnCountJolt())
    picachu.changeHP(random(15, 30));
    charmander.changeHP(random(15, 30));
    click += 1;
    
});





//СУПЕР УДАР ПИКАЧУ КОТОРЫЙ МОЖНО ПОЛНОСТЬЮ ПОГЛАТИТЬ И ЕГО НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ БОЛЕЕ ЧЕМ 5 РАЗ
kick2.addEventListener('click', function () {
    btnCountJolt();
    kick2_amount++

    if (absorbChance(20) > 5) {
        charmander.changeHP(random(1, 20));
    } else {
        const p = document.createElement('p');
        p.classList.add('absorb')
        p.innerText = charmander.name + ' полностью поглатил урон' + this.name;
        logdiv.insertBefore(p, logdiv.children[0]);
    }
});



//И ПО СЮДА))










function init() {
    picachu.renderHP();
    charmander.renderHP();
};

init();



