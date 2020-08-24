const kick2 = document.getElementById('kick2');
const btn = document.getElementById('btn-kick');
const hero = document.getElementById('health-character');
const character = {
    name: 'Picachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character')
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy')
}

btn.addEventListener('click', function () {
    changeHP(random(20), character);
    changeHP(random(20), enemy);

});

//ДЗ НА ОЦЕНКУ * - ЗДЕСЬ
kick2.addEventListener('click', function () {  
    if (absorbChance(15) > 5) {
        changeHP(random(15), enemy);  
    }
    else {
        alert(enemy.name + " fully absorbed your damage");
    }
     
})

function absorbChance(num) {  
    result = Math.ceil(Math.random() * num)

    return result;
}
//И ПО СЮДА))


function init() {  
    renderHP(character);
    renderHP(enemy);
};

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
};

function renderProgressBar(person) {  
    person.elProgressbar.style.width = person.damageHP + '%'
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressBar(person);
}

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert('Бедолага ' + person.name + ' проиграл бой')
        btn.disabled = true;
    }
    else {
        person.damageHP -= count;
    }

    renderHP(person)
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();
