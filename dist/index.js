"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Crypto = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => Crypto.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "299292929", "", "hellow", 123456);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getnewTimeStamp = () => Math.round(new Date().getTime() / 1000);
console.log(blockchain);
//# sourceMappingURL=index.js.map