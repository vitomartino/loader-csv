const container = document.getElementById('container');
const inserirBtn = document.getElementById('inserir');
const voltarBtn = document.getElementById('voltar');
const cancelarBtn = document.getElementById('cancelar');
const prosseguirBtn = document.getElementById('prosseguir');

inserirBtn.addEventListener('click', () => {
    container.classList.add("active");
});

voltarBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

cancelarBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

prosseguirBtn.addEventListener('click', () => {
    container.classList.add("activex");
});