const container = document.getElementById('container');
const inserirBtn = document.getElementById('inserir');
const loginBtn = document.getElementById('login');
const cancelarBtn = document.getElementById('cancelar');
const prosseguirBtn = document.getElementById('prosseguir');

inserirBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

cancelarBtn.addEventListener('click', () => {
    container.classList.remove("active");
});