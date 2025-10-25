import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());
const client = createClient(); //if not local redish then need to config the creatClient

app.post("/submit", async (req, res) => {
  const { problemId, code, lang, userId } = req.body;
  // generally we would like to add data in db
  //but here we will add the data in redis
  await client.LPUSH(
    "problems",
    JSON.stringify({ code, lang, problemId, userId })
  );
  //now store in db
  res.status(200).send("submission recieved and stored");
});

async function creatRedisServer() {
  try {
    await client.connect();
    console.log("connected to redis");
  } catch (error) {
    console.log("some error happens in redis connection", error);
  }
}

creatRedisServer();

app.listen(3000, () => {
  console.log("server is up running at port number 3000");
});
