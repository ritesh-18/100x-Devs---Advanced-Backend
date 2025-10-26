"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const codeExecutor_1 = require("./codeExecutor");
const polling_1 = require("./polling");
const client = (0, redis_1.createClient)();
function createServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("redis connected");
        }
        catch (error) {
            console.log("some issue while connecting redis in  worker");
        }
    });
}
createServer();
// here we call the redis fx again and again
function pullMsg() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            while (1) {
                console.log("pulling started");
                const res = yield client.BRPOP("problems", 0);
                //now lets call the tools which exactly exectue the code
                const job = JSON.parse(res.element);
                const code = job.code;
                console.log(code);
                const token = yield (0, codeExecutor_1.runCodeWithJudge0)(job.code, job.input || null, job.expectedOutput || null);
                //   console.log(executorRes);
                // once you have token then you need to pass it the get methods and one more things is polling method to fetch the  output of code
                console.log("token mil gya hai ", token);
                if (token.token) {
                    console.log("token k baad");
                    yield (0, polling_1.getResult)(token.token);
                }
            }
        }
        catch (error) {
            console.log("something went wrong whhile pulling msg from worker");
        }
    });
}
pullMsg();
