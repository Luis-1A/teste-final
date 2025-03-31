document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.getElementById('chatbot-send');
    const inputField = document.getElementById('chatbot-input');
    const messagesContainer = document.getElementById('chatbot-messages');
  
    sendButton.addEventListener('click', function() {
      const userMessage = inputField.value.trim();
      if (userMessage) {
        addMessage('Você: ' + userMessage, 'user');
        inputField.value = '';
        getResponse(userMessage);
      }
    });
  
    function addMessage(message, type) {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      messageElement.className = type;
      messagesContainer.appendChild(messageElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  
    function getResponse(userMessage) {
      fetch(`chatbot.php?question=${encodeURIComponent(userMessage)}`)
        .then(response => response.text())
        .then(data => {
          addMessage('Chatbot: ' + data, 'chatbot');
        })
        .catch(error => {
          addMessage('Chatbot: Ocorreu um erro. Tente novamente!', 'chatbot');
        });
    }
  });