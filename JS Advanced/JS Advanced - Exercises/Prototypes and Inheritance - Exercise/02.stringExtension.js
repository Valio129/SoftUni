(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        let string = this.toString();
        if (this.startsWith(str)) {
            return string;
        }
        return str.concat(string);
    };
    String.prototype.ensureEnd = function (str) {
        let string = this.toString();
        if (this.endsWith(str)) {
            return string;
        }
        return string.concat(str);
    };
    String.prototype.isEmpty = function () {
        let string = this.toString();
        return string === '';
    };
    String.prototype.truncate = function (n) {
        let string = this.toString();
        if (string.length >= n) {
            if (n < 4) {
                return '.'.repeat(n);
            }
            else if (!string.split('').includes(' ')) {
                let result = [];
                // string = string.split('');
                for (let i = 0; i < n - 3; i++) { // hello
                    result.push(string[i]);
                }
                string = result.join('');
                string = string.concat('...');

            } else {
                while (string.length > n) {
                    string = string.split(' ');
                    string.pop();
                    string[string.length - 1] = string[string.length - 1].concat('...');
                    string = string.join(' ');
                }
            }
        }
        return string;
    };
    String.format = function (string, ...params) {
        string = string.split(' ');
        for (let word of string) {
            if (word.startsWith('{') && word.endsWith('}')) {
                let [left, index, right] = word.split("");
                index = Number(index);
                if (params[index] !== undefined) {
                    string[string.indexOf(word)] = params[index];
                }
            }
        }
        return string.join(' ');
    };
})();
let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
    'dog');
console.log(str);