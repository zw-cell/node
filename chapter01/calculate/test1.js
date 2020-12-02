var calculate = (
    function() {
        function add(x, y) {
            return parseInt(x) + parseInt(y);
        }

        function subtract(x, y) {
            return parseInt(x) - parseInt(y);
        }

        function multiply(x, y) {
            return parseInt(x) * parseInt(y);
        }

        function divide(x, y) {
            return parseInt(x) / parseInt(y);
        }
        return {
            add: add,
            subtract: subtract,
            multiply: multiply,
            divide: divide
        }
    }
)();
module.exports = calculate;