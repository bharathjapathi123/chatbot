let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let userInputEl = document.getElementById("userInput");
let sendMsgBtnEl = document.getElementById("sendMsgBtn");
let chatContainerEl = document.getElementById("chatContainer");

function msgToChatbot() {
    let userInput = userInputEl.value;
    let msgToChatbotContainer = document.createElement("div");
    msgToChatbotContainer.classList.add("msg-to-chatbot-container");
    let userInputValue = document.createElement("span");
    userInputValue.textContent = userInput;
    userInputValue.classList.add("msg-to-chatbot");
    msgToChatbotContainer.appendChild(userInputValue);
    chatContainerEl.appendChild(msgToChatbotContainer);
    userInputEl.value = "";
}

function msgFromChatbot() {
    let msgFromChatbotContainer = document.createElement("div");
    msgFromChatbotContainer.classList.add("msg-from-chatbot-container");
    let chatbotInputValue = document.createElement("span");
    chatbotInputValue.textContent = chatbotMsgList[Math.ceil(Math.random() * chatbotMsgList.length - 1)];
    chatbotInputValue.classList.add("msg-from-chatbot");
    msgFromChatbotContainer.appendChild(chatbotInputValue);
    chatContainerEl.appendChild(msgFromChatbotContainer);
}

sendMsgBtnEl.onclick = function () {
    msgToChatbot();
    msgFromChatbot();
}