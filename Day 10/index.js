const userList = document.querySelector('#userList');
function listar(userName, userId){
    const li = document.createElement('li');
    li.classList.add('userListItem')

    const span = document.createElement('span');
    li.classList.add('imgContainer')

    const img = document.createElement('img');
    img.src = `https://robohash.org/138.36.78.${userId}.png`;
    img.alt = 'user avatar'

    const h3 = document.createElement('h3');
    h3.classList.add('userName'); 
    h3.textContent = userName;

    span.appendChild(img);
    li.appendChild(span); 
    li.appendChild(h3);   
    userList.appendChild(li);
}

const users = 
[
    {
        userId: 1,
        name: 'Miguel Rolando', 
    },
    {
        userId: 2,
        name: 'Samel Lechuga', 
    },
    {
        userId: 3,
        name: 'Javier Ohara', 
    },
    {
        userId: 4,
        name: 'Saul Perdomo', 
    },
    {
        userId: 5,
        name: 'Daniel Rodriguez', 
    },
    {
        userId: 6,
        name: 'Armando Ollas', 
    },
    {
        userId: 7,
        name: 'Juan Jose', 
    },
];
users.forEach(users => {
    listar(users.name, users.userId )
});
