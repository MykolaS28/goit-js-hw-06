// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue = 0;
const incrementValue = document.querySelector("[data-action = increment]");
const decrementValue = document.querySelector("[data-action = decrement]");
const valueEl = document.getElementById("value");

incrementValue.addEventListener("click", () => {
    counterValue += 1;
    valueEl.textContent = counterValue
});
decrementValue.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue
});