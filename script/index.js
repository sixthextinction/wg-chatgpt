import * as dotenv from 'dotenv'
dotenv.config()
import { ChatGPTAPI } from "chatgpt";

async function example() {
  //console.log(process.env.SESSION_TOKEN); //works!
  // sessionToken is required; see below for details
  const api = new ChatGPTAPI({
    sessionToken: process.env.SESSION_TOKEN,
  });

  // ensure the API is properly authenticated
  await api.ensureAuth();

  // send a message and wait for the response
  const response = await api.sendMessage(
    "Write a python version of bubble sort."
  );

  // response is a markdown-formatted string
  console.log(response);
}

example();
