const listEl = document.querySelectorAll('.item')
console.log("Number of categories: " + listEl.length);

listEl.forEach((number) => {
    console.log("Category: " + number.firstElementChild.textContent)
    console.log("Elements: " + number.lastElementChild.children.length)
}); 