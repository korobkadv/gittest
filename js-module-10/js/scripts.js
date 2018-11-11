
const navigation = document.querySelector('.navigation');
const menuItem = document.querySelector('.menu-item');
const result = document.querySelector('.result');

const getAllUsers = document.querySelector('.getAllUsers');
const getUserById = document.querySelector('.getUserById');
const addUser = document.querySelector('.addUser');
const removeUser = document.querySelector('.removeUser');
const updateUser = document.querySelector('.updateUser');

const getAllUsersForm = document.querySelector('.getAllUsers-form');
const getUserByIdForm = document.querySelector('.getUserById-form');
const addUserForm = document.querySelector('.addUser-form');
const removeUserForm = document.querySelector('.removeUser-form');
const updateUserForm = document.querySelector('.updateUser-form');

const input = document.querySelector(".input-get-id");
const inputAddName = document.querySelector(".input-add-name");
const inputAddAge = document.querySelector(".input-add-age");
const inputDell = document.querySelector(".input-dell-id");
const inputPutId = document.querySelector(".input-put-id");
const inputPutName = document.querySelector(".input-put-name");
const inputPutAge = document.querySelector(".input-put-age");

const apiUrl = "https://test-users-api.herokuapp.com/users/";


  navigation.addEventListener("click", handleNavClick);
  
  function handleNavClick(event) {
    event.preventDefault();
    const currentActiveLink = navigation.querySelector("li.menu-link-active");
  
    if (currentActiveLink) {
      currentActiveLink.classList.remove("menu-link-active");
    }
  
    event.target.classList.add("menu-link-active");
  }

  // ==============Вкладки===========
  function allHover(event) { 
    getAllUsersForm.classList.add("hover");
    getUserByIdForm.classList.add("hover");
    addUserForm.classList.add("hover");
    removeUserForm.classList.add("hover");
    updateUserForm.classList.add("hover");
  }

  getAllUsers.addEventListener("click", getUsersForm);

  function getUsersForm(event) {
    event.preventDefault();
    allHover();
    getAllUsersForm.classList.remove("hover");

  }
    
  getUserById.addEventListener("click", getUserForm);

  function getUserForm(event) {
    event.preventDefault();
    allHover();
    getUserByIdForm.classList.remove("hover");

  }

  addUser.addEventListener("click", addForm);

  function addForm(event) {
    event.preventDefault();
    allHover();
    addUserForm.classList.remove("hover");
  }

  removeUser.addEventListener("click", removeForm);

  function removeForm(event) {
    event.preventDefault();
    allHover();
    removeUserForm.classList.remove("hover");
  }

  updateUser.addEventListener("click", updateForm);

  function updateForm(event) {
    event.preventDefault();
    allHover();
    updateUserForm.classList.remove("hover");
  }

  // ==============Выборка

  const fetchUsers = (userId, option) => {
    return fetch(apiUrl+userId, option)
  .then(response => {
    if(response.ok) return response.json();
    throw new Error("Error:" + response.statusText);
 })
//  .then(data => console.log(data.data) )
 .then(data => data.data)
  .catch(err => console.log(err) );
}
  
  //===============Отображение всех пользователей
  const createItems = items => {
   const markupAll = items.reduce((markup, item) => markup + `
    <tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.age}</td>
    </tr>`,
    '');
const markupAllUsers = "<table><tr><td>ID</td><td>NAME</td><td>AGE</td></tr>" + markupAll + "</table>";
return markupAllUsers;
  } 
  const allUsers = users => {  
    const markup = createItems(users);  
    result.innerHTML = markup;
  }
  const handleFormSubmit = e => {
    e.preventDefault();  

  const option = {
   headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
};
    fetchUsers("", option).then(allUsers);
  };
  
  getAllUsersForm.addEventListener('click', handleFormSubmit);

  //===============Поиск пользователя    
    const createItemsSearch = items => {
      const markup =  `
      <tr>
        <td>${items.id}</td>
        <td>${items.name}</td>
        <td>${items.age}</td>
      </tr>`;
  const markupAllUsers = "<table><tr><td>ID</td><td>NAME</td><td>AGE</td></tr>" + markup + "</table>";
  return markupAllUsers;
    };
    
    const searchUsers = users => {
      const markup = createItemsSearch(users);
      result.innerHTML = markup;
    }
    
    const handleFormSubmitSearch = e => {
      e.preventDefault();
      const option = {
        headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       }
     };
     
         fetchUsers(input.value, option).then(searchUsers);
     e.target.reset();
    };
    
    getUserByIdForm.addEventListener('submit', handleFormSubmitSearch);
    
//===============Добавить пользователей
  
    const createItemsAdd = items => {
      const markup =  `
      <tr>
        <td>${items._id}</td>
        <td>${items.name}</td>
        <td>${items.age}</td>
      </tr>`;
  const markupAllUsers = "<p class='ok_add'>Пользователь успешно добавлен!</p><table><tr><td>ID</td><td>NAME</td><td>AGE</td></tr>" + markup + "</table>";
  return markupAllUsers;
    };
    const addUsers = users => {
      const markupAdd = createItemsAdd(users);
      result.innerHTML = markupAdd;
    }
    const handleFormSubmitAdd = e => {
      e.preventDefault();
      const newUser = {
        name: inputAddName.value,
        age: inputAddAge.value,
      };
      const option = {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
     };
     
         fetchUsers(input.value, option).then(addUsers);
     e.target.reset();
    };

  addUserForm.addEventListener('submit', handleFormSubmitAdd);

  //===============Удаление пользователя    
      const createItemsRemove = items => {
        const markup = `
        <p class="ok">Пользователь с ID: <b>${items.id}</b> успешно Удален!</p>`;
        return markup;
      };
      
      const removeUsers = users => {
        const markup = createItemsRemove(users);
        result.innerHTML = markup;
      }
      const handleFormSubmitRemove = e => {
        e.preventDefault();
        const option = {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
       };
           fetchUsers(inputDell.value, option).then(removeUsers);
       e.target.reset();
      };
      
      removeUserForm.addEventListener('submit', handleFormSubmitRemove);

//       //===============Обновление   
         
          const createItemsPut = items => {
            const markup =  `
            <tr>
              <td>${items.id}</td>
              <td>${items.name}</td>
              <td>${items.age}</td>
            </tr>`;
        const markupAllUsers = "<p class='ok_add'>Данные успешно обновлены!</p><table><tr><td>ID</td><td>NAME</td><td>AGE</td></tr>" + markup + "</table>";
        return markupAllUsers;
          };
          const putUsers = users => {
            const markup = createItemsPut(users);
            result.innerHTML = markup;
          }
          const handleFormSubmitPut = e => {
            e.preventDefault();
            const newUser = {
              name: inputPutName.value,
              age: inputPutAge.value,
            };
            const option = {
              method: 'PUT',
              body: JSON.stringify(newUser),
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              }
           };
               fetchUsers(inputPutId.value, option).then(putUsers);
           e.target.reset();
          };
          
      
          updateUserForm.addEventListener('submit', handleFormSubmitPut);