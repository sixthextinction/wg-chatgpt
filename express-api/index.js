// const express = require('express')
import express from "express";
import expressOasGenerator from "express-oas-generator";
const app = express();

app.use(express.json());

expressOasGenerator.init(app, {}); // to overwrite generated specification's values use second argument.
const port = 3001;

import * as dotenv from "dotenv";
dotenv.config();
import { ChatGPTAPI } from "chatgpt";
import fetch from "node-fetch";


async function getAnswer(question) {
  const api = new ChatGPTAPI({
    sessionToken: process.env.SESSION_TOKEN,
    clearanceToken: process.env.CLEARANCE_TOKEN,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:107.0) Gecko/20100101 Firefox/107.0", // needs to match your browser's user agent
  });
  // ensure the API is properly authenticated
  //await api.ensureAuth();
  await api.initSession()

  // send a message and wait for the response
  const response = await api.sendMessage(question);

  // response is a markdown-formatted string
  //console.log(response);
  return response; // in markdown
}

// GET
app.get("/api", async (req, res) => {
  // res.send({ data: await example() });
  res.send({ 
    question: "What is the answer to life, the universe, and everything?",
    answer: "42!" 
  });
});

// POST
app.post("/api", async (req, res) => {
  // Get the body from the request
  const { body } = req;
  console.log(body.question); // debug
  res.send({ 
    question: body.question,
    answer: await getAnswer(body.question) 
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
