const digitacaoNome = prompt('Digite seu nome:').toLocaleLowerCase();
const nome = 'júnior';

if (digitacaoNome === nome) {
    console.log(`Olá, ${digitacaoNome}!`);
}
else {
    console.log(`Você não é ${nome}!`);
} 
