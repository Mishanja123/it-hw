const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];
  
const list = document.querySelector('#ingredients')
  
const elements = ingredients.map((ingredients) => {
const listEl = document.createElement('li')
listEl.classList.add('item')
listEl.textContent = ingredients
return listEl
});

list.append(...elements)  