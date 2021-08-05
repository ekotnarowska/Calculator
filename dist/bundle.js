/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./www/js/calculator.js":
/*!******************************!*\
  !*** ./www/js/calculator.js ***!
  \******************************/
/***/ ((module) => {

eval("class Calculator {\r\n    constructor(inputDisplay, resultDisplay) {\r\n        this.inputDisplay = inputDisplay;\r\n        this.resultDisplay = resultDisplay;\r\n        this.clearAll();\r\n    }\r\n\r\n    clearAll() {\r\n        this.input = '0';\r\n        this.result = '';\r\n        this.operator = undefined;\r\n    }\r\n\r\n    deleteLastItem() {\r\n        this.input = this.input.toString().slice(0, -1);\r\n        if (this.input.length < 1) {\r\n            this.input = '0';\r\n        }\r\n    }\r\n\r\n    changeSign() {\r\n        this.input = -parseFloat(this.input)\r\n    }\r\n\r\n    insertNumber(number) {\r\n        if (number === '.' && this.input.includes('.')) return;\r\n        this.input = this.input.toString() + number.toString();\r\n    }\r\n\r\n    chooseOperation(operator) {\r\n        if (this.input === '') return;\r\n        if (this.result !== '') {\r\n            this.calculate();\r\n        }\r\n        this.operator = operator;\r\n        this.result = this.input;\r\n        this.input = '';\r\n    }\r\n\r\n    calculate() {\r\n        let calculation\r\n        const previousItem = parseFloat(this.result);\r\n        const currentItem = parseFloat(this.input);\r\n        if (isNaN(previousItem) || isNaN(currentItem)) return;\r\n        switch (this.operator) {\r\n            case '+':\r\n                calculation = previousItem + currentItem;\r\n            break\r\n            case '-':\r\n                calculation = previousItem - currentItem;\r\n            break\r\n            case 'x':\r\n                calculation = previousItem * currentItem;\r\n            break\r\n            case '÷':\r\n                calculation = previousItem / currentItem;\r\n            break\r\n            default:\r\n                return;\r\n        }\r\n        this.input = calculation;\r\n        this.operator = undefined;\r\n        this.result = '';\r\n    }\r\n\r\n    getDisplayNumber(number) {\r\n        const stringNumber = number.toString();\r\n        const integerDigits = parseFloat(stringNumber.split('.')[0]);\r\n        const decimalDigits = stringNumber.split('.')[1];\r\n        let integerDisplay\r\n        if (isNaN(integerDigits)) {\r\n            integerDisplay = '';\r\n        } else {\r\n            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});\r\n        }\r\n        if (decimalDigits != null) {\r\n            return `${integerDisplay}.${decimalDigits}`;\r\n        } else {\r\n            return integerDisplay;\r\n        }\r\n    }\r\n\r\n    updateDisplay() {\r\n        this.inputDisplay.innerText = this.getDisplayNumber(this.input);\r\n        if (this.operator != null) {\r\n            this.resultDisplay.innerText = `${this.getDisplayNumber(this.result)} ${this.operator}`;\r\n        } else {\r\n            this.resultDisplay.innerText = '';\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = Calculator;\n\n//# sourceURL=webpack://calculator/./www/js/calculator.js?");

/***/ }),

/***/ "./www/js/main.js":
/*!************************!*\
  !*** ./www/js/main.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nconst Calculator = __webpack_require__(/*! ./calculator */ \"./www/js/calculator.js\");\r\n\r\nconst numberKeys = document.querySelectorAll('.number');\r\nconst operatorKeys = document.querySelectorAll('.operator');\r\nconst equalsKey = document.querySelector('.equals');\r\nconst backspaceKey = document.querySelector('.backspace');\r\nconst clearKey = document.querySelector('.clear');\r\nconst resultDisplay = document.querySelector('.display__result');\r\nconst inputDisplay = document.querySelector('.display__input');\r\nconst negation = document.querySelector('.negation');\r\n    \r\nconst calculator = new Calculator(inputDisplay, resultDisplay)\r\n\r\nnumberKeys.forEach(key => {\r\n    key.addEventListener('click', () => {\r\n        calculator.insertNumber(key.innerText);\r\n        calculator.updateDisplay();\r\n    })\r\n})\r\n\r\noperatorKeys.forEach(key => {\r\n    key.addEventListener('click', () => {\r\n        calculator.chooseOperation(key.innerHTML);\r\n        calculator.updateDisplay();\r\n    })\r\n})\r\n\r\nequalsKey.addEventListener('click', key => {\r\n    calculator.calculate();\r\n    calculator.updateDisplay();\r\n})\r\n\r\nclearKey.addEventListener('click', key => {\r\n    calculator.clearAll();\r\n    calculator.updateDisplay();\r\n})\r\n\r\nbackspaceKey.addEventListener('click', key => {\r\n    calculator.deleteLastItem();\r\n    calculator.updateDisplay();\r\n})\r\n\r\nnegation.addEventListener('click', key => {\r\n    calculator.changeSign()\r\n    calculator.updateDisplay()\r\n})\r\n\r\nmodule.exports = calculator;\r\n\n\n//# sourceURL=webpack://calculator/./www/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./www/js/main.js");
/******/ 	
/******/ })()
;