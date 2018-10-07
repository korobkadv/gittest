/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/
  
const createCards = posts => {
    
    for (let i = 0; i < posts.length; i++) {
      
    const list = document.querySelector("main");
    const createDiv = document.createElement("div");
    createDiv.setAttribute("class", `post nom${i}`);
    list.append(createDiv);
    
    const selectDiv = document.querySelector(`.nom${i}`);
      
      const createImg = document.createElement("img");
      createImg.classList.add("post__image");
      createImg.setAttribute("src", posts[i]["img"]);
      createImg.setAttribute("alt", "post image");
      selectDiv.append(createImg);
    
      const createTitle = document.createElement("h2");
      createTitle.classList.add("post__title");
      createTitle.textContent = posts[i]["title"];
      selectDiv.append(createTitle);
    
      const createText = document.createElement("p");
      createText.classList.add("post__text");
      createText.textContent = posts[i]["text"];
      selectDiv.append(createText);
    
      const createLink = document.createElement("a");
      createLink.classList.add("button");
      createLink.textContent = posts[i]["link"];
      createLink.setAttribute("href", "#");
      selectDiv.append(createLink);
    }
  }
  
const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

 createCards(posts);