const form = document.getElementById ('form-numeros');


form.addEventListener('submit', function(e) {
    
    e.preventDefault();
const numeroUm = document.getElementById('numero-um'); 
const numeroDois = document.getElementById('numero-dois');
const mensagemSucesso = `Sucesso o número:<b>${numeroDois.value}</b> é maior que:<b>${numeroUm.value}</b> `;
const mensagemErro = `Erro o número: <b>${numeroDois.value} </b> é maior que <b>${numeroUm.value}</b>`;

if (Number(numeroDois.value) > Number(numeroUm.value)) {
    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

numeroUm.value = '';
numeroDois.value = '';

} else {
    numeroDois.style.border = '1px solid red';
    document.querySelector ('.error-message').style.display = 'block';
    const containerMensagemErro = document.querySelector('.error-message');
    containerMensagemErro.innerHTML = mensagemErro;
    containerMensagemErro.style.display = 'block';
    
}
})

