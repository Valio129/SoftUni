function solution() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }
    class PartyBalloon extends Balloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength) {
            super(color, hasWeight);
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            };
        }
        get ribbon() {
            return this._ribbon 
        }

    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }
        get text() {
            return this._text
        }
    }
    return { Balloon, PartyBalloon, BirthdayBalloon };
}
let classes = solution();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let bdayBal = new classes.BirthdayBalloon("yellow", 20.5, "red", 10.25, 'Maika ti')
let ribbon = bdayBal.ribbon;
console.log(bdayBal);
console.log(ribbon);
console.log(bdayBal.text);