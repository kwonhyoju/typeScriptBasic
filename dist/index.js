"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "nico",
    age: 22,
    gender: "male"
};
const name = "nicolas", age = 24, gender = "male";
const sayHi = (person) => {
    return (`::::::hellow ${name} you are ${age} you are a ${gender}:::::`);
};
console.log(sayHi(person));
//"?"mark is optional => 있거나 없거나 ,값이 없을때는 undefind로 표시 된다.
//# sourceMappingURL=index.js.map