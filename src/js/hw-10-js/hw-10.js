import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select'




const catInfo = document.querySelector(".cat-info");
const select = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const span = document.querySelector("span");

error.classList.add('unvisible')
span.style.display = ("none")

// span.style.display = "none"
catArray()


select.addEventListener("change", () => {
    
  const catId = select.value;
  console.log(catId)
  catImg(catId);
});


function catImg(id) {
    span.style.display = "flex"
    catInfo.style.display = 'none'

    
  fetchCatByBreed(id)
    .then((information) => {
    const resultImg = information
    const imgObject = resultImg.breeds[0]
    console.log(resultImg)
    const imgSrc = resultImg.url
        renderBreedsCard(imgSrc, imgObject)
        catInfo.style.display = 'flex'

    
  })
  .catch((error) => {
    console.log(error);
    Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
    select.classList.add('unvisible');
    
  })
  .finally(() => span.style.display = "none");
}


function catArray() {
//    loader.classList.remove('unvisible'),
  
  fetchBreeds()
  .then((breeds) => {
    console.log(breeds)
    renderBreedsSelect(breeds);
      select.classList.remove('unvisible')
      
  })
    .catch((error) => {
      console.log(error);
      error.classList.remove('unvisible');
      select.classList.add('unvisible');
    })
    //   .finally(() => loader.classList.add('unvisible'));
}


function renderBreedsSelect(breeds) {
    
  const markup = breeds
    .map((breed) => {
      return `<option value="${breed.reference_image_id}">${breed.name}</option>`;
    })
    .join("");
  select.innerHTML = markup;
    new SlimSelect({
  select: '#single'
})
}

function renderBreedsCard(breedImg, object) {
    return catInfo.innerHTML = 
  `<img class="img-cat" src=${breedImg} alt="cat" width="350"/>
 <div id="local" class="text-content">
   <h2 class="title-breed">${object.name}</h2>
   <p class="breed-desc">${object.description}</p>
   <p class="breed-temperament">Temperament: ${object.temperament}</p>
 </div>`
}
