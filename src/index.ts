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


    static validateStructure =(aBlcok:Block):boolean =>
        typeof aBlcok.index ==="number"&& 
        typeof aBlcok.hash ==="string"&& 
        typeof aBlcok.previousHash ==="string"&&
        typeof aBlcok.timestamp ==="number"&& 
        typeof aBlcok.data ==="string";
    

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
    addBlock(newBlock);
    return newBlock;
};

// console.log(createNewBlock("hellow"),createNewBlock("byebye"));

const getHashforBlock =(aBlock:Block):string =>
    Block.calculateBlockHash(
        aBlock.index,
        aBlock.previousHash,
        aBlock.timestamp,
        aBlock.data
    );


const isBlockVaild = (candidateBlock:Block,previousBlock:Block):boolean=>{
    if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock =(candidateBlock:Block):void=>{
    if(isBlockVaild(candidateBlock,getLatestBlock())){
        blockchain.push(candidateBlock);
    }
}

createNewBlock("222");
createNewBlock("333");
createNewBlock("444");

console.log(blockchain);

    export{};
