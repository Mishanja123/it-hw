import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery')

// создал шаблон разметки для галлереи in function
function createGalleryMarkup(items) {
    return items
    .map(({preview, original, description}) => `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source=${original}  alt="${description}"></a></li>`).join('');   
}

// присвоил значению функцию с нужным обьектом в аргументе 
const addGalleryMarkup = createGalleryMarkup(galleryItems)

// добавил шаблон разметки в ДОМ
list.insertAdjacentHTML("beforeend", addGalleryMarkup)

// добавляю слушателя действий на галлерею 
list.addEventListener("click", onImageClick)

//функции 
function onImageClick({target}) {
    //запретил браузеру открывать картинку как ссылку 
    blockStandartAction(event)

    //проверка картинка или нет 
    if (target.nodeName !== "IMG") {
        return
    }

    const instance = basicLightbox.create(`
    <img src="${target.dataset.source}" width="800" height="600">
`, {
	onShow: (instance) => {},
	
	onClose: (instance) => {}
})
    
    instance.show();
    
    //закрытие 
    window.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    })
}

// function closeByEsc(event) {
//  if (event.code === "Escape") {
//             instance.close();
//          }
// }

function blockStandartAction(event) {
    event.preventDefault();
}


// addListenerBtn.addEventListener("click", () => {
//     list.addEventListener("click", onImageClick)
// })
// list.addEventListener("click", () => {
//     list.removeEventListener("click", onImageClick)
// })