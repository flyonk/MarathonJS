import { renderHPLife, renderProgressBar, absorbChance, changeHP, renderHP, generateLog, } from "./utilts.js"
import { pokemons } from "./pokemons.js"

class Pokemon {
    constructor({name, hp, type, elHP, elProgressbar, attacks = []}) {
        this.name = name;
        this.type = type;
        this.hp = {
            default: hp,
            current: hp
        };
        this.attacks = attacks;
        this.elHP = elHP;
        this.elProgressbar = elProgressbar;
        this.renderHPLife = renderHPLife;
        this.renderProgressBar = renderProgressBar;
        this.renderHP = renderHP;
        this.changeHP = changeHP;
    }
    
}

const pikachu = pokemons.find(item => item.name == 'Pikachu');
const Charmander = pokemons.find(item => item.name == "Charmander");




export const player1 = new Pokemon({
    ...pikachu,
    elHP: document.getElementById('health-player1'),
    elProgressbar: document.getElementById('progressbar-player1'),
})

export const player2 = new Pokemon({
    ...Charmander,
    elHP: document.getElementById('health-player2'),
    elProgressbar: document.getElementById('progressbar-player2'),
})
















































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