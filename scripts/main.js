const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
console.log(firstRow.charAt(1))

function getRow(firstRow, secondRow) {
    let string1 = [];
    let string2 = [];
    let compare = [];
    for (let i = 0; i < firstRow.length; i++) {
        const symbol = firstRow[i]
        if (symbol.charAt(0) == 'а') {
            string1 += symbol
        }
        
    }

    for (let i = 0; i < secondRow.length; i++) {
        const symbol2 = secondRow[i]
        if (symbol2.charAt(0) == 'а') {
            string2 += symbol2
        }

    }

    if (string1.length > string2.length) {
        compare = firstRow;
    }
    else {
        compare = secondRow;
    }
    return compare;
}


console.log(getRow(firstRow, secondRow)); // мама мыла раму

//задача 2 простой вариант с конкатенацией
function formattedPhone(phone) {
    let correctedPhone = phone.charAt() + phone.charAt(1) + " (" + phone.charAt(2) + phone.charAt(3) + phone.charAt(4) + ") " + phone.substr(5, 10);

    return correctedPhone;
}

console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90

//задача 2 вариант потупее но с циклом for как просит задача

const phone = '+71234567890';

function formattedPhone(phone) {
    let result = '';

    for (let i = 0; i < phone.length; i++) {
        if (i <= 1) {
            result += phone.charAt(i);
        }
        if (i === 1) {
            result += ' (';
        }
        if (i > 1 && i <= 4) {
            result += phone.charAt(i);
        }
        if (i === 4) {
            result += ') ';
        }
        if (i > 4 && i <= 7) {
            result += phone.charAt(i);
        }
        if (i === 7) {
            result += '-';
        }
        if (i > 7 && i <= 9) {
            result += phone.charAt(i);
        }
        if (i === 9) {
            result += '-';
        }
        if (i > 9) {
            result += phone.charAt(i);
        }
    }
    return result;
}

console.log(formattedPhone(phone))
