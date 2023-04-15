// 1 - import files
import importGreet from "./greet";

importGreet();

// 2 - import variable
import {x} from './variable'
console.log(x)

// 3 - multi imports
import {a,b, foo} from './multi'

console.log(a, b)
foo()

// 4 - alias
import { someName as name } from "./changeName";
console.log(name)

// 5 - import all
import * as ex from './every'

console.log(ex)

// 6 - import types
import { Human } from "./types";

class User implements Human {
    name 
    age
    constructor(name:string, age:number){
        this.name =name
        this.age = age
    }
}

const maria = new User("Maria",  23)

console.log(maria)