import './index.css'


// function decorateArmour(target:any, key:string, descriptor:PropertyDescriptor) {
     
//      return descriptor;
//    }

   function decorateArmour(){
        return function(target:any, key:string, descriptor:PropertyDescriptor){
           return descriptor
        }
   }
   function propDecorate(){
     return function(target:any, key:string, descriptor:PropertyDescriptor){
          return descriptor
       }
   }
   
   class Man{
     @propDecorate()
     private def:number;
     private atk:number;
     private hp:number;
     constructor(def = 2,atk = 3,hp = 3){
       this.init(def,atk,hp);
     }
   
     @decorateArmour()
     init(def,atk,hp){
       this.def = def; // 防御值
       this.atk = atk;  // 攻击力
       this.hp = hp;  // 血量
     }
     toString(){
       return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
     }
   }
   
   var tony = new Man();
   
   console.log(`当前状态 ===> ${tony}`);
   // 输出：当前状态 ===> 防御力:102,攻击力:3,血量:3












