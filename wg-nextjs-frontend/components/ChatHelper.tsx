const ChatHelper = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold">Helper</h2>
      <p>
        Hi! What did you want to know about?
      </p>
      <form>
        <input
          className="border rounded-md p-2 w-full"
          type="text"
          placeholder="Your question here."
        />
        <button className="bg-blue-500 text-white rounded-md p-2 mt-2">
          Help me, Obi-Wan Kenobi.
        </button>
      </form>
    </div>
  );
};


export default ChatHelper;
