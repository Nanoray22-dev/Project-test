// const usuarios = [
//     {
//         nombre: "Juan Pérez",
//         rol: "maestro",
//         isActive: true
//     },
//     {
//         nombre: "María García",
//         rol: "administrador",
//         isActive: false
//     },
//     {
//         nombre: "Pedro Sánchez",
//         rol: "alumno",
//         isActive: true
//     },
//     {
//         nombre: "Ana Rodríguez",
//         rol: "maestro",
//         isActive: false
//     },
//     {
//         nombre: "Carlos López",
//         rol: "administrador",
//         isActive: true
//     },
//     {
//         nombre: "Sofía Martínez",
//         rol: "alumno",
//         isActive: false
//     },
//     {
//         nombre: "Laura Torres",
//         rol: "maestro",
//         isActive: true
//     },
//     {
//         nombre: "David González",
//         rol: "administrador",
//         isActive: false
//     },
//     {
//         nombre: "Isabel Castro",
//         rol: "alumno",
//         isActive: true
//     },
//     {
//         nombre: "Marcos Rivera",
//         rol: "maestro",
//         isActive: false
//     }
// ];

// const ADM = ['Usuarios', 'Calificaciones', 'Alumnos', 'Blogs', 'Materias'];
// const MAESTRO = ['Calificaciones', 'Alumnos', 'Blogs', 'Materias'];
// const ALUMNOS = ['Calificaciones', 'Blogs', 'Materias'];


//     const userList = document.getElementById("resultList");
//     const searchInput = document.getElementById("search");
//     const closeButton = document.getElementById("cerrar");
//     const rolContainer = document.getElementById("rolContainer");
//     const nombreUsuario = document.getElementById("nombre-usuario");
//     const navMenuList = document.getElementById("menuList");
  
//     // Función para realizar la búsqueda de usuarios
//     function searchUsers(query) {
//       // Si el término de búsqueda está vacío, ocultar la lista y salir
//       if (!query.trim()) {
//         userList.style.display = "none";
//         return;
//       }
  
//       // Filtrar usuarios según el nombre
//       const results = usuarios.filter(user =>
//         user.nombre.toLowerCase().includes(query.toLowerCase())
//       );
  
//       // Limpiar la lista actual
//       userList.innerHTML = " ";
  
//       // Mostrar los resultados en la lista
//       results.forEach(user => {
//         const listItem = document.createElement("li");
//         listItem.textContent = user.nombre;
//         userList.appendChild(listItem);
  
//         // Mostrar el rol correspondiente
//         const rolSpan = document.createElement("span");
//         rolSpan.textContent = `${user.rol}`;
//         userList.appendChild(rolSpan);
//       });
  
//       // Mostrar la lista si hay resultados, ocultarla si no hay resultados
//       userList.style.display = results.length > 0 ? "block" : "none";
//     }
  
//     // Manejar eventos de búsqueda al escribir en el input
//     searchInput.addEventListener("input", function () {
//       const searchTerm = searchInput.value.trim();
//       searchUsers(searchTerm);
//     });
  
//     // Manejar evento de cerrar búsqueda
//     closeButton.addEventListener("click", function () {
//       searchInput.value = ""; // Limpiar el input
//       userList.innerHTML = ""; // Limpiar la lista de resultados
//       rolContainer.textContent = ""; // Limpiar el rol en el nav
//       nombreUsuario.textContent = ""; // Limpiar el nombre de usuario en el nav
//       userList.style.display = "none"; // Ocultar la lista
//     });
  
//     // Evento al hacer clic en un resultado de búsqueda
//     userList.addEventListener("click", function (event) {
//       const clickedItem = event.target;
//       const userName = clickedItem.textContent.split("")[0];
  
//       // Buscar el usuario seleccionado en el array de usuarios
//       const selectedUser = usuarios.find(user => user.nombre === userName);
  
//       // Mostrar el nombre de usuario y rol en el contenedor correspondiente
//       nombreUsuario.textContent = selectedUser.nombre;
//       rolContainer.textContent = `${selectedUser.rol}`;
  
//       // Actualizar el menú de acuerdo con el rol
//       updateNavMenu(selectedUser.rol);
  
//       // Ocultar la lista después de seleccionar un usuario
//       userList.style.display = "none";
//     });
  
//     // Función para actualizar el menú de navegación según el rol
//     function updateNavMenu(rol) {
//       // Limpiar el menú actual
//       navMenuList.innerHTML = "";
  
