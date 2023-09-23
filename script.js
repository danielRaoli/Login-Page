const email = document.querySelector('#email');
const emailConf = document.querySelector('#emailConfirma');

const senha = document.querySelector('#senha');
const senhaConfirma = document.querySelector('#senhaConfirma');

const caixaEmail = document.querySelector('#caixaEmail')

const spanEmail = `<span  style="color: red;"> os emails não coincidem</span>`;

const spanSenha = `<span  style="color: red;"> as senhas não coincidem</span>`;

let igual = true;

emailConf.addEventListener('keydown', e => {

    verificaEmail(email.value, emailConf.value);
});


senhaConfirma.addEventListener('keydown', e => {
    verificaSenha(senhaConfirma.value, senha.value);
});


const verificaEmail = (email, emailConfirma) => {
    console.log(igual)
    console.log(email)
    console.log(emailConfirma)
    if (emailConfirma !== email) {
        if (igual !== false) {
            caixaEmail.insertAdjacentHTML("afterbegin", spanEmail)
            igual = false;
        }
    }
    else {

        if (igual !== true) {
            igual = true;
            caixaEmail.firstElementChild.remove();
        }


    }

}


const verificaSenha = (senhaConf, senha) => {
    if (senhaConf !== senha) {
        if (igual !== false) {
            caixaSenha.insertAdjacentHTML("afterbegin", spanSenha)
            igual = false;
        }
    }
    else {
        if (igual !== true) {
            igual = true;
            caixaSenha.firstElementChild.remove();
        }
    }
}
