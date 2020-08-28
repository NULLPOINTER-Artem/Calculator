let value_1 = prompt('First value = ');
let value_2 = prompt('Second value = ');
let arithmeticSign = prompt('Arithmetic sign: ');

alert(`Result: ${calculate(value_1, value_2, arithmeticSign)}`);

// Functions for work with calculator

function calculate(n1 = 0, n2 = 0, sign = '+') {
    if(isNaN(n1) || isNaN(n2)) {
        alert(`${n1} or ${n2} is not a number!`);
        return -1;
    } else if(n1 == null || n2 == null || sign == null) {
        alert('You have skiped to enter something');
        return -1;
    }
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
            alert(`Such arithmetic sign like "${arithmeticSign}" not supported`);
            return -1;
        }
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