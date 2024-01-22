const body = document.body
const theme = document.getElementById('theme');
theme.addEventListener('click', () => {
    console.log('toggle theme yay');
    body.classList.toggle('dark');
});

const inputOne = document.getElementById('input-one');
const inputTwo = document.getElementById('input-two');
const operator = document.getElementById('operator');
const equalBtn = document.getElementById('equal-btn');
const computation = document.getElementById('computation');
const history = document.getElementById('history');

// Event listener
equalBtn.addEventListener('click', () => {
    const inputOneVal = parseInt(inputOne.value);
    const inputTwoVal = parseInt(inputTwo.value);

    let result = 0;

    switch (operator.value) {
        case '+': result = inputOneVal + inputTwoVal;
            break;
        case '-': result = inputOneVal - inputTwoVal;
            break;
        case '*': result = inputOneVal * inputTwoVal;
            break;
        case '/': result = inputOneVal / inputTwoVal;
            break;

        default: result = "SELECT VALID OPERATOR";
            break;
    }

    computation.innerText = "Ans: " + result;

    const historyString = inputOne.value + ' ' + operator.value + ' ' + inputTwo.value + ' = ' + result;
    const listItem = document.createElement('li');
    listItem.innerText = historyString;
    listItem.style.listStyleType = 'none';
    history.appendChild(listItem);
    
    inputOne.value = null;
    inputTwo.value = null;
});
