let a = 1;
let b = "hello";
b = "ahah";
let ar = [1, "flgl", true];
console.log(ar);
class Hero {
    constructor() {
        console.log("A ew hero is born");
    }
}
class Warrior extends Hero {
    constructor(caracteristic) {
        super();
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
const carac = {
    intelligence: 1,
    strength: 10,
    weapon: "axe"
};
const w = new Warrior(carac);
