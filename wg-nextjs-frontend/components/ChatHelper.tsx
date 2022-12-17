import React, { useState } from "react";
import { useMutation, useQuery } from "../components/generated/nextjs";

const ChatHelper = () => {
  const placeholderAnswer = "Hi! What did you want to learn about today?";

  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");

  // const {
  //   data: answer
  // } = useQuery({
  //   operationName: "ChatGPT",
  //   enabled: false
  // })
  const { data, isMutating, trigger } = useMutation({
    operationName: "GetAnswer",
  });

  return (
    <div
      className={`relative rounded-lg bg-white shadow-md ${
        isExpanded ? "expanded" : "collapsed"
      }`}
    >
      <button
        className="p-4 absolute top-0 right-0 mr-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{isExpanded ? "❌" : "💬"}</span>
      </button>
      <div className="max-w-lg max-h-lg p-4">
        {isExpanded && (
          <>
            <h2 className="text-lg font-bold">Helper</h2>

            <p id="answer" className="text-blue-500 font-bold">
              {data ? data.chatgpt_postApi?.answer : placeholderAnswer}
            </p>

            <p id="ifLoading" className="text-green-500 font-bold font-italics">
              {isMutating ? "ChatGPT is thinking..." : ""}
            </p>

            {/* <p id="debugFrontend" className="text-red-500 font-bold">
              {"Question: " + input}
            </p> */}

            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (input) {
                  trigger({
                    question: input,
                  });
                }
              }}
            >
              <input
                className="border rounded-md p-2 w-full"
                type="text"
                placeholder="Your question here."
                onChange={(event) => {
                  const val = event.target.value;
                  if (val) {
                    // set question
                    setInput(val);
                  }
                }}
              />
              <button className="bg-blue-500 text-white rounded-md p-2 mt-2">
                Help me, Obi-Wan Kenobi.
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatHelper;
