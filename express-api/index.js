// const express = require('express')
import express from "express";
import expressOasGenerator from "express-oas-generator";
const app = express();

expressOasGenerator.init(app, {}); // to overwrite generated specification's values use second argument.
const port = 3001;

import * as dotenv from "dotenv";
dotenv.config();
import { ChatGPTAPI } from "chatgpt";

async function example() {
  // sessionToken is required; see below for details
  const api = new ChatGPTAPI({
    sessionToken: process.env.SESSION_TOKEN,
  });
  // ensure the API is properly authenticated
  await api.ensureAuth();

  // send a message and wait for the response
  const response = await api.sendMessage(
    "What is the first letter of the english alphabet?"
  );

  // response is a markdown-formatted string
  //console.log(response);
  return response; // in markdown
}

app.get("/api", async (req, res) => {
  //await something, like User.findOne
  //const data = await example();
  // res.send({ data: await example() });
  res.send({ data: await example() });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
