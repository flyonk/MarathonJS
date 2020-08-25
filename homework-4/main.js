const kick2 = document.getElementById('kick2');
const btn = document.getElementById('btn-kick');
const hero = document.getElementById('health-character');
let kick2_count = 0;
const character = {
    name: 'Picachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHPLife: renderHPLife,
    renderProgressBar: renderProgressBar,
    renderHP: renderHP,
    changeHP: changeHP

}

const enemy = {
    name: 'Charmander',
    defaultHP: 200,
    damageHP: 150,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHPLife: renderHPLife,
    renderProgressBar: renderProgressBar,
    renderHP: renderHP,
    changeHP: changeHP

}

btn.addEventListener('click', function () {
    character.changeHP(random(20));
    enemy.changeHP(random(20));

});

//СУПЕР УДАР ПИКАЧУ КОТОРЫЙ МОЖНО ПОЛНОСТЬЮ ПОГЛАТИТЬ И ЕГО НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ БОЛЕЕ ЧЕМ 5 РАЗ
kick2.addEventListener('click', function () {
    kick2_count += 1;
    if (absorbChance(20) > 5) {
        enemy.changeHP(random(21));
    } else {
        alert(enemy.name + " fully absorbed your damage");
    }

    if (kick2_count === 5) {
        kick2.disabled = true;
    }
})
/////////////////////////////////////////////////////////////////////////////////////////////////

function absorbChance(num) {
    result = Math.ceil(Math.random() * num)

    return result;
}
//И ПО СЮДА))


function renderHPLife() {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
};

function renderProgressBar() {
    this.elProgressbar.style.width = ((this.damageHP * 100) / this.defaultHP) + '%'

}

function renderHP() {
    this.renderHPLife();
    this.renderProgressBar();
}

function changeHP(count) {
    if (this.damageHP < count) {
        this.damageHP = 0;
        alert('Бедолага ' + this.name + ' проиграл бой')
        btn.disabled = true;
        kick2.disabled = true;
    }
    else {
        this.damageHP -= count;
    }

    this.renderHP()
}


function random(num) {
    return Math.ceil(Math.random() * num);
}

function init() {
    character.renderHP();
    enemy.renderHP();
};

init();
