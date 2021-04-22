var chatWindow = document.getElementById("chat");
var messagesContainer = document.getElementById("chatMessagesContainer");

var messageBox = document.getElementById("messageBox");
messageBox.addEventListener("keyup", function (e) {
    if(e.key === 'Enter') {
        sendMessage();
    }
});

// Shows the chat window
function chat() {
    if(chatWindow.style.display === "flex")
        return;
    messagesContainer.innerHTML = "";
    chatWindow.style.display = "flex";
    messageBox.focus();
    setTimeout(showMessage, 250, 'Please wait while we connect you to a customer support representative.');
    setTimeout(showMessage, 2000, 'Hello! My name is Darcy. How can I help you today?');
}


// Hides the chat window
function chatClose() {
    chatWindow.style.display = "none";
}

// Shows a message from the "server" to the user in the chat window
function showMessage(message) {
    messagesContainer.insertAdjacentHTML("beforeend", '<div class="message">' + message + '</div>');
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // scroll to bottom of window
}

// Display a message that the user has typed in the chat window
function showUserMessage(message) {
    messagesContainer.insertAdjacentHTML("beforeend", '<div class="userMessage">' + message + '</div>');
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // scroll to bottom of window
}

// Sends the current message in the input box
function sendMessage() {
    if(messageBox.value) {
        showUserMessage(messageBox.value);
        messageBox.value = "";
    }
    messageBox.focus();
}