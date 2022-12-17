# wg-chatgpt

## An experimental frontend interface for ChatGPT
NextJS frontend + Express API (w/ OpenAPI spec) that calls ChatGPT via the npm ```chatgpt``` module, and uses WunderGraph as a BFF for orchestrating downstream calls (safe assumption that in a real world app, ChatGPT won't be your only call).

## Instructions
0. ```npm install``` in both the backend and frontend dirs (Needs node.js >=18 )
1. Needs your OpenAI credentials -- email and password -- in an .env file. 
1B. If you run into CAPTCHA/HTTP 403 errors, it an also automatically bypass those with your browser (via puppeteer) if you use ChatGPTAPIBrowser instead:

(as of Dec 15, 2022)
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
