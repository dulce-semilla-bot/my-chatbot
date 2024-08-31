document.getElementById("send-btn").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        addMessage(userInput, "user");
        fetch('/get-response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "message": userInput })
        })
        .then(response => response.json())
        .then(data => {
            addMessage(data.response, "bot");
        });
        document.getElementById("user-input").value = ""; // Limpiar el input
    }
});

function addMessage(message, sender) {
    let chatContent = document.getElementById("chat-content");
    let newMessage = document.createElement("div");
    newMessage.className = sender + "-message";
    newMessage.innerText = message;
    chatContent.appendChild(newMessage);
    chatContent.scrollTop = chatContent.scrollHeight; // Scroll automático
}
