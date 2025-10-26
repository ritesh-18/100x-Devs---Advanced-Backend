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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCodeWithJudge0 = runCodeWithJudge0;
const axios_1 = __importDefault(require("axios"));
const options_1 = require("./options");
function runCodeWithJudge0(sourceCode_1) {
    return __awaiter(this, arguments, void 0, function* (sourceCode, input = null, expectedOutput = null) {
        console.log("inside exec-1");
        try {
            const optionsVal = (0, options_1.options)(sourceCode);
            const response = yield axios_1.default.request(optionsVal);
            console.log("inside exec-2");
            return response.data;
        }
        catch (error) {
            console.log(error);
            return;
        }
    });
}
