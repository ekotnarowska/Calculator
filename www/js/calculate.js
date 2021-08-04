function calculate(previousItem, currentItem, operator) {
    let calculation
    previousItem = parseFloat(previousItem);
    currentItem = parseFloat(currentItem);
    if (isNaN(previousItem) || isNaN(currentItem)) return;
    switch (operator) {
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
            calculation = previousItem / currentItem;
        break
        default:
            return;
    }
    return calculation;
}

module.exports = calculate;
