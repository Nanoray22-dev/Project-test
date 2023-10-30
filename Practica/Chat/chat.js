document.addEventListener('DOMContentLoaded', function () {
    const userItems = document.querySelectorAll('.user-item');
    const selectedUserElement = document.getElementById('selected-user');
    const chatMessages = document.getElementById('chat-messages');
    const chatArea = document.querySelector('.chat-area');

    const conversaciones = [
      {
        userId: 1,
        conversacion: [
          {
            fechaEnvio: "2023-10-27 09:30:00",
            mensaje: "Hola, ¿cómo estás?",
            remitente: "Juan Pérez",
          },
          {
            fechaEnvio: "2023-10-27 09:35:00",
            mensaje: "¡Hola! Estoy bien, ¿y tú?",
            remitente: "Miguel Salinas",
          },
          {
            fechaEnvio: "2023-10-27 09:40:00",
            mensaje: "Yo también estoy bien, ¿qué has estado haciendo?",
            remitente: "Juan Pérez",
          },
        ]
      },
      {
        userId: 2,
        conversacion: [
          {
            fechaEnvio: "2023-10-27 10:15:00",
            mensaje: "Hola María, ¿cómo te va?",
            remitente: "Miguel Salinas",
          },
          {
            fechaEnvio: "2023-10-27 10:20:00",
            mensaje: "Hola Miguel, todo bien. ¿Qué has estado haciendo?",
            remitente: "María García",
          },
          {
            fechaEnvio: "2023-10-27 10:25:00",
            mensaje: "Estuve trabajando en un proyecto, ¿y tú?",
            remitente: "Miguel Salinas",
          },
        ]
      },
      {
        userId: 3,
        conversacion: [
          {
            fechaEnvio: "2023-10-27 11:00:00",
            mensaje: "Hola Ana, ¿cómo te ha ido?",
            remitente: "Miguel Salinas",
          },
          {
            fechaEnvio: "2023-10-27 11:05:00",
            mensaje: "Hola Miguel, todo tranquilo por aquí. ¿Y tú?",
            remitente: "Ana Martínez",
          },
          {
            fechaEnvio: "2023-10-27 11:10:00",
            mensaje: "Estoy ocupado con el trabajo, pero todo va bien.",
            remitente: "Miguel Salinas",
          },
        ]
      },
      {
        userId: 4,
        conversacion: [
          {
            fechaEnvio: "2023-10-27 12:30:00",
            mensaje: "Hola Luis, ¿qué tal estás?",
            remitente: "Miguel Salinas",
          },
          {
            fechaEnvio: "2023-10-27 12:35:00",
            mensaje: "¡Hola Miguel! Bien, gracias. ¿Has oído hablar de la nueva película?",
            remitente: "Luis Sánchez",
          },
          {
            fechaEnvio: "2023-10-27 12:40:00",
            mensaje: "Sí, la vi anunciada. ¿Quieres verla juntos?",
            remitente: "Miguel Salinas",
          },
        ]
      },
      {
        userId: 5,
        conversacion: [
          {
            fechaEnvio: "2023-10-27 13:15:00",
            mensaje: "Hola Laura, ¿cómo estás?",
            remitente: "Miguel Salinas",
          },
          {
            fechaEnvio: "2023-10-27 13:20:00",
            mensaje: "¡Hola Miguel! Estoy bien, gracias. ¿Cómo va tu día?",
            remitente: "Laura López",
          },
          {
            fechaEnvio: "2023-10-27 13:25:00",
            mensaje: "Mi día va bien, ocupado en el trabajo. ¿El tuyo?",
            remitente: "Miguel Salinas",
          },
        ]
      },
      {
        userId: 6,
        conversacion: [
          {
            fechaEnvio: "2023-10-27 14:00:00",
            mensaje: "Hola David, ¿qué has estado haciendo?",
            remitente: "Miguel Salinas",
          },
          {
            fechaEnvio: "2023-10-27 14:05:00",
            mensaje: "Hola Miguel, estuve trabajando en mi proyecto. ¿Tú?",
            remitente: "David Gómez",
          },
          {
            fechaEnvio: "2023-10-27 14:10:00",
            mensaje: "Yo también ocupado con el trabajo. ¡Sigamos esforzándonos!",
            remitente: "Miguel Salinas",
          },
        ]
      },
      {
        userId: 7,
        conversacion: [
          {
            fechaEnvio: "2023-10-27 15:30:00",
            mensaje: "Hola Elena, ¿cómo te ha ido hoy?",
            remitente: "Miguel Salinas",
          },
          {
            fechaEnvio: "2023-10-27 15:35:00",
            mensaje: "Hola Miguel, hoy fue un día ocupado en la oficina. ¿El tuyo?",
            remitente: "Elena Torres",
          },
          {
            fechaEnvio: "2023-10-27 15:40:00",
            mensaje: "Lo mismo por aquí, mucho trabajo. ¡Ánimo!",
            remitente: "Miguel Salinas",
          },
        ]
      },
      {
        userId: 8,
        conversacion: [
          {
            fechaEnvio: "2023-10-27 16:15:00",
            mensaje: "Hola Sofía, ¿cómo te va?",
            remitente: "Miguel Salinas",
          },
          {
            fechaEnvio: "2023-10-27 16:20:00",
            mensaje: "¡Hola Miguel! Estoy bien, gracias. ¿Y tú?",
            remitente: "Sofía Ramírez",
          },
          {
            fechaEnvio: "2023-10-27 16:25:00",
            mensaje: "Todo va bien, gracias. ¿Qué planes tienes para el fin de semana?",
            remitente: "Miguel Salinas",
          },
        ]
      },
      {
        userId: 9,
        conversacion: [
          {
            fechaEnvio: "2023-10-27 17:00:00",
            mensaje: "Hola Pablo, ¿qué tal estás?",
            remitente: "Miguel Salinas",
          },
          {
            fechaEnvio: "2023-10-27 17:05:00",
            mensaje: "¡Hola Miguel! Estoy bien, gracias. ¿Cómo va todo contigo?",
            remitente: "Pablo Martín",
          },
          {
            fechaEnvio: "2023-10-27 17:10:00",
            mensaje: "Todo en orden, ocupado con el trabajo. ¿Y tú?",
            remitente: "Miguel Salinas",
          },
        ]
      },
      {
        userId: 10,
        conversacion: [
          {
            fechaEnvio: "2023-10-27 18:30:00",
            mensaje: "Hola Carmen, ¿cómo ha sido tu día?",
            remitente: "Miguel Salinas",
          },
          {
            fechaEnvio: "2023-10-27 18:35:00",
            mensaje: "Hola Miguel, bien, gracias. ¿El tuyo?",
            remitente: "Carmen Rodríguez",
          },
          {
            fechaEnvio: "2023-10-27 18:40:00",
            mensaje: "Ocupado, pero bien. ¿Tienes planes para el fin de semana?",
            remitente: "Miguel Salinas",
          },
        ]
      },
      {
        userId: 11,
        conversacion: [
          {
            fechaEnvio: "2023-10-27 19:15:00",
            mensaje: "Hola Diego, ¿cómo estás?",
            remitente: "Miguel Salinas",
          },
          {
            fechaEnvio: "2023-10-27 19:20:00",
            mensaje: "¡Hola Miguel! Todo bien por aquí. ¿Qué novedades hay?",
            remitente: "Diego Sánchez",
          },
          {
            fechaEnvio: "2023-10-27 19:25:00",
            mensaje: "Nada nuevo, solo trabajo y rutina. ¿Tú?",
            remitente: "Miguel Salinas",
          },
        ]
      },
      {
        userId: 12,
        conversacion: [
          {
            fechaEnvio: "2023-10-27 20:00:00",
            mensaje: "Hola Isabel, ¿cómo te ha ido hoy?",
            remitente: "Miguel Salinas",
          },
          {
            fechaEnvio: "2023-10-27 20:05:00",
            mensaje: "Hola Miguel, día ocupado, pero todo bien. ¿El tuyo?",
            remitente: "Isabel López",
          },
          {
            fechaEnvio: "2023-10-27 20:10:00",
            mensaje: "Lo mismo por aquí, mucho trabajo. ¡Ánimo!",
            remitente: "Miguel Salinas",
          },
        ]
      },
      // Continúa con las 3 conversaciones adicionales que completan el total de 15 conversaciones...
    ];

    let selectedUserId = null;

      userItems.forEach(function (item) {
        item.addEventListener('click', function () {
          selectedUserId = parseInt(this.dataset.user);
          selectedUserElement.textContent = `User ${selectedUserId}`;
          resetChat();
        });
      });

      function resetChat() {
        chatMessages.innerHTML = ''; // Limpiar el contenido del área de chat
        chatArea.scrollTop = chatArea.scrollHeight; // Hacer scroll hacia abajo
        loadConversation();
      }

      function loadConversation() {
        const conversationData = conversaciones.find(convo => convo.userId === selectedUserId);

        if (conversationData) {
          const conversation = conversationData.conversacion;
          conversation.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = `${message.remitente}: ${message.mensaje}`;
            chatMessages.appendChild(messageElement);
          });

          chatArea.scrollTop = chatArea.scrollHeight;
        }
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
          sendMessageToLocalStorage(selectedUserId, message);
          messageInput.value = '';
          chatArea.scrollTop = chatArea.scrollHeight;
        }
      }

      function sendMessageToLocalStorage(userId, message) {
        const storedMessages = localStorage.getItem(`user_${userId}_messages`);
        const messages = storedMessages ? JSON.parse(storedMessages) : [];

        messages.push({
          fechaEnvio: new Date().toLocaleString(),
          mensaje: message,
          remitente: 'Tu'
        });
        localStorage.setItem(`user_${userId}_messages`, JSON.stringify(messages));
      }

      document.getElementById('send-button').addEventListener('click', sendMessage);
      document.getElementById('message-input').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          sendMessage();
        }
      });
    });

    const users = [
      {
        userId: 1,
        name: 'Miguel Rolando',
        avatar: 'https://robohash.org/138.36.78.25.png/to/Miguel_avatar.jpg'
      },
      {
        userId: 2,
        name: 'Samel Lechuga',
        avatar: 'https://robohash.org/138.36.78.25.png/to/samel_avatar.jpg'
      },
      {
        userId: 3,
        name: 'Javier Ohara',
        avatar: 'https://robohash.org/138.36.78.25.png/to/javier_avatar.jpg'
      },
      {
        userId: 4,
        name: 'Saul Perdomo',
        avatar: 'https://robohash.org/138.36.78.25.png/to/saul_avatar.jpg'
      },
      {
        userId: 5,
        name: 'Daniel Rodriguez',
        avatar: 'https://robohash.org/138.36.78.25.png/to/daniel_avatar.jpg'
      },
      {
        userId: 6,
        name: 'Armando Ollas',
        avatar: 'https://robohash.org/138.36.78.25.png/to/armando_avatar.jpg'
      },
      {
        userId: 7,
        name: 'Juan Jose',
        avatar: 'https://robohash.org/138.36.78.25.png/to/juan_avatar.jpg'
      },
    ];

    users.forEach(user => {
      listar(user.name, user.userId, user.avatar);
    });

    function listar(name, userId, avatar) {
      const userItems = document.getElementById('user-list');
      const listItem = document.createElement('li');
      listItem.classList.add('user-item');
      listItem.dataset.user = userId;
      listItem.innerHTML = `
        <img src="${avatar}" alt="${name}" class="avatar">
        <span class="user-name">${name}</span>
      `;
      userItems.appendChild(listItem);
    }
  