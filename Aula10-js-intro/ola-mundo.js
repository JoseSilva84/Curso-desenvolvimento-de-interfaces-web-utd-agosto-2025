const digitacaoNome = prompt('Digite seu nome:').toLocaleLowerCase();
const nome = 'júnior';

if (digitacaoNome === nome) {
    alert(`Olá, ${digitacaoNome}!`);
    console.log(`Olá, ${digitacaoNome}!`);
}
else {
    alert(`Você não é ${nome}!`);
}

const digitacaoIdade = prompt('Digite sua idade:');
const idade = 30;

if (digitacaoIdade >= idade) {
    alert('Você tem a idade ideal do sistema!')
}
else {
    alert('Você não tem a idade ideal do sistema!')
}