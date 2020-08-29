// const { addListener } = require("process");

const kick2 = document.getElementById('kick2');
const btn = document.getElementById('btn-kick');
const hero = document.getElementById('health-character');
const logdiv = document.querySelector('.logs');
let click = 0;

function clicksCount(clickx) {
    let click = 0;
    let kick2_max = 5;
    let kick2_amount = 0;

    return function clicksIncrease() {
        click += 1;
        kick2_max -= 1;
        kick2_amount += 1;
    }

}

const character = {
    name: 'Picachu',
    hp : {
        default: 100,
        current: 100
    },
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHPLife: renderHPLife,
    renderProgressBar: renderProgressBar,
    renderHP: renderHP,
    changeHP: changeHP
}


const enemy = {
    name: 'Charmander',
    hp: {
        default: 120,
        current: 120
    },
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHPLife: renderHPLife,
    renderProgressBar: renderProgressBar,
    renderHP: renderHP,
    changeHP: changeHP
}



function generateLog(person, secondPerson, count) {
    const { name } = person
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${count}, [${person.hp.current}/${person.hp.default}]`,
        `${name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count}, [${person.hp.current}/${person.hp.default}]`,
        `${name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${count}, [${person.hp.current}/${person.hp.default}]`,
        `${name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${count}, [${person.hp.current}/${person.hp.default}]`,
        `${name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${count}, [${person.hp.current}/${person.hp.default}]`,
        `${name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${count}, [${person.hp.current}/${person.hp.default}]`,
        `${name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника -${count}, [${person.hp.current}/${person.hp.default}]`,
        `${name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${count}, [${person.hp.current}/${person.hp.default}]`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${count}, [${person.hp.current}/${person.hp.default}]`
    ];

    return logs[random(logs.length) - 1]
}
// let clicksAmount;
// let counter = 0;
// const { name, hp: { basic, current }, elHP, elProgressbar, renderHPLife, renderProgressBar, renderHP, changeHP } = character;
// const { name: nameEnemy, hp: { basicEnemy, currentEnemy }, elHP: elHPEnemy, elProgressbar: elProgressbarEnemy, renderHPLife, renderProgressBar, renderHP, changeHP } = enemy;
function clickCounter() {
    // let clicksAmount = 0;
    // clicksAmount += clicks
    // counter +1;

    // return function clickAmountLog(log1, log2) {
    //     clicksAmount = log1 + counter + log2;

    //     return clicksAmount;
    // }

}



btn.addEventListener('click', function () {
    character.changeHP(random(20));
    enemy.changeHP(random(20));
    click += 1;
    console.log(click);
    


});


// const clickCounterBtn1 = clickCounter();

let kick2_max = 5;
let kick2_amount = 0;

kick2.innerText = "Electric Blast" + "(" + kick2_max + ")"
//СУПЕР УДАР ПИКАЧУ КОТОРЫЙ МОЖНО ПОЛНОСТЬЮ ПОГЛАТИТЬ И ЕГО НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ БОЛЕЕ ЧЕМ 5 РАЗ
kick2.addEventListener('click', function () {
    kick2_amount += 1;
    kick2_max -= 1;
    kick2.innerText = "Electric Blast" + "(" + kick2_max + ")"
    if (absorbChance(20) > 5) {
        enemy.changeHP(random(21));
    } else {
        const p = document.createElement('p');
        p.classList.add('absorb')
        p.innerText = enemy.name + ' полностью поглатил урон' + this.name;
        logdiv.insertBefore(p, logdiv.children[0]);
    }

    if (kick2_max === 0) {
        kick2.disabled = true;
        kick2.style.borderColor = "#EA0603"
    }
})


function absorbChance(num) {
    result = Math.ceil(Math.random() * num)

    return result;
}
//И ПО СЮДА))


function renderHPLife() {
    this.elHP.innerText = this.hp.current + ' / ' + this.hp.default;
};

function renderProgressBar() {
    this.elProgressbar.style.width = ((this.hp.current * 100) / this.hp.default) + '%'
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function changeHP(count) {
    this.hp.current -= count;
    
    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);

    const p = document.createElement('p');
    p.classList.add('pLog')
    p.innerText = log;
    logdiv.insertBefore(p, logdiv.children[0])

    if (this.hp.current <= count) {
        this.hp.current = 0;
        const p = document.createElement('p');
        p.classList.add('ggwp')
        p.innerText = this.name + ' LOST !!!';
        logdiv.insertBefore(p, logdiv.children[0])

        const p2 = document.createElement('p');
        p2.classList.add('clickgg')
        p2.innerText = 'Поединок завершился за ' + click + ' обычных и ' + kick2_amount + " спец. ударов";
        logdiv.insertBefore(p2, logdiv.children[1])

        
        console.log()
        btn.style.borderColor = "#EA0603"
        kick2.style.borderColor = "#EA0603"
        btn.disabled = true;
        kick2.disabled = true;
    }
    this.renderHP()
}


function renderHP() {
    this.renderHPLife();
    this.renderProgressBar();
}




function init() {
    character.renderHP();
    enemy.renderHP();
};

init();



