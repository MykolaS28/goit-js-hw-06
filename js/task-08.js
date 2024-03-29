// Обробка відправлення форми form.login-form повинна відбуватися 
// відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//  що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення 
// полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля
//  - значенням властивості. Для доступу до елементів форми використовуй 
//  властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів 
// форми методом reset.
const formSubmit = document.querySelector(".login-form");

formSubmit.addEventListener("submit", onSubmit);


function onSubmit(event) {
    event.preventDefault();

    const {elements: { email, password}
    } = event.currentTarget;

    if (email.value.trim() === "" || password.value.trim() === ""){
       return alert(`all fields must be filled`)
    } 
    const addForm = {
        email: email.value,
        password: password.value
    };
        // addForm.email = email.value;
        // addForm.password = password.value;
        console.log(addForm)
        event.currentTarget.reset();
    
    
}