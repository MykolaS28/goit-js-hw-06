const categoriesElement = document.querySelector('#categories');
console.dir(`Number of categories:  ${categoriesElement.children.length}`);

const itemElement = document.querySelectorAll('.item');

itemElement.forEach(item => {
    console.dir(`Category: ${item.firstElementChild.textContent}`)
    console.dir(`Elements: ${item.lastElementChild.children.length}`)
})