import './index.css'

// class Index {
//     constructor() {
//         this.bindEvent();
//     }
//     bindEvent(): void {
//         let _this = this;
//         let el: any = $(".container");
//         el.on("click", "a", function (e) {
//              alert("");
//         })

//     }
// }
// new Index()
// let name: string = "xxxx";
// let num: number = 123;
// let arr: number[] = [1, 2, 3];
// let arr1: Array<number> = [1, 2, 3]
// let arr2: [string, number] = ["string", 2];

// //枚举类型
// enum Color { green, red, blue }
// let c: string = Color[1];
// console.log(c)

// let obj: object | null = {}

// let string: string = "我是谁";
// console.log((<string>string).length);
// console.log((string as string).length);

// let a: string, b: number, d: Object | Array<number>;

// let h: string | null | undefined = null;
// @fly()
// class Man {
//     private intelligence: number;
//     private physical: number;
//     private spirit: number;

//     public constructor(intelligence: number = 120, physical = 200, spirit = 100) {
//         this.init(intelligence, physical, spirit)
//     }
//     @decorateArmour
//     public init(intelligence, physical, spirit) {
//         this.intelligence = intelligence
//         this.physical = physical
//         this.spirit = spirit
//     }
//     public toString() {
//         return `这个人有智力：${this.intelligence},体力:${this.physical},精神:${this.spirit}`
//     }
// }

// let man = new Man()
// console.log(man.toString())

// function decorateArmour(target, key, descriptor) {
//     const method = descriptor.value;
//     let moreDef = 100;
//     let ret;
//     descriptor.value = (...args) => {
//         args[0] += moreDef;
//         ret = method.apply(target, args);
//         return ret;
//     }
//     return descriptor;
// }

// function fly() {
//     return function (target) {
//         target.cancel=true;
//         let extra =true ? '(技能加成:飞行能力)' : '';
//         let method = target.prototype.toString;
//         target.prototype.toString=(...args)=>{
//             return method.apply(target.prototype,args) +extra;
//         }
//         return target
//     }
// }

interface Animate{
    up:string;
    down:string;
    num:number;
    getDirection(d:string)
}

class Dog implements Animate{
    up:string;
    down:string;
    num:number;
    constructor(){
        this.getDirection("aaaa");
    }
    getDirection(d:string){
        console.log(d);
    }
}

new Dog()
