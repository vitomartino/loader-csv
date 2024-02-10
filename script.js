const container = document.getElementById('container');
const inserirBtn = document.getElementById('inserir');
const loginBtn = document.getElementById('login');

inserirBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});