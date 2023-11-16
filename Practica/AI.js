const loginContainer = document.getElementById('login-container');
        const chatContainer = document.getElementById('chat-container');
        const userList = document.getElementById('user-list');
        const messageList = document.getElementById('message-list');
        const messageInput = document.getElementById('message-input');
        const sendButton = document.getElementById('send');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const loginButton = document.getElementById('login');
        const registerButton = document.getElementById('register');

        let currentUser = null;

        function showChat() {
            loginContainer.style.display = 'none';
            chatContainer.style.display = 'flex';
            messageInput.focus();
        }

        function updateUsers() {
            // For simplicity, just show the current user in the user list.
            userList.innerHTML = `<p>${currentUser} (You)</p>`;
        }

        function sendMessage() {
            const text = messageInput.value.trim();
            if (text) {
                const messageElement = document.createElement('div');
                messageElement.className = 'message';
                messageElement.innerHTML = `<strong>${currentUser}:</strong> ${text}`;
                messageList.appendChild(messageElement);
                messageInput.value = '';
                messageInput.focus();
                messageList.scrollTop = messageList.scrollHeight;
            }
        }

        // Event listeners
        sendButton.addEventListener('click', sendMessage);

        messageInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                sendMessage();
                event.preventDefault();
            }
        });

        loginButton.addEventListener('click', () => {
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (username) {
                currentUser = username;
                updateUsers();
                showChat();
            } else {
                alert('Please enter a valid username.');
            }
        });

        registerButton.addEventListener('click', () => {
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (username) {
                currentUser = username;
                updateUsers();
                showChat();
            } else {
                alert('Please enter a valid username.');
            }
        });
        function simulateAPIResponse() {
            // Función para simular una respuesta de la API
            setTimeout(() => {
                const receivedMessage = document.createElement('div');
                receivedMessage.className = 'received-message';
                receivedMessage.innerHTML = `<strong>Friend:</strong> Thanks for your message!`;
                messageList.appendChild(receivedMessage);
                messageList.scrollTop = messageList.scrollHeight;
            }, 1000); // Retraso de 1 segundo para simular una respuesta asíncrona
        }

        function sendMessage() {
            const text = messageInput.value.trim();
            if (text) {
                const messageElement = document.createElement('div');
                messageElement.className = 'message';
                messageElement.innerHTML = `<strong>${currentUser}:</strong> ${text}`;
                messageList.appendChild(messageElement);
                messageInput.value = '';
                messageInput.focus();
                messageList.scrollTop = messageList.scrollHeight;

                simulateAPIResponse(); // Simular respuesta de la API
            }
        }

        // Event listeners existentes

        // Muestra un mensaje de bienvenida al cargar la página
        const welcomeMessage = document.createElement('div');
        welcomeMessage.className = 'received-message';
        welcomeMessage.innerHTML = `<strong>Friend:</strong> Welcome!`;
        messageList.appendChild(welcomeMessage);