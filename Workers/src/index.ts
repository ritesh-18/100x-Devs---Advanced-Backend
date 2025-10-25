import { createClient } from "redis";
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
      console.log(res);
    }
  } catch (error) {
    console.log("something went wrong whhile pulling msg from worker");
  }
}
pullMsg();
