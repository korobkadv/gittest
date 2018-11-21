const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];


const container = document.querySelector('.container');
const source = document.querySelector('#item').innerHTML.trim();
const template = Handlebars.compile(source);
const jsForm = document.querySelector('.js-form');
const input = Array.from(document.querySelectorAll('input[type="checkbox"]'));
const resetS = document.querySelector('.reset');

  

  const reset = () => {

  let filterSize = [];
  let filterColor = [];
  let filterReleaseDate = [];
  let filterArr = laptops.filter(eval('laptop => laptop.size >= 13' ));

    const markup = filterArr.reduce((acc, item) => acc + template(item), '');
    container.innerHTML = markup;
  }

reset();

const handleFormSubmit = e => {
  e.preventDefault();

 filterSize = [];
 filterColor = [];
 filterReleaseDate = [];

input.forEach(element => {
  if (element.checked && element.name === "size" ) {
    let filSize = `laptop.${element.name} === ${element.value}`;
    filterSize.push(filSize);
  }
  if (element.checked && element.name === "color" ) {
      let filColor = `laptop.${element.name} === "${element.value}"`;
      filterColor.push(filColor);
  }
  if (element.checked && element.name === "release_date" ) {
    let filRelease = `laptop.${element.name} === ${element.value}`;
    filterReleaseDate.push(filRelease);
  }
  }); 
  const filLaptopSize = filterSize.join(' || ');
  const filLaptopColor = filterColor.join(' || ');
  const filReleaseDate = filterReleaseDate.join(' || ');


  if (filterSize.length > 0) {
    filterArr = laptops.filter(eval('laptop => ' + filLaptopSize));
  } else { filterArr = laptops.filter(eval('laptop => laptop.size >= 13' )); }
  if (filterColor.length > 0) {
    filterArr = filterArr.filter(eval('laptop => ' + filLaptopColor));
  }
  if (filterReleaseDate.length > 0) {
    filterArr = filterArr.filter(eval('laptop => ' + filReleaseDate));
  }

  const markup = filterArr.reduce((acc, item) => acc + template(item), '');
  container.innerHTML = markup;
}



jsForm.addEventListener('submit', handleFormSubmit);
resetS.addEventListener('click', reset);

