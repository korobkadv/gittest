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

const createPostCard = ({ img, title, text, link }) => {
  const card = document.createElement('div');
  card.classList.add('post');

  const images = document.createElement('img');
  images.classList.add('post__image');
  images.setAttribute('src', img);
  images.setAttribute('alt', 'post image');

  const name = document.createElement('h2');
  name.classList.add('post__title');
  name.textContent = title;

  const descr = document.createElement('p');
  descr.classList.add('post__text');
  descr.textContent = text;

  const links = document.createElement('a');
  links.classList.add('button');
  links.textContent = link;
 
  card.append(images, name, descr, links);

  return card;
};

const createCards = posts => {
  const elements = posts.map(post => createPostCard(post));

  return elements;
};

const postsDOM = document.querySelector('main');
const cards = createCards(posts);

// console.log(cards);

postsDOM.append(...cards);