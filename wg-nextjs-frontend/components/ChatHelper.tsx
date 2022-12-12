import React, { useState } from "react";

const ChatHelper = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [question, setQuestion] = useState(
    "What is the first letter of the alphabet?"
  );

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
      <div className="p-4">
        {isExpanded && (
          <>
            <h2 className="text-lg font-bold">Helper</h2>
            <p>Hi! What did you want to learn about? I can help you!</p>
            <form onSubmit={(event) => event.preventDefault()}>
              <input
                className="border rounded-md p-2 w-full"
                type="text"
                placeholder="Your question here."
                onChange={(event) => setQuestion(event.target.value)}
              />
              <button
                className="bg-blue-500 text-white rounded-md p-2 mt-2"
                onClick={() => alert("Question: " + question)}
              >
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
