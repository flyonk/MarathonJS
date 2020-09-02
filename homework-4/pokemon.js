class Pokemon {
    constructor(props) {
        this.name = props.name;
        this.type = props.type;
        this.hp = {
            default: props.hp,
            current: props.hp
        };
        this.elHP = props.elHP;
        this.elProgressbar = props.elProgressbar;
        this.renderHPLife = renderHPLife;
        this.renderProgressBar = renderProgressBar;
        this.renderHP = renderHP;
        this.changeHP = changeHP;
    }
    
}

// class Picachu2 extends Pokemon {

// }

export const picachu = new Pokemon({
    name: 'Picachu',
    type: 'Electric',
    hp: '200',
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
})

export const charmander = new Pokemon({
    name: 'Charmander',
    type: 'Fire',
    hp: '200',
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
})

// class Bulbasaur extends Pokemon {
//     constructor(props) {
//         super(props);
//         this.hz = props.hz = 5;
//     }
// }

// const Bulbasaur1 = new Bulbasaur({
//     name: 'Bulbash',
//     type: 'Earth',
//     hp: '300'
// })

console.log(picachu, charmander);




import { renderHPLife, renderProgressBar, absorbChance, changeHP, renderHP, generateLog, } from "./utilts.js"



















































// const logs = [
//     '[ПЕРСОНАЖ №1] вспомнил что-то важное, но неожиданно [ПЕРСОНАЖ №2], не помня себя от испуга, ударил в предплечье врага.',
//     '[ПЕРСОНАЖ №1] поперхнулся, и за это [ПЕРСОНАЖ №2] с испугу приложил прямой удар коленом в лоб врага.',
//     '[ПЕРСОНАЖ №1] забылся, но в это время наглый [ПЕРСОНАЖ №2], приняв волевое решение, неслышно подойдя сзади, ударил.',
//     '[ПЕРСОНАЖ №1] пришел в себя, но неожиданно [ПЕРСОНАЖ №2] случайно нанес мощнейший удар.',
//     '[ПЕРСОНАЖ №1] поперхнулся, но в это время [ПЕРСОНАЖ №2] нехотя раздробил кулаком \<вырезанно цензурой\> противника.',
//     '[ПЕРСОНАЖ №1] удивился, а [ПЕРСОНАЖ №2] пошатнувшись влепил подлый удар.',
//     '[ПЕРСОНАЖ №1] высморкался, но неожиданно [ПЕРСОНАЖ №2] провел дробящий удар.',
//     '[ПЕРСОНАЖ №1] пошатнулся, и внезапно наглый [ПЕРСОНАЖ №2] беспричинно ударил в ногу противника',
//     '[ПЕРСОНАЖ №1] расстроился, как вдруг, неожиданно [ПЕРСОНАЖ №2] случайно влепил стопой в живот соперника.',
//     '[ПЕРСОНАЖ №1] пытался что-то сказать, но вдруг, неожиданно [ПЕРСОНАЖ №2] со скуки, разбил бровь сопернику.'
// ];