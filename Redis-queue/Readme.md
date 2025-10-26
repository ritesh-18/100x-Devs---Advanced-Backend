- How to config Redis Caching in Ubuntu/Windows(docker required)

- How to set the `key:value`

  - `SET key:value` (in cli you can only add string value)

- How to get the `key:value`

  - `GET key` (in cli you can just pass the key)

- How to delte the `key:value`
  - `DEL key` (in cli you can just pass the key)

---

### Redis as Queue

- You can also `push` to a `topic/queue` on Redish and other processess can `pop` from it.
- Good example of this is leetcode submission that need to be processed asynchronously.

#### How to push and pull from queue

- Pushing to a queue

  - `LPUSH problem 1`
  - `LPUSH problem 2`
  - LPUSH means push from left side
  - 54321 (1 come first and then 2 and so on.)
  - You can also push it from right?
  - 12345(1 come first then 2 and so on..)

- Popping from a queue

  - `RPOP problem`
  - `RPOP problem`
  - here rpop means pop it from right side (if push from left side) and vice versa(push-right , pop left `LPOP`)

- Blocked pop

  - `BRPOP problem 0`
  - `BRPOP problem 30`
  - In this we are blocking the queue named as problem and pass for how much you wanted to block `0-infinite time`(it waits until someone push the msg in this queue) , `5- 5sec` means blcok for 5min after that unblock it (if someone in between pushed then unblock it ).

- Inabove example `problem` is the queue name.

---

### Talking to redis via nodejs

- There are various `clients` that exists that let you talk to `redis` via nodejs
- npm package - redis
- Lets init a simple nodejs express server that takes a `problem submissio`(very similar to leetcode) as input and sends it to the queue.
- lets also create a `worker` service that picks up a problem , waits for 2 sec and then procedds to pick the next one.

- Create a two project

  - express-server
  - worker -server
  - and use redis package in both server
  - ritesh why it is needed bcoz redis is sometheing through which you can able to talk with `redis db`.
  - How to install `npm i redis`
  - also add `@types/express` package in express-server

  - `Express-server`
    - npm init -y
    - npx tsc --init
    - npm i express @types/express redis
  - `Worker-server`
    - npm init -y
    - npx tsc --init
    - npm i redis
