class Calculator {
    constructor(inputDisplay, resultDisplay) {
        this.inputDisplay = inputDisplay;
        this.resultDisplay = resultDisplay;
        this.clearAll();
    }

    clearAll() {
        this.input = '0';
        this.result = '';
        this.operator = undefined;
    }

    deleteLastItem() {
        this.input = this.input.toString().slice(0, -1);
        if (this.input.length < 1) {
            this.input = '0';
        }
    }

    changeSign() {
        this.input = -parseFloat(this.input)
    }

    insertNumber(number) {
        if (number === '.' && this.input.includes('.')) return;
        this.input = this.input.toString() + number.toString();
    }

    chooseOperation(operator) {
        if (this.input === '') return;
        if (this.result !== '') {
            this.calculate();
        }
        this.operator = operator;
        this.result = this.input;
        this.input = '';
    }

    calculate() {
        let calculation
        const previousItem = parseFloat(this.result);
        const currentItem = parseFloat(this.input);
        if (isNaN(previousItem) || isNaN(currentItem)) return;
        switch (this.operator) {
            case '+':
                calculation = previousItem + currentItem;
            break
            case '-':
                calculation = previousItem - currentItem;
            break
            case 'x':
                calculation = previousItem * currentItem;
            break
            case '÷':
                if (currentItem !== 0) {
                    calculation = previousItem / currentItem; 
                } else {
                    this.inputDisplay.innerText = 'Invalid dividend ' + currentItem;
                    this.resultDisplay.innerText = '';
                    throw Error('Invalid dividend ' + currentItem);
                }
            break
            default:
                return;
        }

        this.input = calculation;
        this.operator = undefined;
        this.result = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.inputDisplay.innerText = this.getDisplayNumber(this.input);
        if (this.operator != null) {
            this.resultDisplay.innerText = `${this.getDisplayNumber(this.result)} ${this.operator}`;
        } else {
            this.resultDisplay.innerText = '';
        }
    }
}

module.exports = Calculator;