let a: number = 1;
let b: string = "hello"
b = "ahah";
let ar: [number, string, boolean] = [1,"flgl",true];

console.log(ar);

class Hero {
    constructor() {
        console.log("A ew hero is born");
    }
}

class Warrior extends Hero{
    private _name: string;
    constructor(caracteristic: ICaracteristic) {
        super();
    }

    get name(): string {
        return this._name;
    }


    set name(value: string) {
        this._name = value;
    }
}

interface ICaracteristic {
    strength : number;
    intelligence : number;
    weapon : string;
}

const carac: ICaracteristic = {
    intelligence: 1,
    strength: 10,
    weapon: "axe"
}

const w = new Warrior(carac);


