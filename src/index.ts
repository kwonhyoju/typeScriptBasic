import * as Crypto from "crypto-js";

class Block{
    public index: number;
    public hash:string;
    public previousHash:string;
    public data:string;
    public timestamp:number;

    static calculateBlockHash = (
        index:number,
        previousHash:string,
        timestamp:number,
        data:string
    ):string=>Crypto.SHA256(index+previousHash+timestamp+data).toString();

    constructor(index:number,hash:string,previousHash:string,data:string,timestamp:number){
        this.index=index;
        this.hash=hash;
        this.previousHash=previousHash;
        this.data=data;
        this.timestamp=timestamp;
    }
}

const genesisBlock:Block = new Block(0,"299292929","","hellow",123456);

let blockchain:Block[]=[genesisBlock];

const getBlockchain = ():Block[] => blockchain;
const getLatestBlock=():Block =>blockchain[blockchain.length -1];
const getnewTimeStamp =():number => Math.round(new Date().getTime() / 1000);


const createNewBlock=(data:string):Block=>{
    const previousBlock:Block = getLatestBlock();
    const newIndex:number= previousBlock.index +1;
    const newTimestamp:number = getnewTimeStamp();
    const newHash:string = Block.calculateBlockHash(newIndex,previousBlock.hash,newTimestamp,data);
    const newBlock:Block = new Block(
        newIndex,newHash,previousBlock.hash,data,newTimestamp
    );
    return newBlock;
};

console.log(createNewBlock("hellow"),createNewBlock("byebye"));

// console.log(":::A:::",Block.calculateBlockHash(23,"aa",11,"aa"));

    export{};
