document.addEventListener('DOMContentLoaded', function () {
    const userItems = document.querySelectorAll('.user-item');
    const selectedUserElement = document.getElementById('selected-user');
    const chatMessages = document.getElementById('chat-messages');
    const chatArea = document.querySelector('.chat-area');
  
    userItems.forEach(function (item) {
      item.addEventListener('click', function () {
        const selectedUser = this.dataset.user;
        selectedUserElement.textContent = selectedUser;
        resetChat();
      });
    });
  
    function resetChat() {
      chatMessages.innerHTML = ''; // Limpiar el contenido del área de chat
      chatArea.scrollTop = chatArea.scrollHeight; // Hacer scroll hacia abajo
    }
  
    function sendMessage() {
      const selectedUser = selectedUserElement.textContent;
      const messageInput = document.getElementById('message-input');
      const message = messageInput.value.trim();
  
      if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `${selectedUser}: ${message}`;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
        chatArea.scrollTop = chatArea.scrollHeight;
      }
    }
  
    document.getElementById('send-button').addEventListener('click', sendMessage);
    document.getElementById('message-input').addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
      }
    });
  });
  