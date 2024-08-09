const form = document.getElementById ('form-numeros');


form.addEventListener('submit', function(e) {
    
    e.preventDefault();
const numeroUm = document.getElementById('numero-um'); 
const numeroDois = document.getElementById('numero-dois');
const mensagemSucesso = `Sucesso! O número do primeiro campo é menor do que o do segundo. Essa foi por pouco! (ﾉ◕ヮ◕)ﾉ*:･ﾟ`;
const mensagemErro = `Erro: o número do primeiro campo deve ser menor do que o do segundo campo. (Alguém está indo até você)`;

if (Number(numeroDois.value) > Number(numeroUm.value)) {
    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

numeroUm.value = '';
numeroDois.value = '';

} else {
    numeroDois.style.border = '1px solid #c75656';
    document.querySelector ('.error-message').style.display = 'block';
    const containerMensagemErro = document.querySelector('.error-message');
    containerMensagemErro.innerHTML = mensagemErro;
    containerMensagemErro.style.display = 'block';
    
}
})

