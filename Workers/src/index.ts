import { createClient } from "redis";
import { runCodeWithJudge0 } from "./codeExecutor";
import { getResult } from "./polling";
const client = createClient();

async function createServer() {
  try {
    await client.connect();
    console.log("redis connected");
  } catch (error) {
    console.log("some issue while connecting redis in  worker");
  }
}
createServer();

// here we call the redis fx again and again

async function pullMsg() {
  try {
    while (1) {
      console.log("pulling started");
      const res = await client.BRPOP("problems", 0);
      //now lets call the tools which exactly exectue the code
      const job = JSON.parse(res.element);
      const code = job.code;
      console.log(code);
      const token = await runCodeWithJudge0(
        job.code,
        job.input || null,
        job.expectedOutput || null
      );

      //   console.log(executorRes);
      // once you have token then you need to pass it the get methods and one more things is polling method to fetch the  output of code
      console.log("token mil gya hai ", token);

      if (token.token) {
        console.log("token k baad");
        await getResult(token.token);
      }
    }
  } catch (error) {
    console.log("something went wrong whhile pulling msg from worker");
  }
}
pullMsg();
