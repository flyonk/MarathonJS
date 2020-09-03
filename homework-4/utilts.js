import { player1, player2 } from "./pokemon.js"

const logdiv = document.querySelector('.logs');
const kick2 = document.getElementById('kick2');
const btn = document.getElementById('btn-kick');
const hero = document.getElementById('health-player1');
let click = 0;
let kick2_amount = 0;

function random(max, min = 0) {
    const num = max - min;
    return Math.ceil(Math.random() * num) + min;
}

export default random;

export const renderHPLife = function renderHPLife() {
    this.elHP.innerText = this.hp.current + ' / ' + this.hp.default;
};

export const absorbChance = function absorbChance(num) {
    let result = Math.ceil(Math.random() * num)

    return result;
}

export const renderProgressBar = function renderProgressBar() {
    this.elProgressbar.style.width = ((this.hp.current * 100) / this.hp.default) + '%'
}

export const renderHP = function renderHP() {
    this.renderHPLife();
    this.renderProgressBar();
}

export const changeHP = function changeHP(count) {
    this.hp.current -= count;

    const log = this === player2 ? generateLog(this, player1, count) : generateLog(this, player2, count);

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

        btn.style.borderColor = "#EA0603"
        kick2.style.borderColor = "#EA0603"
        btn.disabled = true;
        kick2.disabled = true;
    }
    this.renderHP()
}

export const generateLog = function generateLog(person, secondPerson, count) {
    const {
        name
    } = person
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

export const countBtn = function countBtn(count = 7, knopka) {
    const innerText = knopka.innerText
    knopka.innerText = `${innerText} (${count})`

    return function () {
        count--
        if (count === 0) {
            knopka.disabled = true;
            kick2.style.borderColor = "#EA0603"
        }
        knopka.innerText = `${innerText} (${count})`
        return count;
    }
}

