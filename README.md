# wg-chatgpt

## An experimental frontend interface for ChatGPT
NextJS frontend + Express API (OpenAPI spec written by me) that calls ChatGPT via the npm chatgpt module + WG for GraphQLizing it it.

## Instructions
1. Needs your ChatGPT sessiontoken, extract it from browser 
2. Start the Express API first (port 3001) then the NextJS app/WG server (port 3000 for Next, and 9991 for GraphQL) 
3. Expect responses to take 20-30 seconds. Timeouts might happen. Blame ChatGPTs servers.
