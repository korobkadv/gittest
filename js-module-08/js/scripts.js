const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

const createDiv = document.querySelector(".js-image-gallery");
const createFullview = document.createElement("div")
createFullview.classList.add("fullview");
createDiv.append(createFullview);
const createPreview = document.createElement("ul");
createPreview.classList.add("preview");
createDiv.append(createPreview);


const fullview = document.querySelector(".fullview");
const createImgFullview = document.createElement("img")
createImgFullview.setAttribute("src", galleryItems[0]["fullview"]);
createImgFullview.setAttribute("alt",  galleryItems[0]["alt"]);
createImgFullview.setAttribute("class",  "fullviewImg");
fullview.append(createImgFullview);

const list2 = document.querySelector(".preview");
list2.addEventListener('click', fullviewImg);

function fullviewImg(evt) {
  evt.preventDefault();
  const fullviewImg = document.querySelector(".fullviewImg");
  fullviewImg.setAttribute("src", evt.target.dataset.fullview);
  fullviewImg.setAttribute("alt", evt.target.alt);

  const previewImg = document.querySelector(".preview");
  const currentActiveLink = previewImg.querySelector("img.imgactive");

  if (currentActiveLink) {
    currentActiveLink.classList.remove("imgactive");
  }

  evt.target.classList.add("imgactive");
}

galleryItems.forEach(
  function (preview) {
    const list = document.querySelector(".preview");
    const createLi = document.createElement("li");
    const str =  preview['alt'].replace(/\s+/g, '');
    createLi.setAttribute("class", str);
    list.append(createLi);

    const listLi = document.querySelector(`.${str}`);
    const createImg = document.createElement("img");
    createImg.setAttribute("src", preview['preview']);
    createImg.setAttribute("data-fullview", preview['fullview']);
    createImg.setAttribute("alt", preview['alt']);
    listLi.append(createImg);
  }
);



