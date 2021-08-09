function deleteLastItem(input) {
    input = input.toString().slice(0, -1);
    if (input.length < 1) {
        input = '0';
    }
    return input
}

module.exports = deleteLastItem;