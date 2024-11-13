const responses = {
  "hi": "how are you",
  "hello": "Hello! Welcome to the Library Management System. How can I assist you today?",
  "library hours": "The library is open from 9 AM to 6 PM from Monday to Friday.",
  "available books": "You can find a wide variety of books including fiction, non-fiction, science, and history. Use our search system to check for a specific book.",
  "how to borrow books": "To borrow books, please present your library card at the front desk or use our online borrowing system.",
  "thank you": "You're welcome! Have a great day!"
};

function sendMessage() {
  let userMessage = document.getElementById("userInput").value;
  if (userMessage.trim() === "") return;

  // Display the user's message
  displayMessage(userMessage, "user");

  // Check if the bot has a response
  let botResponse = getBotResponse(userMessage.toLowerCase());
  setTimeout(() => displayMessage(botResponse, "bot"), 500); // Simulate typing delay

  // Clear input field
  document.getElementById("userInput").value = "";
}

function displayMessage(message, sender) {
  let chatLog = document.getElementById("chat-log");
  let messageItem = document.createElement("div");
  messageItem.classList.add("chat-log-item");

  if (sender === "user") {
      messageItem.classList.add("user-message");
  } else {
      messageItem.classList.add("bot-message");
  }

  messageItem.textContent = message;
  chatLog.appendChild(messageItem);
  chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the latest message
}

function getBotResponse(input) {
  return responses[input] || "I'm sorry, I don't understand that. Could you please ask something else?";
}

// Allow "Enter" key to send messages
function handleKeyPress(event) {
  if (event.key === "Enter") {
      sendMessage();
  }
}
