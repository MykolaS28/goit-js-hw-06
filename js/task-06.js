// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної
// кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - 
// червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("blur", () => 
inputEl.value.length === Number(inputEl.dataset.length) ? listAdd("valid", "invalid") : listAdd("invalid", "valid"));

function listAdd(a,b) {
  inputEl.classList.add(a);
  inputEl.classList.remove(b);
}



// inputEl.addEventListener("blur", () => {
//   if (inputEl.value.length == 6) {
//     inputEl.classList.add("valid");
//     inputEl.classList.remove("invalid");
//   } else if (inputEl.value.length != 6) {
//     inputEl.classList.add("invalid");
//     inputEl.classList.remove("valid");
//   }
// });