//       // Determinar las opciones de menú según el rol
//       let opcionesMenu;
//       if (rol === "administrador") {
//         opcionesMenu = ADM;
//       } else if (rol === "maestro") {
//         opcionesMenu = MAESTRO;
//       } else if (rol === "alumno") {
//         opcionesMenu = ALUMNOS;
//       } else {
//         opcionesMenu = []; // Opciones por defecto si el rol no coincide
//       }
  
//       // Mostrar las opciones de menú en el menú de navegación
//       opcionesMenu.forEach(opcion => {
//         const menuItem = document.createElement("li");
//         menuItem.textContent = opcion;
//         navMenuList.appendChild(menuItem);
//       });
//     }

  
  
//ejemplo del maeestro 

const usuarios = [
    {
        nombre: "Juan Pérez",
        rol: "maestro",
        isActive: true
    },
    {
        nombre: "María García",
        rol: "administrador",
        isActive: false
    },
    {
        nombre: "Pedro Sánchez",
        rol: "alumno",
        isActive: true
    },
    {
        nombre: "Ana Rodríguez",
        rol: "maestro",
        isActive: false
    },
    {
        nombre: "Carlos López",
        rol: "administrador",
        isActive: true
    },
    {
        nombre: "Sofía Martínez",
        rol: "alumno",
        isActive: false
    },
    {
        nombre: "Laura Torres",
        rol: "maestro",
        isActive: true
    },
    {
        nombre: "David González",
        rol: "administrador",
        isActive: false
    },
    {
        nombre: "Isabel Castro",
        rol: "alumno",
        isActive: true
    },
    {
        nombre: "Marcos Rivera",
        rol: "maestro",
        isActive: false
    }
];


const ADM = ['Usuarios', 'Calificaciones', 'Alumnos', 'Blogs', 'Materias'];
const MAESTRO = ['Calificaciones', 'Alumnos', 'Blogs', 'Materias'];
const ALUMNOS = ['Calificaciones', 'Blogs', 'Materias'];

const menuList = document.querySelector('#menuList')
const search = document.querySelector('#search');
const resultList = document.querySelector('#resultList');
const rol = document.querySelector('#rol');
const nombre_usuario = document.querySelector('#nombre-usuario');
const rolContainer = document.querySelector('#rolContainer');
const cerrar = document.querySelector('#cerrar');

 
 function filterUsers(searchValue) {
   let filterData =  usuarios.filter(usuario => 
        
        usuario.nombre.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    )
        return filterData
 }
 
 search.addEventListener('input', (e)=>{

     let results  = filterUsers(search.value)

     resultList.innerHTML = '';

    if(search.value.length > 0){
        console.log(results);
     results.forEach(rs =>{

           const li = document.createElement('li');
           li.textContent = rs.nombre

           resultList.appendChild(li);

     })
    }

 } )

 resultList.addEventListener('click', function (e){
    //Raysell
    const clickItem = e.target.textContent;
    console.log(clickItem);
    const selectedUser = usuarios.filter(user => user.nombre === clickItem);
    nombre_usuario.textContent = selectedUser[0].nombre
    rolContainer.textContent = selectedUser[0].rol
    // if(!isActive){
    //     rolContainer[0].style.backgroundColor = 'red'
    // }else{
    //     rolContainer[0].style.backgroundColor = 'green'
    // }
    menuListNav(selectedUser[0].rol)
 })

 // Función para actualizar el menú de navegación según el rol
 function  menuListNav(rol) {
    // Limpiar el menú actual
    menuList.innerHTML = "";

    // Determinar las opciones de menú según el rol
    let opcionesMenu = [];
    if (rol === "administrador") {
      opcionesMenu = ADM;
    } else if (rol === "maestro") {
      opcionesMenu = MAESTRO;
    } else if (rol === "alumno") {
      opcionesMenu = ALUMNOS;
    } else {
      opcionesMenu = []; // Opciones por defecto si el rol no coincide
    }

    // Mostrar las opciones de menú en el menú de navegación
    opcionesMenu.forEach(opcion => {
      const menuItem = document.createElement("li");
      menuItem.textContent = opcion;
      menuList.appendChild(menuItem);
    });
  };
  


 cerrar.addEventListener('click', () => {
    search.value = ''
    resultList.innerHTML = ''
    rolContainer.textContent = 'Rol:'
    nombre_usuario.textContent =''
    menuList.textContent = ''
    rolContainer.style.color = ''

 })


 
  