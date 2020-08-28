let value_1 = prompt('First value = ');
let value_2 = prompt('Second value = ');
let arithmeticSign = prompt('Arithmetic sign: ');

alert(`Result: ${calculate(value_1, value_2, arithmeticSign)}`);

// Functions for work with calculator

function calculate(n1 = 0, n2 = 0, sign = '+') {
    if(checkedEntering(n1, n2, sign)) {
        switch(sign) {
            case '+': {
                return add(n1, n2);
            }
            case '-': {
                return subtraction(n1, n2);
            }
            case '/': {
                return division(n1, n2);
            }
            case '*': {
                return multiply(n1, n2);
            }
            default: {
                return `Such arithmetic sign like "${arithmeticSign}" not supported`;
            }
        }
    } else {
        return `You have entered not correct data or skiped it: ${n1}, ${n2}, ${sign}`;
    }
}

function checkedEntering(n1, n2, sign) {
    if(isNaN(n1) || isNaN(n2)) {
        return false;
    } else if(n1 == null || n2 == null || sign == null) {
        return false;
    } else {
        return true;
    }
}

function add(n1, n2) {
    return +n1 + +n2;
}

function subtraction(n1, n2) {
    return +n1 - +n2;
}

function division(n1, n2) {
    return +n1 / +n2;
}

function multiply(n1, n2) {
    return +n1 * +n2;
}