# wg-chatgpt

## An experimental frontend interface for ChatGPT
NextJS frontend + Express API (w/ OpenAPI spec) that calls ChatGPT via the npm ```chatgpt``` module, and uses WunderGraph as a BFF for orchestrating downstream calls (safe assumption that in a real world app, ChatGPT won't be your only call).

## Instructions
0. ```npm install``` in both the backend and frontend dirs (Needs node.js >=18 )
1. Needs to extract browser credentials via puppeteer

Your OpenAI email and password need to be in an .env file. Here's the ```chatgpt``` example (as of Dec 15, 2022)
```javascript
import { ChatGPTAPIBrowser } from 'chatgpt'

const api = new ChatGPTAPIBrowser({
  email: process.env.OPENAI_EMAIL,
  password: process.env.OPENAI_PASSWORD
})
await api.initSession()

const result = await api.sendMessage('Hello World!')
console.log(result.response)
```

2. Start the Express API first (port 3001) then the NextJS app/WG server (port 3000 for Next, and 9991 for GraphQL) 
3. The frontend UI is pretty self explanatory, but expect responses to take 15-20 seconds. Timeouts might happen. Blame ChatGPTs servers.
