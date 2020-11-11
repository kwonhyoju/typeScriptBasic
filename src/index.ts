interface human {
    name:string,
    age:number,
    gender:string
}

const person ={
    name:"nico",
    age:22,
    gender:"male"
}

const name = "nicolas",
    age=24,
    gender="male"

    const sayHi =(person:human):string=>{
        return(`::::::hellow ${name} you are ${age} you are a ${gender}:::::`);
    }

    console.log(sayHi(person));

    export{};

    //"?"mark is optional => 있거나 없거나 ,값이 없을때는 undefind로 표시 된다.