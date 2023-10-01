function calculator() {
    const obj = {
        init: function (selector1, selector2, resultSelector) {

            obj['selector1'] = document.querySelector(selector1);
            obj['selector2'] = document.querySelector(selector2);
            obj['resultSelector'] = document.querySelector(resultSelector);
            // selector1: document.querySelector(selector1),
            // selector2: document.querySelector(selector2),
            // resultSelector: document.querySelector(resultSelector),
        },
        add: function () {
            this.resultSelector.value = Number(this.selector1.value) + Number(this.selector2.value);
        },
        subtract: function () {
            this.resultSelector.value = Number(this.selector1.value) - Number(this.selector2.value);
        },
    };
    return obj;
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




